package com.project.jinair.model.entity.board;

import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
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
@Entity
@SequenceGenerator(
        name="seq_qna_idx",
        sequenceName="seq_qna_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbQna {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_qna_idx")
    private Long qnaIndex;
    @Enumerated(EnumType.STRING)
    private QnaType qnaType;
    private Long qnaUserindex;
    private String qnaTitle;
    private String qnaContent;
    private String qnaFileName;
    private String qnaResNum;
    private String qnaFileOriname;
    private String qnaFileUrl;
    private String qnaNeedAnswer;
    private String qnaStarting;
    private String qnaDestination;
    private LocalDateTime qnaStartDate;

    @Enumerated(EnumType.STRING)
    private QnaStatus qnaIsans;
    @CreatedDate
    private LocalDateTime qnaRegdate;
    private LocalDateTime qnaAnsdate;

    @ManyToOne
    @JoinColumn(name ="qnaUserindex", referencedColumnName="memIndex", insertable = false, updatable = false)
    private TbMember tbMember;

}
