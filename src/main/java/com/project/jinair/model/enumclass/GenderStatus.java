package com.project.jinair.model.enumclass;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum GenderStatus {

    Female(0,"여성", "사용자 여성"),
    male(1,"남성", "사용자 남성");

    private Integer id;
    private String title;
    private String description;
}