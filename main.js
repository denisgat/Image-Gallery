

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Looping through images */


for(let i = 1; i <= 5; i++ ){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', '/images/pic' + i + '.jpg' );

    console.log(newImage)

    newImage.onclick = function(){
        displayedImage.setAttribute('src', '/images/pic' + i + '.jpg');
    }
    thumbBar.appendChild(newImage);
    
}


/* Wiring up the Darken/Lighten button */

    btn.onclick = function(){
        if(btn.getAttribute('class') == 'dark'){
            btn.setAttribute('class','light');
            btn.textContent = 'Lighten';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    
        }else if(btn.getAttribute('class') == 'light'){
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor == 'rgba(0,0,0,0)';

        
        }

    }
