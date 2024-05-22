function getResponseFromAPI() {
    const promise = Promise.reject(10);
    return promise;
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);