function Article() {
  
    // 初始函数
    Article.prototype.init = function() {
        var self = this
        // 加载本地数据
        require(['dataSource'], function (data) {
            Article.prototype.dataSource = data
            // 加载本地dom
            self.setDataDom()
        })
    }
    
    // 动态填充dom
    Article.prototype.setDataDom = function() {
        this.dataSource.articleData.dataList.forEach(item => {
            $('.articleMain').append(`
                <div class="articleItem">
                    <div class="articleTitle">${item.title}</div>
                    <div class="fromWord">${item.fromWord}</div>
                    ${item.context.map((k) => `
                        <div class="context">
                            ${k}
                        </div>
                    `).join('')}
                </div>
            `)
        });
    }

}