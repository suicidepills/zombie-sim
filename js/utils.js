// ---------
// Array
// ---------

// Thanks, Markus Amalthea Magnu of StackOverflow!
// http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
};

// ---------
// Math
// ---------

// Thanks, numerous posts on the Internet!
Math.randomInt = function (min, max) {
    return Math.round((max - min) * Math.random() + min);
};

// Thanks, Paul Irish: http://www.paulirish.com/2009/random-hex-color-code-snippets/
Math.randomColor = function () {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// ---------
// Number
// ---------

// Thanks, numerous posts on the Internet!
Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};

// ---------
// Other
// ---------

// Thanks, Douglas Crockford!
// http://javascript.crockford.com/remedial.html
function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (Object.prototype.toString.call(value) == '[object Array]') {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}