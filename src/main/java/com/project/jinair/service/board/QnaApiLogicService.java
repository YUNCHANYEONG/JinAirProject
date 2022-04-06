package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbNotifi;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.QnaApiResponse;
//import com.project.jinair.repository.MemJoinQnaRepository;
import com.project.jinair.repository.MemberRepository;
import com.project.jinair.repository.TbQnaRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.Session;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QnaApiLogicService implements CrudInterface<QnaApiRequest, QnaApiResponse> {

    private final TbQnaRepository tbQnaRepository;
//    private final MemJoinQnaRepository memJoinQnaRepository;

    private final MemberRepository memberRepository;

    // 게시판 리스트
    public Header<List<QnaApiResponse>> getQnaList(Pageable pageable) {
        Page<TbQna> tbQna = tbQnaRepository.findAll(pageable);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbQna.getTotalPages())
                .totalElements(tbQna.getTotalElements())
                .currentPage(tbQna.getNumber())
                .currentElements(tbQna.getNumberOfElements())
                .build();
        return Header.OK(qnaApiResponseList, pagination);
    }

    // 타입에 따른 리스트
    public Header<List<QnaApiResponse>> getQnaList(QnaType a, Pageable pageable) {
        Page<TbQna> tbQna = tbQnaRepository.findByQnaType(a, pageable);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbQna.getTotalPages())
                .totalElements(tbQna.getTotalElements())
                .currentPage(tbQna.getNumber())
                .currentElements(tbQna.getNumberOfElements())
                .build();
        return Header.OK(qnaApiResponseList, pagination);
    }

    // 미답변 목록
    public Header<List<QnaApiResponse>> getQnaLists(Pageable pageable) {
        Page<TbQna> tbQna = tbQnaRepository.findByQnaIsans(QnaStatus.NotComplete, pageable);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(tbQna.getTotalPages())
                .totalElements(tbQna.getTotalElements())
                .currentPage(tbQna.getNumber())
                .currentElements(tbQna.getNumberOfElements())
                .build();
        return Header.OK(qnaApiResponseList, pagination);
    }

    // 타이틀 검색
    public Header<List<QnaApiResponse>> getQnaList(String a, Pageable pageable) {
        Page<TbQna> tbQna = tbQnaRepository.findByQnaTitleContaining(a, pageable);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(tbQna.getTotalPages())
                .totalElements(tbQna.getTotalElements())
                .currentPage(tbQna.getNumber())
                .currentElements(tbQna.getNumberOfElements())
                .build();
        return Header.OK(qnaApiResponseList, pagination);
    }

    // 사용자에 따른 목록
    public Header<List<QnaApiResponse>> myQnaList(Long id, Pageable pageable) {
        Page<TbQna> tbQna = tbQnaRepository.findByQnaUserindex(id, pageable);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(tbQna.getTotalPages())
                .totalElements(tbQna.getTotalElements())
                .currentPage(tbQna.getNumber())
                .currentElements(tbQna.getNumberOfElements())
                .build();
        return Header.OK(qnaApiResponseList, pagination);
    }


    @Override
    public Header<QnaApiResponse> create(Header<QnaApiRequest> request) {
        QnaApiRequest qnaApiRequest = request.getData();
        TbMember tbMember = memberRepository.findByMemIndex(qnaApiRequest.getQnaIndex());
        TbQna tbQna = TbQna.builder()
                .qnaType(qnaApiRequest.getQnaType())
                .qnaTitle(qnaApiRequest.getQnaTitle())
                .qnaContent(qnaApiRequest.getQnaContent())
                .qnaIsans(QnaStatus.NotComplete)
                .qnaUserindex(tbMember.getMemIndex())
                .build();
        TbQna newTbQna = tbQnaRepository.save(tbQna);
        return response(newTbQna);
    }

    @Override
    public Header<QnaApiResponse> read(Long id) {
        return tbQnaRepository.findById(id)
                .map(tbQna -> response(tbQna))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<QnaApiResponse> update(Header<QnaApiRequest> request) {
        QnaApiRequest qnaApiRequest = request.getData();
        Optional<TbQna> tbQna = tbQnaRepository.findById(qnaApiRequest.getQnaIndex());

        return tbQna.map(qna -> {
                    qna.setQnaIndex(qnaApiRequest.getQnaIndex());
                    qna.setQnaType(qnaApiRequest.getQnaType());
                    qna.setQnaTitle(qnaApiRequest.getQnaTitle());
                    qna.setQnaContent(qnaApiRequest.getQnaContent());

                    return qna;
                }).map(qna -> tbQnaRepository.save(qna))
                .map(qna -> response(qna))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbQna> tbQna = tbQnaRepository.findByQnaIndex(id);
        return tbQna.map(qna -> {
            tbQnaRepository.delete(qna);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<QnaApiResponse> response(TbQna tbQna) {
        QnaApiResponse qnaApiResponse = QnaApiResponse.builder()
                .qnaIndex(tbQna.getQnaIndex())
                .qnaType(tbQna.getQnaType())
                .qnaTitle(tbQna.getQnaTitle())
                .qnaContent(tbQna.getQnaContent())
                .qnaIsans(tbQna.getQnaIsans())
                .qnaAnsdate(tbQna.getQnaAnsdate())
                .qnaRegdate(tbQna.getQnaRegdate())
                .qnaUserindex(tbQna.getTbMember().getMemIndex())
                .qnaUserName(tbQna.getTbMember().getMemKorFirstName()+tbQna.getTbMember().getMemKorLastName())
                .qnaUserId(tbQna.getTbMember().getMemUserid())
                .qnaUserHp(tbQna.getTbMember().getMemHp())
                .qnaUserEmail(tbQna.getTbMember().getMemEmail())
                .qnaUserEmailIsagree(tbQna.getTbMember().getMemEmailIsagree())
                .qnaUserSnsIsagree(tbQna.getTbMember().getMemSnsIsagree())
                .build();
        return Header.OK(qnaApiResponse);
    }

    private QnaApiResponse responseQna(TbQna tbQna){
        QnaApiResponse qnaApiResponse = QnaApiResponse.builder()
                .qnaIndex(tbQna.getQnaIndex())
                .qnaType(tbQna.getQnaType())
                .qnaTitle(tbQna.getQnaTitle())
                .qnaContent(tbQna.getQnaContent())
                .qnaIsans(tbQna.getQnaIsans())
                .qnaAnsdate(tbQna.getQnaAnsdate())
                .qnaRegdate(tbQna.getQnaRegdate())
                .qnaUserindex(tbQna.getTbMember().getMemIndex())
                .qnaUserName(tbQna.getTbMember().getMemKorFirstName()+tbQna.getTbMember().getMemKorLastName())
                .build();
        return qnaApiResponse;
    }

    // 파일저장
    @Transactional
    public void save(TbQna tbQna){
        TbQna i = new TbQna();
        i.setQnaIndex(tbQna.getQnaIndex());
        i.setQnaTitle(tbQna.getQnaTitle());
        i.setQnaContent(tbQna.getQnaContent());
        i.setQnaStartDate(tbQna.getQnaStartDate());
        i.setQnaStarting(tbQna.getQnaStarting());
        i.setQnaDestination(tbQna.getQnaDestination());
        i.setQnaType(tbQna.getQnaType());
        i.setQnaFileName(tbQna.getQnaFileName());
        i.setQnaFileOriname(tbQna.getQnaFileOriname());
        i.setQnaFileUrl(tbQna.getQnaFileUrl());
        i.setQnaUserindex(tbQna.getQnaUserindex());
        tbQnaRepository.save(i);
    }

    // 사용자에 따른 전체 Qna (페이지 없음)
    public Header<List<QnaApiResponse>> userQnaList(Long id) {
        List<TbQna> tbQna = tbQnaRepository.findByQnaUserindex(id);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        return Header.OK(qnaApiResponseList);
    }

}
