let array=[24,7,8,-3,-7,3,30,-8];
let PositiveNoSum=0;
for (i=0;i<array.length;i++)
{
    if(array[i]>0)
    {
        PositiveNoSum=PositiveNoSum+array[i];
    }
}
console.log("The sum of positive numbers in an array is:",PositiveNoSum);