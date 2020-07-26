function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: any, b: any): any {
    return a + b
}
console.log(add('1', 2))



enum Gender {
    Male,
    Female
}

interface Person {
    gender: Gender
}

function merry(a: Person, b: Person): [Person, Person] {
    if (a.gender != b.gender) {
        return [a, b]
    } else {
        throw new Error('性别相同不能结婚');
    }
}

let a = { gender: Gender.Male }
let b = { gender: Gender.Female }

console.log(merry(a,b))