let a=document.querySelector('.storydiv')
let b=document.querySelector('#maindiv')
console.log(b)
a.addEventListener('mouseover',function()
{
    b.style.backgroundColor='red';
    setTimeout(function()
{
    b.style.backgroundColor='white';
},2000);
    
});