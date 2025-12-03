#include <iostream>
#include <string>
using namespace std;


class Person{
    public:
    string name;
    int age;

void displayInfo(string pName, int pAge){
    name = pName;
    age = pAge;
    cout << "Name:" << name <<endl;
    cout << "Age:" << age <<endl;
}

};



class Student :public Person{
    public: 
    int rollNo;

    void displayRollno(int srollNo){
         rollNo = srollNo;
         cout << "Roll no:" << rollNo <<endl;
    }

};




int main(){

    Student s1;
    string name = "daniyal";
    int age = 25;
    int rollno = 234;

    s1.displayInfo(name, age);
    s1.displayRollno(rollno);


    return 0;
}