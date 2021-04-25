class DIAPO{

  id_image = 0;
  #delay = 6000;
  #animer=false;

  files = ["1","2","3","4","5","6"];

  __animation(THIS = this){
    if(document.getElementById('container').getAttribute('name')=='index'){
      document.getElementById('container').children[0].children[1].setAttribute('style','background-image: url(./images/diapo/'+THIS.files[THIS.id_image]+'-min.jpeg);'); // changement de fond
      THIS.#__update_arow_id();
      THIS.#__custom_scroll_radio_like();
      setTimeout(function(){
        if(document.getElementById('container').children[0].children[1].getAttribute('class')=='active')turnActive(document.getElementById('container').children[0].children[1]);
      },500)
    }
    if(THIS.#animer == true){
      setTimeout(function(){
        turnActive(document.getElementById('container').children[0].children[1]);
        setTimeout(function(){
            THIS.id_image++;
            if(THIS.id_image == THIS.files.length)THIS.id_image = 0;
            THIS.__animation();
        },500);
      },THIS.#delay);
    }
  }

  #__custom_scroll = function(i,THIS=this){
    if(i==THIS.id_image){
      return [{
        type:'div',
        prop:{class:'active',name:'point',id:i,style:'grid-column:'+(i+1)+';grid-row:1;',onclick:'diapo_switch(this)'},
      }]
    }
    else{
      return [{
        type:'div',
        prop:{name:'point',id:i,style:'grid-column:'+(i+1)+';grid-row:1;',onclick:'diapo_switch(this)'},
      }]
    }
  }

  #__update_arow_id = function(THIS = this){
    if(THIS.id_image == 0){
      let test = THIS.files.length-1;
      document.getElementById('container').children[0].children[1].children[0].children[0].setAttribute('id',test);  // changement d'id fleche gauche
      document.getElementById('container').children[0].children[1].children[0].children[1].setAttribute('id',(THIS.id_image+1));  // changement d'id fleche droite
    }
    else if(THIS.id_image == (THIS.files.legnth-1)){
      document.getElementById('container').children[0].children[1].children[0].children[0].setAttribute('id',(THIS.id_image-1));  // changement d'id fleche gauche
      document.getElementById('container').children[0].children[1].children[0].children[1].setAttribute('id',0);  // changement d'id fleche droite
    }
    else{
      document.getElementById('container').children[0].children[1].children[0].children[0].setAttribute('id',(THIS.id_image-1));  // changement d'id fleche gauche
      document.getElementById('container').children[0].children[1].children[0].children[1].setAttribute('id',(THIS.id_image+1));  // changement d'id fleche droite
    }
  }

  #__custom_scroll_radio_like = function(THIS=this){
    try{
      for(var e of document.getElementById('container').children[0].children[1].children[1].children[0].children){
        if(e.getAttribute('id')!=THIS.id_image && e.getAttribute('class') == 'active')turnActive(e);
        if(e.getAttribute('id')==THIS.id_image && e.getAttribute('class') != 'active')turnActive(e);
      }
      // turnActive(document.getElementById('container').children[0].children[1].children[1].children[0].children[THIS.id_image]); // on tourne actif l'element présent
    }catch(err){console.log(err);}
  }

  __stop(){
    this.#delay = 0;
    this.#animer = false;
  }

  __change_image(id_new_image){
    id_new_image = parseInt(id_new_image);
    if(id_new_image < 0)id_new_image = (this.files.length-1);
    if(id_new_image > this.files.length-1)id_new_image = 0;
    document.getElementById('container').children[0].children[1].setAttribute('style','background-image: url(./images/diapo/'+this.files[id_new_image]+'-min.jpeg);');
    this.id_image = id_new_image;
    this.#__update_arow_id();
    this.#__custom_scroll_radio_like();
  }

  constructor(THIS = this){
    var i = 0;
    for(var e of THIS.files){
      builder(document.getElementById('container').children[0].children[1].children[1].children[0],THIS.#__custom_scroll(i))
      i++;
    }
    THIS.#animer = true;
    THIS.__animation();
  }
}
