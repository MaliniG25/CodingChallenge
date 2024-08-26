let array=[2,63,4,41,801,9,10];
let OddNoCount=0;
for(i=0;i<array.length;i++)
{
    if(array[i]%2!==0)
    {
        OddNoCount=OddNoCount+1;
    }
}
console.log("The Number of odd numbers in an array:",OddNoCount);