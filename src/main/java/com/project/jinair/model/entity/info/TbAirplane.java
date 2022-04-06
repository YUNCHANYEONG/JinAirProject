package com.project.jinair.model.entity.info;

import com.project.jinair.model.entity.schedule.TbSchedule;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.nio.channels.FileChannel;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@SequenceGenerator(
        name ="seq_airplane_idx",
        sequenceName = "seq_airplane_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbAirplane {   // 비행기 정보

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_airplane_idx")
    private Long apIndex;
    private String apType;
    private String apName;
    private Long apSeatSum;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tbAirplane") // 하나의 카테고리에 여러게의 파트너가 연결
    private List<TbAirplaneSeat> tbAirplaneSeatList;

}