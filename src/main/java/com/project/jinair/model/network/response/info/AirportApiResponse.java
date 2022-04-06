package com.project.jinair.model.network.response.info;

import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AirportApiResponse {
    private Long aptIndex;
    private String aptNation;
    private String aptAirport;
    private String aptRevtype;
    private String aptTypedetail;

    // 애완동물
    private List<PetsApiResponse> petsApiResponselist;

    // 좌석 디테일
    private List<SeatDetailApiResponse> seatDetailApiResponseList;
}
