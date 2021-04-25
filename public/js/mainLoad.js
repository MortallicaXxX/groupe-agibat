var gui;
var diapo;

// if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
//   alert('hello world');
// }

bajb_backdetect.OnBack = function(e)
{
  alert("Attention le boutton retour arrière vous fait quitter le site.\nCliquez sur le boutton retour avant pour rester sur le site.\nOu cliquez sur ok pour contiuer et quitter.");
  // alert(e);
}

// window.onhashchange = change;
//
// //and read location.hash in the change function instead
// function change(e) {
//   alert(e);
//
//   var oldURL = e.oldURL.split('#')[1];
//   var newURL = e.newURL.split('#')[1];
//   e.preventDefault();
//   return false;
//   // if (oldURL == 'share') {
//   //   $('.share').fadeOut();
//   //   e.preventDefault();
//   //   return false;
//   // }
//   //console.log('old:'+oldURL+' new:'+newURL);
// }

window.onload = async function(){
  scroll(0,0);
  gui = await guiLoader(); // Chargement du gui
  await builder(document.getElementsByTagName('body')[0],gui.headband);
  await builder(document.getElementById('mainContainer'),gui.index);
  await builder(document.getElementsByTagName('body')[0],gui.bannerContact);
  diapo = new DIAPO();
}
