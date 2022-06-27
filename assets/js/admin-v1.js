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
// close flash msg
const closebtnflash = document.querySelectorAll('.close-btn-flash');
// get all the axios requests with link and id parameters
let axiosIdLink = document.querySelectorAll('.axios-id-link');


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
    document.querySelector('#socialmedia').style.display = "flex"
}

function initialphone(){
    // this function prevents the "display:flex" if the viewport change
    document.querySelector('#navbar-ul').style.display = "none"
}

document.addEventListener('click', function(e){
    let parentNode = e.target.parentNode;
    if(parentNode.classList){
   
        if(parentNode.classList.contains('dropdown') ){
            if(!clickCheckMenu){
                clickCheckMenu = e.target;
                return;
            }else{
                if(!clickCheckMenu == e.target){

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


logoContainer.addEventListener('click', function(e){
    window.location.hash = "";
    window.location.pathname = "/admin";
    
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

    if(navbarUl.style.display == "none" || navbarUl.style.display == ""){
        navbarUl.style.display = "flex";
        socialmedia.style.display = "flex";
    }else{
        navbarUl.style.display = "none"
        socialmedia.style.display = "none";
    }
})




// menu items scroll on click
menuLi.forEach(function(e){
    
    e.addEventListener('click', function(){
        if(e.dataset.scroll){
            
            link = e.dataset.scroll;
            element =  document.querySelector(link)
            // document.querySelector(link).scrollIntoView();
            if(window.location.pathname == e.dataset.route){

                scrollToTargetAdjusted(element);
            }else{

                let route = e.dataset.route + e.dataset.scroll
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


logoContainer.addEventListener('click', function(e){
    window.location.pathname = "/admin";
})

checkboxes.forEach(function(e){
    e.addEventListener('click', function(){
        if(e.classList.contains('checkbox-target')){
            searchElem = "[name='" + e.dataset.target + "']"; 
            elem = document.querySelector(searchElem)
            if(elem.style.display == "flex"){
                elem.style.display = 'none';
            }else{
                elem.style.display = 'flex';
            }
        }
        if(e.getAttribute('checked') ==  'checked'){
            e.setAttribute('checked', null) ;
        }else{
            e.setAttribute('checked', 'checked') ;
        }
    })
})

//
// initialize admininitial (where all the functions are running) after the page loads
document.addEventListener("DOMContentLoaded", admininitial);



function admininitial(){
    //create a fade loading page for the body
    window.addEventListener('load', function(f){
        //display initial panel
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
        bullet.style.backgroundColor = "#2f8638";

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

//close flash msg
closebtnflash.forEach(function(e){
    e.addEventListener('click', function(){
        e.parentElement.style.display = 'none';
        e.parentElement.style.opacity = '0';

    })
})

//

if(axiosIdLink){
   
    axiosIdLink.forEach(function(f){
        f.addEventListener('click', function(e){
            id = f.dataset.id
            link = f.dataset.link
            axios.post(link,{
                id:id})
                .then(res =>{

                    if(!f.dataset.noreset){
                          location.reload();
                       
                    }else{
                        // if the element has data-noreset="true", the page will not be refreshed
                      
                    }
                   
                })
                .catch(err =>console.log(err));          
        })
    })
}




/// DATEPICKER
const myInput = document.querySelectorAll(".dateinput");
// Create new Date instance
// let date = new Date()
// date.setDate(date.getDate() + 364)
const fp = flatpickr(myInput, {
    altInput: true,
    altFormat: "d F Y",
    dateFormat: "Y-m-d",
    "locale": "ro",
    // minDate: "today",
    // maxDate:new Date().fp_incr(364),
    // inline: true,
});  // flatpickr

//  checkboxes.forEach(function(e){
//    e.addEventListener('click', function(){
//        if(e.getAttribute('checked') ==  'checked'){
//            e.setAttribute('checked', null) ;
          
//        }else{
//            e.setAttribute('checked', 'checked') ;
//        }
//    })
// })