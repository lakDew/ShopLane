
let logo=document.querySelector('.logo');

    logo.addEventListener('click',function(e){
    location.replace('/index.html')
    })

    localStorage.removeItem('id');
    localStorage.removeItem('quantity');

    function gotoCart(){
        let cart =document.querySelector('.cart');
        cart.addEventListener('click',function(e){
          location.href='./cart.html';
          
        })
      
      }
      
      gotoCart();