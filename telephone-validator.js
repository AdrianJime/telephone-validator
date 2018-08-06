function telephoneCheck(str) {
  var numberStripped = str.replace(/\W|-/g,"");
  var numNoSpace = str.replace(/ /g,"");
  var numNumbers = numberStripped.length;
  var baddest = /^(\(\d*-)/;
  var badder = /\?/;
  var bad = /^(\d*\))/;
  var reg = /1?-?\(?\d\d\d\)?-?\d\d\d-?\d\d\d\d/;
  console.log(numNoSpace);
  if(numNumbers==11){
    if(numberStripped[0]!=1 || str[0]!=1){
      return false;
    }
  }
  if(numNumbers<10 || numNumbers>11){
    return false;
  }
  if(numberStripped.match(reg)==null || numNoSpace.match(bad)!=null ||numNoSpace.match(badder)!=null || numNoSpace.endsWith(")") || numNoSpace.match(baddest)!=null){
    return false
  }
  console.log(numberStripped.match(bad));
  return true;
}

telephoneCheck("555-555-5555");