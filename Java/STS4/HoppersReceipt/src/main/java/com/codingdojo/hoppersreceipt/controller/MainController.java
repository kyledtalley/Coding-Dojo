package com.codingdojo.hoppersreceipt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController{
	@RequestMapping("/")
	public String index(Model model) {
		String name = "Grace Shopper";
		String itemName = "Platinum wire";
		double price = 612.75;
		String description = "Metal strips, also an illustration of nanoseconds.";
		String vendor = "Little Things Corner Store";
		
		model.addAttribute("name", name);
		model.addAttribute("item", itemName);
		model.addAttribute("price", price);
		model.addAttribute("desc", description);
		model.addAttribute("vendor", vendor);
		return "NewFile.jsp";
	}
}
