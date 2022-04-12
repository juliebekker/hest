function performOperation(operator) {
  var x = parseInt(document.getElementById('txt1').value);
  var y = parseInt(document.getElementById('txt2').value);

  var result;

    if (operator == "+")
    result = x + y;

    else if (operator == "-")
    result = x - y;

    else if (operator == "*")
    result = x * y;

    else if (operator == "/")
    result = x / y;

  document.getElementById('result').value = result;
}
