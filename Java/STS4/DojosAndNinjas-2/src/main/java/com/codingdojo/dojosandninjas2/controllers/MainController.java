package com.codingdojo.dojosandninjas2.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.dojosandninjas2.models.Dojo;
import com.codingdojo.dojosandninjas2.models.Ninja;
import com.codingdojo.dojosandninjas2.services.DojoService;
import com.codingdojo.dojosandninjas2.services.NinjaService;

import jakarta.validation.Valid;

@Controller
public class MainController {

	@Autowired
	public DojoService dojoService;
	
	@Autowired
	public NinjaService ninjaService;
	
	@GetMapping("/")
	public String index(@ModelAttribute Dojo dojo, Model model, RedirectAttributes redirectAttributes) {
		
		ArrayList<Dojo> allDojos = dojoService.all();
		ArrayList<Ninja> allNinjas = ninjaService.all();
		
		model.addAttribute("allDojos", allDojos);
		model.addAttribute("allNinjas", allNinjas);
	
		return "index.jsp";
	}
	
	@PostMapping("/dojos")
	public String processCreateDojo(@Valid @ModelAttribute Dojo dojo, BindingResult result, Model model) {
		
		if(result.hasErrors()) {
			return "index.jsp";
		}
		
		dojoService.createDojo(dojo);
		return "redirect:/";
		
	}
	
	@GetMapping("/dojos/{id}")
	public String displayDojo(Model model, @PathVariable Long id, RedirectAttributes redirectAttributes) {
		Dojo oneDojo = dojoService.findOne(id);
		Ninja oneNinja = ninjaService.findOne(id);
		
		
		if(oneDojo == null) {
			redirectAttributes.addFlashAttribute("noDojo", "Dojo was not found");
			return "redirect:/";
		}
		
		model.addAttribute("dojo", oneDojo);
		model.addAttribute("ninja", oneNinja);
		
		return "display.jsp";
		
	}
	
	
}
