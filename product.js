

  let locationString=location.search.split('=');
  let itemId=locationString[1];
 
  
  $.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${itemId}`,
  function(data){
    product(data)
  })
  
   

    function addCart(id){
    var idArray=[];
    var quantityArray=[];
    var position=0;
    let count=0;
    let cart=document.querySelector('.add-to-cart');
    
    
     if((localStorage.getItem('id')!=null)){
     idArray=JSON.parse(localStorage.getItem('id'))
     quantityArray=JSON.parse(localStorage.getItem('quantity'))

     var check=false;
     let i;
     for(i=0;i<idArray.length;i++){
      
      if(id==idArray[i]){
        
        check=true;
        count=quantityArray[i];
        break;

      }

      }
      if(check){
        position=i;
      }
      else{
        position=idArray.length
      }


     }
      
     
     
    
  
    cart.addEventListener('click',function(e){
      count++;
      idArray[position]=id;
      quantityArray[position]=count;
      localStorage.setItem('id',JSON.stringify(idArray));
      localStorage.setItem('quantity',JSON.stringify(quantityArray));
      

      let cart=document.querySelector('.cart-item')
      if(quantityArray.length!=0){
        let total=0;
        for(a of quantityArray){
          total+=a;
        }
        cart.innerHTML=total;
        cart.classList.remove('d-none')
      }
     
     


    })
  
  }

  addCart(Number(itemId));

 
//   function addCart(id){
//     let cart=document.querySelector('.add-to-cart');
//     let idObj={
//       list:[],
//     };
//     let quantityObj={};
//     if((localStorage.getItem('id')!=null)){
//       idObj=JSON.parse(localStorage.getItem('id'))
//       quantityObj=JSON.parse(localStorage.getItem('quantity'))
//     }

//     cart.addEventListener('click',function(e){
     
//       if(quantityObj[id]==undefined){

//         idObj.list.push(id);
//         quantityObj[id]=1;
        

//       }
//       else{
//         ++quantityObj[id]
//       }

//       localStorage.setItem('id',JSON.stringify(idObj));
//       localStorage.setItem('quantity',JSON.stringify(quantityObj));

//     })


//   }
// addCart(itemId)



  function product(obj){

    let previewMain=document.querySelector('.preview-main');
    let previewMainImage=document.createElement('img');

    previewMainImage.setAttribute('src',obj.preview);
    previewMain.append(previewMainImage);

    let prouctDetail=document.querySelector('.name');
    prouctDetail.innerHTML=obj.name;

    let prouctBrand=document.querySelector('.brand');
    prouctBrand.innerHTML=obj.brand;

    let prouctRupees=document.querySelector('.price-tag .rupees');
    prouctRupees.innerHTML=obj.price;

    let prouctDescription=document.querySelector('.description-detail');
    prouctDescription.innerHTML=obj.description;

    let preview=document.querySelector('.preview');
    

    let previewImgArr=obj.photos;
    for( pre of previewImgArr ){
       let photoDiv= photo(pre);
       preview.appendChild(photoDiv);
    } 
    



  }
  


  function photo(link){
    let photoDiv=document.createElement('div');
    photoDiv.className='photo';

    let photoImg=document.createElement('img');
    photoImg.setAttribute('src',link)
    photoDiv.appendChild(photoImg)
    photoDiv.addEventListener('click',function(e)
    {
        let img=document.getElementsByClassName('photo');
        for(a of img){
                a.style.border='none';
                photoDiv.style.border='4px solid #009688';
            }

        let previewMain=document.querySelector('.preview-main img');
        previewMain.setAttribute('src',link)


    })


    return photoDiv;

  }

  
    let logo=document.querySelector('.logo');

    logo.addEventListener('click',function(e){
    location.replace('/index.html')
    })


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
  cart();
  

  function gotoCart(){
    let cart =document.querySelector('.cart');
    cart.addEventListener('click',function(e){
      location.href='./cart.html';
      
    })
  
  }
  
  gotoCart();
  


  