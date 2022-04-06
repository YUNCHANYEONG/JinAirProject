package com.project.jinair.service.optional;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.optional.TbInsurance;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.Optional.InsuranceApiRequest;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.repository.TbInsuranceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InsuranceApiLogicService implements CrudInterface<InsuranceApiRequest, InsuranceApiResponse> {

    private final TbInsuranceRepository tbInsuranceRepository;


    @Override
    public Header<InsuranceApiResponse> create(Header<InsuranceApiRequest> request) {
        InsuranceApiRequest insuranceApiRequest = request.getData();
        TbInsurance tbInsurance = TbInsurance.builder()
                .isType(insuranceApiRequest.getIsType())
                .isPrice(insuranceApiRequest.getIsPrice())
                .build();
        TbInsurance newTbInsurance = tbInsuranceRepository.save(tbInsurance);
        return Header.OK(response(newTbInsurance));
    }

    @Override
    public Header<InsuranceApiResponse> read(Long id) {
        return tbInsuranceRepository.findByIsIndex(id)
                .map(insurance -> response(insurance))
                .map(Header::OK)
                .orElseGet(
                        () -> Header.ERROR("데이터없음")
                );
    }

    @Override
    public Header<InsuranceApiResponse> update(Header<InsuranceApiRequest> request) {
        InsuranceApiRequest insuranceApiRequest = request.getData();
        Optional<TbInsurance> tbInsurance = tbInsuranceRepository.findByIsIndex(insuranceApiRequest.getIsIndex());


        return tbInsurance.map(Insurance -> {
                    Insurance.setIsType(insuranceApiRequest.getIsType());
                    Insurance.setIsPrice(insuranceApiRequest.getIsPrice());

                    return Insurance;
                }).map(Insurance -> tbInsuranceRepository.save(Insurance))
                .map(Insurance -> response(Insurance))
                .map(Header::OK)
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbInsurance> tbInsurance = tbInsuranceRepository.findByIsIndex(id);

        return tbInsurance.map(Insurance -> {
            tbInsuranceRepository.delete(Insurance);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    private InsuranceApiResponse response(TbInsurance tbInsurance){
        InsuranceApiResponse insuranceApiResponse = InsuranceApiResponse.builder()
                .isIndex(tbInsurance.getIsIndex())
                .isType(tbInsurance.getIsType())
                .isPrice(tbInsurance.getIsPrice())
                .build();
        return insuranceApiResponse;
    }

    public BigDecimal search(Long id) {
        return tbInsuranceRepository.findByIsIndex(id).get().getIsPrice();
    }
}
