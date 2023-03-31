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
  }
  else {
    return false;
  }
}

function beepBoop(n) { //input a number
  let array = [];
  for (i = 0; i <= n; i++)  {
    array.push(i);
  }
  console.log(array);

  const array2 = array.map(function(element)  {
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
  console.log(array2);
}

//UI Logic

