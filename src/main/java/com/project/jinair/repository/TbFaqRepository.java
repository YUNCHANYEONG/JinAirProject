package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbFaq;
import com.project.jinair.model.entity.board.TbQna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TbFaqRepository extends JpaRepository<TbFaq, Long> {
    Optional<TbFaq> findByFaqIndex(Long faqIndex);
    List<TbFaq> findByFaqTitleContaining(String FaqType);
    Page<TbFaq> findByFaqTypeContaining(String FaqType, Pageable pageable);
}
