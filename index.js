function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height * 0.010;
  let BMI = (weight / (height * height));
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

  }else  if(age<=64 && age>=55 && BMI >=23 && BMI<=28){
    alert("Healthy")
  }else  if(age<=54 && age>=45 && BMI >=22 && BMI<=27){
    alert("Healthy")
  }else  if(age<=44 && age>=35 && BMI >=21 && BMI<=26){
    alert("Healthy")
  }else  if(age<=34 && age>=25 && BMI >=20 && BMI<=25){
    alert("Healthy")
  }else  if(age<=24 && age>=19 && BMI >=19 && BMI<=24){
    alert("Healthy")
  }else{
    alert("Not Healthy")
  }

  
}
