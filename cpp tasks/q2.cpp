#include <iostream>
using namespace std;

class Rectangle{
    private:
    int width;
    int length;

    public:
    void setLength(int l){
        length = l;
    }

    void setWidth(int w){
        width = w;
    }

    int getLength(){
        return length;
    }

    int getWidth(){
        return width;
    }


    int area(){
        return length*width;
    }
};



int main(){

    Rectangle r1;

    r1.setLength(5);
    r1.setWidth(9);
    
    cout << "Length:" << r1.getLength() << endl;
    cout << "Width:" << r1.getWidth() << endl;
    cout << "Area:" << r1.area() << endl;



    return 0;
}