package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.enumclass.EventStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.EventApiRequest;
import com.project.jinair.model.network.request.board.EventWinApiRequest;
import com.project.jinair.model.network.response.board.EventApiResponse;
import com.project.jinair.model.network.response.board.EventWinApiResponse;
import com.project.jinair.service.board.EventApiLogicService;
import com.project.jinair.service.board.EventWinApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventWin")
@RequiredArgsConstructor
public class EventWinApiController implements CrudInterface<EventWinApiRequest, EventWinApiResponse> {

    private final EventWinApiLogicService eventWinApiLogicService;

    @GetMapping("/list")
    public Header<List<EventWinApiResponse>> findSelect(
            @PageableDefault(sort = {"evIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return eventWinApiLogicService.searchSelect(pageable);
    }

    @GetMapping("/winView/{id}")
    public Header<EventWinApiResponse> reads(@PathVariable(name = "id")Long id) {
        return eventWinApiLogicService.reads(id);
    }


    @Override
    @PostMapping("")
    public Header<EventWinApiResponse> create(@RequestBody Header<EventWinApiRequest> request) {
        return eventWinApiLogicService.create(request);
    }

    @Override
    @GetMapping("/view/{id}")
    public Header<EventWinApiResponse> read(@PathVariable(name = "id")Long id) {
        return eventWinApiLogicService.read(id);
    }

    @Override
    @PutMapping("/update")
    public Header<EventWinApiResponse> update(@RequestBody Header<EventWinApiRequest> request) {
        return eventWinApiLogicService.update(request);
    }

    @Override
    @GetMapping("/delete/{id}")
    public Header<EventWinApiResponse> delete(@PathVariable(name = "id") Long id) {
        return eventWinApiLogicService.delete(id);
    }

}
