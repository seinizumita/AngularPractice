// import { Point } from '/Users/Sein/ts-hello/point'

// let point = new Point(1,2);
// point.draw();




//++++++++INTERFACES+++++++++
//let drawPoint = (x,y,a,b,c,d,e) =>{  // bad practice, group will most likely be part of the same concept
    //.. 
//}

// let drawPoint = (point) =>{
//     //..
// }
// drawPoint({
//     name: 'Mosh' // since we didn't declare a type, point can be anything which is not what we want.
// })

// let drawPoint = (point: {x: number, y:number}) =>{ // so we use curly brace to indicate properties, inline annotation
//     //.. it is alright, but a little verbose
// }

// interface Point{  // much cleaner and can be used in other places
//     x: number,
//     y: number,
//     draw: () => void //cannot have implementation in interfaces however, only signatures
// }

// let getDistance(pointA: Point, pointB: Point){ // no cohesion in this function as well as drawPoint()
//     //..
// }

// drawPoint({
//     x: 1,
//     y:2
// })

//+++++++CLASSES+++++++

class Point{  
    x: number;
    y: number;
    
    
    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    } 

    getDistance(another: Point){
        //..
    }
}

//+++++++OBJECTS+++++++++

//let point: Point; // custom type, so we must create a new instance to initialize the object
let point = new Point();
point.x = 222;
point.y = 111;
point.draw();




// function doSomthing(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
// }
//     console.log('finally: ' + i);  // i wont work here cause it cannot find it, but we can still use let to catch errors
// }

// let count = 5;
// count = 'a'; wont work in ts

// ++++++++TYPES++++++++
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3,4];
// let f: any[] = [1, true, 'a', false]; // not good practice, but it is possible with ts


// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color{ Red = 0, Green = 1, Blue = 2, Purple = 3}; // values are set automatically, but its good practice to set them incase someone adds a new color
// let backgroundColor = Color.Red; // much cleaner than js


//++++++TYPE INSERTION+++++++
//let message;
//message = 'abc'; //ts gets confused that message is type any, but we can use type insertion to fix that
//let endsWithC = message.endsWith('c'); intellisense does not work here
//let endsWithC = (<string>message).endsWith('c'); // intellisense works here
//let altWay = (message as string).endsWith('c'); // same thing, but first option is more common
//console.log(message);


//++++++++ARROW FUNCTIONS+++++++++++
// let log = function(message){
//     console.log(message)
// }

/////// ^ SAME AS v

// let doLog = (message) => {
//     console.log(message);
// }