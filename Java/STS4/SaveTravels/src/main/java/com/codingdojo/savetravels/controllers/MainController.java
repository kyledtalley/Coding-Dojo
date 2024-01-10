package com.codingdojo.savetravels.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.codingdojo.savetravels.models.Expense;
import com.codingdojo.savetravels.services.ExpenseService;

@Controller
public class MainController {

	@Autowired
	public ExpenseService expenseService;
	
	@GetMapping("/")
	public String index(@ModelAttribute Expense expense, Model model) {
		ArrayList<Expense> allExpenses = expenseService.allExpenses();
		model.addAttribute("allExpenses", allExpenses);
		
		return "index.jsp";
	}
	
	@PostMapping("/expenses")
	public String processCreateExpense(Expense expense,BindingResult result, Model model) {
		
		expenseService.createExpense(expense);
		return "redirect:/";
	}
	
	@GetMapping("/expenses/edit/{id}")
	public String editExpenseForm(@PathVariable Long id,  Model model) {
		Expense expenseToUpdate = expenseService.findExpense(id);
	
		model.addAttribute("expenseToUpdate", expenseToUpdate);
		return "edit.jsp";
		
	}
	@PutMapping("expenses/{id}")
	public String updateExpense(Expense expense, BindingResult result, @PathVariable Long id, Model model) {
		expenseService.updateExpense(expense);
		
		return "redirect:/";
	}
	
	@DeleteMapping("/expenses/{id}")
	public String deleteExpense(@PathVariable Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/";
	}
}
