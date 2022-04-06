package com.project.jinair.model.entity.schedule;

import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.enumclass.UserStatus;
import com.project.jinair.model.network.response.info.SeatDetailApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@SequenceGenerator(
        name ="seq_reservation_idx",
        sequenceName = "seq_reservation_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbReservation {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_reservation_idx")
    private Long reIndex;
    private Long reUserindex;
    private Long rePercentpoint;
    @Enumerated(EnumType.STRING)
    private PaymentStatus reStatus;
    @Enumerated(EnumType.STRING)
    private UserStatus reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private String reSeatDetail;    // 예약 좌석
    private Long  reSeatPrice; // 예약 좌석 금액
    private Long reTotal;           // 전체 금액
    private Long reSchBasicPrice;   // 기본 금액
    private String reSchDepPoint;   // 출발지
    private String reSchArrPoint;   // 도착지
    private LocalDateTime reSchStartTime;   // 출발 시간
    private LocalDateTime reSchEndTime;   // 도착 시간
    private String reAirplainType;  // 비행기 기종
    private String reSchName;       // 운항편 이름
    private String reTripKind;      // 여정종류 (왕복, 편도, 다구간)
    private String rePeopleType;  // 동반 여행자 인원수(성인 2 소아 1 유아 1)(있으면 유용해보임 ㅎㅎ)
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
    @CreatedDate
    private LocalDateTime reRegdate; // 예약 등록일

}