var bands = require('./bands.js');
// this works
for (obj in bands.goodbands) {
    console.log('A good ' +obj+ ' '+ 'band is '+ bands.goodbands[obj]);
};
for (obj in bands.badbands) {
    console.log('A bad ' +obj+ ' '+ 'band is '+ bands.badbands[obj]);
};

console.log(bands.bands);
// console.log("end correct");
// for (var string in bands.goodbands && bands.badbands) {
//     console.log(string);
//     console.log(string + bands[string]);
//     // console.log(key + bands.key[key]);
// };  
// console.log("start test");
// console.log("------------------------------");
// for (var obj in bands.goodbands && bands.badbands) {
//     for (var string in obj) {
//     console.log(obj);
//         console.log(string);
//     }
// }