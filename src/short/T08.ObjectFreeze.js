const obj = Object.freeze({ name: "Malik" });
obj.name = "AG";
console.log(obj.name); // Malik

const obj1 = Object.freeze({
  name: "Abdul",
  employment: { id: 60018, designation: "SSE" },
});

obj1.employment.designation = "PSE";

console.log(obj1.employment.designation); // PSE
