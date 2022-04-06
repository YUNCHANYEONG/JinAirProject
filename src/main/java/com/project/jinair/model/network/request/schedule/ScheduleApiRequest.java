package com.project.jinair.model.network.request.schedule;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScheduleApiRequest {
    private Long schIndex;
    private String schNationType;
    private String schAirplaneType;
    private String schAirplaneName;
    private String schDepartureDate;
    private String schDeparturePoint;
    private LocalDateTime schStartTime;
    private String schArrivalPoint;
    private LocalDateTime schArrivalDate;
    private Long schAirplaneSeat;
    private LocalDateTime schFlyingTime;
    private Long schBasicPrice;
    private Long schPoint;
    private String schAirportType;

}
