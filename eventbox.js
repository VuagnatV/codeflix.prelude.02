const EventEmitter = require('events')

function empty(){
    const myEmitter = new EventEmitter()
    myEmitter.on('hi', () => 
        console.log('chopper')
    )
    myEmitter.emit('hi');
}

function withArgs(Array) {
    let i = 0;
    const myEmitter = new EventEmitter()
    myEmitter.on('newFellow', () => {
        console.log("Here come's a new pirate ->> " + Array[i])
    })
    Array.forEach(function(names){
        myEmitter.emit('newFellow')
        i++
    })
}

module.exports = {
    empty,
    withArgs,
}