package com.project.jinair.controller.api.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.member.MemberApiRequest;
import com.project.jinair.model.network.response.member.MemberApiResponse;
import com.project.jinair.service.member.MemberApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class MemberApiController implements CrudInterface<MemberApiRequest, MemberApiResponse> {

    private final MemberApiLogicService memberApiLogicService;

    @Override
    @PostMapping("")
    public Header<MemberApiResponse> create(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<MemberApiResponse> read(@PathVariable(name = "id") Long id) {
        return memberApiLogicService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<MemberApiResponse> update(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<MemberApiResponse> delete(@PathVariable(name = "id") Long id) {
        return memberApiLogicService.delete(id);
    }

    // 회원 리스트
    @GetMapping("")
    public Header<List<MemberApiResponse>> list(@PageableDefault(sort = {"memIndex"}, direction = Sort.Direction.DESC)Pageable pageable){
        return memberApiLogicService.list(pageable);
    }

    // 회원 검색
    @GetMapping("/search/{userid}")
    public Header<List<MemberApiResponse>> search(@PathVariable(value = "userid") String userid){
        return memberApiLogicService.search(userid);
    }

    // 단일 회원 찾기
    @GetMapping("/read/{id}")
    public Header<MemberApiResponse> reads(@PathVariable(name = "id") String id) throws InterruptedException {
        return memberApiLogicService.reads(id);
    }

    // 이름, 생년월일로 아이디 찾기
    @GetMapping("/searchToReser/{bthDt}/{mbrLnm}/{mbrFnm}")
    public Header<MemberApiResponse> searchToReser(
            @PathVariable(name = "bthDt") String bthDt,
            @PathVariable(name = "mbrLnm") String mbrLnm,
            @PathVariable(name = "mbrFnm") String mbrFnm
    ) throws InterruptedException {
        return memberApiLogicService.searchToReser(bthDt, mbrLnm, mbrFnm);
    }

    // 이메일로 아이디 찾기
    @GetMapping("/searchs/{emAdr}/{bthDt}/{mbrLnm}/{mbrFnm}")
    public Header<MemberApiResponse> searchs(
            @PathVariable(name = "emAdr") String emAdr,
            @PathVariable(name = "bthDt") String bthDt,
            @PathVariable(name = "mbrLnm") String mbrLnm,
            @PathVariable(name = "mbrFnm") String mbrFnm
    ) throws InterruptedException {
        return memberApiLogicService.searchs(emAdr, bthDt, mbrLnm, mbrFnm);
    }

    // 휴대폰번호로 아이디 찾기
    @GetMapping("/searchd/{emAdr}/{bthDt}/{mbrLnm}/{mbrFnm}")
    public Header<MemberApiResponse> searchd(
            @PathVariable(name = "emAdr") String emAdr,
            @PathVariable(name = "bthDt") String bthDt,
            @PathVariable(name = "mbrLnm") String mbrLnm,
            @PathVariable(name = "mbrFnm") String mbrFnm
    ) throws InterruptedException {
        return memberApiLogicService.searchd(emAdr, bthDt, mbrLnm, mbrFnm);
    }

    // 이메일로 아이디 찾기
    @GetMapping("/reads/{emAdr}/{bthDt}/{mbrLnm}/{mbrFnm}/{memUserId}")
    public Header<MemberApiResponse> reads(
            @PathVariable(name = "emAdr") String emAdr,
            @PathVariable(name = "bthDt") String bthDt,
            @PathVariable(name = "mbrLnm") String mbrLnm,
            @PathVariable(name = "mbrFnm") String mbrFnm,
            @PathVariable(name = "memUserId") String memUserId
    ) throws InterruptedException {
        return memberApiLogicService.readds(emAdr, bthDt, mbrLnm, mbrFnm,memUserId);
    }
    // 휴대폰번호로 아이디 찾기
    @GetMapping("/readd/{emAdr}/{bthDt}/{mbrLnm}/{mbrFnm}/{memUserId}")
    public Header<MemberApiResponse> readd(
            @PathVariable(name = "emAdr") String emAdr,
            @PathVariable(name = "bthDt") String bthDt,
            @PathVariable(name = "mbrLnm") String mbrLnm,
            @PathVariable(name = "mbrFnm") String mbrFnm,
            @PathVariable(name = "memUserId") String memUserId
    ) throws InterruptedException {
        return memberApiLogicService.readd(emAdr, bthDt, mbrLnm, mbrFnm,memUserId);
    }

}
