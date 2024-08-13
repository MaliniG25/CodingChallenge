const array=[38,175,105,47,45,89];
const number=80;
let CountNumbers=0;
for(i=0;i<array.length;i++)
{
    if(array[i]<80)
    {
        CountNumbers=CountNumbers+1;
    }
}
console.log(CountNumbers);