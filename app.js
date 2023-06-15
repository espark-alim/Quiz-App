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
var indexValue = [0];
var marks = 0;
function render() {
  var obj = questions[indexValue];
  display.innerHTML = questions[indexValue].question;
  current.innerHTML = indexValue + 1;
  total.innerHTML = questions.length;
  option.innerHTML = "";
  for (let i = 0; i < obj.option.length; i++) {
    // console.log(obj.option[i]);
    option.innerHTML += `<button type="button" class="btn btn-primary w-100 my-2" onclick="passData('${obj.correctAns}', '${obj.option[i]}')" >${obj.option[i]}</button>`;
  }
}
render();

function passData(a, b) {
  if (a == b) {
    console.log("right Ans");
    marks++;
  }
  console.log(marks);
}
function next() {
  indexValue++;
  render();
}
