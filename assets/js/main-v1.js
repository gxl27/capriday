let hamburger =  document.querySelector('#navbar-mobile-btn');
let menuItems = document.querySelectorAll('.dropdown');
let submenuItems = document.querySelectorAll('.submenu');
let clickCheckMenu = null;

document.addEventListener('click', function(e){
    // if (!document.getElementById('l2').contains(e.target) && (!document.getElementById('logo-menu').contains(e.target))){
    //     alert("Clicked outside l2 and logo-menu");
    //      document.getElementById('l2').style.height="0px"; //the same code you've used to hide the menu
    //   } 
   
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

// let main = document.querySelector('#main');
// // let mainMatrix = document.querySelector('#main-matrix');
// let matrixSpans = document.querySelectorAll('.terminal');
// let overlay = document.querySelector('#overlay');
// let checkboxes = document.querySelectorAll('input[type=checkbox]');
// var svgimages = document.querySelectorAll('.svg-image');

// document.addEventListener("DOMContentLoaded", initialanimation);



//  function initialanimation(){

//   window.addEventListener('load', function(f){
//     //display initial homepage
//       tl = gsap.timeline({ defaults:{duration: .5}})
//       tl.to(main, { ease: "expo", opacity: 1});

//     //display monitor animation
//     let imageindex = 0;
//     monitoranimation();


//     function monitoranimation(){

//         f = svgimages[imageindex];
//       console.log(f)
//         chimageinterval = setInterval(changeimage, 5000)

//         function changeimage(f){
            
//             let elem = svgimages[imageindex];
//             if(f){
//                 if(imageindex == 0)
//                 {
//                     let svgimageslength = svgimages.length;
//                     // let svgimageslenghtminus = svgimageslength - 1
                  
//                     next = svgimages[svgimageslength - 1]
              
//                     imageindex = svgimageslength  -1;

                  
//                 }else{
//                     next = svgimages[+imageindex-1]
//                     imageindex = +imageindex -1  
//                 }
            

//             }else{
//                 if(svgimages.length == +imageindex + 1)
//                 {
//                     next = svgimages[0]
//                     imageindex = 0;
//                 }else{
//                     next = svgimages[+imageindex+1]
//                     imageindex = +imageindex +1  
//                 }
//             }
//             carouselanimation()
          
//             function carouselanimation(){
//                 tl = gsap.timeline({ defaults:{duration: 1}})
//                 tl.to(elem, { ease: "power2", opacity: 0})
//                 tl.to(next, { ease: "power2", opacity: 1, delay: -.9})
//             }

//         }
//       }         
//   });

        

// }

//  checkboxes.forEach(function(e){
//    e.addEventListener('click', function(){
//        if(e.getAttribute('checked') ==  'checked'){
//            e.setAttribute('checked', null) ;
          
//        }else{
//            e.setAttribute('checked', 'checked') ;
//        }
//    })
// })