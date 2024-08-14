const array=[38,175,105,47,45,89];
const Number=80;
let CountNumbers=0;
for(i=0;i<array.length;i++)
{
    if(array[i]<Number)
    {
        CountNumbers=CountNumbers+1;
    }
}
console.log(CountNumbers);