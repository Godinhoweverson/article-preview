const btnDeskSize = document.getElementsByClassName('btn')[0]
const btnMobileSize = document.getElementsByClassName('btn-mobile')[0]
const toggleShare = document.querySelector('.toggle-share')
const toggleShareMobile = document.querySelector('.toggle-share-mobile')
const profile = document.querySelector('.profile')
let displayToggle = false

// Add the resize event listener to reload the page when the width is less than 600px
window.addEventListener('resize', function () {
    if (window.innerWidth < 600) {
        location.reload();
    }
});

btnDeskSize.addEventListener('click',function (){
    displayToggle === false ? displayToggle = true : displayToggle = false
   
    if(window.innerWidth > 600){
        if(displayToggle){
            toggleShare.style.display = 'flex';
        }else{
            toggleShare.style.display = 'none';
        }
        
    }else{
        if(displayToggle){
            toggleShare.style.display = 'none';
            profile.style.display = 'none';
            toggleShareMobile.style.display = 'flex';
        }
    }
   
})

btnMobileSize.addEventListener('click',function (){
    profile.style.display = 'flex';
    toggleShareMobile.style.display = 'none';
})