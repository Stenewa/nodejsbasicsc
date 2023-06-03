//instantiating te global context
//console.log(global);
//global.setTimeout(() => {
//  console.log('Hey bbg!!!')
//}, 3000);
//no need to instantiate it btw

    

var y = ["HEYYYY", "let's count down!!", 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var i = 0;
const printAtInterv = () => {
  if ( i<=y.length-1) {
    console.log(y[i]);
    i++;
   
    
  }
  else{clearInterval(timer);}
};

timer=setInterval(printAtInterv, 1000);
//for (var i = 0; i <= 10; i++){
  //  interv(y[i]);
//};

printAtInterv();