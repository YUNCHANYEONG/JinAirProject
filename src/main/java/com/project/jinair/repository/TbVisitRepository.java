package com.project.jinair.repository;

import com.project.jinair.model.entity.member.TbVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbVisitRepository extends JpaRepository<TbVisit, Long> {
}
