export default{
  deepClone (obj) {
    let str = JSON.stringify(obj)
    return JSON.parse(str)
  },  /**
   * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
   *
   * @param num1加数1 | num2加数2
   */
  add (num1, num2) {
    let baseNum, baseNum1, baseNum2
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    return (num1 * baseNum + num2 * baseNum) / baseNum
  },
  /**
   * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
   *
   * @param num1被减数  |  num2减数
   */
  sub (num1, num2) {
    let baseNum, baseNum1, baseNum2
    let precision
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)
  },
  /**
   * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
   *
   * @param num1被乘数 | num2乘数
   */
  mul (num1, num2) {
    let baseNum = 0
    try {
      baseNum += num1.toString().split('.')[1].length
    } catch (e) {
    }
    try {
      baseNum += num2.toString().split('.')[1].length
    } catch (e) {
    }
    return Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', '')) / Math.pow(10, baseNum)
  },
  /**
   * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
   *
   * @param num1被除数 | num2除数
   */
  div (num1, num2) {
    let baseNum1 = 0
    let baseNum2 = 0
    let baseNum3
    let baseNum4
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum3 = Number(num1.toString().replace('.', ''))
    baseNum4 = Number(num2.toString().replace('.', ''))
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)
  },  // 打散数组
  dimensionality (arr) {
    for (var r = 0, result = []; r < arr.length; r++) {
      result = result.concat(arr[r])
    }
    return result
  },
  HTMLDecode (text) {
    var temp = document.createElement('div')
    temp.innerHTML = text
    var output = temp.innerText || temp.textContent
    temp = null
    return output
  },
  // 如果name有值返回key=参数的键值对的值 返回url上所有键值对的结果集
  params (name) {
    var rs = this.urlsearch()
    if (rs != null) {
      if (name) {
        return rs[name]
      }
    }
    return rs
  },
  urlsearch () {
    var rs = null
    var name, value
    var str = location.href
    var num = str.indexOf('?')
    str = str.substr(num + 1)
    var arr = str.split('&')
    if (arr.length > 0) {
      rs = {}
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=')
        if (num > 0) {
          name = arr[i].substring(0, num)
          value = arr[i].substr(num + 1)
          rs[name] = decodeURI(value)
        }
      }
    }
    return rs
  },
  getMonth (e) {
    e = e || 0
    var date = new Date(new Date().getFullYear(), new Date().getMonth() + e)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    month = (month < 10 ? '0' + month : month)
    var mydate = (year.toString() + '-' + month.toString())
    return mydate
  },
  getDateStr (date) {
    var _year = date.getFullYear()
    var _month = date.getMonth() + 1
    var _d = date.getDate()
    _month = (_month > 9) ? ('' + _month) : ('0' + _month)
    _d = (_d > 9) ? ('' + _d) : ('0' + _d)
    return _year + '-' + _month + '-' + _d
  },
  // 数组去重
  distinct (arr) {
    const seen = new Map()
    return arr.filter((item) => !seen.has(item) && seen.set(item, 1))
  },
  isBlank (value) {
    if (value !== null && value !== undefined && (value + '').length > 0) {
      return false
    } else {
      return true
    }
  },
  /* 切割数组 */
  splitArray (arr, len) {
    let aLen = arr.length
    let result = []
    for (let i = 0; i < aLen; i += len) {
      result.push(arr.slice(i, i + len))
    }
    return result
  },
  // 过滤emoji表情
  filteremoji (val) {
    var ranges = [
      '\ud83c[\udf00-\udfff]',
      '\ud83d[\udc00-\ude4f]',
      '\ud83d[\ude80-\udeff]'
    ]
    var emojireg = val
    emojireg = emojireg.replace(new RegExp(ranges.join('|'), 'g'), '')
    return emojireg
  },
  checkMsg (msg) {
    return {
      '101 付款码无效,请重新扫码': '付款码无效,请重新扫码',
      'AUTHCODEEXPIRE': '二维码已过期',
      'PARAM_ERROR': '付款码错误',
      '验证签名不通过': '付款码错误',
      '商户未开通[pay.jdpay.micropay]支付类型': '商户未开通京东支付'
    }[msg] || msg
  }
}
