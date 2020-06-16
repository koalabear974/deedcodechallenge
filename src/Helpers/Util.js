export function timeout(ms, promise) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error("Timeout fetching given URL."))
        }, ms)
        promise.then(resolve, reject)
    })
}
