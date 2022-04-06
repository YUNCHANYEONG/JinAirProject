package com.project.jinair.model.entity.member;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.entity.payment.TbPoint;
import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.entity.schedule.TbReservation;
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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="seq_member_idx",
        sequenceName = "seq_member_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbMember { // 회원 테이블

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_member_idx")
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

    @CreatedDate
    private LocalDateTime memRegdate;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tbMember")
    private List<TbPoint> tbPointList;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tbMember")
    private List<TbUsercoupon> tbUsercouponList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tbMember")
    private List<TbQna> tbQnaList;

}
