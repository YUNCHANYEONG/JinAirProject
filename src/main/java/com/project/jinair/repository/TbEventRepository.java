package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbEvent;
import com.project.jinair.model.enumclass.EventStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TbEventRepository extends JpaRepository<TbEvent, Long> {
    Page<TbEvent> findByEvStatus(EventStatus evStatus, Pageable pageable);

}
