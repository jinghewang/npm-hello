exports.hello = function (msg) {
    console.info(msg);
};

exports.say = function (...msg) {
    console.info('say:', ...msg);
};
