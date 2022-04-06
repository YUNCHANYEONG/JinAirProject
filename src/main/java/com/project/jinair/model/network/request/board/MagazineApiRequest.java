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
public class MagazineApiRequest {
    private Long mzIndex;
    private String mzTitle;
    private String mzImgName;
    private String mzImgOriname;
    private String mzImgUrl;
    private String mzAnswerName;
    private String mzAnswerOriname;
    private String mzAnswerUrl;
    private String mzPdfName;
    private String mzPdfOriname;
    private String mzPdfUrl;
}
