package com.project.jinair.repository;

import com.project.jinair.model.entity.member.TbMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<TbMember,  Long> {

    // 아이디 검색
    Optional<TbMember> findByMemUserid(String userid);

    // 로그인(아이디, 비밀번호 검색)
    Optional<TbMember> findByMemUseridAndMemUserpw(String userid, String userpw);

    // 인덱스 번호로 검색
    TbMember findByMemIndex(Long idx);

    // 생년월일, 이름으로 회원찾기
    Optional<TbMember> findByMemBirthAndMemKorFirstNameAndMemKorLastName(String bthDt, String mbrLnm, String mbrFnm);

    // 이메일로 회원 찾기
    Optional<TbMember> findByMemEmailAndMemBirthAndMemKorFirstNameAndMemKorLastName(String emAdr, String bthDt, String mbrLnm, String mbrFnm);

    // 휴대폰 번호로 회원 찾기
    Optional<TbMember> findByMemHpAndMemBirthAndMemKorFirstNameAndMemKorLastName(String emAdr, String bthDt, String mbrLnm, String mbrFnm);

    // 이메일로 회원 찾기
    Optional<TbMember> findByMemEmailAndMemBirthAndMemKorFirstNameAndMemKorLastNameAndMemUserid(String emAdr, String bthDt, String mbrLnm, String mbrFnm, String memUserId);

    // 휴대폰 번호로 회원 찾기
    Optional<TbMember> findByMemHpAndMemBirthAndMemKorFirstNameAndMemKorLastNameAndMemUserid(String emAdr, String bthDt, String mbrLnm, String mbrFnm, String memUserId);
}
