
var wakuMod = require('nodejs-waku');

var cfg = `{
    "host": "0.0.0.0",
    "port": 60001,
    "key": "364d111d729a6eb6d3e6113e163f017b5ef03a6f94c9b5b7bb1bb36fa5cb07a9",
    "relay": true
}`;

wakuMod.wakuNew(cfg);

wakuMod.wakuVersion();

/*

exports.wakuNew = function(cfg) {
  wakuMod.wakuNew(cfg)
}

exports.wakuVersion = function() {
  wakuMod.wakuVersion(function(msg){ console.log("Waku Version: " + msg) })
}

exports.wakuShowDefaultPubsubTopic = function() {
  // Example on how to retrieve a value from the waku library
  var defaultPubsubTopic = ""
  wakuMod.wakuDefaultPubsubTopic(function(msg){ defaultPubsubTopic = msg })
  console.log("Default pubsub topic: " + defaultPubsubTopic)
}

exports.wakuSetEventCallback = function(eventHandler) {
  console.log("Setting callback event callback function")
  wakuMod.wakuSetEventCallback(eventHandler)
}

exports.wakuStart = function() {
  wakuMod.wakuStart()
}

exports.wakuConnect = function(peerAddr, timeoutMs, onErr) {
  wakuMod.wakuConnect(peerAddr, timeoutMs, onErr)
}

exports.wakuRelaySubscribe = function(pubsubTopic, onErr) {
  wakuMod.wakuRelaySubscribe(pubsubTopic, onErr)
}

*/


