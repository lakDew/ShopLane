


$(".hero-banner").slick({
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  
});


let clothes=document.querySelector(".clothes")
let acces=document.querySelector(".acces")

let request=new XMLHttpRequest();
request.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true);
request.send();
request.onreadystatechange=function(){
  if(this.readyState==4){
    let data=JSON.parse(this.responseText);
    for(product of data){
      addItem(product);
    }
    cart();
  }
}





function addItem(obj){

    let div=document.createElement('div');
    div.classList.add('card');
   

    let img=document.createElement('img');
    img.setAttribute('src',obj.preview);
    div.appendChild(img);

    let para=document.createElement('p');
    para.innerHTML=obj.name;
    para.classList.add('name')
    div.appendChild(para);

    let brand=document.createElement('p');
    brand.innerHTML=obj.brand;
    brand.classList.add('brand');
    div.appendChild(brand);

    let rs=document.createElement('span');
    rs.innerHTML='Rs';
   rs.classList.add('rs');
   div.appendChild(rs);

   let price=document.createElement('span');
   price.innerHTML=obj.price;
  price.classList.add('price');
  div.appendChild(price);


  if(obj.isAccessory==false){
    clothes.appendChild(div)
  }
  else{
    acces.appendChild(div)
  }

  div.addEventListener('click', function(e){
  
    let path=`/product.html?id=${obj.id}`;
    location.href=path;
  
    
  })



}



function cart(){
  let total=0;
  let cart=document.querySelector('.cart-item')

  if(localStorage.getItem('quantity')!=null){
    let arr=JSON.parse(localStorage.getItem('quantity'))
    for(a of arr){
      total+=a;

    }
  }
 

  if(total!=0){
    cart.innerHTML=total;
    cart.classList.remove('d-none');
  }

}



function gotoCart(){
  let cart =document.querySelector('.cart');
  cart.addEventListener('click',function(e){
    location.href='./cart.html';
    
  })

}

gotoCart();



