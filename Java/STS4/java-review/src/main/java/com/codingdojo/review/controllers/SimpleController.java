package com.codingdojo.review.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleController {

	@GetMapping("/api/{name}")
	public String hello(@PathVariable String name) {
		return name;
	}
	
}
