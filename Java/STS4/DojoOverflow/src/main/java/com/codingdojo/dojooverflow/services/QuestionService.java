package com.codingdojo.dojooverflow.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.dojooverflow.models.Question;
import com.codingdojo.dojooverflow.repositories.QuestionRepository;


@Service
public class QuestionService {

	private final QuestionRepository repo;
	
	public QuestionService(QuestionRepository questionRepo) {
		this.repo = questionRepo;
	}
	
	public ArrayList<Question> all(){
		return repo.findAll();
	}
	
	public Question findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	
	public Question createQuestion(Question question) {
		return repo.save(question);
	}
	
	// Update -> uses repo.save(Question)
	// checks for a property specifically called id
	public Question updateQuestion(Question question) {
		return repo.save(question);
	}
	
	// Delete
	public void deleteQuestion(Long id) {
		repo.deleteById(id);
	}
}
