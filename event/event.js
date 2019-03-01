var events = require('events')
var emitter = new events.EventEmitter()
emitter.on('someEvent', function () {
    console.log('event1')
})
emitter.on('someEvent', function () {
    console.log('event2')
})
emitter.removeAllListeners()
emitter.emit('someEvent')