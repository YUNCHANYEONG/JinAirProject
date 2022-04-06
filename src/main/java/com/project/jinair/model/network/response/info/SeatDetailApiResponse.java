package com.project.jinair.model.network.response.info;

import com.project.jinair.model.enumclass.AirplaneSeatStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SeatDetailApiResponse {
    private Long sdIndex;
    private String sdId;
    private AirplaneSeatStatus sdStatus;
    private Long sdPrice;
    private String sdNation;
    private String sdApid;
}
