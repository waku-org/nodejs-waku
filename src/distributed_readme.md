
## Intro

NodeJs integration of Waku node.

## Exported functions:

`wakuNew = function(cfg)`
`wakuVersion = function()`
`wakuDefaultPubsubTopic = function()`
`wakuSetEventCallback = function(eventHandler)`
`wakuStart = function()`
`wakuConnect = function(peerAddr, timeoutMs, onErr)`
`wakuRelaySubscribe = function(pubsubTopic, onErr)`

## Usage example

```
var wakuMod = require('nodejs-waku');

var cfg = `{
    "host": "0.0.0.0",
    "port": 60001,
    "key": "364d111d729a6eb6d3e6113e163f017b5ef03a6f94c9b5b7bb1bb36fa5cb07a9",
    "relay": true
}`;

wakuMod.wakuNew(cfg);

wakuMod.wakuVersion();
```