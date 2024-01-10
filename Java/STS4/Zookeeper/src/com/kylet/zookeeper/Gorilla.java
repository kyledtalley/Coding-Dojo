package com.kylet.zookeeper;

public class Gorilla extends Mammal{
	
	public Gorilla() {
	}
	public void throwSomething() {
		energy -= 5;
		System.out.println("Gorilla has thrown something!\nGorilla has lost 5 energy.\n");
		System.out.format("Gorilla's energy is now: %d \n", energy);
	}
	public void eatBananas() {
		energy += 10;
		System.out.println("Gorilla has eaten bananas! \n+ 10 energy!");
		System.out.format("Gorilla's energy is now: %d \n", energy);
	}
	public void climb() {
		energy -= 10;
		System.out.println("Gorilla has climbed a tree!\nGorilla has lost 10 energy.");
		System.out.format("Gorilla's energy is now: %d \n", energy);
	}
	
	public void displayEnergy() {
		System.out.print("Gorilla ");
		super.displayEnergy(this.energy);
	}
}
