let string ="Malinigangadharan";
for(i=0;i<string.length;i++)
{
    if(string[i]>='A' && string[i]<='Z')
    {
        console.log("The String contains Uppercase");
        break;
    }
    else
    {
        console.log("The String does not contains Uppercase");
        break;
    }
}
