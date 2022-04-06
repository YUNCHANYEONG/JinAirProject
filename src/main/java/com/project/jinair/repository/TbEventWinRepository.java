package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbEventWin;
import com.project.jinair.model.entity.board.TbNotifi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TbEventWinRepository extends JpaRepository<TbEventWin, Long> {

    Optional<TbEventWin> findByEvIndexOrderByEvIndexDesc(Long id);

}
