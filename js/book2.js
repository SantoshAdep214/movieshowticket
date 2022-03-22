function movie()
        {
            let n=document.getElementById('sel').value; //return value of t1 textbox
            //document.getElementById('s2').innerHTML='';
           
            if(n=="")
            {
            alert("select your movie");
            }
            else
            {
           alert("you selected "+n+" movie")
            }

            return n;
}



function firstclass()
{
    let a=movie();
    let b=a;
    if(b=="")
    {
    alert("select your movie");
    event.preventDefault();
    de
    }
    else
    {
        alert("Welcome to firstclass ticket")
    }
    //alert("Welcome to firstclass ticket");


}


function secondclass()
{
    let a=movie();
    let b=a;
    if(b=="")
    {
    alert("select your movie");
    event.preventDefault();
    de
    }
    else
    {
        alert("Welcome to secondclass ticket")
    }
    //alert("Welcome to firstclass ticket");


}


function thirdclass()
{
    let a=movie();
    let b=a;
    if(b=="")
    {
    alert("select your movie");
    event.preventDefault();
    de
    }
    else
    {
        alert("Welcome to thirdclass ticket")
    }
    //alert("Welcome to firstclass ticket");


}

