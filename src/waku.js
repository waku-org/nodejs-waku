
var wakuMod = require('bindings')('waku');

exports.wakuNew = function(cfg) {
    wakuMod.wakuNew(cfg)
}

exports.wakuVersion = function() {
    wakuMod.wakuVersion(function(msg){ console.log("Waku Version: " + msg) })
}

exports.wakuDefaultPubsubTopic = function() {
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

