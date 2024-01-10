package day05;

public class TestUser {

	public static void main(String[] args) {
		
		User user1 = new User();
		User user2 = new User();
		User user3 = new User();
		User user4 = new User();
		User user5 = new User();
		
		user1.setFirstName("Kyle");
		user1.setLastName("Talley");
		user1.setEmail("kyle@coder.com");
		user1.setPassword("12345");
		
		user2.setFirstName("Jonathan");
		user2.setLastName("Gonzalez");
		user2.setEmail("jonathan@coder.com");
		user2.setPassword("23456abc");
		
		user3.setFirstName("Corey");
		user3.setLastName("E");
		user3.setEmail("corey@coder.com");
		user3.setPassword("abcd123");
		
		user4.setFirstName("Andrew");
		user4.setLastName("Lederman");
		user4.setEmail("andrew@coder.com");
		user4.setPassword("fjkdlsa;fj");
		
		user5.setFirstName("James");
		user5.setLastName("Bond");
		user5.setEmail("james@coder.com");
		user5.setPassword("007");
		
		user1.showDetails();
		user2.showDetails();
		user3.showDetails();
		user4.showDetails();
		user5.showDetails();
		
	}

}
