package com.project.jinair.model.entity.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@SequenceGenerator(
        name="seq_qnaanswer_idx",
        sequenceName="seq_qnaanswer_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbQnaAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_qnaanswer_idx")
    private Long qaIndex;
    private String qaType;
    private String qaTitle;
    private String qaContent;
    @CreatedDate
    private LocalDateTime qaRegdate;
    private Long qaQnaindex;



}
