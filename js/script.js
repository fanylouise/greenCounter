
  //GET ELEMENTS OF HTML
  let currentNumberWrapper = document.getElementById('currentNumber')
  let currentNumber = 0


  //ADD A NUMBER
  function increment() {
  currentNumber += 1
  currentNumberWrapper.innerHTML = currentNumber

  //CHANGE COLOR NUMBER
  if (currentNumber < 0) 
  document.getElementById("currentNumber").style.color = 'red';
  else if(currentNumber > 0 && currentNumber != 0)
  document.getElementById("currentNumber").style.color = 'green';
  
}
 
  //REMOVE A NUMBER
  function decrement() {
  currentNumber -= 1
  currentNumberWrapper.innerHTML = currentNumber;

  
  //CHANGE COLOR NUMBER
  if (currentNumber < 0) 
  document.getElementById("currentNumber").style.color = 'red';
  else if(currentNumber > 0 && currentNumber != 0)
  document.getElementById("currentNumber").style.color = 'green';
}



