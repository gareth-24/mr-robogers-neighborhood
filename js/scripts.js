//Business Logic

function isPositiveInt(inputStr)  {
  const check = parseInt(inputStr);
  console.log(check);
  if (Math.sign(check) === 1) {
    console.log("true: positive number");
    return true;
  } else if (Math.sign(check) === -1) {
    console.log("false: negative number");
    return false;
  } else if (Math.sign(check) === 0) {
    console.log("false: 0")
    return false;
  } else {
    return false;
  }
}

function beepBoop(n) { //input a number
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
}

function textOutput(ar) {
  let text = ar.join(', ').toString();
  let output = document.getElementById("robot-says");
  ar = output.append(text);
}

function handleFormSubmission(event) {
  event.preventDefault();
  hideResults();
  const results = document.getElementById("results");
  results.removeAttribute("class");
  const userInput = document.getElementById("input-num").value;
  const userNum = parseInt(userInput);
  console.log(userNum);
  beepBoop(userNum);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

