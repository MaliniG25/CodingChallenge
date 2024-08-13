const array=[33,75,15,47,45];
for(i=0;i<array.length;i++)
{
    if(array[i]%3==0 && array[i]%5==0)
    {
        console.log(array[i]);
        break;
    }
}