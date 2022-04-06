package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbSchedule;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TbScheduleRepository extends JpaRepository<TbSchedule, Long> {
    Optional<TbSchedule> findBySchAirplaneNameAndSchDeparturePointAndSchArrivalPointAndSchStartTime(String airName, String startPoint, String arrPoint, LocalDateTime startTime);

    List<TbSchedule> findBySchAirplaneTypeAndSchAirplaneNameAndSchDepartureDateAndSchDeparturePointAndSchArrivalPoint(String schAirplaneType, String schAirplaneName, LocalDateTime schDepartureDate, String schDeparturePoint, String schArrivalPoint);
    List<TbSchedule> findBySchAirplaneNameAndSchDepartureDate(String schAirplaneName, LocalDateTime schDepartureDate);
    List<TbSchedule> findBySchAirplaneName(String schAirplaneName);
    List<TbSchedule> findBySchAirplaneNameAndSchDeparturePointAndSchArrivalPoint(String schAirplaneNAme, String schDeparturePoint, String schArrivalPoint);
    List<TbSchedule> findBySchDeparturePoint(String schDeparturePoint);
    List<TbSchedule> findFirstBySchDeparturePointAndSchArrivalPointAndSchStartTimeGreaterThanOrderBySchBasicPriceAsc(String schDeparturePoint, String schArrivalPoint, LocalDateTime time);
    List<TbSchedule> findBySchDeparturePointAndSchBasicPriceLessThanEqualAndSchStartTimeBetweenOrderBySchStartTimeAsc(String schDeparturePoint, Long wishPrice, LocalDateTime goDay, LocalDateTime comeDay);
    List<TbSchedule> findBySchNationTypeAndSchStartTimeGreaterThanOrderBySchBasicPriceAsc(String schNationType, LocalDateTime time, Pageable pageable);
    List<TbSchedule> findBySchDeparturePointAndSchArrivalPointAndSchStartTimeBetweenOrderBySchStartTimeAsc(String schDeparturePoint, String schArrivalPoint, LocalDateTime searchDaystr1, LocalDateTime searchDaystr2);
    List<TbSchedule> findFirstBySchDeparturePointAndSchArrivalPointAndSchStartTimeBetweenOrderBySchBasicPriceAsc(String schDeparturePoint, String schArrivalPoint, LocalDateTime searchDaystr1, LocalDateTime searchDaystr2);
    List<TbSchedule> findBySchDeparturePointAndSchArrivalPointAndSchDepartureDateAndSchArrivalDate(String schDeparturePoint, String schArrivalPoint, LocalDateTime depDate, LocalDateTime ArrDate);
    List<TbSchedule> findBySchDeparturePointAndSchArrivalPointAndSchDepartureDate(String schDeparturePoint, String schArrivalPoint, LocalDateTime depDate);
}
