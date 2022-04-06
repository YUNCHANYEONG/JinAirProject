package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.QnaType;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.model.network.response.payment.PointApiResponse;
import com.project.jinair.service.board.QnaApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qna")
@RequiredArgsConstructor
public class QnaApiController implements CrudInterface<QnaApiRequest, QnaApiResponse> {

    private final QnaApiLogicService qnaApiLogicService;

/*
    {
    "transactionTime": "2022-03-04T11:01:36.9120232",
    "resultCode": "OK",
    "description": "OK",
    "data": {
        "qnaIndex": 1,
        "qnaType": "HomeShopping",
        "qnaTitle": "테스트하고싶어요",
        "qnaContent": "스프링이고 나발이고 그냥 일단 진행해보는게 어떨지 싶습니다만",
        "qnaIsans": "NotComplete",
        "qnaRegdate": "2022-03-04T01:49:24",
        "qnaAnsdate": "2022-03-04T01:49:24",
        "qnaUserindex": 1,
        "qnaAnswerApiResponseList": null
    }
*/

    // 전체 리스트 출력
    @GetMapping("/list")
    public Header<List<QnaApiResponse>> List(@PageableDefault(size = 10, sort = {"qnaIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return qnaApiLogicService.getQnaList(pageable);
    }

    // 타입에 따른 리스트 출력
    @GetMapping("/listdetail/{a}")
    public Header<List<QnaApiResponse>> List(@PathVariable QnaType a, @PageableDefault(size = 10, sort = {"qnaIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return qnaApiLogicService.getQnaList(a, pageable);
    }

    // 사용자에 따른 리스트
    @GetMapping("/myqnalist/{id}")
    public Header<List<QnaApiResponse>> myQnaList(@PathVariable Long id, @PageableDefault(size = 10, sort = {"qnaIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return qnaApiLogicService.myQnaList(id, pageable);
    }

    // 미답변 리스트
    @GetMapping("/list/NotComplete")
    public Header<List<QnaApiResponse>> ListUnComplete(@PageableDefault(size = 10, sort = {"qnaIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return qnaApiLogicService.getQnaLists(pageable);
    }

    // 검색
    @GetMapping("/listsearch/{a}")
    public Header<List<QnaApiResponse>> Listsearch(@PathVariable String a, @PageableDefault(size = 10, sort = {"qnaIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return qnaApiLogicService.getQnaList(a, pageable);
    }

    @Override
    @PostMapping("")
    public Header<QnaApiResponse> create(@RequestBody Header<QnaApiRequest> request) {
        return qnaApiLogicService.create(request);
    }

    @Override
    @GetMapping("/list/{id}")
    public Header<QnaApiResponse> read(@PathVariable(name = "id") Long id) {
        return qnaApiLogicService.read(id);
    }

    @Override
    public Header<QnaApiResponse> update(@RequestBody Header<QnaApiRequest> request) {
        return qnaApiLogicService.update(request);
    }

    @Override
    public Header<QnaApiResponse> delete(@PathVariable(name = "id") Long id) {
        return qnaApiLogicService.delete(id);
    }


    // 사용자 전체 QnA (페이지 없음)
    @GetMapping("/userQna/{id}")
    public Header<List<QnaApiResponse>> userQnaList(@PathVariable Long id) {
        return qnaApiLogicService.userQnaList(id);
    }
}
