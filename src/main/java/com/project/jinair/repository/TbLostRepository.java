package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbLost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface TbLostRepository extends JpaRepository<TbLost, Long> {

    Page<TbLost> findByLosAirplaneAndLosAirportAreaAndLosTypeAndLosArrivedateBetween(String airplane, String airport, String type, LocalDateTime startDate, LocalDateTime endDate, Pageable pageable);

}
