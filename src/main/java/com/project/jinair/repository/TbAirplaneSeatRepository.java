package com.project.jinair.repository;

import com.project.jinair.model.entity.info.TbAirplaneSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbAirplaneSeatRepository extends JpaRepository<TbAirplaneSeat, Long> {
}
