package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbReservation;
import com.project.jinair.model.enumclass.PaymentStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TbReservationRepository extends JpaRepository<TbReservation, Long> {

    Optional<TbReservation> findByReUserindexAndReStatus(Long id, PaymentStatus paymentStatus);
    List<TbReservation> findAllByReUserindexAndReStatus(Long id, PaymentStatus paymentStatus);
    List<TbReservation> findAllByReIndexBetween(Long startIdx, Long endIdx);
    List<TbReservation> findAllByReIndexBetweenAndReSchStartTimeGreaterThan(Long startIdx, Long endIdx, LocalDateTime reSchStartTime);
    List<TbReservation> findByReSchDepPointAndReSchArrPointAndReSchStartTime(String reSchDepPoint, String reSchArrPoint, LocalDateTime reSchStartTime);
    List<TbReservation> findFirstByReReserNum(String a);
    List<TbReservation> findByReUserindexAndReSchStartTimeGreaterThanOrderByReSchStartTimeAsc(Long reUserindex, LocalDateTime local);
    List<TbReservation> findByReUserindexAndReSchStartTimeLessThanOrderByReSchStartTimeAsc(Long reUserindex, LocalDateTime local);
    Optional<TbReservation> findByReIndex(Long id);
    List<TbReservation> findByReSchNameAndReSchStartTime(String reSchName, LocalDateTime reSchStartTime);
    List<TbReservation> findByReReserNum(String resCode);

    Page<TbReservation> findByReAirplainTypeAndReSchNameAndReSchStartTimeAndReSchDepPointAndReSchArrPoint(String airType, String airName, LocalDateTime StartTime, String startPoint, String ArrivePoint, Pageable pageable);
    List<TbReservation> findByReReserNumAndReFirstNameAndReLastName(String resCode, String firstName, String lastName);
    List<TbReservation> findByReUserindex(Long userIndex);

}
