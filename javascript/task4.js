// task1
for(let i=1;i<=10;i++)
{
  console.log("Printing Num "+i);
}
// task2
for(let i=10;i>0;i--)
{
  console.log("Printing Num "+i);
}
//task3for(let i=1;i<=20;i++)
{
  if(i%2===0)
  {
    console.log("Printing Even Num "+i);
  }
}
//task4
for(let i=1;i<=20;i++)
{
  if(i%2!=0)
  {
    console.log("Printing Even Num "+i);
  }
}
//task5
let num= 5 //we get this from user
for(let i=1;i<=10;i++)
{
  console.log(num+" x "+i+" = "+num*i);
}
//task6
let i=10;
while(i>0)
{
  console.log("print num "+i);
  i--;
}
//task7
 res=0;
let n=10 //n will get from user
for(let i=1;i<=n;i++)
{
    res+=i;
}
console.log("sum of "+n+" numbers = "+res)
//task8
 i=1;
do{
  console.log("print num "+i);
  i++;
}
while(i<=5)
//task9
// It will print a as 10 then after a will be incremented to 11 and fails the condition in while and exit the loop

//task10
 name="javascript";
for(let i of name)
    
{
  console.log(i);
}
//task11
 name=["apple","banana","grapes","orange","papaya"];
for(let i of name)
{
  console.log(i);
}
//task12
let name=["Dhanu","Naveen","Praveen","sai","Perishma"];
for(let i of name)
{
  console.log("Student :"+i);
}
//task13
let emp={
  name:"dhanu",
  age:25,
  role:"Developer",
  city:"Banglore"
};
for(let i in emp)
{
  console.log(i+" "+emp[i]);
}
//task14
let product={
  name:"Mobile",
  price:12000,
  brand:"realme",
  category:"Mobiles",
  Stock:"available"
};
for(let i in product)
{
  console.log(i+" "+product[i]);
}

//task15
function welcome()
{
  console.log("Welome to JS");
}
welcome();
welcome();
welcome();
//task16
function welcome(name)
{
  console.log("Welome to JS "+name);
}
welcome("Dhanu");
welcome("Perishma");
welcome("Sravani");

//task17
function welcome(name,age,dept)
{
  console.log("Hi I'am "+name+" "+age+"years old into "+dept+" department");
}
welcome("Dhanu",25,"IT");
welcome("Perishma",24,"finance");
welcome("Sravani",24,"HR");

// task18
function add(a,b)
{
    return a+b;
}
console.log(add(2,3));
// task19
function salary(sal)
{
    return sal;
}
let amount=salary(5000);
console.log(amount);

//task20
function salCalculation(sal,bonus)
{
    return sal+banus;
}
salCalculation(50000,5000)

//task21
function employee(name,role="Developer")
{
    console.log("Hi "+name+" your'e a "+role);
}
employee("Perishma","Tester");
employee("sravani");

//task22
function square(a)
{
    return a*a;
}
console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(10));

//task23
let sum=function(a,b)
{
    return a+b;
}
console.log(sum(2,3));
//task24
let multiply=(a,b)=>
{
    return a*b;
}
console.log(sum(2,3));

//task25 
// inside the if block the values will be same as declared like 10,20,30 and the logging 
// statements outside the if block elemets will through a error since let and const are block scope

//task 26, 27,28
// in the case of var we will get undefined because of the concept of hoisting but if we use let or const to declare a  variable we'll get error

//task29
(function () {
    console.log("Welcome to JavaScript");
})();
(function (product, discount) {
    console.log(`The discount on ${product} is ${discount}%`);
})("laptop", 20);

//task30
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

//task31
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
const cashbackGenerator = cashback();

for (const value of cashbackGenerator) {
    console.log(value);
}

//finalMiniProject
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];

// print every employee
for (let i of employees)
{
  console.log(i)
}
// each employee key and values
for (let i of employees)
{
  for(let j in i)
  {
    console.log(j+" "+i[j]);
  }
}
// 3 and 4
function empInfo(employee)
{
   console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}
empInfo(employees[0]);

//5 
function empInfo(employee)
{
   return employee.salary;
}
console.log(empInfo(employees[0]));

//6
function empInfo(employee)
{
  if(employee.salary>=40000)
  {
    return true;
  }
  else
  {
    return false
  }
}
let res=empInfo(employees[0]);
if(res)
{
    console.log("salary >=40k");
}
else
{
    console.log("salary <40k");
}

//7
let pfCalc=(employee)=>{
    return employee.salary*0.12;
}
console.log(ctc(employees[0]));

//8
function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

const benefits = employeeBenefits();

for (const benefit of benefits) {
    console.log(benefit);
}