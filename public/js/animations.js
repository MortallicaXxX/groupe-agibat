setInterval(async function(){
  try{
    for(var e of document.getElementsByClassName('dynamic_value_toAnimate')){
      // console.log(e.getAttribute('class'));
      if(e.getAttribute('type')=="actif"){
        let max = parseInt(e.getAttribute('max')) , start = parseInt(e.getAttribute('start')) , curent = parseFloat(e.getAttribute('value'));
        let palier = max/4;
        if(curent < palier*2){
          e.innerHTML = Math.round(curent+3)+'%';
          e.setAttribute('value',curent+3);
        }
        else if(curent < (max-10)){
          e.innerHTML = Math.round(curent+2)+'%'
          e.setAttribute('value',curent+2);
        }
        else if(curent >= max){}
        else if((max-10) <= curent){
          e.innerHTML = Math.round(curent+0.2)+'%';
          e.setAttribute('value',curent+0.2);
          // if(Math.round(curent)==100){e.setAttribute('style','font-size:9vw;')}
        }
      }
    }
  }catch(err){
    console.log(err);
  }
},50)
