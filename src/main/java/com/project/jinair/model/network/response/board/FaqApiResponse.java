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
public class FaqApiResponse {
    private Long faqIndex;
    private String faqType;
    private String faqTitle;
    private String faqContent;
    private LocalDateTime faqRegdate;
}
