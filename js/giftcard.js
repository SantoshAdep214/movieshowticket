function sub()
{
    let name=document.getElementById('txtname').value;
    let  email=document.getElementById('txtemail').value;
    let date=document.getElementById('txtdate').value;
    let voucher=document.getElementById('txtvoucher').value;
    let mobile=document.getElementById('txtmobile').value;
    
    if(name=="")
    {
        alert("enter your name");

    }
    else  if(mobile=="")
    {
        alert("enter your mobile..")
    }

    else  if(email=="")
    {
        alert("enter your email...")
    }

    else  if(date=="")
    {
        alert("enter your date..")
    }

    else  if(voucher=="")
    {
        alert("enter your voucher..")
    }

    else
    {
       alert("successfully you have taken your voucher...")
       window.AnimationEffect();
        event.preventDefault() //prevents server request
    }
    
    

   
}



    
    

   
