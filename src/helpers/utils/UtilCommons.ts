export class UtilCommons {

  static evaluateResult(o, keys) {
    let obj = o
    if (keys.includes('.')) {
      let keysArray = keys.split('.')
      for (let key of keysArray) {
        if (key && obj) {
          obj = obj[key] ? obj[key] : null
        }
      }
    } else {
      if (keys && obj) {
        obj = obj[keys] ? obj[keys] : null
      }
    }
    return obj
  }

}