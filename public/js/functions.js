// eventListener

window.addEventListener('resize',screen_stats_update())

function screen_stats_update(){

  return new Promise(function(next){
    screen.stats = {
      height:document.getElementsByTagName('html')[0].clientHeight,
      width:document.getElementsByTagName('html')[0].clientWidth
    }
    screen.working_stats = {
      height:document.getElementById('mainContainer').clientHeight,
      width:document.getElementsByTagName('mainContainer').clientWidth
    }

    // redimetionnement des subPage de Index

    try{
      var container = document.getElementById('container');
      if(container.getAttribute('name') == 'index'){ // redimetionnement des subPage de Index
        for(var e of document.getElementById('container').children){
          if(e.getAttribute('name')!='header'){
            if(e.getAttribute('name')!='services'&&
              e.getAttribute('name')!='deperditions'&&
              e.getAttribute('name')!='engagements'&&
              e.getAttribute('name')!='promesses'&&
              e.getAttribute('name')!='question_projet'&&
              e.getAttribute('name')!='footer'){
                e.setAttribute('style','height:'+(screen.stats.height*0.9)+'px;width:'+screen.stats.width+'px');
            }
          }
          else{
            e.setAttribute('style','height:'+screen.stats.height+'px;width:'+screen.stats.width+'px');
          }
        }
      }
    }catch(err){

    }

    try{
      var box = document.getElementById('box');
      if(box){
        box.setAttribute('style','height:'+screen.stats.height+'px;width:'+screen.stats.width+'px');
      }else{
        gui.contact[0].prop.style='height:'+screen.stats.height+'px;';
      }
    }catch(err){

    }

    next(screen);
  })
}

window.addEventListener('scroll',async function(e){
  screen_stats_update();
  // scroll pour le menu
  lastY = window.scrollY;
  console.log((lastY/screen.working_stats.height)*100);
  if(lastY == 0){
    turnActive(document.getElementById('headband'));
    turnActive(document.getElementById('headband').children[0]);
  }else{
    if(document.getElementById('headband').className != ''){
      turnActive(document.getElementById('headband'));
      turnActive(document.getElementById('headband').children[0]);
    }
  }

  // scroll pour les animations
  var height = document.getElementById('mainContainer').clientHeight;
  // console.log(height);
  // console.log((lastY/height)*100,'%');
  try{
    for(var e of document.getElementsByClassName('dynamic_value_toAnimate')){
      // console.log(e,e.getAttribute('scroll'));
      let scroll = parseFloat(e.getAttribute('scroll'));
      // console.log((lastY/height)*100,scroll);
      if((lastY/height)*100 >= scroll){e.setAttribute('type','actif')};
    }
  }catch(err){
    // console.log(err);
  }
})

// fonction APP

  // tourne actif elem , parent ou exécute f
function turnActive(elem,parent,f){
  if(elem.className == 'active'){
    elem.className = '';
  }else{
    elem.className = 'active';
  }

  if(parent){
    if(parent.className == 'active'){
      parent.className = '';
    }else{
      parent.className = 'active';
    }
  }

  if(f){f}
}

function radioLikeClassActive(elem,parent){
  console.log(elem,parent);
  for(var e of parent.children){
    console.log(e);
    console.log(e.getAttribute('value') , elem.getAttribute('value'));
    if(e.getAttribute('class')=='active' && e.getAttribute('value') != elem.getAttribute('value')){turnActive(e)}
  }
}

function closeAllActiveExeption(parent,comparator){
  if(comparator.length < 1){return null}
  let param = Object.keys(comparator)[Object.keys(comparator).length-1];
  for(var e of parent.children){
    if(e.getAttribute('name')=='desc'){
      if(e.getAttribute('value') != comparator[param] && e.className == 'active'){turnActive(e)}
    }
  }
}

  //
async function openBox(name){
  await builder(document.getElementsByTagName('body')[0],gui[name]);
}

function closeBox(){
  if(document.getElementById('box')){
    document.getElementById('box').remove();
    closeBox();
  }
  // console.log(document.getElementById('box'));
  // document.getElementById('box').remove();
}

function closeBanner(){document.getElementById('banner').remove();}

async function changePage(toPageName){
  // console.log('changePage');
  document.getElementById('container').remove();
  diapo.__stop();
  await builder(document.getElementById('mainContainer'),gui[toPageName]).then(function(){if(toPageName == 'index')diapo = new DIAPO();})
  scroll(0,0);
}

async function changePage_link(toPageName,yScroll){
  document.getElementById('container').remove();
  await builder(document.getElementById('mainContainer'),gui[toPageName]).then(function(){
    screen_stats_update()
    .then(scroll(0,screen.working_stats.height*(yScroll/100)))
  });
}

async function diagnosticSwitchDown(elem){
    let elemtId = parseInt(elem.getAttribute('value'));
    for(var e of elem.parentNode.children){
      if(e.getAttribute('value')==elemtId-1){
        turnActive(e,parent);
      }
      else{if(e.className == 'active' && parseInt(e.getAttribute('value')) > 0)turnActive(e);}
    }
}

async function diagnosticSwitchUp(elem){
    let parent = elem.parentNode , parentLength = (parent.children).length;
    let elemtId = parseInt(elem.getAttribute('value'));
    for(var e of parent.children){
      if(e.getAttribute('value')==elemtId+1){
        turnActive(e);
      }
      else{if(e.className == 'active' && parseInt(e.getAttribute('value')) < parentLength-2)turnActive(e);}
    }
}

function scrollLink(percent){
  let height = document.getElementById('mainContainer').clientHeight;
  scroll(0,height*(percent/100))
}

