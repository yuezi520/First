/**
 * 获取系统路径
 */
function getRootPath() {
    //获取当前网址，如： http://localhost:9527/zdss-web/login/login.do
    var curWwwPath = window.document.location.href;
    
    //获取主机地址之后的目录，如：/zdss-web/login/login.do
    var pathName = window.document.location.pathname;
    
    var pos = curWwwPath.indexOf(pathName);
    
    //获取主机地址，如： http://localhost:9527
    var localhostPath = curWwwPath.substring(0, pos);
    
    //获取带"/"的项目名，如：/zdss-web
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    
    return localhostPath+projectName;
}