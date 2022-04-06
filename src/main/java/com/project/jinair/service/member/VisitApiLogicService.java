package com.project.jinair.service.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbVisit;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.member.VisitApiRequest;
import com.project.jinair.model.network.response.member.VisitApiResponse;
import com.project.jinair.repository.TbVisitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VisitApiLogicService implements CrudInterface<VisitApiRequest, VisitApiResponse> {

    private final TbVisitRepository tbVisitRepository;

    @Override
    public Header<VisitApiResponse> create(Header<VisitApiRequest> request) {

        VisitApiRequest visitApiRequest = request.getData();

        TbVisit visit = TbVisit.builder()
                .visName(visitApiRequest.getVisName())
                .visHp(visitApiRequest.getVisHp())
                .visCode(visitApiRequest.getVisCode())
                .build();

        TbVisit newVisit = tbVisitRepository.save(visit);

        return response(newVisit);
    }

    @Override
    public Header<VisitApiResponse> read(Long id) {
        return tbVisitRepository.findById(id)
                .map(visit -> response(visit))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header<VisitApiResponse> update(Header<VisitApiRequest> request) {

        VisitApiRequest visitApiRequest = request.getData();
        Optional<TbVisit> visit = tbVisitRepository.findById(visitApiRequest.getVisIndex());

        return visit.map(vis -> {
            vis.setVisName(visitApiRequest.getVisName());
            vis.setVisHp(visitApiRequest.getVisHp());
            vis.setVisCode(visitApiRequest.getVisCode());

            return vis;
        })
        .map(vis -> tbVisitRepository.save(vis))
        .map(vis -> response(vis))
        .orElseGet(() -> Header.ERROR("데이터 없음"));

    }

    @Override
    public Header delete(Long id) {
        Optional<TbVisit> visit = tbVisitRepository.findById(id);
        return visit.map(
                vis -> {
                    tbVisitRepository.delete(vis);
                    return Header.OK();
                }
        ).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 비회원 리스트
    public Header<List<VisitApiResponse>> list(Pageable pageable) {
        Page<TbVisit> visits = tbVisitRepository.findAll(pageable);
        List<VisitApiResponse> visitApiResponseList = visits.stream()
                .map(visit -> responseVisit(visit))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(visits.getTotalPages())
                .totalElements(visits.getTotalElements())
                .currentPage(visits.getNumber())
                .currentElements(visits.getNumberOfElements())
                .build();
        return Header.OK(visitApiResponseList, pagination);
    }

    private Header<VisitApiResponse> response(TbVisit visit){
        VisitApiResponse visitApiResponse = VisitApiResponse.builder()
                .visIndex(visit.getVisIndex())
                .visName(visit.getVisName())
                .visHp(visit.getVisHp())
                .visCode(visit.getVisCode())
                .build();
        return Header.OK(visitApiResponse);
    }

    private VisitApiResponse responseVisit(TbVisit visit){
        VisitApiResponse visitApiResponse = VisitApiResponse.builder()
                .visIndex(visit.getVisIndex())
                .visName(visit.getVisName())
                .visHp(visit.getVisHp())
                .visCode(visit.getVisCode())
                .build();
        return visitApiResponse;
    }
}
