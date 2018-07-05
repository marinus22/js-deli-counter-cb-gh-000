function takeANumber(katzDeliLine, name) {
  var len = katzDeliLine.length;
  var position = len + 1;
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. ' + 'You are number ' + position + ' in line.';
}

function nowServing(deliLine) {

  if (deliLine.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
      return 'Currently serving ' + deliLine[0] + '.';
      deliLine = deliLine.slice(1);
      return deliLine;
  }
}

function currentLine(line) {
  if (line.length !=0) {
    
    return 'The line is currently: '
    }
  }
