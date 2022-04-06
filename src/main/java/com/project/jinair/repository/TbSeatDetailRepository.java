package com.project.jinair.repository;

import com.project.jinair.model.entity.info.TbSeatDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbSeatDetailRepository extends JpaRepository<TbSeatDetail, Long> {
}
