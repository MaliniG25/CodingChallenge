const array=[2,5,6,8,3,1,10,24];
let count=0;
for(i=0; i<array.length; i++)
{
    if (array[i]%2==0)
    {
       count=count+array[i];
    }
}
console.log(count);