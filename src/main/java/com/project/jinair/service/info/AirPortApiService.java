package com.project.jinair.service.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbAirplane;
import com.project.jinair.model.entity.info.TbAirport;
import com.project.jinair.model.entity.schedule.TbSchedule;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.info.AirportApiRequest;
import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.info.AirportApiResponse;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.repository.TbAirportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AirPortApiService implements CrudInterface<AirportApiRequest, AirportApiResponse> {

    private final TbAirportRepository tbAirportRepository;

    @Override
    public Header<AirportApiResponse> create(Header<AirportApiRequest> request) {
        AirportApiRequest airportApiRequest = request.getData();
        TbAirport tbAirport = TbAirport.builder()
                .aptAirport(airportApiRequest.getAptAirport())
                .aptNation(airportApiRequest.getAptNation())
                .aptRevtype(airportApiRequest.getAptRevtype())
                .aptTypedetail(airportApiRequest.getAptTypedetail())
                .build();
        TbAirport newAirport = tbAirportRepository.save(tbAirport);
        return response(newAirport);
    }

    @Override
    public Header<AirportApiResponse> read(Long id) {
        return tbAirportRepository.findById(id)
                .map(airport -> response(airport))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<AirportApiResponse> update(Header<AirportApiRequest> request) {
        AirportApiRequest airportApiRequest = request.getData();
        Optional<TbAirport> tbAirport = tbAirportRepository.findById(airportApiRequest.getAptIndex());

        return tbAirport.map(airport -> {
            airport.setAptAirport(airportApiRequest.getAptAirport());
            airport.setAptNation(airportApiRequest.getAptNation());
            airport.setAptRevtype(airportApiRequest.getAptRevtype());
            airport.setAptTypedetail(airportApiRequest.getAptTypedetail());
            return airport;
        }).map(airport -> tbAirportRepository.save(airport))
                .map(airport -> response(airport))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbAirport> tbAirport = tbAirportRepository.findById(id);

        return tbAirport.map(airport ->{
            tbAirportRepository.delete(airport);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<AirportApiResponse> response(TbAirport tbAirport){
        AirportApiResponse airportApiResponse = AirportApiResponse.builder()
                .aptIndex(tbAirport.getAptIndex())
                .aptAirport(tbAirport.getAptAirport())
                .aptNation(tbAirport.getAptNation())
                .aptRevtype(tbAirport.getAptRevtype())
                .aptTypedetail(tbAirport.getAptTypedetail())
                .build();
        return Header.OK(airportApiResponse);
    }
    private AirportApiResponse airportApiResponse(TbAirport tbAirport) {
         AirportApiResponse airportApiResponse = AirportApiResponse.builder()
                .aptIndex(tbAirport.getAptIndex())
                .aptAirport(tbAirport.getAptAirport())
                .aptNation(tbAirport.getAptNation())
                .aptRevtype(tbAirport.getAptRevtype())
                .aptTypedetail(tbAirport.getAptTypedetail())
                .build();
        return airportApiResponse;
    }

    public Header<List<AirportApiResponse>> search() {
        List<TbAirport> tbAirports = tbAirportRepository.findAll();
        List<AirportApiResponse> airportApiResponseList = tbAirports.stream()
                .map(users -> airportApiResponse(users))
                .collect(Collectors.toList());

        return Header.OK(airportApiResponseList);
    }

    public Header<List<AirportApiResponse>> searchs(String findPoint) {
        List<TbAirport> tbAirports = tbAirportRepository.findByAptAirport(findPoint);
        List<AirportApiResponse> airportApiResponseList = tbAirports.stream()
                .map(users -> airportApiResponse(users))
                .collect(Collectors.toList());

        return Header.OK(airportApiResponseList);
    }
}
