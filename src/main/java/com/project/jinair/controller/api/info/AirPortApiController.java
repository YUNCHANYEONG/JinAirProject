package com.project.jinair.controller.api.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbAirport;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.info.AirportApiRequest;
import com.project.jinair.model.network.response.info.AirportApiResponse;
import com.project.jinair.repository.TbAirportRepository;
import com.project.jinair.service.info.AirPortApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/airport")
@RequiredArgsConstructor
public class AirPortApiController implements CrudInterface<AirportApiRequest, AirportApiResponse> {

    private final AirPortApiService airPortApiService;

    @Override
    @PostMapping("")
    public Header<AirportApiResponse> create(@RequestBody Header<AirportApiRequest> request) {
        return airPortApiService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<AirportApiResponse> read(@PathVariable("id") Long id) {
        return airPortApiService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<AirportApiResponse> update(@RequestBody Header<AirportApiRequest> request) {
        return airPortApiService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<AirportApiResponse> delete(@PathVariable("id") Long id) {
        return airPortApiService.delete(id);
    }

    @GetMapping("/list")
    public Header<List<AirportApiResponse>> findAll() {
        return airPortApiService.search();
    }

    @PostMapping("/list")
    public Header<List<AirportApiResponse>> findPoint(@RequestParam(name = "findPoint") String findPoint) {
        return airPortApiService.searchs(findPoint);
    }
}
