package com.project.jinair.model.network.request.Optional;

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
public class PetsApiRequest {
    private Long ptIndex;
    private BigDecimal ptPrice;
    private ApplyStatus ptStatus;
    private Long aptIndex;
}
