/*Linear Search: Given an integer array and an element x, find if element is present in array or not.
 If element is present, then print index of its first occurrence. Else print -1.*/
 function LinearSearch(arr,val)
 {  
     
     for(i=0;i<=arr.length;i++)
     {
         if(arr[i]==val)
         result=true;
     }
     return false;
 }
var arr=[1,2,3];
console.log("Linersearch - element exists?"+LinearSearch(arr,2));
