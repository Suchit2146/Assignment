/*
Requirements: "Write a program to define a class “Shape”. This class will have the properties length, breadth and height.
Create a parameterised constructor that takes input as length, breadth and height. Define a method area()
inside the class and it should return value as length*breadth*height.
Create an Object of shape class and call the area() method to fetch the area."
*/

class shape{
    constructor(length, breadth, height){
        this.length=length,
        this.breadth=breadth,
        this.height=height
    }

   area(){
    return `the area is ${this.length*this.breadth*this.height}`
   }
}

const shape1=new shape(2,3,4)
console.log(shape1.area())