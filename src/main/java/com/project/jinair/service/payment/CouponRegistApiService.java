package com.project.jinair.service.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.payment.TbCouponRegist;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.payment.CouponRegistApiRequest;
import com.project.jinair.model.network.response.payment.CouponRegistApiResponse;
import com.project.jinair.repository.TbCouponRegistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CouponRegistApiService implements CrudInterface<CouponRegistApiRequest, CouponRegistApiResponse> {

    private final TbCouponRegistRepository tbCouponRegistRepository;

    @Override
    public Header<CouponRegistApiResponse> create(Header<CouponRegistApiRequest> request) {

        CouponRegistApiRequest couponRegistApiRequest = request.getData();

        TbCouponRegist tbCouponRegist = TbCouponRegist.builder()
                .crType(couponRegistApiRequest.getCrType())
                .crDesc(couponRegistApiRequest.getCrDesc())
                .crDiscount(couponRegistApiRequest.getCrDiscount())
                .crIssuanceDay(couponRegistApiRequest.getCrIssuanceDay())
                .crEndDay(couponRegistApiRequest.getCrEndDay())
                .crStartCode(couponRegistApiRequest.getCrStartCode())
                .crLastCode(couponRegistApiRequest.getCrLastCode())
                .crStatus(couponRegistApiRequest.getCrStatus())
                .build();
        TbCouponRegist newCouponRegist = tbCouponRegistRepository.save(tbCouponRegist);
        return response(newCouponRegist);
    }

    @Override
    public Header<CouponRegistApiResponse> read(Long id) {
        return tbCouponRegistRepository.findById(id)
                .map(coupon -> response(coupon))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<CouponRegistApiResponse> update(Header<CouponRegistApiRequest> request) {
        CouponRegistApiRequest couponRegistApiRequest = request.getData();
        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findById(couponRegistApiRequest.getCrIndex());

        return tbCouponRegist.map(coupon -> {
            coupon.setCrDesc(couponRegistApiRequest.getCrDesc());
            coupon.setCrDiscount(couponRegistApiRequest.getCrDiscount());
            coupon.setCrIssuanceDay(couponRegistApiRequest.getCrIssuanceDay());
            coupon.setCrEndDay(couponRegistApiRequest.getCrEndDay());
            coupon.setCrStartCode(couponRegistApiRequest.getCrStartCode());
            coupon.setCrEndDay(couponRegistApiRequest.getCrEndDay());
            coupon.setCrType(couponRegistApiRequest.getCrType());
            coupon.setCrStatus(couponRegistApiRequest.getCrStatus());
            coupon.setCrRegdate(couponRegistApiRequest.getCrRegdate());

            return coupon;
        }).map(coupon -> tbCouponRegistRepository.save(coupon))
        .map(coupon -> response(coupon))
        .orElseGet(
            () -> Header.ERROR("NO DATA")
        );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findById(id);

        return tbCouponRegist.map(couponRegist ->{
            tbCouponRegistRepository.delete(couponRegist);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }
    private Header<CouponRegistApiResponse> response(TbCouponRegist tbCouponRegist){
        CouponRegistApiResponse couponRegistApiResponse = CouponRegistApiResponse.builder()
                .crIndex(tbCouponRegist.getCrIndex())
                .crDesc(tbCouponRegist.getCrDesc())
                .crDiscount(tbCouponRegist.getCrDiscount())
                .crIssuanceDay(tbCouponRegist.getCrIssuanceDay())
                .crEndDay(tbCouponRegist.getCrEndDay())
                .crStartCode(tbCouponRegist.getCrStartCode())
                .crLastCode(tbCouponRegist.getCrLastCode())
                .crType(tbCouponRegist.getCrType())
                .crStatus(tbCouponRegist.getCrStatus())
                .crRegdate(tbCouponRegist.getCrRegdate())
                .build();
        return Header.OK(couponRegistApiResponse);
    }
    private CouponRegistApiResponse responseCoupon(TbCouponRegist tbCouponRegist) {
        CouponRegistApiResponse couponRegistApiResponse = CouponRegistApiResponse.builder()
                .crIndex(tbCouponRegist.getCrIndex())
                .crDesc(tbCouponRegist.getCrDesc())
                .crDiscount(tbCouponRegist.getCrDiscount())
                .crIssuanceDay(tbCouponRegist.getCrIssuanceDay())
                .crEndDay(tbCouponRegist.getCrEndDay())
                .crStartCode(tbCouponRegist.getCrStartCode())
                .crLastCode(tbCouponRegist.getCrLastCode())
                .crType(tbCouponRegist.getCrType())
                .crStatus(tbCouponRegist.getCrStatus())
                .crRegdate(tbCouponRegist.getCrRegdate())
                .build();
        return couponRegistApiResponse;
    }

    public Header<List<CouponRegistApiResponse>> search(Pageable pageable) {
        Page<TbCouponRegist> tbCouponRegists = tbCouponRegistRepository.findAll(pageable);
        List<CouponRegistApiResponse> couponRegistApiResponseList = tbCouponRegists.stream()
                .map(users -> responseCoupon(users))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbCouponRegists.getTotalPages())
                .totalElements(tbCouponRegists.getTotalElements())
                .currentPage(tbCouponRegists.getNumber())
                .currentElements(tbCouponRegists.getNumberOfElements())
                .build();
        return Header.OK(couponRegistApiResponseList, pagination);
    }

    public Header<List<CouponRegistApiResponse>> searchList(String a, Pageable pageable) {
        Page<TbCouponRegist> tbCouponRegists = tbCouponRegistRepository.findByCrDescContaining(a, pageable);
        List<CouponRegistApiResponse> couponRegistApiResponseList = tbCouponRegists.stream()
                .map(coupon -> responseCoupon(coupon))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbCouponRegists.getTotalPages())
                .totalElements(tbCouponRegists.getTotalElements())
                .currentPage(tbCouponRegists.getNumber())
                .currentElements(tbCouponRegists.getNumberOfElements())
                .build();
        return Header.OK(couponRegistApiResponseList, pagination);
    }

    public Header<List<CouponRegistApiResponse>> searchStr(String str) {
        List<TbCouponRegist> tbCouponRegists = tbCouponRegistRepository.findFirstByCrStartCodeStartingWith(str);
        List<CouponRegistApiResponse> couponRegistApiResponseList = tbCouponRegists.stream()
                .map(users -> responseCoupon(users))
                .collect(Collectors.toList());

        return Header.OK(couponRegistApiResponseList);
    }
}
