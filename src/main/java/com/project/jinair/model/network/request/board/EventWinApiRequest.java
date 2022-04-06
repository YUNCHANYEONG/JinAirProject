package com.project.jinair.model.network.request.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventWinApiRequest {
    private Long evIndex;
    private String evTitle;
    private String evContent;
    private LocalDateTime evRegdate;

}
