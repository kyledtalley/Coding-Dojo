package com.codingdojo.dojooverflow.services;


import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.dojooverflow.models.Answer;
import com.codingdojo.dojooverflow.repositories.AnswerRepository;



@Service
public class AnswerService {
	
	private final AnswerRepository repo;
	
	public AnswerService(AnswerRepository answerRepo) {
		this.repo = answerRepo;
	}
	
	public ArrayList<Answer> all() {
		return repo.findAll();
	}
	
	public Answer findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Answer createAnswer(Answer answer) {
		return repo.save(answer);
	}

	// Update -> uses repo.save(Answer)
	// checks for a property specifically called id
	public Answer updateAnswer(Answer answer) {
		return repo.save(answer);
	}
	
	// Delete
	public void deleteAnswer(Long id) {
		repo.deleteById(id);
	}
}
