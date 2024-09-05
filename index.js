const number=document.querySelector("#lucky");
const out=document.querySelector("#out");
function Checker(){
    const date=document.querySelector("#date");
   var data=  date.value;
   var dob=(data.replaceAll('-',''));
   var sum=0;
   var num=number.value;
if(dob==""||num=="" )
    {

    alert('please enter values')
}
else{

   for(var i=0 ; i< dob.length;i++)
   {
        sum= sum+ Number(dob.charAt(i));
   }
   if(sum%num){
    out.innerHTML=` Your Birthday is Lucky`;
    out.style.color=" blue"
   }
   else{
    out.innerHTML=` your Birthday is not lucky, so sad`;
    out.style.color="red"
   }
};
}
document.querySelector("#btn").addEventListener("click", Checker)