package com.project.jinair.model.network.request.member;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.project.jinair.model.enumclass.GenderStatus;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
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
public class MemberApiRequest {
    private Long memIndex;
    private String memUserid;
    private String memUserpw;
    private String memKorFirstName;
    private String memKorLastName;
    private String memEngFirstName;
    private String memEngLastName;
    private String memHpNation;
    private String memHp;
    private String memEmail;
    private String memGender;
    private String memBirth;
    private String memPassport;
    private String memNation;
    private String memZipcode;
    private String memAddress1;
    private String memAddress2;
    private String memAddress3;
    private String memEmailIsagree;
    private String memSnsIsagree;
    private LocalDateTime memRegdate;



}
