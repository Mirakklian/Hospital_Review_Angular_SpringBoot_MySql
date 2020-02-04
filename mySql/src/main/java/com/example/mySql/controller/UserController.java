package com.example.mySql.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mySql.model.User;
import com.example.mySql.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired 
	UserRepository userRepository;
	
	
	@GetMapping("/getall")
	public List<User> getAll()
	{
		return userRepository.findAll();
	}
	
	@PostMapping(value="/load")

	public List<User> save(@RequestBody User s)
	{
		userRepository.save(s);
		return userRepository.findAll();
		
	}

}
