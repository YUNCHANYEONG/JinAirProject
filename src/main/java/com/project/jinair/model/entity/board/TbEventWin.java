package com.project.jinair.model.entity.board;

import com.project.jinair.model.enumclass.EventStatus;
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
        name="seq_event_win",
        sequenceName = "seq_event_win",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbEventWin { // 이벤트 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_event_win")
    private Long evIndex;
    private String evTitle;
    private String evContent;
    @CreatedDate
    private LocalDateTime evRegdate;
}
