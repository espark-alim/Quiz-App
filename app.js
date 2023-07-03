var questions = [
  {
    question: "Html stands for _____________",
    option: [
      "hyper markup",
      "JS",
      "hyper text markup language",
      "cascading style sheet",
    ],
    correctAns: "hyper text markup language",
  },
  {
    question: "JS stands for _____________",
    option: ["java script", "hyper text markup language", "css", "html"],
    correctAns: "java script",
  },
  {
    question: "CSS stands for _____________",
    option: [
      "cascading style sheet",
      "hyper text markup language",
      "Java Script",
      "html",
    ],
    correctAns: "cascading style sheet",
  },

  {
    question: "RAM stands for _____________",
    option: [
      "random access memoery",
      "hyper text markup language",
      "html",
      "html",
    ],
    correctAns: "random access memoery",
  },
  {
    question: "ROM stands for _____________",
    option: ["read only memory", "hyper text markup language", "html", "html"],
    correctAns: "read only memory",
  },
  
];

var display = document.getElementById("display");
var option = document.getElementById("option");
var current = document.getElementById("current");
var total = document.getElementById("total");
var indexValue = 0;
var marks = 0;
var obtained = document.getElementById("obtained");

function render() {
  var obj = questions[indexValue];
  display.innerHTML = questions[indexValue].question;
  current.innerHTML = indexValue + 1;
  total.innerHTML = questions.length;
  option.innerHTML = "";
   
  for (let i = 0; i < obj.option.length; i++) {
    // console.log(obj.option[i]);
    option.innerHTML += `<input type="radio" name = "value" id = "input" class="mx-3 my-3" onclick="passData('${obj.correctAns}', '${obj.option[i]}')" >${obj.option[i]} </br>`;
  }
}
render();

function passData(a, b) {
  if (a == b) {
    marks++;
    // console.log(marks);
}
}
document.getElementById("next").addEventListener("click",next)
// document.getElementById("input").addEventListener("change", chk);

function chk(){
   console.log("onchange")
}

function next() {
  indexValue++;
  render();
  if (total.innerHTML == 5) {
    obtained.innerHTML = +marks
    console.log(marks);
  }

}

console.log(id)
