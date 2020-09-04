const getCookie = (cName) => {
  let name = cName + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    // 如果字串首字元為空格則移除
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    // 如果找到對應的 name 則返回結果
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export default {
  setStorage(name, val) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(name, val)
    } else {
      document.cookie = name + '=' + val
    }
  },
  getStorage(name) {
    if (typeof Storage !== 'undefined') {
      let storage = localStorage.getItem(name)
      return storage
    } else {
      let cookie = getCookie(name)
      return cookie
    }
  },
  removeStorage(name) {
    if (typeof Storage !== 'undefined') {
      localStorage.removeItem(name)
    } else {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
  },
}
