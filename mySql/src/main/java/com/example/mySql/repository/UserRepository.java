package com.example.mySql.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mySql.model.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	
	

}
