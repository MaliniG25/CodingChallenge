const array=[5,6,10,-1,8];
let previous=array[0];
for(i=1;i<=array.length;i++)
{
    if (array[i]>previous)
    {
       previous=array[i];
       console.log(previous);
       break;
    }
}