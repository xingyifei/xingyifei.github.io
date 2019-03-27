/**
 * @file 数据流逻辑文件
 * @author xingyifei01
 * @date 2019-03
 */

function Article() {

    // 初始函数
    Article.prototype.init = function () {
        var self = this;
        // 加载本地数据
        require(['dataSource'], function (data) {
            Article.prototype.dataSource = data;
            // 加载本地dom
            self.setDataDom();
            // 加载滚动dom
            self.setBotDom();
        });
    };

    // 动态填充dom
    Article.prototype.setDataDom = function () {
        this.dataSource.articleData.dataList.forEach(item => {
            $('.articleMain').append(`
                <div class="articleItem">
                    <div class="articleTitle">${item.title}</div>
                    <div class="fromWord">${item.fromWord}</div>
                    ${item.context.map(k => {
                        if (k.endsWith('.png')) {
                            return `
                                <div class="context-img">
                                    <img src="./images/${k}"/>
                                </div>
                            `;
                        }
                        else {
                            return `
                                <div class="context">
                                    ${k}
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            `);
        });
    };

    // 底部填充dom
    Article.prototype.setBotDom = function (notFirst) {
        var self = this;
        // 阀值
        var maxLength = $('#article-footer').width() - 20;
        // 回位值
        var backLeft = $('.slider-word').width() + 20;
        // 先填充内容
        $('.slider-word').text(this.dataSource.sliderData.welcomeWord)
        // 开始滑动
        if (notFirst) {
            $('.slider-word').css({'margin-left': -backLeft + 'px'})
        }
        $('.slider-word').animate({'margin-left': maxLength + 'px'}, 40000, 'linear', function () {
            self.setBotDom(true);
        });
    };

}