const path = window.location.pathname;
var formattedPath = path.replaceAll('/', ' / ').substring(0, path.lastIndexOf(".html") + 2).replace('index', 'home');
if (path === '/') {var formattedPath = ' / home'};

document.write('\
\
<header>\
    <div class="header-text"><a href="./index.html">' + window.location.hostname.substring(0, window.location.hostname.indexOf('.')) + '</a>' + formattedPath + '</div>\
</header>');