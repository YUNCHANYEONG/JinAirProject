package com.project.jinair.controller.api.info;


import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.info.AirplaneApiRequest;
import com.project.jinair.model.network.request.info.SeatDetailApiRequest;
import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.info.SeatDetailApiResponse;
import com.project.jinair.service.info.SeatDetailApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seatDetail")
@RequiredArgsConstructor
public class SeatDetailApiController implements CrudInterface<SeatDetailApiRequest, SeatDetailApiResponse> {

    private final SeatDetailApiService seatDetailApiService;

    @Override
    @PostMapping("")
    public Header<SeatDetailApiResponse> create(@RequestBody Header<SeatDetailApiRequest> request) {
        System.out.println(request);
        return seatDetailApiService.create(request);
    }

    @Override
    public Header<SeatDetailApiResponse> read(Long id) {
        return null;
    }

    @Override
    public Header<SeatDetailApiResponse> update(@RequestBody Header<SeatDetailApiRequest> request) {
        return null;
    }

    @Override
    public Header<SeatDetailApiResponse> delete(Long id) {
        return null;
    }


    @PostMapping("/list")        // http:localhost:8080/api/airplane(post)
    public Header<SeatDetailApiResponse> saveAll(@RequestBody List<SeatDetailApiRequest> request) {
        System.out.println(request);
        return seatDetailApiService.saveAll(request);
    }


}
