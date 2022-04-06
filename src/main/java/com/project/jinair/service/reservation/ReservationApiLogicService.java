package com.project.jinair.service.reservation;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.entity.schedule.TbReservation;
import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.schedule.ReserveApiRequest;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import com.project.jinair.repository.TbReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.awt.color.ICC_Profile;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationApiLogicService implements CrudInterface<ReserveApiRequest, ReserveApiResponse> {

    private final TbReservationRepository tbReservationRepository;


    public Header<List<ReserveApiResponse>> find(Long startIdx, Long endIdx){
        List<TbReservation> tbReservations = tbReservationRepository.findAllByReIndexBetween(startIdx, endIdx);
        List<ReserveApiResponse> ReserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }

    public Header<List<ReserveApiResponse>> findCancel(Long startIdx, Long endIdx){
        LocalDateTime now = LocalDateTime.now(); // 현재시간 구하는 객체, 2022-03-13T11:17:21.211432100
        String strNow = String.valueOf(now).substring(0,19); // 2022-03-13T11:17:21
        LocalDateTime local = LocalDateTime.parse(strNow); // 타입변환
        List<TbReservation> tbReservations = tbReservationRepository.findAllByReIndexBetweenAndReSchStartTimeGreaterThan(startIdx, endIdx, local);
        List<ReserveApiResponse> ReserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }


    public Header<List<ReserveApiResponse>> findseat(Header<ReserveApiRequest> request){
        ReserveApiRequest reserveApiRequest = request.getData();
        List<TbReservation> tbReservations = tbReservationRepository.findByReSchNameAndReSchStartTime(reserveApiRequest.getReSchName(), reserveApiRequest.getReSchStartTime());
        List<ReserveApiResponse> ReserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }



    @Override
    public Header<ReserveApiResponse> create(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        TbReservation tbReservation = TbReservation.builder()
                .reUserindex(reserveApiRequest.getReUserindex())
                .rePercentpoint(reserveApiRequest.getRePercentpoint())
                .reStatus(reserveApiRequest.getReStatus())
                .reUserStatus(reserveApiRequest.getReUserStatus())
                .reReserNum(reserveApiRequest.getReReserNum())
                .rePayment(reserveApiRequest.getRePayment())
                .rePetsidx(reserveApiRequest.getRePetsidx())
                .reBaggageidx(reserveApiRequest.getReBaggageidx())
                .reInsuranceidx(reserveApiRequest.getReInsuranceidx())
                .reScheduleidx(reserveApiRequest.getReScheduleidx())
                .reTotal(reserveApiRequest.getReTotal())
                .reSchBasicPrice(reserveApiRequest.getReSchBasicPrice())
                .reSchDepPoint(reserveApiRequest.getReSchDepPoint())
                .reSchArrPoint(reserveApiRequest.getReSchArrPoint())
                .reSchStartTime(reserveApiRequest.getReSchStartTime())
                .reSchEndTime(reserveApiRequest.getReSchEndTime())
                .reAirplainType(reserveApiRequest.getReAirplainType())
                .reSchName(reserveApiRequest.getReSchName())
                .reTripKind(reserveApiRequest.getReTripKind())
                .rePeopleType(reserveApiRequest.getRePeopleType())
                .reFirstName(reserveApiRequest.getReFirstName())
                .reLastName(reserveApiRequest.getReLastName())
                .reBirth(reserveApiRequest.getReBirth())
                .reGender(reserveApiRequest.getReGender())
                .reNation(reserveApiRequest.getReNation())
                .reMemberId(reserveApiRequest.getReMemberId())
                .reExtraSale(reserveApiRequest.getReExtraSale())
                .reEmail(reserveApiRequest.getReEmail())
                .reHpNation(reserveApiRequest.getReHpNation())
                .reHp(reserveApiRequest.getReHp())
                .build();
        TbReservation newTbReservation = tbReservationRepository.save(tbReservation);
        return response(newTbReservation);
    }

    @Override
    public Header<ReserveApiResponse> read(Long id) {
        return tbReservationRepository.findById(id)
                .map(reserve -> response(reserve))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<ReserveApiResponse> update(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());

        return reservation.map(reserve ->{
                    reserve.setReUserindex(reserveApiRequest.getReUserindex());
                    reserve.setRePercentpoint(reserveApiRequest.getRePercentpoint());
                    reserve.setReStatus(reserveApiRequest.getReStatus());
                    reserve.setReUserStatus(reserveApiRequest.getReUserStatus());
                    reserve.setReReserNum(reserveApiRequest.getReReserNum());
                    reserve.setRePayment(reserveApiRequest.getRePayment());
                    reserve.setRePetsidx(reserveApiRequest.getRePetsidx());
                    reserve.setReBaggageidx(reserveApiRequest.getReBaggageidx());
                    reserve.setReInsuranceidx(reserveApiRequest.getReInsuranceidx());
                    reserve.setReScheduleidx(reserveApiRequest.getReScheduleidx());
                    reserve.setReTotal(reserveApiRequest.getReTotal());
                    reserve.setReSchBasicPrice(reserveApiRequest.getReSchBasicPrice());
                    reserve.setReSchDepPoint(reserveApiRequest.getReSchDepPoint());
                    reserve.setReSchArrPoint(reserveApiRequest.getReSchArrPoint());
                    reserve.setReSchStartTime(reserveApiRequest.getReSchStartTime());
                    reserve.setReSchEndTime(reserveApiRequest.getReSchEndTime());
                    reserve.setReAirplainType(reserveApiRequest.getReAirplainType());
                    reserve.setReSchName(reserveApiRequest.getReSchName());
                    reserve.setReTripKind(reserveApiRequest.getReTripKind());
                    reserve.setRePeopleType(reserveApiRequest.getRePeopleType());
                    reserve.setReFirstName(reserveApiRequest.getReFirstName());
                    reserve.setReLastName(reserveApiRequest.getReLastName());
                    reserve.setReBirth(reserveApiRequest.getReBirth());
                    reserve.setReGender(reserveApiRequest.getReGender());
                    reserve.setReNation(reserveApiRequest.getReNation());
                    reserve.setReMemberId(reserveApiRequest.getReMemberId());
                    reserve.setReExtraSale(reserveApiRequest.getReExtraSale());
                    reserve.setReEmail(reserveApiRequest.getReEmail());
                    reserve.setReHpNation(reserveApiRequest.getReHpNation());
                    reserve.setReHp(reserveApiRequest.getReHp());
                    reserve.setReSeatDetail(reserveApiRequest.getReSeatDetail());
                    reserve.setReSeatPrice(reserveApiRequest.getReSeatPrice());
                    return reserve;
                })
                .map(reserve -> tbReservationRepository.save(reserve))
                .map(reserve -> response(reserve))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbReservation> tbReservation = tbReservationRepository.findById(id);

        return tbReservation.map(reservation ->{
            tbReservationRepository.delete(reservation);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<ReserveApiResponse> response(TbReservation tbReservation){
        ReserveApiResponse reserveApiResponse = ReserveApiResponse.builder()
                .reIndex(tbReservation.getReIndex())
                .reUserindex(tbReservation.getReUserindex())
                .rePercentpoint(tbReservation.getRePercentpoint())
                .reStatus(tbReservation.getReStatus())
                .reUserStatus(tbReservation.getReUserStatus())
                .reReserNum(tbReservation.getReReserNum())
                .rePayment(tbReservation.getRePayment())
                .rePetsidx(tbReservation.getRePetsidx())
                .reBaggageidx(tbReservation.getReBaggageidx())
                .reInsuranceidx(tbReservation.getReInsuranceidx())
                .reScheduleidx(tbReservation.getReScheduleidx())
                .reTotal(tbReservation.getReTotal())
                .reSchBasicPrice(tbReservation.getReSchBasicPrice())
                .reSchDepPoint(tbReservation.getReSchDepPoint())
                .reSchArrPoint(tbReservation.getReSchArrPoint())
                .reSchStartTime(tbReservation.getReSchStartTime())
                .reSchEndTime(tbReservation.getReSchEndTime())
                .reAirplainType(tbReservation.getReAirplainType())
                .reSchName(tbReservation.getReSchName())
                .reTripKind(tbReservation.getReTripKind())
                .rePeopleType(tbReservation.getRePeopleType())
                .reFirstName(tbReservation.getReFirstName())
                .reLastName(tbReservation.getReLastName())
                .reBirth(tbReservation.getReBirth())
                .reGender(tbReservation.getReGender())
                .reNation(tbReservation.getReNation())
                .reMemberId(tbReservation.getReMemberId())
                .reExtraSale(tbReservation.getReExtraSale())
                .reEmail(tbReservation.getReEmail())
                .reHpNation(tbReservation.getReHpNation())
                .reHp(tbReservation.getReHp())
                .reRegdate(tbReservation.getReRegdate())
                .reSeatDetail(tbReservation.getReSeatDetail())
                .reSeatPrice(tbReservation.getReSeatPrice())
                .build();
        return Header.OK(reserveApiResponse);
    }
    private ReserveApiResponse responseReservation(TbReservation tbReservation){
        ReserveApiResponse reserveApiResponse = ReserveApiResponse.builder()
                .reIndex(tbReservation.getReIndex())
                .reUserindex(tbReservation.getReUserindex())
                .rePercentpoint(tbReservation.getRePercentpoint())
                .reStatus(tbReservation.getReStatus())
                .reUserStatus(tbReservation.getReUserStatus())
                .reReserNum(tbReservation.getReReserNum())
                .rePayment(tbReservation.getRePayment())
                .rePetsidx(tbReservation.getRePetsidx())
                .reBaggageidx(tbReservation.getReBaggageidx())
                .reInsuranceidx(tbReservation.getReInsuranceidx())
                .reScheduleidx(tbReservation.getReScheduleidx())
                .reTotal(tbReservation.getReTotal())
                .reSchBasicPrice(tbReservation.getReSchBasicPrice())
                .reSchDepPoint(tbReservation.getReSchDepPoint())
                .reSchArrPoint(tbReservation.getReSchArrPoint())
                .reSchStartTime(tbReservation.getReSchStartTime())
                .reSchEndTime(tbReservation.getReSchEndTime())
                .reAirplainType(tbReservation.getReAirplainType())
                .reSchName(tbReservation.getReSchName())
                .reTripKind(tbReservation.getReTripKind())
                .rePeopleType(tbReservation.getRePeopleType())
                .reFirstName(tbReservation.getReFirstName())
                .reLastName(tbReservation.getReLastName())
                .reBirth(tbReservation.getReBirth())
                .reGender(tbReservation.getReGender())
                .reNation(tbReservation.getReNation())
                .reMemberId(tbReservation.getReMemberId())
                .reExtraSale(tbReservation.getReExtraSale())
                .reEmail(tbReservation.getReEmail())
                .reHpNation(tbReservation.getReHpNation())
                .reHp(tbReservation.getReHp())
                .reRegdate(tbReservation.getReRegdate())
                .reSeatDetail(tbReservation.getReSeatDetail())
                .reSeatPrice(tbReservation.getReSeatPrice())
                .build();
        return reserveApiResponse;
    }

    public Long creating() {
        TbReservation tbReservation = TbReservation.builder()
                .build();
        TbReservation newTbReservation = tbReservationRepository.save(tbReservation);
        return newTbReservation.getReIndex();
    }

    public Header<ReserveApiResponse> readPayment(Long id, PaymentStatus paymentStatus){
        return  tbReservationRepository.findByReUserindexAndReStatus(id, paymentStatus)
                .map(reserve -> response(reserve))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    public ReserveApiResponse paymentsUpdate(List<ReserveApiRequest> request) {

        int size = request.size();

        for (int i = 0; i < size; i++) {
            long num = request.get(i).getReIndex();
            Optional<TbReservation> reservation = tbReservationRepository.findByReIndex(num);
            String responsePay = request.get(i).getRePayment();
            Long responseNum = request.get(i).getReTotal();
            String reserNum = request.get(i).getReReserNum();
            String reserSale = request.get(i).getReExtraSale();
            PaymentStatus paymentStatus = request.get(i).getReStatus();
            String reSeatDetail = request.get(i).getReSeatDetail();
            Long reBaggageidx = request.get(i).getReBaggageidx();
            Long reInsuranceidx = request.get(i).getReInsuranceidx();
            Long reSeatPrice = request.get(i).getReSeatPrice();

            reservation.ifPresent(
                    selectPay -> {
                        selectPay.setRePayment(responsePay);
                        selectPay.setReTotal(responseNum);
                        selectPay.setReReserNum(reserNum);
                        selectPay.setReExtraSale(reserSale);
                        selectPay.setReStatus(paymentStatus);
                        selectPay.setReSeatDetail(reSeatDetail);
                        selectPay.setReBaggageidx(reBaggageidx);
                        selectPay.setReInsuranceidx(reInsuranceidx);
                        selectPay.setReSeatPrice(reSeatPrice);
                        tbReservationRepository.save(selectPay);
                    }
            );
        }
        return null;
    }

    public void member(Long reIndex, Long userid) {
        tbReservationRepository.findById(reIndex)
                .map(tbReservation -> {
                    tbReservation.setReUserindex(userid);
                    return tbReservation;
                }).map(tbReservation -> tbReservationRepository.save(tbReservation));

    }

    public void updating(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReFirstName(reserveApiRequest.getReFirstName());
                    select.setReLastName(reserveApiRequest.getReLastName());
                    select.setReBirth(reserveApiRequest.getReBirth());
                    select.setReNation(reserveApiRequest.getReNation());
                    select.setReMemberId(reserveApiRequest.getReMemberId());
                    select.setReGender(reserveApiRequest.getReGender());
                    select.setReExtraSale(reserveApiRequest.getReExtraSale());
                    tbReservationRepository.save(select);
                }
        );
    }
    public void updating1(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReFirstName(reserveApiRequest.getReFirstName());
                    select.setReLastName(reserveApiRequest.getReLastName());
                    select.setReBirth(reserveApiRequest.getReBirth());
                    select.setReNation(reserveApiRequest.getReNation());
                    select.setReMemberId("유아-해당사항없음");
                    select.setReGender(reserveApiRequest.getReGender());
                    select.setReExtraSale("유아-해당사항없음");
                    tbReservationRepository.save(select);
                }
        );
    }
    public void updating2(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReEmail(reserveApiRequest.getReEmail());
                    select.setReHpNation(reserveApiRequest.getReHpNation());
                    select.setReHp(reserveApiRequest.getReHp());
                    tbReservationRepository.save(select);
                }
        );
    }

    public void updating3(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReIndex(reserveApiRequest.getReIndex());
                    select.setReTripKind(reserveApiRequest.getReTripKind());
                    tbReservationRepository.save(select);
                }
        );
    }
    public void seat(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReIndex(reserveApiRequest.getReIndex());
                    select.setReSeatDetail(reserveApiRequest.getReSeatDetail());
                    select.setReSeatPrice(reserveApiRequest.getReSeatPrice());
                    tbReservationRepository.save(select);
                }
        );
    }
    public void bagg(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReIndex(reserveApiRequest.getReIndex());
                    select.setReBaggageidx(reserveApiRequest.getReBaggageidx());
                    tbReservationRepository.save(select);
                }
        );
    }
    public void insu(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReIndex(reserveApiRequest.getReIndex());
                    select.setReInsuranceidx(reserveApiRequest.getReInsuranceidx());
                    tbReservationRepository.save(select);
                }
        );
    }
    public void retotal(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReIndex(reserveApiRequest.getReIndex());
                    select.setReTotal(reserveApiRequest.getReTotal());
                    tbReservationRepository.save(select);
                }
        );
    }

    public Header<List<ReserveApiResponse>> go(String schDeparturePoint, String schArrivalPoint, String goDateSelectOptt){
        LocalDateTime searchDaystr1 = LocalDateTime.parse((goDateSelectOptt));
        List<TbReservation> tbReservations = tbReservationRepository.findByReSchDepPointAndReSchArrPointAndReSchStartTime(schDeparturePoint, schArrivalPoint, searchDaystr1);
        List<ReserveApiResponse> reserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(reserveApiResponse);
    }

    public Header<List<ReserveApiResponse>> paymentUpdate(String a) {
        List<TbReservation> reservationList = tbReservationRepository.findFirstByReReserNum(a);
        List<ReserveApiResponse> ReserveApiResponse = reservationList.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }

    public Header<List<ReserveApiResponse>> reservation(Long reUserindex){
        LocalDateTime now = LocalDateTime.now(); // 현재시간 구하는 객체, 2022-03-13T11:17:21.211432100
        String strNow = String.valueOf(now).substring(0,19); // 2022-03-13T11:17:21
        LocalDateTime local = LocalDateTime.parse(strNow); // 타입변환
        List<TbReservation> tbReservations = tbReservationRepository.findByReUserindexAndReSchStartTimeGreaterThanOrderByReSchStartTimeAsc(reUserindex, local);
        List<ReserveApiResponse> ReserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }

    public Header<List<ReserveApiResponse>> oldReservation(Long reUserindex){
        LocalDateTime now = LocalDateTime.now(); // 현재시간 구하는 객체, 2022-03-13T11:17:21.211432100
        String strNow = String.valueOf(now).substring(0,19); // 2022-03-13T11:17:21
        LocalDateTime local = LocalDateTime.parse(strNow); // 타입변환
        List<TbReservation> tbReservations = tbReservationRepository.findByReUserindexAndReSchStartTimeLessThanOrderByReSchStartTimeAsc(reUserindex, local);
        List<ReserveApiResponse> ReserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }

    public Header<List<ReserveApiResponse>> list(Pageable pageable){
        Page<TbReservation> tbReservationList = tbReservationRepository.findAll(pageable);
        List<ReserveApiResponse> reserveApiResponseList = tbReservationList.stream()
                .map(re -> responseReservation(re))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbReservationList.getTotalPages())
                .totalElements(tbReservationList.getTotalElements())
                .currentPage(tbReservationList.getNumber())
                .currentElements(tbReservationList.getNumberOfElements())
                .build();

        return Header.OK(reserveApiResponseList, pagination);
    }

    public Header<List<ReserveApiResponse>> searchForUser(String airType, String airName, String startTime, String startPoint, String arrivePoint, Pageable pageable){
        Page<TbReservation> tbReservationList = tbReservationRepository.findByReAirplainTypeAndReSchNameAndReSchStartTimeAndReSchDepPointAndReSchArrPoint(airType, airName, LocalDateTime.parse(startTime), startPoint, arrivePoint, pageable);
        List<ReserveApiResponse> reserveApiResponseList = tbReservationList.stream()
                .map(re -> responseReservation(re))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbReservationList.getTotalPages())
                .totalElements(tbReservationList.getTotalElements())
                .currentPage(tbReservationList.getNumber())
                .currentElements(tbReservationList.getNumberOfElements())
                .build();
        return Header.OK(reserveApiResponseList, pagination);
    }

    public Header<List<ReserveApiResponse>> searchOfCode(String resCode, String firstName, String lasName){
        List<TbReservation> tbReservation = tbReservationRepository.findByReReserNumAndReFirstNameAndReLastName(resCode, firstName, lasName);
        List<ReserveApiResponse> tbReservationList = tbReservation.stream()
                .map(res -> responseReservation(res))
                .collect(Collectors.toList());

        return Header.OK(tbReservationList);
    }

    public Long search(Long id) {
        return tbReservationRepository.findById(id).get().getReTotal();
    }

    public void update1(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReReserNum(reserveApiRequest.getReReserNum());
                    select.setReStatus(reserveApiRequest.getReStatus());
                    select.setReFirstName(reserveApiRequest.getReFirstName());
                    select.setReLastName(reserveApiRequest.getReLastName());
                    select.setReBirth(reserveApiRequest.getReBirth());
                    select.setReEmail(reserveApiRequest.getReEmail());
                    select.setReNation(reserveApiRequest.getReNation());
                    select.setReMemberId(reserveApiRequest.getReMemberId());
                    select.setReGender(reserveApiRequest.getReGender());
                    select.setReHpNation(reserveApiRequest.getReHpNation());
                    select.setReHp(reserveApiRequest.getReHp());
                    select.setRePayment(reserveApiRequest.getRePayment());
                    select.setReUserindex(reserveApiRequest.getReUserindex());
                    tbReservationRepository.save(select);
                }
        );
    }
    public void update2(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());
        reservation.ifPresent(
                select ->{
                    select.setReReserNum(reserveApiRequest.getReReserNum());
                    select.setReStatus(reserveApiRequest.getReStatus());
                    select.setReFirstName(reserveApiRequest.getReFirstName());
                    select.setReLastName(reserveApiRequest.getReLastName());
                    select.setReBirth(reserveApiRequest.getReBirth());
                    select.setReEmail(reserveApiRequest.getReEmail());
                    select.setReNation(reserveApiRequest.getReNation());
                    select.setReMemberId(reserveApiRequest.getReMemberId());
                    select.setReGender(reserveApiRequest.getReGender());
                    select.setReHpNation(reserveApiRequest.getReHpNation());
                    select.setReHp(reserveApiRequest.getReHp());
                    select.setRePayment(reserveApiRequest.getRePayment());
                    select.setReUserindex(reserveApiRequest.getReUserindex());
                    select.setReTotal(reserveApiRequest.getReTotal());
                    tbReservationRepository.save(select);
                }
        );
    }

    public String reFirstName(Long id) {
        return tbReservationRepository.findById(id).get().getReFirstName();
    }
    public String reLastName(Long id) {
        return tbReservationRepository.findById(id).get().getReLastName();
    }
    public String reBirth(Long id) {
        return tbReservationRepository.findById(id).get().getReBirth();
    }
    public String reGender(Long id) {
        return tbReservationRepository.findById(id).get().getReGender();
    }
    public String reNation(Long id) {
        return tbReservationRepository.findById(id).get().getReNation();
    }
    public String reMemberId(Long id) {
        return tbReservationRepository.findById(id).get().getReMemberId();
    }
    public String reEmail(Long id) {
        return tbReservationRepository.findById(id).get().getReEmail();
    }
    public String reHpNation(Long id) {
        return tbReservationRepository.findById(id).get().getReHpNation();
    }
    public String reHp(Long id) {
        return tbReservationRepository.findById(id).get().getReHp();
    }
    public String reReserNum(Long id) {
        return tbReservationRepository.findById(id).get().getReReserNum();
    }
    public Long reUserindex(Long id) {
        return tbReservationRepository.findById(id).get().getReUserindex();
    }
    public List<Header<Object>>  deleteForUser(Long userIndex){
        List<TbReservation> tbUsercoupon = tbReservationRepository.findByReUserindex(userIndex);

        return tbUsercoupon.stream().map(couponRegist ->{
            tbReservationRepository.delete(couponRegist);
            return Header.OK();
        }).collect(Collectors.toList());

    }

    // 예약 코드로 유저 인덱스 가져오기
    public Header<List<ReserveApiResponse>> searchForUserIndex(String resCode){
        List<TbReservation> tbReservation = tbReservationRepository.findByReReserNum(resCode);
        List<ReserveApiResponse> tbReservationList = tbReservation.stream()
                .map(res -> responseReservation(res))
                .collect(Collectors.toList());
        return Header.OK(tbReservationList);
    }
}
