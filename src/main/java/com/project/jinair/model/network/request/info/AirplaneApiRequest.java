package com.project.jinair.model.network.request.info;

import com.project.jinair.model.entity.info.TbAirplane;
import com.project.jinair.model.entity.schedule.TbSchedule;
import com.project.jinair.model.network.request.schedule.ScheduleApiRequest;
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
public class AirplaneApiRequest {
    private Long apIndex;
    private String apType;
    private String apName;
    private Long apSeatSum;

}
