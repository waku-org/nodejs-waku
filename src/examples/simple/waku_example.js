

// Please, export LD_LIBRARY_PATH="./node_modules/nodejs-waku/"
// before running the example so that the 'libwaku.so' can be properly linked.

function create_random_string(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function event_handler(event) {
  console.log("event rx: " + event)
}

var wakuMod = require('nodejs-waku');
wakuMod.wakuNew(`{
  "host": "0.0.0.0",
  "port": 60001,
  "key": "364d111d729a6eb6d2e6113e163f017b5ef03a6f94c9b5b7bb1bb36fa5cb07a9",
  "relay": true
}`);

wakuMod.wakuVersion();

// Example on how to retrieve a value from the waku library
var defaultPubsubTopic = ""
wakuMod.wakuDefaultPubsubTopic(function(msg){ defaultPubsubTopic = msg })

console.log("Default pubsub topic: " + defaultPubsubTopic)

console.log("Setting callback event callback function")
wakuMod.wakuSetEventCallback(event_handler)

wakuMod.wakuStart()

wakuMod.wakuConnect("/ip4/127.0.0.1/tcp/60000/p2p/16Uiu2HAmVFXtAfSj4EiR7mL2KvL4EE2wztuQgUSBoj2Jx2KeXFLN",
  10000,
  function onErr(msg) {
    console.log("Error connecting node: " + msg)
  })

wakuMod.wakuRelaySubscribe(defaultPubsubTopic,
  function onErr(msg) {
    console.log("Error subscribing: " + msg)
  })

var express = require('express');
var app = express();
app.post('/publish',
function (req, res) {
  console.log("Publish event received")

  wakuMod.wakuRelayPublish(defaultPubsubTopic,
    "content_topic_name",
    create_random_string(10),
    10000,
    function onError(msg) {
      console.log("Error: " + msg)
      process.exit(-1)
    });

    res.end( JSON.stringify("OK publish"))
  })

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example NodeJs waku listening at http://%s:%s", host, port)
})
