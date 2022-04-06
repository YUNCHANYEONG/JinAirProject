package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum CouponStatus {

    AddCoupon(0,"발급", "쿠폰 발급됨"),
    EndCoupon(1,"종료", "사용기한 종료"),
    Unused(2,"미사용", "쿠폰 미사용"),
    Used(3,"사용 완료", "쿠폰 사용완료");


    private Integer id;
    private String title;
    private String description;
}
