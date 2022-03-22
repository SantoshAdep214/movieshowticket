function Validate()
{
    let name=document.getElementById('txtname').value;
     console.log(name);

    if(name=="")
    {
        document.getElementById('s1').innerHTML='Pls Enter price'
        event.preventDefault() //prevents server request
    }
    else if(name==100)
    {
        alert("You have booked your movie ticket successfully..")
    }

    else if(name!=100)
    {
        alert("Plese select 100.");
        event.preventDefault(); //prevents server request
    }
    else
    {
        document.getElementById('s1').innerHTML='Pls Enter price'
        event.preventDefault() //prevents server request
    }
    
    

   
}