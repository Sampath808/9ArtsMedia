package com.example.demo.Repository;

import org.springframework.stereotype.Repository;
import com.example.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    
}
