#include <iostream>
#include <string>
using namespace std;


class Student {
    private:
    string name;
    int age;

    public:
    void set(string stName, int stAge){
        name = stName;
        age = stAge;
    }

    string getName(){
       return name;
    }

    int getAge(){
        return age;
    }
};





int main(){


Student s1;

s1.set("Ali", 20);




 cout << "Name: " << s1.getName() << endl;
 cout << "Age: " << s1.getAge() << endl;



    return 0;
}