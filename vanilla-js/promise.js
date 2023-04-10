function downloadImage(url) {
    return new Promise(function (resolve, reject) {
        //download as synchronous process
        const image = download(url);

        if (image) {
            resolve(image);
        }
        else {
            reject('error download image: wrong URL');
        }
    });
}
downloadImage('https://situsku.com/gambarku.jpg')
    .then(function (image) {
        // do somthing with image
        return blackWhiteImage;
    })
    .then(function (blackWhiteImage) {
        // exqample promise chained
        // do something with black and white
    })
    .catch(function (error) {
        console.log(error);
    });

/* static method */
/* promise.all */
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
/* promise.any */
const promise4 = new Promise((reject) => setTimeout(reject, 0, 'reject'));
const promise5 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise6 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promises = [promise5, promise6];
Promise.any(promises).then((value) => console.log(value));
/* promise race */
Promise.race(promises).then((value) => {
    console.log(value)
});
