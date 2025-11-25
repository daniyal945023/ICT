#include <iostream> 
#include <string>

using namespace std;

class BankAccount {
    private:
    string accountNumber;
    double balance;

    public:
   


    BankAccount(){
        accountNumber = "1234567890";
        balance = 0;
    }

     void deposit(double amount){
       balance = amount + balance;
    }

    void withdraw(double amount){
        if (amount <= balance){
            balance = balance - amount;
        } else {
            cout << "Insufficient balance" <<endl;
        }
    }

    
    void checkBalance(){
        cout << balance;
    }

};




int main() {

    BankAccount BankAccount;
    
    BankAccount.deposit(1000.00);
    BankAccount.withdraw(200.00);
    BankAccount.checkBalance();

    return 0;
}