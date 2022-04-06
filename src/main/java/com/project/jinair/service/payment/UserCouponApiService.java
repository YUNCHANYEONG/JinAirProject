package com.project.jinair.service.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.enumclass.CouponStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.payment.UsercouponApiRequest;
import com.project.jinair.model.network.response.member.MemberApiResponse;
import com.project.jinair.model.network.response.payment.UsercouponApiResponse;
import com.project.jinair.repository.MemberRepository;
import com.project.jinair.repository.TbUsercouponRepository;
import com.project.jinair.service.member.MemberApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserCouponApiService implements CrudInterface<UsercouponApiRequest, UsercouponApiResponse> {

    private final TbUsercouponRepository tbUsercouponRepository;
    private final MemberRepository memberRepository;
    private final MemberApiLogicService memberApiLogicService;
    @PersistenceContext
    private EntityManager em;


    //일반 쿠폰 생성
    @Override
    public Header<UsercouponApiResponse> create(Header<UsercouponApiRequest> request) {
        try{
            UsercouponApiRequest usercouponApiRequest = request.getData();
            Header<MemberApiResponse> tbMember = memberApiLogicService.read(usercouponApiRequest.getUcUserindex());
            Long price = usercouponApiRequest.getUcPrice();

            Long result = (Long) em.createQuery("select sum(p.poPoint) from TbPoint p where p.poUserindex = " + tbMember.getData().getMemIndex()).getSingleResult();

            if (result > price){
                TbUsercoupon tbUsercoupon = TbUsercoupon.builder()
                        .ucType(usercouponApiRequest.getUcType())
                        .ucPrice(usercouponApiRequest.getUcPrice())
                        .ucDesc(usercouponApiRequest.getUcDesc())
                        .ucCode(usercouponApiRequest.getUcCode())
                        .ucDiscount(usercouponApiRequest.getUcDiscount())
                        .ucStartday(LocalDateTime.parse(usercouponApiRequest.getUcStartday()))
                        .ucEndday(LocalDateTime.parse(usercouponApiRequest.getUcEndday()))
                        .ucIsUse(usercouponApiRequest.getUcIsUse())
                        .ucTotcoupon(usercouponApiRequest.getUcTotcoupon())
                        .ucUserindex(tbMember.getData().getMemIndex())
                        .build();
                TbUsercoupon tbUsercoupon1 = tbUsercouponRepository.save(tbUsercoupon);
                return response(tbUsercoupon1);
            }else{
                System.out.println("구매불가");
                Header.ERROR("포인트 부족");
                return null;
            }
        }catch (NullPointerException n){
            Header.ERROR("포인트 부족");
            return null;
        }
    }

    @Override
    public Header<UsercouponApiResponse> read(Long id) {

        return null;
    }
    @Override
    public Header<UsercouponApiResponse> update(Header<UsercouponApiRequest> request) {
        UsercouponApiRequest usercouponApiRequest = request.getData();
        Optional<TbUsercoupon> tbUsercoupon = tbUsercouponRepository.findById(usercouponApiRequest.getUcIndex());

        return tbUsercoupon.map(coupon -> {
                    coupon.setUcIsUse(usercouponApiRequest.getUcIsUse());
                    return coupon;
                }).map(coupon -> tbUsercouponRepository.save(coupon))
                .map(coupon -> response(coupon))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbUsercoupon> tbUsercoupon = tbUsercouponRepository.findById(id);

        return tbUsercoupon.map(couponRegist ->{
            tbUsercouponRepository.delete(couponRegist);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<UsercouponApiResponse> response(TbUsercoupon tbUsercoupon){
        UsercouponApiResponse usercouponApiResponse = UsercouponApiResponse.builder()
                .ucIndex(tbUsercoupon.getUcIndex())
                .ucType(tbUsercoupon.getUcType())
                .ucPrice(tbUsercoupon.getUcPrice())
                .ucDesc(tbUsercoupon.getUcDesc())
                .ucCode(tbUsercoupon.getUcCode())
                .ucDiscount(tbUsercoupon.getUcDiscount())
                .ucStartday(tbUsercoupon.getUcStartday())
                .ucEndday(tbUsercoupon.getUcEndday())
                .ucIsUse(tbUsercoupon.getUcIsUse())
                .ucTotcoupon(tbUsercoupon.getUcTotcoupon())
                .build();
        return Header.OK(usercouponApiResponse);
    }
    private UsercouponApiResponse responseCoupon(TbUsercoupon tbUsercoupon) {
        UsercouponApiResponse usercouponApiResponse = UsercouponApiResponse.builder()
                .ucIndex(tbUsercoupon.getUcIndex())
                .ucType(tbUsercoupon.getUcType())
                .ucPrice(tbUsercoupon.getUcPrice())
                .ucDesc(tbUsercoupon.getUcDesc())
                .ucCode(tbUsercoupon.getUcCode())
                .ucDiscount(tbUsercoupon.getUcDiscount())
                .ucStartday(tbUsercoupon.getUcStartday())
                .ucEndday(tbUsercoupon.getUcEndday())
                .ucIsUse(tbUsercoupon.getUcIsUse())
                .ucTotcoupon(tbUsercoupon.getUcTotcoupon())
                .build();
        return usercouponApiResponse;
    }
    public Header<List<UsercouponApiResponse>> searchList(Long id, CouponStatus enumid, String startDate, String endDate, Pageable pageable) {
        Page<TbUsercoupon> tbUsercoupons = tbUsercouponRepository.findByUcUserindexAndUcIsUseAndUcEnddayBetween(id, enumid, LocalDateTime.parse(startDate), LocalDateTime.parse(endDate), pageable);
        List<UsercouponApiResponse> usercouponApiResponseList = tbUsercoupons.stream()
                .map(coupon -> responseCoupon(coupon))
                .collect(Collectors.toList());

        System.out.println(usercouponApiResponseList);

        Pagination pagination = Pagination.builder()
                .totalPages(tbUsercoupons.getTotalPages())
                .totalElements(tbUsercoupons.getTotalElements())
                .currentPage(tbUsercoupons.getNumber())
                .currentElements(tbUsercoupons.getNumberOfElements())
                .build();
        return Header.OK(usercouponApiResponseList, pagination);
    }

    public Header<List<UsercouponApiResponse>> enumList(Long id, CouponStatus enumid) {
        List<TbUsercoupon> tbUsercoupons = tbUsercouponRepository.findByUcUserindexAndUcIsUse(id, enumid);
        List<UsercouponApiResponse> usercouponApiResponseList = tbUsercoupons.stream()
                .map(coupon -> responseCoupon(coupon))
                .collect(Collectors.toList());

        return Header.OK(usercouponApiResponseList);
    }

    public Header<UsercouponApiResponse> promotionCoupon(Header<UsercouponApiRequest> request){
        UsercouponApiRequest usercouponApiRequest = request.getData();
        List<TbUsercoupon> tbUsercoupons = tbUsercouponRepository.findByUcCode(usercouponApiRequest.getUcCode());

        if(tbUsercoupons.isEmpty()){
            TbMember tbMember = memberRepository.findByMemIndex(usercouponApiRequest.getUcUserindex());

            TbUsercoupon tbUsercoupon = TbUsercoupon.builder()
                    .ucType(usercouponApiRequest.getUcType())
                    .ucPrice(usercouponApiRequest.getUcPrice())
                    .ucDesc(usercouponApiRequest.getUcDesc())
                    .ucCode(usercouponApiRequest.getUcCode())
                    .ucDiscount(usercouponApiRequest.getUcDiscount())
                    .ucStartday(LocalDateTime.parse(usercouponApiRequest.getUcStartday()))
                    .ucEndday(LocalDateTime.parse(usercouponApiRequest.getUcEndday()))
                    .ucIsUse(usercouponApiRequest.getUcIsUse())
                    .ucTotcoupon(usercouponApiRequest.getUcTotcoupon())
                    .ucUserindex(tbMember.getMemIndex())
                    .build();
            TbUsercoupon tbUsercoupon1 = tbUsercouponRepository.save(tbUsercoupon);
            return response(tbUsercoupon1);
        }else{
            return null;
        }
    }

    public Header<UsercouponApiResponse> updateCoupon(Header<UsercouponApiRequest> request) {
        UsercouponApiRequest usercouponApiRequest = request.getData();
        Optional<TbUsercoupon> tbUsercoupons = tbUsercouponRepository.findByUcCodeAndUcUserindex(usercouponApiRequest.getUcCode(), usercouponApiRequest.getUcUserindex());

        return tbUsercoupons.map(coupon -> {
                    coupon.setUcIsUse(usercouponApiRequest.getUcIsUse());
                    coupon.setUcTotcoupon(usercouponApiRequest.getUcTotcoupon());
                    return coupon;
                }).map(coupon -> tbUsercouponRepository.save(coupon))
                .map(coupon -> response(coupon))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    public List<Header<Object>> deleteForUser(Long userIndex){
        List<TbUsercoupon> tbUsercoupon = tbUsercouponRepository.findByUcUserindex(userIndex);

        return tbUsercoupon.stream().map(couponRegist ->{
            tbUsercouponRepository.delete(couponRegist);
            return Header.OK();
        }).collect(Collectors.toList());
    }
}