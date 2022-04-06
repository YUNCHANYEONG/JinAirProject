package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbNotifi;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TbNotifiRepository extends JpaRepository<TbNotifi, Long> {
    Optional<TbNotifi> findByNoIndex(Long id);
    Optional<TbNotifi> findByNoIndexOrderByNoIndexDesc(Long id);
    Page<TbNotifi> findByNoTitleContaining(String NoTitle, Pageable pageable);
}
