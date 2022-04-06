package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.info.AirportApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScheduleApiResponse {
    private Long schIndex;
    private String schNationType;
    private String schAirplaneType;
    private String schAirplaneName;
    private LocalDateTime schDepartureDate;
    private String schDeparturePoint;
    private LocalDateTime schStartTime;
    private String schArrivalPoint;
    private LocalDateTime schArrivalDate;
    private Long schAirplaneSeat;
    private LocalDateTime schFlyingTime;
    private Long schBasicPrice;
    private Long schPoint;
    private String schAirportType;

    // 공항 리스트
    private List<AirportApiResponse> airportApiResponseList;
    // 항공기 리스트
    private List<AirplaneApiResponse> airplaneApiResponseList;

}
