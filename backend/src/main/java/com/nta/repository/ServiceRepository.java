package com.nta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nta.model.ServiceEntity;

public interface ServiceRepository extends JpaRepository<ServiceEntity, Long> {
    // Basic CRUD operations automatically handled
}
