let content = document.querySelector('#content')
let hamburger =  document.querySelector('#navbar-mobile-btn');
let menuItems = document.querySelectorAll('.dropdown');
let submenuItems = document.querySelectorAll('.submenu');
let clickCheckMenu = null;
let checkboxes = document.querySelectorAll('input[type=checkbox]');
// set link to the logo for the homepage
let logoContainer = document.querySelector('#logo-container');
// get submenu links
let menuLi = document.querySelectorAll('.submenu a')
//get the height of the navbar for the scrolling effect
window.heightnavbar = document.querySelector('nav').style.height;
//loginbar minimize
let loginbar = document.querySelector('#loginbar')
let minimize = document.querySelector('.minimize')
const closebtnflash = document.querySelectorAll('.close-btn-flash');

//expand text
let textExpand = document.querySelectorAll('.text-expand')
let textExpandButton = document.querySelectorAll('.text-expand-button')

let galleryCard = document.querySelectorAll('.gallery-card')

// check match media to prevent elements 
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 1189px)");
    
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
 
  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
        //phone
        initialphone();

    } else {
        initialpc();
      // pc
    // 
    }

}
function initialpc(){
    // this function prevents the "display:none" if the viewport change
    document.querySelector('#navbar-ul').style.display = "flex"
    document.querySelector('#navbar-ul').style.opacity = 1
    document.querySelector('#socialmedia').style.display = "flex"
}

function initialphone(){
    // this function prevents the "display:flex" if the viewport change
    document.querySelector('#navbar-ul').style.display = "none"
    document.querySelector('#navbar-ul').style.opacity = 0
}

// key press function

keypressdocument();


// document.addEventListener('click', function(e){
//     let parentNode = e.target.parentNode;
//     if(parentNode.classList){
   
//         if(parentNode.classList.contains('dropdown') ){
//             if(!clickCheckMenu){
//                 clickCheckMenu = e.target;
//                 return;
//             }else{
//                 if(!clickCheckMenu == e.target){
//                     clickCheckMenu = null;
                    
//                 }
//             }
           
            
//         }
//     }
//     submenuItems.forEach(function(s){
//         s.style.display = 'none';
//     })
//     clickCheckMenu = null;
// })

logoContainer.addEventListener('click', function(e){
    window.location.hash = "#";
    window.location.pathname = "/home";
    
})



