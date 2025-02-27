let input1 = document.querySelector(".input1 input");
let input2 = document.querySelector(".input2 input");

let button = document.querySelector(".btn1");
let para = document.querySelector(".paragraph");
let para2 = document.querySelector(".paragraph2");  
let button2 = document.querySelector(".btn2");



button.addEventListener("click", () => {
  let height = input1.value;
  let weight = input2.value;
  let heightInMeters = height / 100;
  let bmi = Math.ceil(weight / (heightInMeters * heightInMeters));
  
  para.innerHTML = `According to your height and weight your BMI is: <span style="color: #16bfff ;">${bmi}`;
  // para.style.color = "red";
  if (bmi < 18.5) {
    para2.innerHTML = `You are underweight`;
    para2.style = "color: black";
  } else if ((bmi >= 18.5) & (bmi <= 24.9)) {
    para2.innerHTML = `you are normal weight`;
    para2.style = "color: green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    para2.innerHTML = `You are overweight`;
    para2.style = "color: orange";
  } else {
    para2.innerHTML = `you re obese`;
  }
});

button2.addEventListener('click' , () => {
  input1.value = "";
  input2.value = "";
  para.innerHTML = "";
  para2.innerHTML = "";
})

button.addEventListener('click' , () => {
  if(input1.value === "" || input2.value === "") {
    alert("Please fill in the input fields")
    para.innerHTML = "";
    para2.innerHTML = "";
  }
})


gsap.to('.main' , {
  y: -50,
  duration: 1,
  ease: "ease-in",
  opacity: 1
})
