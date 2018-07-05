var katzDeli = [];

function nowServing() {
  if katzDeliLine.length == 0 {
    return 'There is nobody waiting to be served!';
  } else {
      return 'Now serving ' + katzDeliLine[0] + '!';
      katzDeliLine = katzDeliLine.splice(1);
  }
}
