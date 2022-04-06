package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TbQnaRepository extends JpaRepository<TbQna, Long> {
    Optional<TbQna> findByQnaIndex(Long id);
    Page<TbQna> findByQnaType(QnaType qnaType, Pageable pageable);
    Page<TbQna> findByQnaIsans(QnaStatus qnaIsans, Pageable pageable);
    Page<TbQna> findByQnaTitleContaining(String qnaType, Pageable pageable);
    Page<TbQna> findByQnaUserindex(Long id, Pageable pageable);
    Page<TbQna> findAll(Pageable pageable);
    List<TbQna> findByQnaUserindex(Long id);
}

