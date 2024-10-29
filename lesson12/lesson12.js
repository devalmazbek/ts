var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function transformToOptionalEvent(event) {
    return __assign({}, event);
}
var events = {
    id: 123,
    name: 'Nana',
    date: '12.12.2024',
    location: 'ru',
};
console.log(transformToOptionalEvent(events));
function getContentType(content) {
    if (content.hasOwnProperty('isHD'))
        return "video";
    if (content.hasOwnProperty('isPodcast')) {
        return "audio";
    }
    else {
        return "unknow";
    }
}
var firstContent = {
    title: 'test',
    duration: '123',
    isHD: true,
};
var secondContent = {
    title: 'test2',
    duration: '50',
    isPodcast: true,
};
console.log(getContentType(firstContent));
console.log(getContentType(secondContent));
