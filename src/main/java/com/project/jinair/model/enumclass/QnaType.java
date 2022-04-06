package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum QnaType {
    HomeShopping(0,"HomeShopping", "기내홈쇼핑"),
    Praise(1,"Praise", "칭송"),
    Complaint(2,"Complaint", " 불만"),
    Inquiry(3,"Inquiry", " 문의요청"),
    Proposal(4,"Proposal", " 제언");


    private Integer id;
    private String title;
    private String description;
}
