//Business Logic

function beepBoop(n) { //input a number
  let array = [];
  for (i = 0; i <= n; i++)  {
    array.push(i);
  }
  console.log(array);

  const array2 = array.map(function(element)  {
  if (element === 1)  {
    return "Beep!";
  } else if (element === 2)  {
    return "Boop!";
  } else  {
    return element;
  }
  });
  console.log(array2);
}

//UI Logic

