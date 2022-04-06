package com.project.jinair.controller.api.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.member.VisitApiRequest;
import com.project.jinair.model.network.response.member.VisitApiResponse;
import com.project.jinair.service.member.VisitApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/visit")
@RequiredArgsConstructor
public class VisitApiController implements CrudInterface<VisitApiRequest, VisitApiResponse> {

    private final VisitApiLogicService visitApiLogicService;

    @Override
    public Header<VisitApiResponse> create(Header<VisitApiRequest> request) {
        return visitApiLogicService.create(request);
    }

    @Override
    public Header<VisitApiResponse> read(Long id) {
        return visitApiLogicService.read(id);
    }

    @Override
    public Header<VisitApiResponse> update(Header<VisitApiRequest> request) {
        return visitApiLogicService.update(request);
    }

    @Override
    public Header<VisitApiResponse> delete(Long id) {
        return visitApiLogicService.delete(id);
    }

    // 비회원 리스트
    @GetMapping("")
    public Header<List<VisitApiResponse>> list(@PageableDefault(sort = {"visIndex"}, direction = Sort.Direction.DESC) Pageable pageable){
        return visitApiLogicService.list(pageable);
    }
}
