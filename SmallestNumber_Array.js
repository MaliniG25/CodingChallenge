let array=[2,6,4,1,8,9,0];
let SmallestNumber=array[0];
for(i=1;i<=array.length;i++)
{
    if(array[i]<SmallestNumber)
    {
        SmallestNumber=array[i];
    }
}
console.log("The Smallest Number in an array:",SmallestNumber);