const student = {
  name: "Joseph",
  matricNo: "24/0136",
  dept: "Software Engineering"
};

const { name, dept } = student;
console.log(`${name} is in ${dept}.`);

const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first, third);