package com.codingdojo.bookclub.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LoggedInUser {

	
	@NotBlank(message = "Email is required!")
	@Email(message = "Please enter a valid email!")
	private String email;

	@NotBlank(message = "Password is required!")
	@Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters long")
	private String password;
	
	public LoggedInUser() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
