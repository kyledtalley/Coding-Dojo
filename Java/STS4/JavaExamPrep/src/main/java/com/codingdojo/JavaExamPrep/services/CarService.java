package com.codingdojo.JavaExamPrep.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.JavaExamPrep.models.Car;
import com.codingdojo.JavaExamPrep.repositories.CarRepository;

@Service
public class CarService {

	@Autowired
	private CarRepository carRepo;
	
	public ArrayList<Car> all(){
		return carRepo.findAll();
		
	}
	
	//Create
	public Car createCar(Car car) {
		return carRepo.save(car);
	}
	
	
	//Read
	public Car findOned(Long carId) {
		return carRepo.findById(carId).orElse(null);
	}
	
	
	//update
	public Car updateCar(Car car) {
		return carRepo.save(car);
	}
	
	
	//Delete
	public void deleteCar(Long carId) {
		carRepo.deleteById(carId);
	}
	
}
