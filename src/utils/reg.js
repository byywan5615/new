export const test = (uType, data) => {
  console.log(uType, data)
  if (data == '') {
    return {
      'status': 2,
      'msg': '不能为空'
    }
  } else {
    if (uType == 'emil') {
      let reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      if (!reg1.test(data)) {
        return {
          'status': 0,
          'msg': '邮箱格式错误'
        }
      } else {
        return {
          'status': 1
        }
      }
    }
  }
  if (uType == 'username' || 'password') {
    let reg = /^[a-zA-Z0-9_-]{4,16}$/
    if (!reg.test(data)) {
      return {
        'status': 0,
        'msg': '不符合4到16位(字母，数字，下划线，减号)'
      }
    } else {
      return {
        'status': 1
      }
    }
  }
}
