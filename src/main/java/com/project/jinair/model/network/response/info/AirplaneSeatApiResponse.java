package com.project.jinair.model.network.response.info;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AirplaneSeatApiResponse {
    private Long asIndex;
    private String asCode;
    private String asPrice;
    private Long ap_index;

}
