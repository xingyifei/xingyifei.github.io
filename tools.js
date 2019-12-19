/**
 * @file 工具文件
 * @author xingyifei01
 * @date 2019-12
 */

define('tools', function () {
    var tools = {
        getOsInfo: () => {
            var userAgent = navigator.userAgent.toLowerCase();
            var name = 'Unknown';
            if (userAgent.indexOf('win') > -1) {
                name = 'Windows';
            } else if (userAgent.indexOf('iphone') > -1) {
                name = 'Iphone';
            } else if (userAgent.indexOf('mac') > -1) {
                name = 'Mac';
            } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
                name = 'Unix';
            } else if (userAgent.indexOf('linux') > -1) {
                if (userAgent.indexOf('android') > -1) {
                    name = 'Android';
                } else {
                    name = 'Linux';
                }
            } else {
                name = 'Unknown';
            }
            return name;
        },
        getBrowserInfo: () => {
            var userAgent = navigator.userAgent;
            var isOpera = userAgent.indexOf('Opera') > -1;
            var isIE = userAgent.indexOf('compatible') > -1
                    && userAgent.indexOf('MSIE') > -1 && !isOpera;
            var isEdge = userAgent.indexOf('Edge') > -1;
            var isFF = userAgent.indexOf('Firefox') > -1;
            var isSafari = userAgent.indexOf('Safari') > -1
                    && userAgent.indexOf('Chrome') === -1;
            var isChrome = userAgent.indexOf('Chrome') > -1
                    && userAgent.indexOf('Safari') > -1;

            if (isIE) {
                var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp['$1']);
                if (fIEVersion === 7) {
                    return 'IE7';
                } else if (fIEVersion === 8) {
                    return 'IE8';
                } else if (fIEVersion === 9) {
                    return 'IE9';
                } else if (fIEVersion === 10) {
                    return 'IE10';
                } else if (fIEVersion === 11) {
                    return 'IE11';
                } else {
                    return 'IE';
                }
            }
            if (isOpera) {
                return 'Opera';
            }
            if (isEdge) {
                return 'Edge';
            }
            if (isFF) {
                return 'FF';
            }
            if (isSafari) {
                return 'Safari';
            }
            if (isChrome) {
                return 'Chrome';
            }
        },
        getTime: () => {
            return new Date().toLocaleDateString();
        }
    };
    return tools;
});