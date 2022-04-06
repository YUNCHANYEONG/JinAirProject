package com.project.jinair.controller.api.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbAirplane;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.info.AirplaneApiRequest;
import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.service.info.AirplaneApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/airplane")
@RequiredArgsConstructor
public class AirplaneApiController implements CrudInterface<AirplaneApiRequest, AirplaneApiResponse> {


    private final AirplaneApiService airplaneApiService;

    @Override
    @PostMapping("")        // http:localhost:8080/api/airplane(post)
    public Header<AirplaneApiResponse> create(@RequestBody Header<AirplaneApiRequest> request) {
        return airplaneApiService.create(request);
    }

    @Override
    @GetMapping("{id}")               // http:localhost:8080/api/airplane/1(get) 인덱스 x
    public Header<AirplaneApiResponse> read(@PathVariable(name="id") Long id) {
        return airplaneApiService.read(id);
    }

    @Override
    @PutMapping("")                    // http:localhost:8080/api/airplane(put)
    public Header<AirplaneApiResponse> update(@RequestBody Header<AirplaneApiRequest> request) {
        return airplaneApiService.update(request);
    }

    @Override
    @DeleteMapping("{id}")               // http:localhost:8080/api/airplane/1(delete) 인덱스 x
    public Header<AirplaneApiResponse> delete(@PathVariable(name="id") Long id) {
        return airplaneApiService.delete(id);
    }

    @GetMapping("/list") // http://localhost:8080/api/airplane
    public Header<List<AirplaneApiResponse>> findAll(@PageableDefault(sort = {"apIndex"}, direction = Sort.Direction.DESC) Pageable pageable){
        return airplaneApiService.search(pageable);
    }

    @GetMapping("/list/{type}")
    public Header<List<AirplaneApiResponse>> typeList(@PathVariable(name = "type") String type) {
        return airplaneApiService.typeList(type);
    }

}