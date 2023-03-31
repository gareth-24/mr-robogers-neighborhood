//Business Logic

function isPositiveInt(inputStr)  {
  const check = parseInt(inputStr);
  console.log(check);
  if (Math.sign(check) === 1) {
    return true;
  } else if (Math.sign(check) === 0) {
    errorMessage();
    return false;
  } else {
    errorMessage();
    return false;
  }
}

function beepBoop(n) { //input a number
  isPositiveInt(n);
  let array = [];
  for (i = 0; i <= n; i++)  {
    array.push(i);
  }
  console.log(array);

  const resultArray = array.map(function(element)  {
    let str = element.toString();
    if (str.includes('3'))  {
      return "Won't you be my neighbor?";
    } else if (str.includes('2'))  {
      return "Boop!";
    } else if (str.includes('1'))  {
      return "Beep!";
    }  else  {
      return element;
    }
  });
  console.log(resultArray);
  textOutput(resultArray);
}

//UI Logic

function hideResults() {
  document.getElementById("results").setAttribute("class", "hidden");
  document.getElementById("error-message").setAttribute("class", "hidden");
}

function errorMessage() {
  document.getElementById("error-message").removeAttribute("class");
}

function textOutput(array) {
  let outputText = array.join(', ').toString();
  const results = document.getElementById("results");
  document.getElementById("robot-says").innerText = outputText;
  results.removeAttribute("class");
}

function handleFormSubmission(event) {
  event.preventDefault();
  hideResults();

  const userNum = parseInt(document.getElementById("input-num").value);
  console.log(userNum);
  beepBoop(userNum);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

