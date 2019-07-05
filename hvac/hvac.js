var serverHost = '10.166.19.142';	/* for WiFi */
var lowCanPort = '31011';	/* low-can-service port */
var token = 'HELLO'; /* default token in AGL */

var urlparams = {
  base: "api",
  token: "HELLO",
}

	var base = new Object();
	base.host = serverHost + ":" + lowCanPort;
	base.token = token;
var	afb = new AFB(base);
//var afb = new AFB(urlparams, "HELLO");
var ws;
var evtidx=0;
var numid=0;


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
