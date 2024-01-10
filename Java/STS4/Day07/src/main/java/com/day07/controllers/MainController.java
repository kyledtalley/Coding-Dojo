package com.day07.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class MainController {
	@RequestMapping("/")
	public String index() {
		return "Hello world";
	}
	@RequestMapping("")
	public String hello(@RequestParam(value="firstName", required= false) String fname, @RequestParam(value="lastName", required=false) String lname) {
		
		return String.format("Hello %s %s, how did you get here?", fname, lname);
	}
	@RequestMapping("/world")
	public String world() {
		return "world";
	}
	
	@RequestMapping("/say/{number}")
	public String say(@PathVariable("number") int num) {
		return "hello" + num;
	}
	
}
