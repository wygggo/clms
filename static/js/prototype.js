// 配置数据的验证方法以及提示  prop为input的prop属性名 rule是数据的规则 hint当数据不符合规则时的提示
// author：熊飞
const VALIDATION_CONFIG = [
  {
    'prop': 'mobile',
    'rule': /^1[34578]\d{9}$/,
    'hint': '手机格式不正确'
  },
  {
    'prop': 'email',
    'rule': /@/,
    'hint': '邮箱格式不正确'
  },
  {
    'prop': 'card',
    'rule': /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/,
    'hint': '身份证格式不正确'
  },
  {
    'prop': 'nameCn',
    'rule': /^[\u2E80-\u9FFF]+$/,
    'hint': '必须为中文姓名'
  }
]
// 正则
function verify (s, v) {
  if (!(v.test(s.trim()))) {
    return false
  }
  return true
}
// 非空
function isBlank (value) {
  if (value !== null && value !== undefined && (value + '').length > 0) {
    return false
  } else {
    return true
  }
}
export function prototype () {
  /**
   给document.querySelectorAll("#foo [req]")添加一个私有方法check()
   如果返回 rs = null 也就是验证全部通过
   如果返回rs是一个对象返回未通过验证input的id以及错误提示
   格式例如
   {
      id:'bar',
      msg:'应为6-20个字母,数字和符号组成!'
   }
   **/
  // 跳出forEach的方法 主动抛出错误。 return是跳不出去的。。
  // 或者使用[].every
  // NodeList上没有every的方法所以需要 [].every.call(this, function) 或者 [...this].every(function(){})
  NodeList.prototype.check = function () {
    var rs = null
    var id = null
    var msg = null
    var arr = []
    arr.every.call(this, function (item) {
      var val = item.value
      var prop = item.getAttribute('prop')
      if (isBlank(val)) { // 费用
        id = item.getAttribute('id')
        msg = item.getAttribute('placeholder')
        return false
      }
      for (var j = 0; j < VALIDATION_CONFIG.length; j++) {
        if (prop === VALIDATION_CONFIG[j].prop && !verify(val, VALIDATION_CONFIG[j].rule)) {
          id = item.getAttribute('id')
          msg = VALIDATION_CONFIG[j].hint
          return false
        }
      }
      return true
    })
    if (id !== null) {
      document.getElementById(id).focus()
      rs = {}
      rs.id = id
      rs.msg = msg
    }
    return rs
  }
  // canvas画笔画扇形
  CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
// 初始保存
    this.save()
// 位移到目标点
    this.translate(x, y)
    this.beginPath()
// 画出圆弧
    this.arc(0, 0, radius, sDeg, eDeg)
// 再次保存以备旋转
    this.save()
// 旋转至起始角度
    this.rotate(eDeg)
// 移动到终点，准备连接终点与圆心
    this.moveTo(radius, 0)
// 连接到圆心
    this.lineTo(0, 0)
// 还原
    this.restore()
// 旋转至起点角度
    this.rotate(sDeg)
// 从圆心连接到起点
    this.lineTo(radius, 0)
    this.closePath()
// 还原到最初保存的状态
    this.restore()
    return this
  }
}

