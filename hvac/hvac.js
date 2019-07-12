var	m_token = new URLSearchParams(window.location.search).get('token');
var	afb = new AFB({token:m_token||'HELLO'});

var ws;

function replyok(obj) {
        console.log("replyok:" + JSON.stringify(obj));
}

function replyerr(obj) {
        console.log("replyerr:" + JSON.stringify(obj));
}

// slide bar
function changeValue(value){
  var event_query = {"FanSpeed": Number(value)};
  callbinder("hvac", "set", event_query);
}

//**********************************************
// Generic function to call binder
//***********************************************
function callbinder(api, verb, query) {
        console.log ("api="+api+" verb="+verb+" query=" +query);
        ws.call(api+"/"+verb, query).then(replyok, replyerr);
}

function gotevent(obj) {
        console.log("gotevent:" + JSON.stringify(obj));
}

function init() {
  function onOpen() {
    ws.onevent("*", gotevent);
  }

  function onClose() {
  }
  function onAbort() {
  }
     ws = new afb.ws(onOpen, onAbort);
}

window.onload = function(){
	init();
}
