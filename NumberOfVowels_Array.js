let string="MaliniGangadharan";
let VowelsCount=0;
for(i=0;i<string.length;i++)
{
    if(string[i]=='a'|| string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u'|| string[i]=='A' || string[i]=='E' ||string[i]=='I' || string[i]=='O' || string[i]=='U'  )
    {
        VowelsCount=VowelsCount+1;
    }
}
console.log("The Number of Vowels in a string:",VowelsCount);