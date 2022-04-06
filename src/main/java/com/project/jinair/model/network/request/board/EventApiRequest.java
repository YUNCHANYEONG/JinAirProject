package com.project.jinair.model.network.request.board;

import com.project.jinair.model.enumclass.EventStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventApiRequest {
    private Long evIndex;
    private String evTitle;
    private String evContent;
    private String evFileName;
    private String evFileOriname;
    private String evFileUrl;
    private LocalDateTime evStartDay;
    private LocalDateTime evEndDay;
    private LocalDateTime evRegdate;
    private EventStatus evStatus;

}
