#include <iostream>
#include <string>
using namespace std;


class Vehicle{
public:
int speed;

void showSpeed(int vSpeed){
    speed = vSpeed;
    cout << "Speed is " << speed << "km/h" <<endl;

};

};



class Car :public Vehicle{
public:

void fuelType(){
    cout << "Petrol" <<endl;
}

};








int main(){

Car c1;

int speed = 25;

c1.showSpeed(speed);
c1.fuelType();


    return 0;
}