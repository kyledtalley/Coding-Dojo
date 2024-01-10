package com.coreym.bootstrapdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping("/")
	public String Home() {
		
		return "bootstrap.jsp";
	}
}
