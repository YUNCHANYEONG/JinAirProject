package com.project.jinair.service.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbAirplane;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.info.AirplaneApiRequest;
import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.repository.TbAirplaneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AirplaneApiService implements CrudInterface<AirplaneApiRequest, AirplaneApiResponse> {

    private final TbAirplaneRepository tbAirplaneRepository;

    @Override
    public Header<AirplaneApiResponse> create(Header<AirplaneApiRequest> request) {
        AirplaneApiRequest airplaneApiRequest = request.getData();
        TbAirplane tbAirplane = TbAirplane.builder()
                .apIndex(airplaneApiRequest.getApIndex())
                .apType(airplaneApiRequest.getApType())
                .apName(airplaneApiRequest.getApName())
                .apSeatSum(airplaneApiRequest.getApSeatSum())
                .build();
        TbAirplane newAirplane = tbAirplaneRepository.save(tbAirplane);
        return response(newAirplane);
    }

    @Override
    public Header<AirplaneApiResponse> read(Long id) {
        return tbAirplaneRepository.findById(id)
                .map(airplanes -> response(airplanes))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<AirplaneApiResponse> update(Header<AirplaneApiRequest> request) {
        AirplaneApiRequest airplaneApiRequest = request.getData();
        Optional<TbAirplane> tbAirplane = tbAirplaneRepository.findById(airplaneApiRequest.getApIndex());

        return tbAirplane.map(airplane -> {
            airplane.setApType(airplaneApiRequest.getApType());
            airplane.setApName(airplaneApiRequest.getApName());
            airplane.setApSeatSum(airplaneApiRequest.getApSeatSum());

            return airplane;
        }).map(airplane -> tbAirplaneRepository.save(airplane))
                .map(airplane -> response(airplane))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbAirplane> tbAirplane = tbAirplaneRepository.findById(id);

        return tbAirplane.map(airplane ->{
            tbAirplaneRepository.delete(airplane);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<AirplaneApiResponse> response(TbAirplane tbAirplane){
        AirplaneApiResponse airplaneApiResponse = AirplaneApiResponse.builder()
                .apIndex(tbAirplane.getApIndex())
                .apType(tbAirplane.getApType())
                .apName(tbAirplane.getApName())
                .apSeatSum(tbAirplane.getApSeatSum())
                .build();
        return Header.OK(airplaneApiResponse);
    }
    private AirplaneApiResponse responseAirplane(TbAirplane tbAirplane){
        AirplaneApiResponse airplaneApiResponse = AirplaneApiResponse.builder()
                .apIndex(tbAirplane.getApIndex())
                .apType(tbAirplane.getApType())
                .apName(tbAirplane.getApName())
                .apSeatSum(tbAirplane.getApSeatSum())
                .build();
        return airplaneApiResponse;
    }

    public Header<List<AirplaneApiResponse>> search(Pageable pageable) {
        Page<TbAirplane> tbAirplane = tbAirplaneRepository.findAll(pageable);
        List<AirplaneApiResponse> airplaneApiResponseList = tbAirplane.stream()
                .map(users -> responseAirplane(users))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbAirplane.getTotalPages())
                .totalElements(tbAirplane.getTotalElements())
                .currentPage(tbAirplane.getNumber())
                .currentElements(tbAirplane.getNumberOfElements())
                .build();

        return Header.OK(airplaneApiResponseList, pagination);
    }

    public Header<List<AirplaneApiResponse>> typeList(String type) {
        List<TbAirplane> tbAirplanes = tbAirplaneRepository.findByApType(type);
        List<AirplaneApiResponse> airplaneApiResponses = tbAirplanes.stream()
                .map(air -> responseAirplane(air))
                .collect(Collectors.toList());

        return Header.OK(airplaneApiResponses);
    }

}
