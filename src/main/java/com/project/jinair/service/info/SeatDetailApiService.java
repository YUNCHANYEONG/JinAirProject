package com.project.jinair.service.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbSeatDetail;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.info.SeatDetailApiRequest;
import com.project.jinair.model.network.response.info.SeatDetailApiResponse;
import com.project.jinair.repository.TbSeatDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SeatDetailApiService implements CrudInterface<SeatDetailApiRequest, SeatDetailApiResponse> {

    private final TbSeatDetailRepository tbSeatDetailRepository;

    @Override
    public Header<SeatDetailApiResponse> create(Header<SeatDetailApiRequest> request) {
        return null;
    }

        @Override
        public Header<SeatDetailApiResponse> read (Long id){
            return null;
        }

        @Override
        public Header<SeatDetailApiResponse> update (Header < SeatDetailApiRequest > request) {
            return null;
        }

        @Override
        public Header<SeatDetailApiResponse> delete (Long id){
            return null;
        }

    public Header<SeatDetailApiResponse> saveAll (List<SeatDetailApiRequest> request){
        System.out.println(request);

        int size = request.size();
        List<TbSeatDetail> tbSeatDetailList = new ArrayList<>();

        for (int i = 0; i < size; i++) {
            TbSeatDetail tbSeatDetail = TbSeatDetail.builder()
                    .sdId(request.get(i).getSdId())
                    .sdPrice(request.get(i).getSdPrice())
                    .sdStatus(request.get(i).getSdStatus())
                    .sdNation(request.get(i).getSdNation())
                    .sdApid(request.get(i).getSdApid())
                    .build();
            tbSeatDetailList.add(tbSeatDetail);
        }
        tbSeatDetailRepository.saveAll(tbSeatDetailList);
        return null;
    }
}
