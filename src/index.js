

function getDigitalInNumber(number,bas){// вычисляет количество чисел bas в факториале числа number
  var q=0;
  var rres = 0;
  var number_t=number;
  for (var i=1; q<=number_t; i++)
  {
    q = Math.pow(bas,i);


    rres = rres + ~~(number_t/q);
  }
  return rres;
}




function getSimpleDig(number) {// вычисляет количество простых множителей в факториале числа number
  var number_t = number;
  var res = [];
  var deg;
  // your implementation
  for (var i=2; number_t>=2 ;i++){
  var deg =0;

  while (number_t % i == 0){
    number_t = number_t/i;
    deg = deg + 1;

  }
    if (deg>0 ) {
      res.push(i);
      res.push(deg);

    }
  }
  return res;
}




module.exports = function getZerosCount(number, base) {
  // your implementation

  var sum = [];

  var simp = getSimpleDig(base);

  for (var i=0; i<=simp.length; i=i+2 ){
    dig = getDigitalInNumber(number, simp[i]);
    if (dig >0)
        sum.push( ~~(dig/simp[i+1]));
  }

  Array.min = function( array ){
    return Math.min.apply( Math, array );
  };

  var minimum = Array.min(sum);

    return minimum;


}
