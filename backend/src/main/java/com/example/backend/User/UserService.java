package com.example.backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void deleteUser(String username) {
        userRepository.deleteUser(username);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<String> getAllUsernames() {
        return userRepository.findAllUsernames();
    }

    public String getPasswordByName(String password) {
        return userRepository.findUserByPassword(password);
    }

    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public Optional<User> CheckIfLogin(String username, String password) {
        User user = userRepository.CheckIfLogin(username, password);

        return Optional.ofNullable(user);
    }

    public void insertUser(String username, String password) {
        userRepository.insertUser(username, password);
    }
    
}
