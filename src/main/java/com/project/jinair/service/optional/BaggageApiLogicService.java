package com.project.jinair.service.optional;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.optional.TbBaggage;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.Optional.BaggageApiRequest;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.repository.TbBaggageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BaggageApiLogicService implements CrudInterface<BaggageApiRequest, BaggageApiResponse> {

    private final TbBaggageRepository tbBaggageRepository;

    @Override
    public Header<BaggageApiResponse> create(Header<BaggageApiRequest> request) {
        BaggageApiRequest baggageApiRequest = request.getData();
        TbBaggage tbBaggage = TbBaggage.builder()
                .bgType(baggageApiRequest.getBgType())
                .bgPrice(baggageApiRequest.getBgPrice())
                .bgNation(baggageApiRequest.getBgNation())
                .bgStandard(baggageApiRequest.getBgStandard())
                .build();
        TbBaggage newTbBaggage = tbBaggageRepository.save(tbBaggage);
        return Header.OK(response(newTbBaggage));
    }

    @Override
    public Header<BaggageApiResponse> read(Long id) {
        return tbBaggageRepository.findByBgIndex(id)
                .map(pets -> response(pets))
                .map(Header::OK)
                .orElseGet(
                        () -> Header.ERROR("데이터없음")
                );
    }

    @Override
    public Header<BaggageApiResponse> update(Header<BaggageApiRequest> request) {
        BaggageApiRequest baggageApiRequest = request.getData();
        Optional<TbBaggage> tbBaggage = tbBaggageRepository.findById(baggageApiRequest.getBgIndex());


        return tbBaggage.map(Baggage -> {
                    Baggage.setBgType(baggageApiRequest.getBgType());
                    Baggage.setBgPrice(baggageApiRequest.getBgPrice());
                    Baggage.setBgNation(baggageApiRequest.getBgNation());
                    Baggage.setBgStandard(baggageApiRequest.getBgStandard());

                    return Baggage;
                }).map(Baggage -> tbBaggageRepository.save(Baggage))
                .map(Baggage -> response(Baggage))
                .map(Header::OK)
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbBaggage> tbBaggage = tbBaggageRepository.findByBgIndex(id);

        return tbBaggage.map(Baggage -> {
            tbBaggageRepository.delete(Baggage);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    private BaggageApiResponse response(TbBaggage tbBaggage) {
        BaggageApiResponse baggageApiResponse = BaggageApiResponse.builder()
                .bgIndex(tbBaggage.getBgIndex())
                .bgType(tbBaggage.getBgType())
                .bgPrice(tbBaggage.getBgPrice())
                .bgNation(tbBaggage.getBgNation())
                .bgStandard(tbBaggage.getBgStandard())
                .build();
        return baggageApiResponse;
    }

    public BigDecimal search(Long id) {
        return tbBaggageRepository.findByBgIndex(id).get().getBgPrice();
    }
}
