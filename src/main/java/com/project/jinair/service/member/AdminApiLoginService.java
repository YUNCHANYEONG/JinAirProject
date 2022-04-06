package com.project.jinair.service.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbAdmin;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.member.AdminApiRequest;
import com.project.jinair.model.network.response.member.AdminApiResponse;
import com.project.jinair.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminApiLoginService implements CrudInterface<AdminApiRequest, AdminApiResponse> {

    private final AdminRepository adminRepository;

    @Override
    public Header<AdminApiResponse> create(Header<AdminApiRequest> request) {

        AdminApiRequest adminApiRequest = request.getData();

        TbAdmin admin = TbAdmin.builder()
                .adminId(adminApiRequest.getAdminId())
                .adminPw(adminApiRequest.getAdminPw())
                .adminName(adminApiRequest.getAdminName())
                .build();

        TbAdmin newAdmin = adminRepository.save(admin);

        return response(newAdmin);
    }

    @Override
    public Header<AdminApiResponse> read(Long id) {
        return adminRepository.findById(id)
                .map(admin -> response(admin))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header<AdminApiResponse> update(Header<AdminApiRequest> request) {

        AdminApiRequest adminApiRequest = request.getData();
        Optional<TbAdmin> admin = adminRepository.findById(adminApiRequest.getAdminIndex());

        return admin.map(ad -> {
            ad.setAdminId(adminApiRequest.getAdminId());
            ad.setAdminPw(adminApiRequest.getAdminPw());
            ad.setAdminName(adminApiRequest.getAdminName());

            return ad;
        })
        .map(ad -> adminRepository.save(ad))
        .map(ad -> response(ad))
        .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbAdmin> admin = adminRepository.findById(id);
        return admin.map(
                ad -> {
                    adminRepository.delete(ad);
                    return Header.OK();
                }
        ).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    private Header<AdminApiResponse> response(TbAdmin admin){
        AdminApiResponse adminApiResponse = AdminApiResponse.builder()
                .adminIndex(admin.getAdminIndex())
                .adminId(admin.getAdminId())
                .adminPw(admin.getAdminPw())
                .adminName(admin.getAdminName())
                .adminRegdate(admin.getAdminRegdate())
                .build();
        return Header.OK(adminApiResponse);
    }

    public Header<AdminApiResponse> IdPwRead(String admin_id) {
        return adminRepository.findByAdminId(admin_id)
                .map(admin -> response(admin))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<AdminApiResponse> isRight(String adminId, String adminPw){
        return adminRepository.findByAdminIdAndAdminPw(adminId, adminPw)
                .map(admin -> response(admin))
                .orElseGet(() -> Header.ERROR(("데이터 없음")));
    }
}
