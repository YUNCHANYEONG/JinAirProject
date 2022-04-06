package com.project.jinair.model.entity.member;

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
        name="seq_admin_idx",
        sequenceName = "seq_admin_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbAdmin { // 관리자 계정관리
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_admin_idx")
    private Long adminIndex;
    private String adminId;
    private String adminPw;
    private String adminName;
    @CreatedDate
    private LocalDateTime adminRegdate;
}
