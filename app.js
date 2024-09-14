btn=document.querySelector('.submit');

daysdiv=document.querySelector('.days');
hrsdiv=document.querySelector('.hrs');
mindiv=document.querySelector('.min');
secdiv=document.querySelector('.sec');

dateee=document.querySelector('#date input');
month=document.querySelector('#month input');
year=document.querySelector('#year input');
hr=document.querySelector('#hr input');
mins=document.querySelector('#min input');
secs=document.querySelector('#sec input');

let countdown = () => {
    enddate = date;
    currdate = new Date();
    diff = enddate - currdate;
    
    days = Math.floor(diff/1000/60/60/24);
    hrs = Math.floor((diff/1000/60/60)%24);
    min = Math.floor((diff/1000/60)%60);
    sec = Math.floor((diff/1000)%60);
    
    daysdiv.innerText=days;
    hrsdiv.innerText=hrs;
    mindiv.innerText=min;
    secdiv.innerText=sec;
}

btn.addEventListener('click',(evt) => {
    evt.preventDefault();
    dateval=parseInt(dateee.value);
    monthval=month.value;
    yearval=parseInt(year.value);
    hrval=parseInt(hr.value);
    minval=parseInt(mins.value);
    secval=parseInt(secs.value);
    currdate = new Date();

    date=new Date(`${dateval} ${monthval} ${yearval} ${hrval}:${minval}:${secval}`);
    diff = date - currdate;

    if(dateval=='' || monthval=='' || yearval=='' || hrval=='' || minval=='' || secval=='')
    {
            alert('Please fill all the fields');
            return false;
    }
    else if(date=='Invalid Date')
    {
        console.log('else if');
        alert('Invalid Date or Time');
    
        daysdiv.innerText='00';
        hrsdiv.innerText='00';
        mindiv.innerText='00';
        secdiv.innerText='00';
        // return false;
    }
    else if(diff<0)
    {
        alert('Countdown date can not be less than current date');
        return false;
    }
    else
    {   
        setInterval(countdown,1000);
    }
})