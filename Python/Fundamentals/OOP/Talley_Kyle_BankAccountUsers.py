class BankAccount:
    def __init__ (self, balance, ir):
        self.balance = balance
        self.ir = ir
        if self.balance < 0.00:
            print("We have called the debt collectors on", self.name)


    def deposit(self, amount, name):
        print(f"{name} has deposited: ${amount}")
        self.balance += amount



    def withdraw(self, amount, name):
        print("Withdrawal initiated..\n")
        if self.balance < amount:
            print("You do not have the funds to withdraw from this account right now.\n")
            pass
        else:
            print(f"{name} has withdrawn $:{amount}")
            self.balance = self.balance - amount

    def display_account_info(self, name):
        print(f"\n{name}'s balance:", self.balance)
        print(f"{name}'s interest rate: {self.ir * 100}%")

    def yield_interest(self):
        if self.balance > 0.00:
            self.balance = self.balance * (1 + self.ir)
            print(self.name,"'s yearly yield has made their wallets too big for their pockets")
        else:
            print("No large enough balance present to yield interest for for account holder: ", self.name)


class User():
    population = 0

    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.account = BankAccount(balance =400, ir =.02)
        print(f"Welcome, {self.first_name} {self.last_name}, you have just created a new bank account.\nYou have been given a $400 initiation bonus into your account.\n")
        User.population += 1

    def greeting(self):
        print(f"Hello my name is {self.first_name}!")

    def user_deposit(self, amount):
        name = (f"{self.first_name} {self.last_name}")
        self.account.deposit(amount, name)

    def user_withdrawal(self, amount):
        name = (f"{self.first_name} {self.last_name}")
        self.account.withdraw(amount, name)

    def user_info(self):
        name = (f"{self.first_name} {self.last_name}")
        self.account.display_account_info(name)

user_kyle = User("Kyle", "Talley", 26)
user_kyle.user_info()

user_kyle.user_deposit(112.70)
user_kyle.user_info()

user_kyle.user_withdrawal(87)
user_kyle.user_info()

user_kyle.user_withdrawal(27739)
