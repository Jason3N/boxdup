package com.example.backend.User;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    

    Optional<User> findByUsername(String username);

    @Query("SELECT u.username from User u WHERE u.password = ?1")
    String findUserByPassword(String password);


    @Query("SELECT u.username FROM User u")
    List<String> findAllUsernames();

    // insert new user into db
    @Query("Insert into User (username, password) VALUES (?1, ?2)")
    void insertUser(String username, String password);

    Boolean existsByUsername(String username);
    
}
