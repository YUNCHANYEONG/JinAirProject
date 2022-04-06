package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.enumclass.EventStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.EventApiRequest;
import com.project.jinair.model.network.response.board.EventApiResponse;
import com.project.jinair.model.network.response.board.FaqApiResponse;
import com.project.jinair.service.board.EventApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/event")
@RequiredArgsConstructor
public class EventApiController implements CrudInterface<EventApiRequest, EventApiResponse> {

    private final EventApiLogicService eventApiLogicService;

    @GetMapping("/list")
    public void findAll() {
        eventApiLogicService.search();
    }

    @GetMapping("/list/{evStatus}")
    public Header<List<EventApiResponse>> findSelect(
            @PageableDefault(sort = {"evIndex"}, direction = Sort.Direction.DESC) Pageable pageable,
            @PathVariable(name = "evStatus") EventStatus evStatus) {
        return eventApiLogicService.searchSelect(pageable, evStatus);
    }

    @GetMapping("/lists/{evStatus}")
    public Header<List<EventApiResponse>> findSelects(
            @PageableDefault(size = 6, sort = {"evIndex"}, direction = Sort.Direction.DESC) Pageable pageable,
            @PathVariable(name = "evStatus") EventStatus evStatus) {
        return eventApiLogicService.searchSelect(pageable, evStatus);
    }

    @Override
    public Header<EventApiResponse> create(Header<EventApiRequest> request) {
        return null;
    }

    @Override
    @GetMapping("/view/{id}")
    public Header<EventApiResponse> read(@PathVariable(name = "id")Long id) {
        return eventApiLogicService.read(id);
    }

    @Override
    public Header<EventApiResponse> update(Header<EventApiRequest> request) {
        return null;
    }

    @Override
    @GetMapping("/delete/{id}")
    public Header<EventApiResponse> delete(@PathVariable(name = "id") Long id) {
        return eventApiLogicService.delete(id);
    }

}
