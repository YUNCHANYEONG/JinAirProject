package com.project.jinair.service.optional;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.optional.TbPets;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.Optional.PetsApiRequest;
import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import com.project.jinair.repository.TbPetsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PetApiLogicService implements CrudInterface<PetsApiRequest, PetsApiResponse> {

    private final TbPetsRepository tbPetsRepository;

    @Override
    public Header<PetsApiResponse> create(Header<PetsApiRequest> request) {
        PetsApiRequest petsApiRequest = request.getData();
        TbPets tbPets = TbPets.builder()
                .ptPrice(petsApiRequest.getPtPrice())
                .ptStatus(petsApiRequest.getPtStatus())
                .aptIndex(petsApiRequest.getAptIndex())
                .build();
        TbPets newTbPets = tbPetsRepository.save(tbPets);
        return Header.OK(response(newTbPets));
    }

    @Override
    public Header<PetsApiResponse> read(Long id) {
        return tbPetsRepository.findByPtIndex(id)
                .map(pets -> response(pets))
                .map(Header::OK)
                .orElseGet(
                        () -> Header.ERROR("데이터없음")
                );
    }


    @Override
    public Header<PetsApiResponse> update(Header<PetsApiRequest> request) {
        PetsApiRequest petsApiRequest = request.getData();
        Optional<TbPets> tbPets = tbPetsRepository.findById(petsApiRequest.getPtIndex());


        return tbPets.map(tbPet -> {
                    tbPet.setPtPrice(petsApiRequest.getPtPrice());
                    tbPet.setPtStatus(petsApiRequest.getPtStatus());
                    tbPet.setAptIndex(petsApiRequest.getAptIndex());

                    return tbPet;
                }).map(tbPet -> tbPetsRepository.save(tbPet))
                .map(tbPet -> response(tbPet))
                .map(Header::OK)
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbPets> tbPets = tbPetsRepository.findByPtIndex(id);

        return tbPets.map(tbPet -> {
            tbPetsRepository.delete(tbPet);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    private PetsApiResponse response(TbPets tbPets){
        PetsApiResponse petsApiResponse = PetsApiResponse.builder()
                .ptIndex(tbPets.getPtIndex())
                .ptPrice(tbPets.getPtPrice())
                .ptStatus(tbPets.getPtStatus())
                .aptIndex(tbPets.getAptIndex())
                .build();
        return petsApiResponse;
    }
}
