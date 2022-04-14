// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ
// რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function evennumbers(num) {
  if (num % 2 == 0) {
    console.log("this is evn number");
    return true;
  }
  console.log("this is odd number");
  return false;
}
evennumbers(99);
// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function rectangelearea(a, b) {
  let s = a * b;
  console.log(s);
}
rectangelearea(4, 5);
// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს.
//  ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function squarearea(x) {
  let s = x * x;
  console.log(s);
}
squarearea(5);

// 4.დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function randomnum() {
  let random = Math.floor(Math.random() * 100);
  console.log(random);
}
randomnum();
// 5. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები.
// შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).
let persons = [
  { name: "gio", age: 4 },
  { name: "barbare", age: 2 },
  { name: "ana", age: 8 },
  { name: "temuri", age: 19 },
  { name: "elene", age: 4 },
];
function youngman() {
  let min = Math.min(...persons.map((el) => el.age));
  let minvalue = persons.filter((el) => el.age == min);
  console.log(minvalue);
  return minvalue;
}
youngman();
// 6. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ)
//  თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
function getCurrencySymbolFromCode(code) {
  if (code == "usd") {
    console.log("$");
    return "$";
  } else if (code == "eur") {
    console.log("€");
    return "€";
  } else if (code == "gel") {
    console.log("ლ");
    return "ლ";
  }
}
getCurrencySymbolFromCode("usd");
