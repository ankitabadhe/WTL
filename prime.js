const prompt = require('prompt-sync')();
const number = prompt('enter the number of terms: ');
let count=0
let i,j 
for(j=2;j<=number;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}
if(count==2)
console.log(j)
count=0 
}
