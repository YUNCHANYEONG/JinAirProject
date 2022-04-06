package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbNotifi;
import com.project.jinair.model.entity.payment.TbCouponRegist;
import com.project.jinair.model.entity.payment.TbUsercoupon;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TbCouponRegistRepository extends JpaRepository<TbCouponRegist, Long> {

    // 쿠폰 타입
    Optional<TbCouponRegist> findByCrType(String crType);

    Page<TbCouponRegist> findByCrDescContaining(String crDesc, Pageable pageable);

    // 문자열 기준 검색
    List<TbCouponRegist> findFirstByCrStartCodeStartingWith(String str);


}
