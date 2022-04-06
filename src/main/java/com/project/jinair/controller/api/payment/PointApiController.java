package com.project.jinair.controller.api.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.payment.PointApiRequest;
import com.project.jinair.model.network.response.payment.PointApiResponse;
import com.project.jinair.repository.TbPointRepository;
import com.project.jinair.service.payment.PointApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/point")
@RequiredArgsConstructor
public class PointApiController implements CrudInterface<PointApiRequest, PointApiResponse> {

    private final PointApiService pointApiService;

    @Override
    @PostMapping("")
    public Header<PointApiResponse> create(@RequestBody Header<PointApiRequest> request) {
        System.out.println(request);
        return pointApiService.create(request);
    }

    @Override
    @GetMapping("/{id}")
    public Header<PointApiResponse> read(@PathVariable(name = "id") Long id) {
        return pointApiService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<PointApiResponse> update(@RequestBody Header<PointApiRequest> request) {
        return pointApiService.update(request);
    }

    @Override
    @DeleteMapping("/{id}")
    public Header<PointApiResponse> delete(@PathVariable(name = "id")Long id) {
        return pointApiService.delete(id);
    }

    @GetMapping("")
    public Header<List<PointApiResponse>> list(@PageableDefault(sort = {"poIndex"}, direction = Sort.Direction.DESC)Pageable pageable){
        return pointApiService.list(pageable);
    }

    // 사용자에 따른 포인트
    @GetMapping("/user/{id}")
    public Header<List<PointApiResponse>> userPoint(@PathVariable(name = "id")Long id, @PageableDefault(sort = {"poIndex"}, direction = Sort.Direction.DESC)Pageable pageable){
        return pointApiService.userPoint(id, pageable);
    }

    // 사용자, 날짜 기간 검색
    @PostMapping("/user/search")
    public Header<List<PointApiResponse>> userSearch(
            @RequestParam(value = "userIndex")Long id,
            @RequestParam(value = "start")String startDate,
            @RequestParam(value = "end")String endDate,
            @PageableDefault(sort = {"poIndex"}, direction = Sort.Direction.DESC)Pageable pageable
    ){
        return pointApiService.userSearch(id, startDate, endDate, pageable);
    }

    // 사용자 탈퇴시 관련 포인트 삭제
    @DeleteMapping("/user/{id}")
    public List<Header<Object>> userDelete(@PathVariable(name = "id")Long id){
        return pointApiService.userDelete(id);
    }

    // 다수 사용자 포인트 지급
    @PostMapping("/saveAll")
    public Header<PointApiResponse> saveAll(@RequestBody List<PointApiRequest> request){
        System.out.println(request);
        return pointApiService.saveAll(request);
    }
}
