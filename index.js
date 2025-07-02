// 马上关注/点击解签
(function () {
  return ele => {
    console.log(ele)
    window._EqxCustomManager.listenerService.registerDep(
      'getPrize:success',
      data => {
        console.log('大吉签游戏结束了', ele, data, '我进来了')
        // 初始化样式
        const styles = `
          top: 898px !important;
          left: 192px !important;
          width: 40px !important;
          height: 73px !important;
          z-index: 2;
        `;
        ele.$spiritEle.attr('style', styles);
        ele.setImgUrl('https://img.jsh.hophing.cn/h5/yqx/divination-2.png')

        // 更换成目标图
        ele.$spiritEle.off('click')
        ele.$spiritEle.on('click', () => {
          console.log('马上关注/点击解签', data)
          ele.$spiritEle.css({
            display: 'none',
          });
          let level = data.level + 1;
          level = level < 10 ? ('0' + level) : level;
          if (level !== '01' && level !== '02' && level !== '03') {
            window._EqxCustomManager && window._EqxCustomManager.listenerService.notifyDep('changebg', level)
          } else {
            window._EqxCustomManager && window._EqxCustomManager.listenerService.notifyDep('changebg', 'hide')
            window._EqxCustomManager && window._EqxCustomManager.listenerService.notifyDep('describebg', level)
            window._EqxCustomManager && window._EqxCustomManager.listenerService.notifyDep('address', level)
          }
        })
      }
    )
  }
})()