// mobile btn
hamburger.addEventListener('click', function(){
    navbarUl = document.querySelector('#navbar-ul');
    socialmedia = document.querySelector('#socialmedia');
    let opacityValue;
    let tl = gsap.timeline({ defaults:{duration: .3}})

    if(navbarUl.style.display == "none" || navbarUl.style.display == ""){
        navbarUl.style.display = "flex";
        socialmedia.style.display = "flex";
        opacityValue = 1;

    }else{
        navbarUl.style.display = "none"
        socialmedia.style.display = "none";
        opacityValue = 0;

    }
    tl.to(navbarUl, { ease: "power2", opacity: opacityValue})
  
   
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

// BUTTONS
checkboxes.forEach(function(e){
    e.addEventListener('click', function(){
        if(e.getAttribute('checked') ==  'checked'){
            e.setAttribute('checked', null) ;
        }else{
            e.setAttribute('checked', 'checked') ;
        }
    })
})

//expand menu items
menuItems.forEach(function(f){
    f.addEventListener('click', function(e){
        let selectedMenu = f.querySelector('.submenu');
        let check = selectedMenu.style.display;

        let opacityValue;
        let tl = gsap.timeline({ defaults:{duration: .3}})
        

        submenuItems.forEach(function(s){
            if(s.style.display == 'flex'){
                s.style.display = 'none';
            }
        })
        if(check == "flex"){
            selectedMenu.style.display = "none";
            opacityValue = 0;
        }else{
            selectedMenu.style.display = "flex";
            opacityValue = 1;
        }
        tl.to(selectedMenu, { ease: "power2", opacity: opacityValue})
            
        
    })
})

// menu items scroll on click
menuLi.forEach(function(e){  
    e.addEventListener('click', function(){
        if(e.dataset.scroll){
            link = e.dataset.scroll;
            // document.querySelector(link).scrollIntoView();
            if(window.location.pathname == e.dataset.route && link != "#"){
                element =  document.querySelector(link)
                scrollToTargetAdjusted(element);
            }else{
                let route = e.dataset.route
                if(e.dataset.scroll != "#"){
                   route = route +  e.dataset.scroll
                }
                window.location = route
            }
            
        }
       
    })

})

function scrollToTargetAdjusted(scrolledelement){
    
    let body = document.body.getBoundingClientRect().top
    let headerOffset = window.heightnavbar;
    let elementPosition = scrolledelement.getBoundingClientRect().top;
    let offsetPosition = elementPosition - headerOffset - body;
    if(headerOffset == 0 && scrolledelement.id == "s-acasa"){
        offsetPosition = 0;
    }


    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

minimize.addEventListener('click', function(e){
    let elem = minimize.querySelectorAll('div')[0]

        if(elem.style.display !== 'none') {
            loginbar.querySelectorAll('div')[0].style.display = 'none';
            loginbar.querySelector('div .btn').style.display = 'none';
            minimize.querySelectorAll('div')[0].style.display = 'none';
            minimize.querySelectorAll('div')[1].style.display = 'initial';
            opacityValue = 0;
        }else{
            loginbar.querySelectorAll('div')[0].style.display = 'initial';
            loginbar.querySelector('div .btn').style.display = 'initial';
            minimize.querySelectorAll('div')[0].style.display = 'initial';
            minimize.querySelectorAll('div')[1].style.display = 'none';
            opacityValue = 1;
        }
 
    })

logoContainer.addEventListener('click', function(e){
    window.location.pathname = "/home";
})

//close flash msg
closebtnflash.forEach(function(e){
    e.addEventListener('click', function(){
        e.parentElement.style.display = 'none';
        e.parentElement.style.opacity = '0';

    })
})

closebtnflash.forEach(function(e){
    e.addEventListener('click', function(){
        e.parentElement.style.display = 'none';
        e.parentElement.style.opacity = '0';

    })
})

// add transparent background for "read more" expandable text
function createTransparentBg(expandElement){
    let transparentBg = document.createElement('div');
    transparentBg.classList.add('transparentBg');
    expandElement.appendChild(transparentBg);
}

function removeTransparentBg(expandElement){
    transparentBg = expandElement.querySelector('.transparentBg');
    transparentBg.remove();
}

textExpand.forEach(function(f){

    let children = f.querySelector('div')
    let childrenHeight = children.clientHeight ;
    let elementHeight = f.clientHeight ;
    let expand = f.parentNode.querySelector('.text-expand-button');
    if(childrenHeight > elementHeight){
        createTransparentBg(f)
        expand.style.display = 'flex';
        expand.dataset.click = "0";
        expand.innerHTML = "<b>... more</b>";
        
    }

    expand.addEventListener('click', function(e){
        let tl = gsap.timeline({ defaults:{duration: .3}})
        let heightMax;
        let overflowValue;
        let delayValue;
       
        if(expand.dataset.click == 0){
          
            removeTransparentBg(f)
            expand.dataset.click = "1";
            expand.innerHTML = "<b>less</b>";
            
            overflowValue = "initial"
            newheight = children.clientHeight
            heightMax = +50+newheight +"px";
            delayValue = "0"
            f.style.position = "relative";
            
        }else {
            createTransparentBg(f)
            expand.dataset.click = "0";
            expand.innerHTML = "<b>... more</b>";
            
            overflowValue = "hidden"
            heightMax = elementHeight+"px";
            delayValue ="-.3";
           
        }
        tl.to(f, { ease: "power2", maxHeight: heightMax})
        .to(f, {ease:"power2", overflow: overflowValue, delay:delayValue});
    })

   

})

//


//
// initialize homeinitial (where all the functions are running) after the page loads
document.addEventListener("DOMContentLoaded", homeinitial);



function homeinitial(){
    //create a fade loading page for the body
    window.addEventListener('load', function(f){
    //display initial homepage
    tl = gsap.timeline({ defaults:{duration: .5}})
    tl.to(content, { ease: "expo", opacity: 1});
    })

    // home carousel
    let banner = document.querySelector("#banner")
    if(!banner){
        return;
    }
    
    let homecarouselindex = 0;
    let homeleftarrow = banner.querySelector('.carousel-arrow-left');
    let homerightarrow= banner.querySelector('.carousel-arrow-right');
    let homeslider = banner.querySelectorAll('.carousel-slide');
    let homebullet = banner.querySelectorAll('.carousel-bullets');
    
    const firstBulletColor = homebullet[0].style;
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
        bullet.style.backgroundColor = "#395531";

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


function keypressdocument(){
    document.onkeydown = function(event) {
        if (event.keyCode == 27){
            let selectedMenu = document.querySelectorAll('.submenu');

            selectedMenu.forEach(function(s){
                if(s.style.display == 'flex'){
                    s.style.display = 'none';
                }
            })
        }
    }



        // closebtn.forEach(function(e){
        //     e.parentElement.parentElement.parentElement.style.display = 'none'
        //     e.parentElement.parentElement.parentElement.style.opacity = '0'
        // })
        // closebtnflash.forEach(function(e){
        //     e.parentElement.style.display = 'none'
        //     e.parentElement.style.opacity = '0';
        // })
        // closebtnsq.forEach(function(e){
        //     e.parentElement.parentElement.parentElement.style.display = 'none'
        //     e.parentElement.parentElement.parentElement.style.opacity = '0'
        // })
        // }
        // if (event.keyCode == 13){
        //     acceptbtn.forEach(function(e){
        //         e.parentElement.style.display = 'none'
        //         e.parentElement.style.opacity = '0';
        //     })
          
        // }
   
}

if(galleryCard){
    galleryCard.forEach(function(f){
        f.addEventListener('click', function(){
            window.location = f.dataset.link
           
        })
    })
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