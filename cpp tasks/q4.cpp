#include <iostream>
#include <string>
using namespace std;

class Employee{
    private:
    int id;
    int salary;

    public:
    void setId(int empid){
        id = empid;

    }

    void setSalary(int empsalary){
        if(empsalary < 0){
            cout << "Salary cannot be negative" <<endl;
            salary = 0;
        } else {
        salary = empsalary;
        }
    }

    int getId(){
        return id;
    }

    int getSalary(){
        return salary;
    }

};

int main(){

Employee e1;

e1.setId(101);
e1.setSalary(50000);

cout << "Id:" << e1.getId() <<endl;
cout << "Salary:" << e1.getSalary() <<endl;


    return 0;
}


