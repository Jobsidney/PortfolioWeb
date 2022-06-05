const more=document.querySelector('#moreStory');
const exploApp=document.querySelector('#mobiApp');
const exploWeb=document.querySelector('#exploWeb');


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
