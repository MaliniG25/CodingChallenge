let array=[10,20,300,90,50];
let max_number=array[0];
for (let i=1;i<array.length;i++)
{
    if(array[i]>max_number){
        max_number=array[i];
    }
}
console.log("The maximum element in the array is:",max_number);

