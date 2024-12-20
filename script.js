let a=document.querySelector('#img1')
let b=document.querySelector('#maindiv')
console.log(a)
a.addEventListener('mouseover', function() {
    b.style.backgroundImage = 'url("images/story2.jpg")'; // Set background image
    b.style.backgroundSize = 'cover'; // Ensure the image covers the element fully
    b.style.backgroundPosition = 'center'; // Center the image
    b.style.backgroundRepeat = 'no-repeat'; 

    setTimeout(function() {
        console.log('time triggered')
        b.style.backgroundImage = '';
        b.style.backgroundColor='white'; // Change background color after 2 seconds
    }, 2000);
});