if(process.argv[2] == "add") {
    console.log(parseFloat(process.argv[3]) +  parseFloat(process.argv[4]));
}
if(process.argv[2] == "subtract") {
    console.log(parseFloat(process.argv[3]) -  parseFloat(process.argv[4]));
}
if(process.argv[2] == "multiply") {
    console.log(parseFloat(process.argv[3]) *  parseFloat(process.argv[4]));
}
if(process.argv[2] == "divide") {
    console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
}
if(process.argv[2] == "remainder") {
    console.log(parseFloat(process.argv[3]) %  parseFloat(process.argv[4]));
}
if(process.argv[2] == "exp") {
    console.log(Math.pow(parseFloat(process.argv[3]),  parseFloat(process.argv[4])));
}
if(process.argv[2] == "prime") {
    // if(parseFloat(process.argv[3]) %  3)
    console.log(parseFloat(process.argv[3]) %  3);
}
// 'ax+2=10'
if(process.argv[2] == "algebra") {
    var x = process.argv[3].indexOf('x');
    var equals = parseFloat(process.argv[3].indexOf('='));
    var result = process.argv[3][5]+process.argv[3][6];
    var print = ((parseFloat(result) -parseFloat(process.argv[3][equals-1]))/ parseFloat(process.argv[3][0]));
    
    console.log(x);
    console.log(equals);
    console.log(result);
    console.log(process.argv[3]);
    console.log(process.argv[equals]);
    console.log('the answer is');
    console.log(print);    
}
