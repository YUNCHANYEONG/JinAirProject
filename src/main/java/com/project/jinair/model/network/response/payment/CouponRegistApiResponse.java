package com.project.jinair.model.network.response.payment;

import com.project.jinair.model.enumclass.CouponStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CouponRegistApiResponse {
    private Long crIndex;
    private String crDesc;
    private Integer crDiscount;
    private LocalDateTime crIssuanceDay;
    private LocalDateTime crEndDay;
    private String crStartCode;
    private String crLastCode;
    private String crType;
    private CouponStatus crStatus;
    private LocalDateTime crRegdate;
}
