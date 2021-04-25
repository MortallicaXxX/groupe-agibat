if(!window.caches)window.caches = {};

screen.stats = {
  height:document.getElementsByTagName('html')[0].clientHeight,
  width:document.getElementsByTagName('html')[0].clientWidth
}
screen.working_stats = {
  height:document.getElementById('mainContainer').clientHeight,
  width:document.getElementsByTagName('mainContainer').clientWidth
}

// caches.url = 'http://localhost:3000/';
if(caches)caches.url = 'https://groupe-agibat.herokuapp.com/';
var caches = {
  url : 'https://groupe-agibat.herokuapp.com/'
};
