const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('I\'m busy')
    }, 3000)
})

console.log(promise)
console.log('promise is created.')

promise.then(function (result) {
    console.log('promise result: ' + result)
}).catch(function (error) {
    console.log('Error: ' + error)
})