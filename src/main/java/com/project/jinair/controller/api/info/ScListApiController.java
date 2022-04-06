package com.project.jinair.controller.api.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ScheduleApiRequest;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.service.info.ScListApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schedule")
@RequiredArgsConstructor
public class ScListApiController implements CrudInterface<ScheduleApiRequest, ScheduleApiResponse> {

    private final ScListApiService scListApiService;

    @Override
    @PostMapping("")        // http:localhost:8080/api/schedule(post)
    public Header<ScheduleApiResponse> create(@RequestBody Header<ScheduleApiRequest> request) {
        return scListApiService.create(request);
    }

    @Override
    @GetMapping("{id}")               // http:localhost:8080/api/schedule/1(get) 인덱스 x
    public Header<ScheduleApiResponse> read(@PathVariable(name = "id") Long id) {
        return scListApiService.read(id);
    }

    @Override
    public Header<ScheduleApiResponse> update(@RequestBody Header<ScheduleApiRequest> request) {
        return scListApiService.update(request);
    }

    @Override
    @DeleteMapping("{id}")               // http:localhost:8080/api/schedule/1(delete) 인덱스 x
    public Header<ScheduleApiResponse> delete(@PathVariable(name = "id") Long id) {
        return scListApiService.delete(id);
    }

    @GetMapping("/list") // http://localhost:8080/api/schedule/list
    public Header<List<ScheduleApiResponse>> findAll(@PageableDefault(sort = {"schIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return scListApiService.search(pageable);
    }


    @PostMapping("/list/find")
    public Header<List<ScheduleApiResponse>> find(
            @RequestParam(value = "schAirplaneType", required = false) String schAirplaneType,
            @RequestParam(value = "schAirplaneName", required=false) String schAirplaneName,
            @RequestParam(value = "schDepartureDate", required=false) String schDepartureDate,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint
    ) {
        System.out.println(schAirplaneType + schAirplaneName + schDepartureDate + schArrivalPoint);
        return scListApiService.find(schAirplaneType, schAirplaneName, schDepartureDate, schDeparturePoint, schArrivalPoint);
    }



    // 출발지 공항에 따른 스케줄 검색
    @PostMapping("/Departure") // http://localhost:8080/api/schedule/Departure
    public Header<List<ScheduleApiResponse>> Departure(@RequestParam(value = "schDeparturePoint") String schDeparturePoint) {
        return scListApiService.Departure(schDeparturePoint);
    }

    // 출발지, 도착지 공항에 따른 스케줄 검색
    @PostMapping("/DepAri") // http://localhost:8080/api/schedule/DepAri
    public Header<List<ScheduleApiResponse>> All(
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint") String schArrivalPoint
    ) {
        return scListApiService.DepAri(schDeparturePoint, schArrivalPoint);
    }

    // 도착지, 예산, 오는날, 가는날 조회
    @PostMapping("/collaboration") // http://localhost:8080/api/schedule/collaboration
    public Header<List<ScheduleApiResponse>> collaboration (
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "wishPrice") Long wishPrice,
            @RequestParam(value = "goDay") String goDay,
            @RequestParam(value = "comeDay") String comeDay
    ) {
        return scListApiService.collaborate(schDeparturePoint, wishPrice, goDay, comeDay);
    }

    // 국내, 국외 구분, 가격 최저가 조회(5개)
    @GetMapping("/Lcc/{schNationType}") // http://localhost:8080/api/schedule/Lcc
    public Header<List<ScheduleApiResponse>> Lcc (
            @PathVariable(name = "schNationType") String schNationType,
            @PageableDefault(sort = {"schIndex"}, size = 8, direction = Sort.Direction.DESC) Pageable pageable
    ) {
        return scListApiService.Lcc(schNationType, pageable);
    }

    // 출발지, 도착지, 가는날 조회
    @PostMapping("/go") // http://localhost:8080/api/schedule/go
    public Header<List<ScheduleApiResponse>> go(
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint") String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt") String goDateSelectOptt
    ) {
        return scListApiService.go(schDeparturePoint, schArrivalPoint, goDateSelectOptt);
    }

    // 출발지, 도착지, 오는날 조회
    @PostMapping("/come") // http://localhost:8080/api/schedule/come
    public Header<List<ScheduleApiResponse>> come (
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint") String schArrivalPoint,
            @RequestParam(value = "comeDateSelectOptt") String comeDateSelectOptt
    ) {
        return scListApiService.come(schDeparturePoint, schArrivalPoint, comeDateSelectOptt);
    }


    // 출발지, 도착지, 가는날 조회
    @PostMapping("/price") // http://localhost:8080/api/schedule/go
    public Header<List<ScheduleApiResponse>> price(
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint") String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt") String goDateSelectOptt
    ) {
        return scListApiService.price(schDeparturePoint, schArrivalPoint, goDateSelectOptt);

    }

    // 출발지, 도착지, 가는날, 오는날 조회 (왕복)
    @PostMapping("/between") // http://localhost:8080/api/schedule/between
    public Header<List<ScheduleApiResponse>> between(
            @RequestParam(value = "goPoint") String goPoint,
            @RequestParam(value = "comePoint") String comePoint,
            @RequestParam(value = "goDate") String goDate
    ){
        System.out.println(goPoint + comePoint + goDate);
        return scListApiService.between(goPoint, comePoint, goDate);
    }

    // 출발지, 도착지, 가는날 (편도)
    @PostMapping("/oneway") // http://localhost:8080/api/schedule/oneway
    public Header<List<ScheduleApiResponse>> oneway(
            @RequestParam(value = "goPoint") String goPoint,
            @RequestParam(value = "comePoint") String comePoint,
            @RequestParam(value = "goDate") String goDate
    ){
        return scListApiService.oneway(goPoint, comePoint, goDate);
    }

    @PostMapping("/forPoint")
    public Header<ScheduleApiResponse> forPoint(
            @RequestParam(value = "airName")String airName,
            @RequestParam(value = "startPoint")String startPoint,
            @RequestParam(value = "arrPoint")String arrPoint,
            @RequestParam(value = "startTime")String startTime
    ){
        return scListApiService.forPoint(airName, startPoint, arrPoint, startTime);
    }

}
