package com.kyletalley.day06;

public class Puppy extends Mammal{
	protected String name;
	
	public Puppy(String name) {
		super(name);
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void bark() {
		System.out.println("Bark!\n");
	}
	public void munch() {
		super.breathe();
		super.drinkWater();
		super.eat();
		System.out.println("Munchmunch\n");
	}
}
