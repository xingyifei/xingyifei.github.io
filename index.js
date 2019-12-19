/**
 * @file 首页逻辑文件
 * @author xingyifei01
 * @date 2019-03
 */

function Main() {

    // 轮播时间
    Main.prototype.time = 3500;

    // 当前图片
    Main.prototype.count = 0;

    // 初始函数
    Main.prototype.init = function () {
        setInterval(this.slider.bind(this), this.time);
        $('.title p').click(this.transA);
        $('.push').click(this.handleClick);
        $('.myarticle').click(this.onArtilcleClick);
        require(['tools'], function (data) {
            // 埋点
            $.ajax({
                url: 'http://116.62.7.205:80/collect',
                type: 'POST',
                data: {
                    browser: data.getBrowserInfo(),
                    system: data.getOsInfo(),
                    time: data.getTime()
                }
            });
        });
    };

    // 跳转到个人博客
    Main.prototype.onArtilcleClick = function () {
        window.location.href = 'https://xingyifei.top/article.html';
    };

    // 轮播函数
    Main.prototype.slider = function () {
        this.count === ($('.slider').find('img').length - 1) && (this.count = -1);
        this.count ++;
        $('.slider').find('img').eq(this.count).siblings().hide();
        $('.slider').find('img').eq(this.count).fadeIn(1000);
    };

    // 主翻页
    Main.prototype.transA = function () {
        $('section[name="logo"] p').css({'transform': 'rotateY(90deg)'});
        setTimeout(function () {
            $('section[name="logo"]').css({'display': 'none'});
            $('.content').css({'transform': 'rotateY(0deg)'});
        }, 400);
    };

    // 跳转
    Main.prototype.handleClick = function () {
        window.location = 'https://github.com/xingyifei';
    };

}
