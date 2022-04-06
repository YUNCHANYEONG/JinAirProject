package com.project.jinair.controller.api.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.member.AdminApiRequest;
import com.project.jinair.model.network.response.member.AdminApiResponse;
import com.project.jinair.service.member.AdminApiLoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/admin")
@RequiredArgsConstructor
public class AdminApiController implements CrudInterface<AdminApiRequest, AdminApiResponse> {

    private final AdminApiLoginService adminApiLoginService;

    @Override
    @PostMapping("")
    public Header<AdminApiResponse> create(@RequestBody Header<AdminApiRequest> request) {
        return adminApiLoginService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<AdminApiResponse> read(@PathVariable(name = "id") Long id) {
        return adminApiLoginService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<AdminApiResponse> update(@RequestBody Header<AdminApiRequest> request) {
        return adminApiLoginService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<AdminApiResponse> delete(@PathVariable(name = "id") Long id) {
        return adminApiLoginService.delete(id);
    }


    @PostMapping("/login") // 관리자 페이지 아이디 비번 불러오기
    public Header<AdminApiResponse> IdPwRead(String admin_id) {
        return adminApiLoginService.IdPwRead(admin_id);
    }

    @GetMapping("/isRight/{adminId}/{adminPw}")
    public Header<AdminApiResponse> isRight(
            @PathVariable(name = "adminId") String adminId,
            @PathVariable(name = "adminPw") String adminPw){
        return adminApiLoginService.isRight(adminId, adminPw);
    }
}
