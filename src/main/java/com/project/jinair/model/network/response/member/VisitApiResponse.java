package com.project.jinair.model.network.response.member;

import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VisitApiResponse {
    private Long visIndex;
    private String visName;
    private String visHp;
    private String visCode;

    private List<ReserveApiResponse> reserveApiResponseList;
}
