//normal
setTimeout(function(){
    console.log(1);
}, 1000);

setTimeout(function(){
    console.log(2);
}, 2000);

setTimeout(function(){
    console.log(3);
}, 3000);

setTimeout(function(){
    console.log(4);
}, 4000);

setTimeout(function(){
    console.log(5);
}, 5000);

//abnormal
// for(i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }