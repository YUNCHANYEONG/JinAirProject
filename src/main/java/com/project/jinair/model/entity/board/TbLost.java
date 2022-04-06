package com.project.jinair.model.entity.board;


import com.project.jinair.model.enumclass.LostStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="seq_lost_idx",
        sequenceName = "seq_lost_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbLost { // 유실물관리 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_lost_idx")
    private Long losIndex;
    private String losType;
    private String losImgName;
    private String losImgOriName;
    private String losImgPath;
    private String losAirplane;
    private String losAirportArea;
    private LocalDateTime losArrivedate;
    private String losUser;
    @Enumerated(EnumType.STRING)
    private LostStatus losIsfind;
    @CreatedDate
    private LocalDateTime losRegdate;
}
