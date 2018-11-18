"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersianUtils = (function () {
    function PersianUtils(text) {
        this.text = text;
        this.arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
        this.persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
        this.englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    }
    PersianUtils.prototype.replaceAll = function (text, search, replacement) {
        return text.replace(new RegExp(search, 'g'), replacement);
    };
    return PersianUtils;
}());
exports.PersianUtils = PersianUtils;
//# sourceMappingURL=PersianUtils.js.map