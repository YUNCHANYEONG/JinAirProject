package com.project.jinair.model.entity.payment;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.entity.member.TbMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
        name="seq_point_idx",
        sequenceName="seq_point_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@JsonAutoDetect
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_point_idx")
    private Long poIndex;
    private Long poPoint;
    private String poMemo;
    @CreatedDate
    private LocalDateTime poRegdate;
    private Long poUserindex;

    @ManyToOne
    @JoinColumn(name = "poUserindex", referencedColumnName="memIndex", insertable = false, updatable = false)         // 추가나 수정이 불가능함
    private TbMember tbMember;


}
