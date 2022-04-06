package com.project.jinair.model.network.response.member;

import com.project.jinair.model.enumclass.GenderStatus;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.model.network.response.payment.PointApiResponse;
import com.project.jinair.model.network.response.payment.UsercouponApiResponse;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberApiResponse {
    private Long memIndex;
    private String memUserid;
    private String memUserpw;
    private String memKorFirstName;
    private String memKorLastName;
    private String memEngFirstName;
    private String memEngLastName;
    private String memHpNation;
    private String memHp;
    private String memEmail;
    private String memGender;
    private String memBirth;
    private String memPassport;
    private String memNation;
    private String memZipcode;
    private String memAddress1;
    private String memAddress2;
    private String memAddress3;
    private String memEmailIsagree;
    private String memSnsIsagree;
    private LocalDateTime memRegdate;

    // 예약 리스트
    private List<ReserveApiResponse> reserveApiResponseList;

    // 쿠폰 리스트
    private List<UsercouponApiResponse> usercouponApiResponseList;

    // QnA 리스트
    private List<QnaApiResponse> qnaApiResponseList;

    // 포인트 리스트
    private List<PointApiResponse> pointApiResponseList;
}
