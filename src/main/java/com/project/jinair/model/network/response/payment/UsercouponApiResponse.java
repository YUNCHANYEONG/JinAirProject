package com.project.jinair.model.network.response.payment;

import com.project.jinair.model.enumclass.CouponStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsercouponApiResponse {
    private Long ucIndex;
    private String ucType;
    private Long ucPrice;
    private String ucDesc;
    private String ucCode;
    private Integer ucDiscount;
    private LocalDateTime ucStartday;
    private LocalDateTime ucEndday;
    private CouponStatus ucIsUse;
    private Long ucTotcoupon;
    private Long ucUserindex;

}
