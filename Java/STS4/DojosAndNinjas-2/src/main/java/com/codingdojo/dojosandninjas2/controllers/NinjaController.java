package com.codingdojo.dojosandninjas2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.dojosandninjas2.models.Dojo;
import com.codingdojo.dojosandninjas2.models.Ninja;
import com.codingdojo.dojosandninjas2.services.DojoService;
import com.codingdojo.dojosandninjas2.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {

	@Autowired
	private DojoService dService;
	@Autowired
	private NinjaService nService;
	
	@PostMapping("/new")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, @ModelAttribute(value="dojo") Dojo dojo, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Dojo> allDojos = dService.all();
			model.addAttribute("allDojos", allDojos);
			return "ninja.jsp";
		}
		
		nService.createNinja(ninja);
		return "redirect:/";
	}
	
	@GetMapping("/new")
	public String ninjaForm(@ModelAttribute(value="ninja") Ninja ninja,@ModelAttribute(value="dojo") Dojo dojo, Model model) {
		List<Dojo> allDojos = dService.all();
		model.addAttribute("allDojos", allDojos);
		return "ninja.jsp";
	}
	
	
}
