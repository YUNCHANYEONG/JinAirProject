package com.project.jinair.model.entity.optional;

import com.project.jinair.model.enumclass.ApplyStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="seq_baggage_idx",
        sequenceName = "seq_baggage_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbBaggage {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_baggage_idx")
    private Long bgIndex;
    private String bgType;
    private BigDecimal bgPrice;
    private String bgNation;
    private String bgStandard;
//    @Enumerated(EnumType.STRING)
//    private ApplyStatus bgStatus;
}
