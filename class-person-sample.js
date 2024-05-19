
// 3. Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, gender, age, qualification, email, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.qualification = qualification;
        this.email = email;
        this.mobileNumber = mobileNumber;
    }
}

Person.prototype.working = function () {
    console.log(`${this.firstName} ${this.lastName} is working as a Software Developer.`)
}

const data1 = new Person('Namrata', 'Desai', 'Female', 25, 'BAF', 'namrata@gmail.com', '12345678');
const data2 = new Person('Abhishek', 'Desai', 'Male', 27, 'BscIT', 'desai@gmail.com', '34567891');

console.log(data1);
console.log(data2);
