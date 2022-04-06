package com.project.jinair.model.entity.info;

import com.project.jinair.model.enumclass.AirplaneSeatStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@SequenceGenerator(
        name ="seq_seatdetail_idx",
        sequenceName = "seq_seatdetail_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbSeatDetail { // 비행기 좌석 디테일
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_seatdetail_idx")
    private Long sdIndex;
    private String sdId;
    @Enumerated(EnumType.STRING)
    private AirplaneSeatStatus sdStatus;
    private Long sdPrice;
    private String sdNation;
    private String sdApid;
}
