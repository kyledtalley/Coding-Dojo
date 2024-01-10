package com.codingdojo.dojosandninjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.codingdojo.dojosandninjas.services.DojoService;

@Controller
public class DojoController {

	@Autowired 
	public DojoService dojoService;
	
	@GetMapping("/dojos")
	public String index() {
		return "index.jsp";
	}
}
