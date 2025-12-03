#include <iostream>
#include <string>
using namespace std;

class Product{
private:
string name;
int price;

public:
void setName(string prName){
   name = prName;
}

void setPrice(int prPrice){
    if(prPrice < 0){
        cout << "Price cannot be negative" <<endl;
        price = 0;
    } else {
 price = prPrice;
    }
}


string getName(){
    return name;
}

int getPrice(){
    return price;
}

};



int main(){

Product p1;

p1.setName("Laptop");
p1.setPrice(75000);

cout << "Name:" << p1.getName() <<endl;
cout << "Price:" << p1.getPrice() <<endl;






    return 0;
}