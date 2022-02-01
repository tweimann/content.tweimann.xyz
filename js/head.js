const urlpath = window.location.pathname;
var title = urlpath.substring(urlpath.lastIndexOf("/") + 1, urlpath.lastIndexOf(".html")).replace('index', 'home');
if (urlpath === '/') {var formattedPath = 'home'};
var formattedTitle = title + ' | tweimann';
if (formattedTitle === '/ | tweimann') {
    var title = 'tweimann';
    var formattedTitle = 'tweimann';
}
var favicon = title.substring(0, 1).toLowerCase() + '.ico';

document.write('<link rel="shortcut icon" type="image/ico" href="https://content.tweimann.xyz/icons/abc/' + favicon + '"/>\
<title>' + formattedTitle + '</title>\
<link rel="stylesheet" href="https://content.tweimann.xyz/css/style.css">\
<link href="https://content.tweimann.xyz/fonts/Roboto-Regular.ttf" rel="stylesheet">');