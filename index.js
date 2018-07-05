var katzDeli = [];

function takeANumber(line, name) {
  var i = line.length + 1;
  line.push(name);
  return  'Welcome, ' + name + '. ' + 'You are number ' + i + ' in line.';
}

function nowServing(line) {
  if (line.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
      return 'Currently serving ' + line[0] + '.';
      return line = line.splice(1);
  }
}

function currentLine(line) {
  if (line.length ==0) {
    return 'The line is currently empty.';
  } else {

  }
}
