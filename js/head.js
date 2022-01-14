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
<link rel="preconnect" href="https://fonts.googleapis.com">\
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">');
