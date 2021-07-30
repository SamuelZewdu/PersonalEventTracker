package com.event.EventTracker.repository;

import com.event.EventTracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Long> {
    User findByName(String name);
}
