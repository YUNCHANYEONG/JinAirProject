package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbMagazine;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.board.MagazineApiRequest;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.MagazineApiResponse;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.repository.TbMagazineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MagazineApiLoginService implements CrudInterface<MagazineApiRequest, MagazineApiResponse> {

    private final TbMagazineRepository tbMagazineRepository;


    // 게시판 리스트
    public Header<List<MagazineApiResponse>> getQnaList() {
        List<TbMagazine> tbMagazines = tbMagazineRepository.findAll(Sort.by(Sort.Direction.DESC, "mzIndex"));
        List<MagazineApiResponse> magazineApiResponseList = tbMagazines.stream()
                .map(user -> responseMaz(user))
                .collect(Collectors.toList());
        return Header.OK(magazineApiResponseList);
    }

    @Override
    public Header<MagazineApiResponse> create(Header<MagazineApiRequest> request) {
        return null;
    }

    @Override
    public Header<MagazineApiResponse> read(Long id) {
        return tbMagazineRepository.findById(id)
                .map(tbMagazine -> response(tbMagazine))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<MagazineApiResponse> update(Header<MagazineApiRequest> request) {
        return null;
    }

    @Override
    public Header delete(Long id) {
        Optional<TbMagazine> tbMagazine = tbMagazineRepository.findById(id);
        return tbMagazine.map(maz -> {
            tbMagazineRepository.delete(maz);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<MagazineApiResponse> response(TbMagazine tbMagazine) {
        MagazineApiResponse magazineApiResponse = MagazineApiResponse.builder()
                .mzIndex(tbMagazine.getMzIndex())
                .mzTitle(tbMagazine.getMzTitle())
                .mzImgName(tbMagazine.getMzImgName())
                .mzImgOriname(tbMagazine.getMzImgOriname())
                .mzImgUrl(tbMagazine.getMzImgUrl())
                .mzAnswerName(tbMagazine.getMzAnswerName())
                .mzAnswerOriname(tbMagazine.getMzAnswerOriname())
                .mzAnswerUrl(tbMagazine.getMzAnswerUrl())
                .mzPdfName(tbMagazine.getMzPdfName())
                .mzPdfOriname(tbMagazine.getMzPdfOriname())
                .mzPdfUrl(tbMagazine.getMzPdfUrl())
                .mzRegdate(tbMagazine.getMzRegdate())
                .build();
        return Header.OK(magazineApiResponse);
    }

    private MagazineApiResponse responseMaz(TbMagazine tbMagazine){
        MagazineApiResponse magazineApiResponse = MagazineApiResponse.builder()
                .mzIndex(tbMagazine.getMzIndex())
                .mzTitle(tbMagazine.getMzTitle())
                .mzImgName(tbMagazine.getMzImgName())
                .mzImgOriname(tbMagazine.getMzImgOriname())
                .mzImgUrl(tbMagazine.getMzImgUrl())
                .mzAnswerName(tbMagazine.getMzAnswerName())
                .mzAnswerOriname(tbMagazine.getMzAnswerOriname())
                .mzAnswerUrl(tbMagazine.getMzAnswerUrl())
                .mzPdfName(tbMagazine.getMzPdfName())
                .mzPdfOriname(tbMagazine.getMzPdfOriname())
                .mzPdfUrl(tbMagazine.getMzPdfUrl())
                .mzRegdate(tbMagazine.getMzRegdate())
                .build();
        return magazineApiResponse;
    }

    @Transactional
    public void save(TbMagazine tbMagazine){
        TbMagazine i = new TbMagazine();
        i.setMzTitle(tbMagazine.getMzTitle());
        i.setMzImgName(tbMagazine.getMzImgName());
        i.setMzImgOriname(tbMagazine.getMzImgOriname());
        i.setMzImgUrl(tbMagazine.getMzImgUrl());
        i.setMzAnswerName(tbMagazine.getMzAnswerName());
        i.setMzAnswerOriname(tbMagazine.getMzAnswerOriname());
        i.setMzAnswerUrl(tbMagazine.getMzAnswerUrl());
        i.setMzPdfName(tbMagazine.getMzPdfName());
        i.setMzPdfOriname(tbMagazine.getMzPdfOriname());
        i.setMzPdfUrl(tbMagazine.getMzPdfUrl());
        tbMagazineRepository.save(i);
    }

    // 페이징 처리
    public Header<List<MagazineApiResponse>> search(Pageable pageable){
        Page<TbMagazine> tbMagazines = tbMagazineRepository.findAll(pageable);
        List<MagazineApiResponse> userApiResponseList = tbMagazines.stream()
                .map(users -> responses(users))
                .collect(Collectors.toList()); // List 타입으로 변환시켜주는 메소드

        Pagination pagination = Pagination.builder()
                .totalPages(tbMagazines.getTotalPages())
                .totalElements(tbMagazines.getTotalElements())
                .currentPage(tbMagazines.getNumber())
                .currentElements(tbMagazines.getNumberOfElements())
                .build();
        return Header.OK(userApiResponseList, pagination);
    }

    private MagazineApiResponse responses(TbMagazine tbMagazine){
        MagazineApiResponse magazineApiResponse = MagazineApiResponse.builder()
                .mzIndex(tbMagazine.getMzIndex())
                .mzTitle(tbMagazine.getMzTitle())
                .mzImgName(tbMagazine.getMzImgName())
                .mzImgOriname(tbMagazine.getMzImgOriname())
                .mzImgUrl(tbMagazine.getMzImgUrl())
                .mzAnswerName(tbMagazine.getMzAnswerName())
                .mzAnswerOriname(tbMagazine.getMzAnswerOriname())
                .mzAnswerUrl(tbMagazine.getMzAnswerUrl())
                .mzPdfName(tbMagazine.getMzPdfName())
                .mzPdfOriname(tbMagazine.getMzPdfOriname())
                .mzPdfUrl(tbMagazine.getMzPdfUrl())
                .mzRegdate(tbMagazine.getMzRegdate())
                .build();
        return magazineApiResponse;
    }


}
