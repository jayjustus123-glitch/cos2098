const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [...numbers1, ...numbers2];
console.log(combined);

const student = { name: "Joseph", dept: "Software Engineering" };
const studentDetails = { ...student, matricNo: "24/0136" };
console.log(studentDetails);