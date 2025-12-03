#include <iostream>
#include <string>
using namespace std;

class Car{
private:
int speed;
int fuel;

public:
void setSpeed(int carSpeed){
    speed = carSpeed;
}

void setFuel(int carFuel){
    if(carFuel<0){
        cout << "Fuel cannot be negative" <<endl;
        fuel = 0;
    } else {
    fuel = carFuel;
    }
}

int getSpeed(){
    return speed;
}

int getFuel(){
    return fuel;
}

};


int main(){

Car c1;

c1.setSpeed(120);
c1.setFuel(50);

cout << "Speed: " << c1.getSpeed() << " km/h" <<endl;
cout << "Fuel: " << c1.getFuel() << " litres" <<endl;


    return 0;
}