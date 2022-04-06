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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="seq_faq_idx",
        sequenceName = "seq_faq_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbFaq { // FAQ 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_faq_idx")
    private Long faqIndex;
    private String faqType;
    private String faqTitle;
    private String faqContent;
    @CreatedDate
    private LocalDateTime faqRegdate;
}
