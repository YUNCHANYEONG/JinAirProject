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
public class NotifyApiResponse {
    private Long noIndex;
    private String noTitle;
    private String noContents;
    private String noFileName;
    private String noFileOriname;
    private String noFileUrl;
    private LocalDateTime noRegdate;
}
