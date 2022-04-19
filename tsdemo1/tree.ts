#!/usr/bin/env ts-node
function creatsTabs(n: number): string {
    return '----'.repeat(n)
}

class Person {
    public children: Person[] = [];

    constructor(public name: string) {
    }

    addChild(child: Person): void {
        this.children.push(child)
    }

    introduceFamily(n?: number): void {
        n = n || 0;
        console.log(`${creatsTabs(n)}${this.name}`);
        this.children.forEach(Person => {
                Person.introduceFamily(n + 1);
            }
        )
    }
}

const grandPa = new Person('王麻子')
const person1 = new Person('王子')
const person2 = new Person('王大锤')
const child11 = new Person('王者')
const child12 = new Person('王毛')
const child21 = new Person('王荣耀')
const child22 = new Person('王农药')

grandPa.addChild(person1);
grandPa.addChild(person2);

person1.addChild(child11);
person1.addChild(child12);
person2.addChild(child21);
person2.addChild(child22);

grandPa.introduceFamily();