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
public class QnaAnswerApiResponse {
    private Long qaIndex;
    private String qaType;
    private String qaTitle;
    private String qaContent;
    private LocalDateTime qaRegdate;
    private Long qaQnaindex;

}
