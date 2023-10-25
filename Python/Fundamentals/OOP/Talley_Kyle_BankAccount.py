class BankAccount:

    accounts=[]

    def __init__ (self, name, balance, ir):
        self.name = name
        self.ir = ir
        self.balance = balance
        if self.balance < 0.00:
            print("We have called the debt collectors on", self.name)
            BankAccount.accounts.append(self)


    def deposit(self, amount):
        print(self.name,"has deposited $:", amount)
        self.balance = self.balance + amount


    def withdraw(self, amount):
        print(self.name,"has withdrawn $:", amount)
        self.balance = self.balance - amount

    def display_account_info(self):
        print(f"{self.name}'s balance: ${self.balance}")

    def yield_interest(self):
        if self.balance > 0.00:
            self.balance = self.balance * (1 + self.ir)
            print(self.name,"'s yield has made their wallets too big for their pockets")
        else:
            print("No large enough balance present to yield interest for for account holder: ", self.name)

    @classmethod

    def print_info(cls):
        print("\n\nNINJA BONUS\n\n")
        for i in cls.accounts:
            print(i.display_account_info())

Bob=BankAccount("Bob",2934.14, 0.02)
Finn=BankAccount("Finn",-13,-0.015)
MaryAnneJenkinsBoomerHeimenholl=BankAccount("Mary", 23890238.19, 0.16)
Kyle=BankAccount("Kyle",-126384, 0.12)
print(Bob.name, "'s starting balance including his initial yield: $",Bob.balance)
print(MaryAnneJenkinsBoomerHeimenholl.name, "'s starting balance including initial yield: $", MaryAnneJenkinsBoomerHeimenholl.balance)
print(Kyle.name, "'s starting balance including initial yield: $", Kyle.balance)
Kyle.yield_interest()
Kyle.display_account_info()
Bob.display_account_info()
MaryAnneJenkinsBoomerHeimenholl.display_account_info()
print("Mary gives a few dollars to Kyle")
MaryAnneJenkinsBoomerHeimenholl.withdraw(2389328.20)
Kyle.deposit(2389328.20)
Kyle.display_account_info()
MaryAnneJenkinsBoomerHeimenholl.display_account_info()
Kyle.yield_interest()
Kyle.display_account_info()
BankAccount.print_info()
