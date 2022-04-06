package com.project.jinair.model.network.request.board;

import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QnaApiRequest {
    private Long qnaIndex;
    private QnaType qnaType;
    private String qnaTitle;
    private String qnaContent;
    private String qnaFileName;
    private String qnaFileOriname;
    private String qnaFileUrl;
    private String qnaResNum;
    private String qnaNeedAnswer;
    private String qnaStarting;
    private String qnaDestination;
    private QnaStatus qnaIsans;
    private LocalDateTime qnaRegdate;
    private LocalDateTime qnaAnsdate;
    private Long qnaUserindex;

}
