package com.project.jinair.service.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.payment.TbPoint;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.member.MemberApiRequest;
import com.project.jinair.model.network.response.member.MemberApiResponse;
import com.project.jinair.repository.MemberRepository;
import com.project.jinair.repository.TbPointRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class MemberApiLogicService implements CrudInterface<MemberApiRequest, MemberApiResponse> {

    private final MemberRepository memberRepository;

    @Override
    public Header<MemberApiResponse> create(Header<MemberApiRequest> request) {

        MemberApiRequest memberApiRequest = request.getData();

        TbMember member = TbMember.builder()
                .memUserid(memberApiRequest.getMemUserid())
                .memUserpw(memberApiRequest.getMemUserpw())
                .memKorFirstName(memberApiRequest.getMemKorFirstName())
                .memKorLastName(memberApiRequest.getMemKorLastName())
                .memEngFirstName(memberApiRequest.getMemEngFirstName())
                .memEngLastName(memberApiRequest.getMemEngLastName())
                .memHpNation(memberApiRequest.getMemHpNation())
                .memHp(memberApiRequest.getMemHp())
                .memEmail(memberApiRequest.getMemEmail())
                .memGender(memberApiRequest.getMemGender())
                .memBirth(memberApiRequest.getMemBirth())
                .memPassport(memberApiRequest.getMemPassport())
                .memNation(memberApiRequest.getMemNation())
                .memZipcode(memberApiRequest.getMemZipcode())
                .memAddress1(memberApiRequest.getMemAddress1())
                .memAddress2(memberApiRequest.getMemAddress2())
                .memAddress3(memberApiRequest.getMemAddress3())
                .memEmailIsagree(memberApiRequest.getMemEmailIsagree())
                .memSnsIsagree(memberApiRequest.getMemSnsIsagree())
                .build();

        TbMember newMember = memberRepository.save(member);

        return response(newMember);
    }

    @Override
    public Header<MemberApiResponse> read(Long id) {
        return memberRepository.findById(id)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<MemberApiResponse> update(Header<MemberApiRequest> request) {
        MemberApiRequest memberApiRequest = request.getData();
        Optional<TbMember> member = memberRepository.findById(memberApiRequest.getMemIndex());

        return member.map(mem ->{
            mem.setMemUserpw(memberApiRequest.getMemUserpw());
            mem.setMemGender(memberApiRequest.getMemGender());
            mem.setMemPassport(memberApiRequest.getMemPassport());
            mem.setMemNation(memberApiRequest.getMemNation());
            mem.setMemZipcode(memberApiRequest.getMemZipcode());
            mem.setMemAddress1(memberApiRequest.getMemAddress1());
            mem.setMemAddress2(memberApiRequest.getMemAddress2());
            mem.setMemAddress3(memberApiRequest.getMemAddress3());
            mem.setMemHpNation(memberApiRequest.getMemHpNation());
            mem.setMemHp(memberApiRequest.getMemHp());
            mem.setMemEmail(memberApiRequest.getMemEmail());
            mem.setMemEmailIsagree(memberApiRequest.getMemEmailIsagree());
            mem.setMemSnsIsagree(memberApiRequest.getMemSnsIsagree());

            return mem;
        })
        .map(mem -> memberRepository.save(mem))
        .map(mem -> response(mem))
        .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbMember> member = memberRepository.findById(id);
        return member.map(
                mem -> {
                    memberRepository.delete(mem);
                    return Header.OK();
                }
        ).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 고객 리스트
    public Header<List<MemberApiResponse>> list(Pageable pageable){
        Page<TbMember> members = memberRepository.findAll(pageable);
        List<MemberApiResponse> memberApiResponseList = members.stream()
                .map(member -> responseMember(member))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(members.getTotalPages())
                .totalElements(members.getTotalElements())
                .currentPage(members.getNumber())
                .currentElements(members.getNumberOfElements())
                .build();
        return Header.OK(memberApiResponseList, pagination);
    }

    // 고객 아이디 검색
    public Header<List<MemberApiResponse>> search(String userid){
        Optional<TbMember> member = memberRepository.findByMemUserid(userid);
        List<MemberApiResponse> memberApiResponseList = member.stream()
                .map(mem -> responseMember(mem))
                .collect(Collectors.toList());

        return Header.OK(memberApiResponseList);
    }

    private Header<MemberApiResponse> response(TbMember member){
        MemberApiResponse memberApiResponse = MemberApiResponse.builder()
                .memIndex(member.getMemIndex())
                .memUserid(member.getMemUserid())
                .memUserpw(member.getMemUserpw())
                .memKorFirstName(member.getMemKorFirstName())
                .memKorLastName(member.getMemKorLastName())
                .memEngFirstName(member.getMemEngFirstName())
                .memEngLastName(member.getMemEngLastName())
                .memHpNation(member.getMemHpNation())
                .memHp(member.getMemHp())
                .memEmail(member.getMemEmail())
                .memGender(member.getMemGender())
                .memBirth(member.getMemBirth())
                .memPassport(member.getMemPassport())
                .memNation(member.getMemNation())
                .memZipcode(member.getMemZipcode())
                .memAddress1(member.getMemAddress1())
                .memAddress2(member.getMemAddress2())
                .memAddress3(member.getMemAddress3())
                .memEmailIsagree(member.getMemEmailIsagree())
                .memSnsIsagree(member.getMemSnsIsagree())
                .memRegdate(member.getMemRegdate())
                .build();
        return Header.OK(memberApiResponse);
    }

    private MemberApiResponse responseMember(TbMember member){
        MemberApiResponse memberApiResponse = MemberApiResponse.builder()
                .memIndex(member.getMemIndex())
                .memUserid(member.getMemUserid())
                .memUserpw(member.getMemUserpw())
                .memKorFirstName(member.getMemKorFirstName())
                .memKorLastName(member.getMemKorLastName())
                .memEngFirstName(member.getMemEngFirstName())
                .memEngLastName(member.getMemEngLastName())
                .memHpNation(member.getMemHpNation())
                .memHp(member.getMemHp())
                .memEmail(member.getMemEmail())
                .memGender(member.getMemGender())
                .memBirth(member.getMemBirth())
                .memPassport(member.getMemPassport())
                .memNation(member.getMemNation())
                .memZipcode(member.getMemZipcode())
                .memAddress1(member.getMemAddress1())
                .memAddress2(member.getMemAddress2())
                .memAddress3(member.getMemAddress3())
                .memEmailIsagree(member.getMemEmailIsagree())
                .memSnsIsagree(member.getMemSnsIsagree())
                .memRegdate(member.getMemRegdate())
                .build();
        return memberApiResponse;
    }


    public Header<MemberApiResponse> reads(String id) throws InterruptedException {
        Thread.sleep(300);
        return memberRepository.findByMemUserid(id)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    public Header<MemberApiResponse> searchToReser(String bthDt, String mbrLnm, String mbrFnm)
            throws InterruptedException {
        return memberRepository.findByMemBirthAndMemKorFirstNameAndMemKorLastName(bthDt, mbrLnm, mbrFnm)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    public Header<MemberApiResponse> searchs(String emAdr, String bthDt, String mbrLnm, String mbrFnm)
            throws InterruptedException {
        return memberRepository.findByMemEmailAndMemBirthAndMemKorFirstNameAndMemKorLastName(emAdr, bthDt, mbrLnm, mbrFnm)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }
    public Header<MemberApiResponse> searchd(String emAdr, String bthDt, String mbrLnm, String mbrFnm)
            throws InterruptedException {
        return memberRepository.findByMemHpAndMemBirthAndMemKorFirstNameAndMemKorLastName(emAdr, bthDt, mbrLnm, mbrFnm)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }
    public Header<MemberApiResponse> readds(String emAdr, String bthDt, String mbrLnm, String mbrFnm, String memUSerId)
            throws InterruptedException {
        return memberRepository.findByMemEmailAndMemBirthAndMemKorFirstNameAndMemKorLastNameAndMemUserid(emAdr, bthDt, mbrLnm, mbrFnm, memUSerId)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }
    public Header<MemberApiResponse> readd(String emAdr, String bthDt, String mbrLnm, String mbrFnm, String memUSerId)
            throws InterruptedException {
        return memberRepository.findByMemHpAndMemBirthAndMemKorFirstNameAndMemKorLastNameAndMemUserid(emAdr, bthDt, mbrLnm, mbrFnm, memUSerId)
                .map(member -> response(member))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }
}
