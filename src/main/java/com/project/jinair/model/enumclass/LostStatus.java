package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public enum LostStatus {

    NotReceived(0,"미수령", "수령 미완료"),
    Receipt(1,"수령", "수령 완료");


    private Integer id;
    private String title;
    private String description;
}