function radioLike(elem){
  var elemContent = elem.innerHTML;
  for(var e of elem.parentNode.children){
    if(e.innerHTML != elemContent && e.getAttribute('class') == 'active'){turnActive(e)}
  }
}

async function traiter_formulaire(parent){
  var nom_formulaire = parent.getAttribute('name');
  // FORMULAIRE D'EGEBILITE //
  if(nom_formulaire == 'eligibilite'){
    var min = 5 , x = 0;
    for await(const enfant of parent.children){
      for(const subE of enfant.children){
        if(subE.getAttribute('type')=='input'&&subE.getAttribute('class')=='active')x++;
        // console.log(subE.tagName,subE.value);
        if(subE.tagName == 'INPUT' && subE.value != ''){x++;console.log(subE.tagName,subE.value,x);}
      }
    }
    if(x!=min){alertBox(4)}
    else{
      openBox('eligibilite');
    }
  }

  if(nom_formulaire == 'boxContainer'){
    nom_formulaire = parent.parentNode.getAttribute('name');

    if(nom_formulaire == 'contact'){
      var champs_obligatoire = true;
      var obj = {prestations:[]};
      // Champs "facultatif"
      for(var e of parent.children[2].children[0].children){
        if(e.tagName == 'INPUT'){
          if(e.getAttribute('type') == 'obligatoire' && e.value == '')champs_obligatoire = false;
          obj[e.getAttribute('name')]=e.value;
        }
      }
      // Champs "Obligatoire"
      for(var e of parent.children[2].children[1].children){
        if(e.tagName == 'INPUT'){
          if(e.getAttribute('type') == 'obligatoire' && e.value == '')champs_obligatoire = false;
          obj[e.getAttribute('name')]=e.value;
        }
        if(e.tagName == 'TEXTAREA'){
          obj[e.getAttribute('name')]=e.value;
        }
      }
      var i = 0;
      for(var e of parent.children[2].children[2].children){
        if(e.tagName == 'INPUT' && e.checked == true){
          obj.prestations.push(parent.children[2].children[2].children[i+1].innerHTML)
        }
        i++;
      }
      if(champs_obligatoire == false)alertBox(5);
      else await call.post(caches.url+nom_formulaire,obj).then(alertBox(0));
    }

    if(nom_formulaire == 'rappel'){
      var champs_obligatoire = true;
      var nomPrenom = parent.children[2].children[0].children[0] , telephone = parent.children[2].children[1].children[0];
      if(nomPrenom.value == '' || telephone.value == '')champs_obligatoire= false;
      if(champs_obligatoire == false) alertBox(4);
      else await call.post(caches.url+nom_formulaire,{nom_prenom:nomPrenom.value,telephone:telephone.value}).then(alertBox(1));
    }

    if(nom_formulaire == 'eligibilite'){
      var champs_obligatoire = true;
      var formulaire1 = document.getElementById('eligibilite');
      var obj = {};

      for(var e of formulaire1.children){
        if(e.tagName == 'DIV' && e.getAttribute('name') != 'btn'){
          var propName = e.getAttribute('name');
          for(var subE of e.children){
            if(subE.className == 'active')obj[propName] = subE.innerHTML;
          }
          if(e.getAttribute('name') == 'mail')obj.mail=e.children[0].value;
        }
      }

      obj.departement = parent.children[2].children[1].children[0].value;
      obj.telephone = parent.children[2].children[1].children[1].value;

      if(obj.departement == '' || obj.telephone == '')champs_obligatoire = false;
      if(champs_obligatoire == false)alertBox(4);
      else await call.post(caches.url+nom_formulaire,obj).then(alertBox(2));
    }

    if(nom_formulaire == 'diagnostic'){
      console.log('call diagnostic');
      var fomulaire = {} , title = "diagnostic_contact" , checked_cgu = false , champs_client_requis = 6 , champs_client_complete = 0;
      for(var e of parent.children){
        for(var sub of e.children){
          console.log(sub);
          if(sub.tagName == 'P' && sub.getAttribute('name')=="question"){
            console.log(sub);
            title=sub.innerHTML;
            fomulaire[title] = {};
          }

          if(sub.children.length != 0){
            for(var ssub of sub.children){
              if(ssub.tagName == 'LABEL')checked_cgu = ssub.children[0].checked;
              if(ssub.tagName == 'INPUT' || ssub.tagName == "SELECT"){
                if(!fomulaire[title])fomulaire[title]={};
                if(title == 'diagnostic_contact')champs_client_complete++;
                fomulaire[title][ssub.getAttribute('name')] = ssub.value
              }
              // else if(ssub.tagName == "SELECT"){
              //   console.log(ssub.value);
              //   fomulaire[title][ssub.getAttribute('name')] = ssub.value
              // }
              else if(ssub.getAttribute('name') == 'icon' && ssub.getAttribute('class') == 'active'){
                fomulaire[title][title] = ssub.getAttribute('value');
              }
            }
          }
          // console.log(sub.tagName);
        }
        // console.log(e);
      }
      console.log(fomulaire);
      console.log(champs_client_complete,champs_client_requis);
      if(checked_cgu == false)alertBox(6);
      else if(fomulaire.diagnostic_contact.Telephone == "")alertBox(5);
      else if(champs_client_complete != champs_client_requis)alertBox(4);
      else{
        await call.post(caches.url+nom_formulaire,fomulaire);
        alertBox(3)
      }
      // console.log(parent.parentNode.getElementsByClassName('step'));
      // await call.post(caches.url+nom_formulaire,{})
      // alertBox(3)
    }

  }
}

function diapo_switch(elem){
  // console.log(elem);
  // console.log(elem.getAttribute('id'));
  diapo.__change_image(parseInt(elem.getAttribute('id')));
}
