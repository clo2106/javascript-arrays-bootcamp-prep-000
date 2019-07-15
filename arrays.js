  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

  function addElementToBeginningOfArray(a, e){
    const a = [1]
    const a2 = ['e', ...a]
    return a
  }


  function destructivelyAddElementToBeginningOfArray(a, e) {
   a.unshift(e)
  return a
  };

  function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
return a
}

  function destructivelyAddElementToEndOfArray(a, e){
    a.push(e)
    return a
  }

  function destructivelyRemoveElementFromEndOfArray(a){
    a.pop()
    return a
}
