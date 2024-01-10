package com.codingdojo.counter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
@Controller
public class MainController {
	@RequestMapping("/")
	public String index(HttpSession session, Model model) {
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 1);
		}
		else {
			
			Integer count = (Integer) session.getAttribute("count");
			session.setAttribute("count", Integer.valueOf(count)+1);
		}
		return "index.jsp";
	}
	
}
