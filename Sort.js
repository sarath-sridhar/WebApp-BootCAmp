var arr=[5,3,1,9,8,2,4,7];
var counter=0;
/*Selectionsort*/
function SelectionSort(arr)
{

    for(i=0;i<arr.length-1;i++)
    {
        for (j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[i])
            {
                arr[i]=arr[i]+arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]=arr[i]-arr[j];
                counter++;
            }
        }
    }
    console.log("Array sorted using selection sort"+arr)
}
//SelectionSort(arr);

/*InsertionSort*/
function InsertionSort(arr)
{
    
    for(var i=0;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            for(j=i;j<=i;j++)
            {
                if(arr[i+1]<arr[j])
                {      
                    arr[i+1]=arr[i+1]+arr[j];
                    arr[j]=arr[i+1]-arr[j];
                    arr[i+1]=arr[i+1]-arr[j];
                    
                }
            }                  
        }
    }
    console.log("Array sorted using Insertion sort"+arr);
}
//InsertionSort(arr);


/*BubbleSort*/
function BubbleSort(arr)
{
    var swapCopmlete;
    while(swapCopmlete!=true){
            for(i=0;i<arr.length-1;i++)
            {
                    if(arr[i+1]<arr[i])
                    {      
                        arr[i+1]=arr[i+1]+arr[i];
                        arr[i]=arr[i+1]-arr[i];
                        arr[i+1]=arr[i+1]-arr[i];
                        swapCopmlete=false; 
                    }
            }
            if(swapCopmlete!=false)
            {
                console.log("Array sorted using bubble sort"+arr);

            }
        }
}
BubbleSort(arr);

