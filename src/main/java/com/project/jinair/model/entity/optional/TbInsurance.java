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
        name = "seq_insurance_idx",
        sequenceName = "seq_insurance_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbInsurance {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_insurance_idx")
    private Long isIndex;
    private String isType;
    private BigDecimal isPrice;
}
