package com.codingdojo.dojooverflow.services;



import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.dojooverflow.models.Tag;
import com.codingdojo.dojooverflow.repositories.TagRepository;



@Service
public class TagService {
	
	private final TagRepository repo;
	
	public TagService(TagRepository tagRepo) {
		this.repo = tagRepo;
	}
	
	public ArrayList<Tag> all() {
		return repo.findAll();
	}
	
	public Tag findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Tag createTag(Tag tag) {
		return repo.save(tag);
	}

	// Update -> uses repo.save(Tag)
	// checks for a property specifically called id
	public Tag updateTag(Tag tag) {
		return repo.save(tag);
	}
	
	// Delete
	public void deleteTag(Long id) {
		repo.deleteById(id);
	}
}
