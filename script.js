
let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let apm=document.getElementById('apm');
let dd=document.getElementById('dd');



setInterval(()=>{
    let time = new Date();
    // console.log(time);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    dd.innerHTML = days[time.getDay()] +" ,"+time.getDate()+"-"+(time.getMonth()+1) +"-"+time.getFullYear();

    if(time.getHours()>11){
        apm.innerHTML = "PM";
        if(time.getHours()>12 && time.getHours()<22){
            hrs.innerHTML = "0" + (time.getHours()-12);
        }else if(time.getHours()>21 && time.getHours()<24){
            hrs.innerHTML = time.getHours()-12;
        }else{
            hrs.innerHTML = time.getHours();
        }
    }else if(time.getHours()==0){
        hrs.innerHTML = 12;
        apm.innerHTML = "AM";
    }else if(time.getHours()>0 && time.getHours()<10){
        hrs.innerHTML = (time.getHours()<10?"0":"")+ time.getHours();
        apm.innerHTML = "AM";
    }
    else{
        hrs.innerHTML = time.getHours();
        apm.innerHTML = "AM";
    }
    min.innerHTML = (time.getMinutes()<10?"0":"")+ time.getMinutes();
    sec.innerHTML = (time.getSeconds()<10?"0":"")+ time.getSeconds();

    // mid night
    if(time.getHours()==23){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/12690563/pexels-photo-12690563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }
    if(time.getHours()>-1 && time.getHours()<5){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/12690563/pexels-photo-12690563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }
// mid night
//sunrise
    if(time.getHours()>4 && time.getHours()<7){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1598085325698-1b9871809129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')"
    }
    // sunrise
    // morning
    if(time.getHours()>6 && time.getHours()<11){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }
    // morning
    // noon
    if(time.getHours()>10 && time.getHours()<14){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1616559651213-a96a67c5620e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')"
    }
    // noon
    // afternoon
    if(time.getHours()>13 && time.getHours()<18){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/7245256/pexels-photo-7245256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }
    // afternoon
    // evening
    if(time.getHours()>17 && time.getHours()<19){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg')"
    }
    // night
    if(time.getHours()>18 && time.getHours()<23){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/939807/pexels-photo-939807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }
    // ngiht

},1000);





