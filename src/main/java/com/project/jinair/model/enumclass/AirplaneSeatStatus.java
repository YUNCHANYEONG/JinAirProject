package com.project.jinair.model.enumclass;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AirplaneSeatStatus {

    JiniPl(0,"지니 플러스", "Plus"),
    JiniSt(1,"지니 스트레치", "Stretch"),
    JiniFs(2,"지니 패스트", "Fast"),
    JiniEE(3,"비상구열", "Emergency Exit"),
    JiniSA(4,"스탠다드 A", "Standard A"),
    JiniSB(5,"스탠다드 B", "Standard B"),
    JiniBz(6,"지니 비즈", "Jini");


    private Integer id;
    private String title;
    private String description;
}