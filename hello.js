const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1 + 2)
    }, 3000)
})

console.log(promise)
console.log('promise is created.')

promise.then(function (data) {
    console.log('promise result: ' + data)
})