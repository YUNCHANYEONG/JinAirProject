package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.enumclass.UserStatus;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import com.project.jinair.model.network.response.member.VisitApiResponse;
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
public class ReserveApiResponse {
    private Long reIndex;
    private Long reUserindex;
    private Long rePercentpoint;
    private PaymentStatus reStatus;
    private UserStatus reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private String reSeatDetail;    // 예약 좌석
    private Long reSeatPrice;
    private Long reTotal;           // 전체 금액
    private Long reSchBasicPrice;   // 기본 금액
    private String reSchDepPoint;   // 출발지
    private String reSchArrPoint;   // 도착지
    private LocalDateTime reSchStartTime;   // 출발 시간
    private LocalDateTime reSchEndTime;   // 도착 시간
    private String reAirplainType;  // 비행기 기종
    private String reSchName;       // 운항편 이름
    private String reTripKind;      // 여정종류 (왕복, 편도, 다구간)
    private String rePeopleType;  // 동반 여행자 인원수(있으면 유용해보임 ㅎㅎ)
    private String reFirstName; // 탑승자 성
    private String reLastName;  // 탑승자 이름
    private String reBirth;     // 탑승자 생년월일
    private String reGender;     // 탑승자 성별
    private String reNation;    // 탑승자 국적
    private String reMemberId;  // 탑승자 아이디
    private String reExtraSale; // 탑승자 추가할인
    private String reEmail; // 탑승자 이메일
    private String reHpNation;  // 탑승자 휴대폰 국가번호
    private String reHp; // 탑승자 휴대전화
    private LocalDateTime reRegdate; // 예약 등록일

    // 여러 좌석을 예매시
    private List<ScheduleApiResponse> scheduleApiResponseList;
    // 보험
    private List<InsuranceApiResponse> insuranceApiResponseList;
    // 수하물
    private List<BaggageApiResponse> baggageApiResponseList;
    // 애완동물
    private List<PetsApiResponse> petsApiResponseList;
    //비회원 정보
    private List<VisitApiResponse> visitApiResponseList;
}
