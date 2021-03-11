// Your code here
const mapToNegativize = function(sourceArray) {
    var newArray;
    newArray = sourceArray.map(myFunction)
    function myFunction(n){
      return  n * -1 ;
    };
    return newArray
};