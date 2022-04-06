package com.project.jinair.repository;

import com.project.jinair.model.entity.member.TbAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<TbAdmin, Long> {

    // select * from tb_admin where admin_id=? and admin_pw=?
    Optional<TbAdmin> findByAdminIdAndAdminPw(String adminId, String adminPw);

    // select * from tb_admin where admin_index=?
    Optional<TbAdmin> findByAdminIndex(Long idx);

    Optional<TbAdmin> findByAdminId(String adminId);

}
