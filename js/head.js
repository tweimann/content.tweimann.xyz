const path = window.location.pathname;
var title = path.substring(path.lastIndexOf("/"), path.lastIndexOf(".html") + 2).replace('index', 'home');
if (path === '/') {var formattedPath = 'home'};
var formattedTitle = title.substring(1) + ' | tweimann';
var favicon = title.substring(0, 1) + '.ico';

document.write('\
<link rel="shortcut icon" type="image/ico" href="https://content.tweimann.xyz/icons/abc/' + favicon + '"/>\
<title>' + formattedTitle + '</title>\
<link rel="stylesheet" href="https://content.tweimann.xyz/css/style.css">\
<link rel="preconnect" href="https://fonts.googleapis.com">\
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">');