package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum EventStatus {

    StartEvent(0,"진행 중 이벤트", "이벤트 진행 중"),
    EventEnd(1,"종료된 이벤트", "이벤트 종료");

    private Integer id;
    private String title;
    private String description;
}
