package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public enum QnaStatus {

    NotComplete(0,"false", "답변 미완료"),
    Complete(1,"ture", " 완료");


    private Integer id;
    private String title;
    private String description;

}
