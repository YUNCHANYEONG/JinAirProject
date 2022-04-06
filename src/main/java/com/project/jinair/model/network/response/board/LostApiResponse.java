package com.project.jinair.model.network.response.board;

import com.project.jinair.model.enumclass.LostStatus;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LostApiResponse {
    private Long losIndex;
    private String losType;
    private String losImgName;
    private String losImgPath;
    private String losAirplane;
    private String losAirportArea;
    private LocalDateTime losArrivedate;
    private String losUser;
    private LostStatus losIsfind;
    private LocalDateTime losRegdate;


    // 스케줄
    private List<ScheduleApiResponse> scheduleApiResponseList;
}
