package com.project.jinair.model.network.request.info;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AirportApiRequest {
    private Long aptIndex;
    private String aptNation;
    private String aptAirport;
    private String aptRevtype;
    private String aptTypedetail;
}
