package com.project.jinair.controller.api.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.payment.CouponRegistApiRequest;
import com.project.jinair.model.network.response.board.NotifyApiResponse;
import com.project.jinair.model.network.response.payment.CouponRegistApiResponse;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.service.payment.CouponRegistApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coupon")
@RequiredArgsConstructor
public class CouponApiController implements CrudInterface<CouponRegistApiRequest, CouponRegistApiResponse> {

    private final CouponRegistApiService couponRegistApiService;

    @Override
    @PostMapping("")
    public Header<CouponRegistApiResponse> create(@RequestBody Header<CouponRegistApiRequest> request) {
        return couponRegistApiService.create(request);
    }

    // useCouponlist

    @Override
    @GetMapping("id")
    public Header<CouponRegistApiResponse> read(@PathVariable(name = "id") Long id) {
        return couponRegistApiService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<CouponRegistApiResponse> update(@RequestBody Header<CouponRegistApiRequest> request) {
        return couponRegistApiService.update(request);
    }

    @Override
    @DeleteMapping("id")
    public Header<CouponRegistApiResponse> delete(@PathVariable(name = "id") Long id) {
        return couponRegistApiService.delete(id);
    }

    @GetMapping("/list") // http://localhost:8080/api/airplane
    public Header<List<CouponRegistApiResponse>> findAll(@PageableDefault(sort = {"crIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return couponRegistApiService.search(pageable);
    }

    @GetMapping("/searchTxt/{a}")
    public Header<List<CouponRegistApiResponse>> searchTxt(@PathVariable String a, @PageableDefault(size = 10, sort = {"crIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return couponRegistApiService.searchList(a, pageable);
    }

    @GetMapping("/searchStr/{str}")
    public Header<List<CouponRegistApiResponse>> searchStr(@PathVariable String str){
        return couponRegistApiService.searchStr(str);
    }
}
