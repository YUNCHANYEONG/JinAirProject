package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbEvent;
import com.project.jinair.model.entity.board.TbEventWin;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.enumclass.EventStatus;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.board.EventApiRequest;
import com.project.jinair.model.network.request.board.EventWinApiRequest;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.EventApiResponse;
import com.project.jinair.model.network.response.board.EventWinApiResponse;
import com.project.jinair.repository.TbEventRepository;
import com.project.jinair.repository.TbEventWinRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventWinApiLogicService implements CrudInterface<EventWinApiRequest, EventWinApiResponse> {

    private final TbEventWinRepository tbEventWinRepository;


    // 게시판 리스트
    public Header<List<EventWinApiResponse>> searchSelect(Pageable pageable) {
        Page<TbEventWin> tbEventWins = tbEventWinRepository.findAll(pageable);
        List<EventWinApiResponse> eventWinApiResponses = tbEventWins.stream()
                .map(users -> responseEvents(users))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbEventWins.getTotalPages())
                .totalElements(tbEventWins.getTotalElements())
                .currentPage(tbEventWins.getNumber())
                .currentElements(tbEventWins.getNumberOfElements())
                .build();
        return Header.OK(eventWinApiResponses, pagination);
    }

    // 정답자 상세보기
    public Header<EventWinApiResponse> reads(Long id) {
        return tbEventWinRepository.findByEvIndexOrderByEvIndexDesc(id)
                .map(tbEventWin -> response(tbEventWin))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }



    @Override
    public Header<EventWinApiResponse> create(Header<EventWinApiRequest> request) {
        EventWinApiRequest eventWinApiRequest = request.getData();
        TbEventWin tbEventWin= TbEventWin.builder()
                .evTitle(eventWinApiRequest.getEvTitle())
                .evContent(eventWinApiRequest.getEvContent())
                .build();
        TbEventWin newTbEventWin = tbEventWinRepository.save(tbEventWin);
        return response(newTbEventWin);
    }

    @Override
    public Header<EventWinApiResponse> read(Long id) {
        return tbEventWinRepository.findById(id)
                .map(tbEventWin -> response(tbEventWin))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<EventWinApiResponse> update(Header<EventWinApiRequest> request) {
        EventWinApiRequest eventWinApiRequest = request.getData();
        Optional<TbEventWin> tbEventWin = tbEventWinRepository.findById(eventWinApiRequest.getEvIndex());

        return tbEventWin.map(Win -> {
                    Win.setEvTitle(eventWinApiRequest.getEvTitle());
                    Win.setEvTitle(eventWinApiRequest.getEvTitle());
                    Win.setEvContent(eventWinApiRequest.getEvContent());
                    Win.setEvRegdate(eventWinApiRequest.getEvRegdate());

                    return Win;
                }).map(Win -> tbEventWinRepository.save(Win))
                .map(Win -> response(Win))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbEventWin> tbEventWin = tbEventWinRepository.findById(id);
        return tbEventWin.map(evn -> {
            tbEventWinRepository.delete(evn);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    public Header<EventWinApiResponse> response(TbEventWin tbEventWin) {
        EventWinApiResponse eventWinApiResponse = EventWinApiResponse.builder()
                .evIndex(tbEventWin.getEvIndex())
                .evTitle(tbEventWin.getEvTitle())
                .evContent(tbEventWin.getEvContent())
                .evRegdate(tbEventWin.getEvRegdate())
                .build();
        return Header.OK(eventWinApiResponse);
    }

    private EventWinApiResponse responseEvents(TbEventWin tbEventWin){
        EventWinApiResponse eventWinApiResponse = EventWinApiResponse.builder()
                .evIndex(tbEventWin.getEvIndex())
                .evTitle(tbEventWin.getEvTitle())
                .evContent(tbEventWin.getEvContent())
                .evRegdate(tbEventWin.getEvRegdate())
                .build();
        return eventWinApiResponse;
    }

}
