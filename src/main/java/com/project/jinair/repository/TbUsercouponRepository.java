package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.enumclass.CouponStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TbUsercouponRepository extends JpaRepository<TbUsercoupon, Long> {

    Page<TbUsercoupon> findByUcUserindex(Long id, Pageable pageable);
    Page<TbUsercoupon> findByUcUserindexAndUcIsUseAndUcEnddayBetween(Long id, CouponStatus enumid, LocalDateTime startDate, LocalDateTime endDate, Pageable pageable);


    List<TbUsercoupon> findByUcUserindexAndUcIsUse(Long id, CouponStatus enumid);
    List<TbUsercoupon> findByUcCode(String code);


    Optional<TbUsercoupon> findByUcCodeAndUcUserindex(String code, Long id);
    List<TbUsercoupon> findByUcUserindex(Long id);
}
