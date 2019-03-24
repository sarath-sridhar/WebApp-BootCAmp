//MultiDimensionsalArray
var MultiDimensionsalArray=[[0,1,2],[3,4,5]];
console.log("MultiDimensional-"+MultiDimensionsalArray[1][1]);

//Push
var ArrPush=[1,2,3];
ArrPush.push(4);
console.log("PushOP"+ArrPush);

//Pop
var ArrPop=[1,2,3];
ArrPop.pop();
console.log("PopOP"+ArrPop);

//shift
var ArrShift=[1,2,3];
ArrShift.shift();
console.log("Shift"+ArrShift);

//UnShift
var ArrUnShift=[1,2,3];
ArrUnShift.unshift(0);
console.log("Unshift"+ArrUnShift);

//Splice
var SpliceArray=[1,2,3,4,5];
SpliceArray.splice(1,2);//Starting From 2nd position remove two elements from an array
console.log(SpliceArray);


//use for each in array
var PrintArray=[1,2,3,4]
PrintArray.forEach(function(item,index,PrintArray){
console.log("item="+item+" index="+index)
})


