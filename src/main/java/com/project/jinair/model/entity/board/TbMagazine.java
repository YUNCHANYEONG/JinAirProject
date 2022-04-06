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
        name="seq_magazine_idx",
        sequenceName = "seq_magazine_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbMagazine { // 매거진 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_magazine_idx")
    private Long mzIndex;
    private String mzTitle;
    private String mzImgName;
    private String mzImgOriname;
    private String mzImgUrl;
    private String mzAnswerName;
    private String mzAnswerOriname;
    private String mzAnswerUrl;
    private String mzPdfName;
    private String mzPdfOriname;
    private String mzPdfUrl;

    @CreatedDate
    private LocalDateTime mzRegdate;

}
