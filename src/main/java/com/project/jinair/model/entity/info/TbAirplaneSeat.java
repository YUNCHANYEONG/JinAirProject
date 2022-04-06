package com.project.jinair.model.entity.info;

import com.project.jinair.model.entity.member.TbMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@SequenceGenerator(
        name ="seq_airplaneseat_idx",
        sequenceName = "seq_airplaneseat_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbAirplaneSeat {   // 비행기 좌석 정보

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_airplaneseat_idx")
    private Long asIndex;
    private String asCode;
    private String asPrice;

    @ManyToOne
    private TbAirplane tbAirplane;

}
