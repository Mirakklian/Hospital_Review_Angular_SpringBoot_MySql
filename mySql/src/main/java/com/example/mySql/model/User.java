package com.example.mySql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//@Document
@Entity
@Table(name="user")
public class User {
	
	@Id
	@Column(name="id")
	int id;
	
	@Column(name="address")
	String address;
	@Column(name="age")
	int age;
	@Column(name="name")
	String name;
	public User(int id, String address, int age, String name) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.age = age;
	}
	public User() {}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	
	
}
