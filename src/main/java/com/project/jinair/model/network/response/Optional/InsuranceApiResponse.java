package com.project.jinair.model.network.response.Optional;


import com.project.jinair.model.enumclass.ApplyStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InsuranceApiResponse {
    private Long isIndex;
    private String isType;
    private BigDecimal isPrice;
    private ApplyStatus isStatus;
}
