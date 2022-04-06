package com.project.jinair.model.network.response.info;

import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AirplaneApiResponse {
    private Long apIndex;
    private String apType;
    private String apName;
    // 좌석수
    private Long apSeatSum;

    private List<AirplaneSeatApiResponse> airplaneSeatApiResponseList;

}
