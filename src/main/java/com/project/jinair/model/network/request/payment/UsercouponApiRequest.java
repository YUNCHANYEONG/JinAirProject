package com.project.jinair.model.network.request.payment;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.payment.TbPoint;
import com.project.jinair.model.enumclass.CouponStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsercouponApiRequest {
    private Long ucIndex;
    private String ucType;
    private Long ucPrice;
    private String ucDesc;
    private Long ucUserindex;
    private String ucCode;
    private Integer ucDiscount;
    private String ucStartday;
    private String ucEndday;
    private CouponStatus ucIsUse;
    private Long ucTotcoupon;

    @ManyToOne
    private TbMember tbMember;
}
