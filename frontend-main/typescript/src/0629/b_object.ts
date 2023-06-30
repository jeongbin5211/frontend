// 객체

let obj: { name: string; age: number } = {
    name: "JeongBin",
    age: 90,
};

//! 객체에서 속성 접근
//? 점 표기법
console.log(obj.name); // JeongBin
obj.name = "JeongBin2"; // 객체의 속성을 수정
//? 대괄호 표기법
console.log(obj["age"]); // 90

//! 객체와 함수
let obj2: {
    name: string;
    age: number;
    greet: () => string;
} = {
    name: "JeongBin",
    age: 90,
    greet() {
        return `Hello, my name is ${this.name}`
    }
};

console.log(obj2.greet()); // Hello, my name is JeongBin


//!
interface Obj3 {
    name: string;
    age: number;
    greet: () => string;
};

let obj4: Obj3 = {
    name: "JeongBin",
    age: 20,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
};

