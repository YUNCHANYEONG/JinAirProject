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
        name="seq_notifi_idx",
        sequenceName = "seq_notifi_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbNotifi { // 공지사항 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_notifi_idx")
    private Long noIndex;
    private String noTitle;
    private String noContents;
    private String noFileName;
    private String noFileOriname;
    private String noFileUrl;
    @CreatedDate
    private LocalDateTime noRegdate;
}
