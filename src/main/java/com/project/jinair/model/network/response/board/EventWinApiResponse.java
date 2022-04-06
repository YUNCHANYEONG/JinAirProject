package com.project.jinair.model.network.response.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventWinApiResponse {
    private Long evIndex;
    private String evTitle;
    private String evContent;
    private LocalDateTime evRegdate;
}
