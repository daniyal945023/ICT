#include <iostream>
#include <string>
using namespace std;

class Employee{
public:
int salary;

void displaySalary(int empsalary){
    salary = empsalary;
    cout <<"Salary: " << salary <<endl;
}
};


class Manager :public Employee{
    public:

    void bonus(){
        cout <<"Bonus is 5000" <<endl;
    }
};

int main(){


    Manager m1;
    int managerSalary = 30000;
    m1.displaySalary(managerSalary);
    m1.bonus();


    return 0;
}