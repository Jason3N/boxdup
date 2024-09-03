package com.example.backend.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getUsersController() {
        System.out.println("Getting all users"); 
        return userService.getAllUsers();
    }

    @GetMapping("/allusernames")
    public List<String> getUsernamesController() {
        System.out.println("Getting all usernames");
        return userService.getAllUsernames();
    }

    @GetMapping("/{password}")
    public String getLoginController(@PathVariable String password) {
        System.out.println("Getting user by login");
        return userService.getPasswordByName(password);
    }

    @PostMapping("/insert/{username}/{password}")
    public void insertUserController(@PathVariable String username, @PathVariable String password) {
        System.out.println("Inserting user");
        userService.insertUser(username, password);
    }
    
    @DeleteMapping("/delete/{username}")
    public void deleteUserController(@PathVariable String username) {
        System.out.println("Deleting user");
        userService.deleteUser(username);
    }

    @GetMapping("/login/{username}/{password}")
    public Optional<User> loginController(@PathVariable String username, @PathVariable String password) {
        System.out.println("Username: " + username);
        return userService.CheckIfLogin(username, password);
    }
}
