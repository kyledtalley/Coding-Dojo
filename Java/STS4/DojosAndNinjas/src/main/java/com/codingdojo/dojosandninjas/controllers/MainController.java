package com.codingdojo.dojosandninjas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.dojosandninjas.models.Dojo;
import com.codingdojo.dojosandninjas.services.DojoService;

import jakarta.validation.Valid;

@Controller
public class MainController {

	@Autowired
	public DojoService dojoService;
	
	@GetMapping("/")
	public String index(@ModelAttribute Dojo dojo, Model model, RedirectAttributes redirectAttributes) {
		
		List<Dojo> allDojos = dojoService.allDojos();
		
		model.addAttribute("dojo", allDojos);
		return "display.jsp";
	}
	
	@GetMapping("/dojos/new")
	public String createDojo(@ModelAttribute Dojo dojo, Model model) {
		List<Dojo> allDojos = dojoService.allDojos();
		model.addAttribute("allDojos",allDojos);
		return "index.jsp";
	}
	
	@PostMapping("/dojos")
	public String processNewDojo(@Valid @ModelAttribute Dojo dojo, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "index.jsp";
		}
		
		dojoService.createDojo(dojo);
		return "redirect:/";
	}
}
