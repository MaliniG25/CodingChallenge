let array=[10,5,6,8,22,44];
let even_count=0;
for (let i=0;i<=array.length;i++)
{
    if(array[i]%2==0){
        even_count=even_count+1;
    }
}
console.log("The no.of even element in the array is:",even_count);