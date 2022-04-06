package com.project.jinair.model.network.request.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminApiRequest {
    private Long adminIndex;
    private String adminId;
    private String adminPw;
    private String adminName;
    private LocalDateTime adminRegdate;
}
