package com.example.nta;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class StatusController {

    @GetMapping("/api/status")
    public Map<String, String> status() {
        return Map.of("status", "Backend OK");
    }

    // New mapping for root URL
    @GetMapping("/")
    public String home() {
        return "Backend is running!";
    }
}
