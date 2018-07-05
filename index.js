var katzDeli = [];

function takeANumber(line, name) {
  var i = line.length + 1;
  line.push(name);
  return  'Welcome, ' + name + '. ' + 'You are number ' + i + ' in line.';
}

function nowServing() {
  if (katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
      return 'Now serving ' + katzDeliLine[0] + '!';
      katzDeliLine = katzDeliLine.splice(1);
  }
}
