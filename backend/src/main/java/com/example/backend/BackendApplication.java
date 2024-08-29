package com.example.backend;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}

@RestController
class WebsiteController {

    @GetMapping("/")
    public List<User> getUsers() {
        return List.of(
            new User(1, "jason", "password")  // Corrected to match the constructor
        );
    }
}
