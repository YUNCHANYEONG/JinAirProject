package com.project.jinair.repository;

import com.project.jinair.model.entity.optional.TbBaggage;
import com.project.jinair.model.entity.optional.TbInsurance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TbBaggageRepository extends JpaRepository<TbBaggage, Long> {

    Optional<TbBaggage> findByBgIndex(Long bgIndex);
}
