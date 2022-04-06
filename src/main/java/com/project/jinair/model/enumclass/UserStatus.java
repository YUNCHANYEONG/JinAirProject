package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UserStatus {

    Member(0,"회원", "회원"),
    Nonmember(1,"비회원", "비회원");



    private Integer id;
    private String title;
    private String description;
}
