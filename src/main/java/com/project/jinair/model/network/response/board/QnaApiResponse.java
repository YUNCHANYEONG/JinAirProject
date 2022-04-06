package com.project.jinair.model.network.response.board;

import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import com.project.jinair.model.network.response.board.QnaAnswerApiResponse;
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
public class QnaApiResponse {
    private Long qnaIndex;
    private QnaType qnaType;
    private String qnaTitle;
    private String qnaContent;
    private String qnaFileName;
    private String qnaFileOriname;
    private String qnaFileUrl;
    private String qnaNeedAnswer;
    private String qnaStarting;
    private String qnaResNum;
    private String qnaDestination;
    private QnaStatus qnaIsans;
    private LocalDateTime qnaRegdate;
    private LocalDateTime qnaAnsdate;
    private Long qnaUserindex;
    private String qnaUserName;
    private String qnaUserId;
    private String qnaUserHp;
    private String qnaUserEmail;
    private String qnaUserEmailIsagree;
    private String qnaUserSnsIsagree;



    private List<QnaAnswerApiResponse> qnaAnswerApiResponseList;
}
