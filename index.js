function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height /100;
  let BMI = (weight/ height^2);
  alert(BMI)
  if(BMI >= 30.0){
    alert(BMI + " and Above Obesity")
  }else if(BMI <= 29.9 && BMI >= 25.0){
    alert(BMI + " Overweight")
  }else if(BMI <= 24.9 && BMI>= 18.5){
    alert(BMI + " Healthy Weight")
  }else{
    alert(BMI + " Underweight")
  }
  if(age>=65 && BMI >=24 && BMI<=29){
    alert("Healthy")

  }else{
    alert("Not Healthy")
  }

  
}
