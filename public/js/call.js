const call = {
  get : async function(url){
    return new Promise(async function(res){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.withCredentials = false;
      xhr.setRequestHeader("Content-type", "text/javascript");
      xhr.send();
      xhr.onload = function(e){res(e.target)}})
  },
  post : async function (url,arg){
    return new Promise(async function(req){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.withCredentials = false;
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(arg));
      xhr.onload = function(e){req(e.target)}
    })
  }
}
