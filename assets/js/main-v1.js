let hamburger =  document.querySelector('#navbar-mobile-btn');
let menuItems = document.querySelectorAll('.dropdown');
let submenuItems = document.querySelectorAll('.submenu');
let clickCheckMenu = null;

document.addEventListener('click', function(e){
    let parentNode = e.target.parentNode;
    if(parentNode.classList){
   
        if(parentNode.classList.contains('dropdown') ){
            if(!clickCheckMenu){
                clickCheckMenu = e.target;
                return;
            }else{
                if(!clickCheckMenu == e.target){
                    console.log(clickCheckMenu)
                    clickCheckMenu = null;
                    
                }
            }
           
            
        }
    }
    submenuItems.forEach(function(s){
        s.style.display = 'none';
    })
    clickCheckMenu = null;
})

//expand menu items
menuItems.forEach(function(f){
    f.addEventListener('click', function(e){
        // e.preventDefault();
        submenuItems.forEach(function(s){
            s.style.display = 'none';
        })
        qSubmenu = f.querySelector('.submenu');
        qSubmenu.style.display = "flex";
    })
})


// mobile btn
hamburger.addEventListener('click', function(){
    navbarUl = document.querySelector('#navbar-ul');
    socialmedia = document.querySelector('#socialmedia');
    console.log(navbarUl.style.display)
    if(navbarUl.style.display == "none" || navbarUl.style.display == ""){
        navbarUl.style.display = "flex";
        socialmedia.style.display = "flex";
    }else{
        navbarUl.style.display = "none"
        socialmedia.style.display = "none";
    }
})

//upscreen
const upScreen = document.querySelector('#up-screen')
window.addEventListener('scroll', function(e) {
    y = window.scrollY;
    if(y > 150){
        upScreen.style.display = 'initial';

    }else{
        upScreen.style.display = 'none'
    }
})
upScreen.addEventListener("click", function(){
    document.querySelector('html').scrollTo({
        top: 0,
        behavior: "smooth"
        })
})

// initialize homeinitial (where all the functions are running) after the page loads
document.addEventListener("DOMContentLoaded", homeinitial);


function homeinitial(){
    // home carousel
    let banner = document.querySelector("#banner")
    let homecarouselindex = 0;
    let homeleftarrow = banner.querySelector('.carousel-arrow-left');
    let homerightarrow= banner.querySelector('.carousel-arrow-right');
    let homeslider = banner.querySelectorAll('.carousel-slide');
    let homebullet = banner.querySelectorAll('.carousel-bullets');
    
    const firstBulletColor = homebullet[0].style;
    console.log(firstBulletColor)
    homeleftarrow.addEventListener('click', function(){

        clearInterval(chimageinterval);
        changeimage(1);
        chimageinterval = setInterval(changeimage, 5000)
        
    })
        
    homerightarrow.addEventListener('click', function(){

        clearInterval(chimageinterval);
        changeimage();
        chimageinterval = setInterval(changeimage, 5000)
    })


    f = homeslider[homecarouselindex];

    chimageinterval = setInterval(changeimage, 5000)

    function changeimage(f){

        let elem = homeslider[homecarouselindex];
        if(f){
            if(homecarouselindex == 0)
            {
                let homesliderlength = homeslider.length;
                // let homesliderlenghtminus = homesliderlength - 1
              
                next = homeslider[homesliderlength - 1]
                bullet = homebullet[homesliderlength - 1]

                homecarouselindex = homesliderlength  -1;

              
            }else{
                next = homeslider[+homecarouselindex-1]
                bullet = homebullet[+homecarouselindex-1]
                homecarouselindex = +homecarouselindex -1  
            }
         

        }else{
            if(homeslider.length == +homecarouselindex + 1)
            {
                next = homeslider[0]
                bullet = homebullet[0]

                homecarouselindex = 0;
            }else{
                next = homeslider[+homecarouselindex+1]
                bullet = homebullet[+homecarouselindex+1]

                homecarouselindex = +homecarouselindex +1  
            }
        }
        //clear indexes to prevent overlapping
        clearcarouselindexes()

        //start carousel animation

        
        carouselanimation()

        homebullet.forEach(function(h){
            h.style.backgroundColor = "white";
        })
        bullet.style.backgroundColor = "#838383";

        function clearcarouselindexes(){
            homeslider.forEach(function(e){
                e.style.zIndex = "9";
            })
        }

        function carouselanimation(){
            // setTimeout(function(){
            //     elem.style.opacity = 0;
            // }, 300)
            
            // next.style.opacity = 1;
            next.style.zIndex = 10;
        
            tl = gsap.timeline({ defaults:{duration: 1}})
            tl.to(elem, { ease: "power2", opacity: 0})
            tl.to(next, { ease: "power2", opacity: 1, delay:-.9})
         
        }
    }
}

//  checkboxes.forEach(function(e){
//    e.addEventListener('click', function(){
//        if(e.getAttribute('checked') ==  'checked'){
//            e.setAttribute('checked', null) ;
          
//        }else{
//            e.setAttribute('checked', 'checked') ;
//        }
//    })
// })