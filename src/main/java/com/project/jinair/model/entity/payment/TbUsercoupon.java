package com.project.jinair.model.entity.payment;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.CouponStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
        name="seq_usercoupon_idx",
        sequenceName="seq_usercoupon_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbUsercoupon {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_usercoupon_idx")
    private Long ucIndex;
    private String ucType;
    private Long ucPrice;
    private String ucDesc;
    private String ucCode;
    private Long ucUserindex;
    private Integer ucDiscount;
    private LocalDateTime ucStartday;
    private LocalDateTime ucEndday;
    @Enumerated(EnumType.STRING)
    private CouponStatus ucIsUse;
    private Long ucTotcoupon;

    @ManyToOne
    @JoinColumn(name= "ucUserindex", referencedColumnName = "memIndex", insertable = false, updatable = false)
    private TbMember tbMember;

}
