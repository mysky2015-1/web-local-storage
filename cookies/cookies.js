/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-03-28 14:09:08
 * @LastEditTime: 2019-03-30 02:04:41
 */
if(window.navigator.cookieEnabled){
    alert('not support');
}
class pipi_cookie {
    add(name, val, field, time) {
        if (new pipi_cookie().botain(name).success){
            return { success: false, message: "cookie name repeat" };
        }else{
            let date = new Date();
            date.setTime(date.getTime() + (1000 * 60 * time));
            document.cookie = name + '=' + val + ';Path=' + field + ';expires=' + date.toGMTString();
            return { success: true, message: "ok" };
        } 
    }
    botain(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return { success: true, message: unescape(arr[2]) };
        else
            return { success: false, message: "Not found" };
    }
    revise(name, val, field, time) {
        if (new pipi_cookie().botain(name).success) {
            let date = new Date();
            date.setTime(date.getTime() + (1000 * 60 * time));
            document.cookie = name + '=' + val + ';Path=' + field + ';expires=' + date.toGMTString();
            return { success: true, message: "ok" };
        } else {
            return { success: false, message: "Name does not exist" };
        }
    }
    delete(name){
        if (new pipi_cookie().botain(name).success) {
            let date = new Date();
            date.setTime(date.getTime());
            document.cookie = name + '=0;Path=/;expires=' + date.toGMTString();
            return { success: true, message: "ok" };
        } else {
            return { success: false, message: "Name does not exist" };
        }
    }
}
