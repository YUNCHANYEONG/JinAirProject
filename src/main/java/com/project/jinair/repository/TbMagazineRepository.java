package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbMagazine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TbMagazineRepository extends JpaRepository<TbMagazine, Long> {

    Optional<TbMagazine> findById(Long id);
    Optional<TbMagazine> findByMzIndexAndMzPdfOriname(Long id, String mzPdfOriname);
}
