const more=document.querySelector('#moreStory');
const exploApp=document.querySelector('#mobiApp');
const exploWeb=document.querySelector('#exploWeb');
const button=document.getElementById('.btnStory');


//navigation fucntion
function navigate(identification,event,url) {
    identification.addEventListener(`${event}`,function(){
        window.location.href=`${url}`;
    })
    
}

//navigation calling function
navigate(more,"click","https://github.com/Jobsidney");
navigate(exploApp,"click","https://github.com/Jobsidney/weatherApp.git");
navigate(exploWeb,"click","https://jobsidney.github.io/Quiz-Board/");


//hover effect
more.addEventListener("mouseover",function(){
    more.style.backgroundColor='yellow';
    more.style.color='black';
})
more.addEventListener("mouseout",function(){
    more.style.backgroundColor='transparent';
    more.style.color='yellow';
})

exploApp.addEventListener("mouseover",function(){
    exploApp.style.backgroundColor='yellow';
    exploApp.style.color='black';
});
exploApp.addEventListener("mouseout",function(){
    exploApp.style.backgroundColor='transparent';
    exploApp.style.color='yellow';
})

exploWeb.addEventListener("mouseover",function(){
    exploWeb.style.backgroundColor='yellow';
    exploWeb.style.color='black';
});
exploWeb.addEventListener("mouseout",function(){
    exploWeb.style.backgroundColor='transparent';
    exploWeb.style.color='yellow';
})
