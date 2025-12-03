#include <iostream>
#include <string>
using namespace std;

class Shape{
  void area(){
    cout <<"Area of shape" <<endl;
  }
};


class Rectangle :public Shape{
    public:
    int length;
    int width;


    int area(int l, int w){
       length = l;
       width = w;
       return length*width;
    }
};


int main(){

Rectangle r1;
int l = 7;
int w = 4;

int recArea = r1.area(l,w);

cout << "Rectangle Area: " << recArea <<endl;

    return 0;
}