// import { Point } from '/Users/Sein/ts-hello/point'
// let point = new Point(1,2);
// point.draw();
// function doSomthing(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
// }
//     console.log('finally: ' + i);  // i wont work here cause it cannot find it, but we can still use let to catch errors
// }
// let count = 5;
// count = 'a'; wont work in ts
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
let message = 'abc';
let endsWithC = message.endsWith('c');
console.log(message);
