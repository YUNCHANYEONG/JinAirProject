package com.project.jinair.model.network.request.board;

import com.project.jinair.model.enumclass.LostStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LostApiRequest {
    private Long losIndex;
    private String losType;
    private String losImg;
    private String losAirplane;
    private String losAirportArea;
    private String losArrivedate;
    private String losUser;
    private LostStatus losIsfind;
    private LocalDateTime losRegdate;
}
