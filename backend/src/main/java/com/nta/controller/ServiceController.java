package com.nta.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.nta.model.ServiceEntity;
import com.nta.repository.ServiceRepository;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping
    public List<ServiceEntity> getAllServices() {
        return serviceRepository.findAll();
    }

    @PostMapping
    public ServiceEntity createService(@RequestBody ServiceEntity service) {
        return serviceRepository.save(service);
    }

    @PutMapping("/{id}")
    public ServiceEntity updateService(@PathVariable Long id, @RequestBody ServiceEntity serviceDetails) {
        ServiceEntity service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id " + id));

        service.setCategory(serviceDetails.getCategory());
        service.setTitle(serviceDetails.getTitle());
        service.setDescription(serviceDetails.getDescription());
        service.setIcon(serviceDetails.getIcon());

        return serviceRepository.save(service);
    }

    @DeleteMapping("/{id}")
    public String deleteService(@PathVariable Long id) {
        ServiceEntity service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id " + id));

        serviceRepository.delete(service);
        return "Service with id " + id + " deleted successfully";
    }
}
