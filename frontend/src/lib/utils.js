export function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }

export function createCookie (cookieName, cookieValue, time, timeUnit) {
    const timeUnitValue = {"second" : 1,"minute" :60,"hour":60*60}
    let date = new Date();
    date.setTime(date.getTime()+(time*timeUnitValue[timeUnit]*1000));
    document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
}