package com.project.jinair.model.enumclass;

/* 신청 여부 이넘*/

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ApplyStatus {

    Apply(0,"신청", "O"),
    NotApplied(1,"미신청", "X");


    private Integer id;
    private String title;
    private String description;
}
