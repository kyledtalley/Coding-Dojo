package com.kyletalley.day06;

public class Mammal {
	protected String name;
	public Mammal(String name) {
		this.name = name;
	}
	public void drinkWater() {
		System.out.println("You have drank water!\n");
		
	}
	public void breathe() {
		System.out.println("You have taken a breath!\n");
	}
	
	public void eat() {
		System.out.println("You have eaten!\n");
	}
}
