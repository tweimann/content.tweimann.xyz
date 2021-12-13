const path = window.location.pathname;
var formattedPath = path.replace('/', ' / ').substring(0, path.lastIndexOf(".html") + 2).replace('index', 'home');
if (window.location.pathname === '/') {var formattedPath = ' / home'};

document.write('\
\
<header>\
    <div class="header-text"><a href="./index.html">' + window.location.hostname.substring(0, window.location.hostname.indexOf('.')) + '</a>' + formattedPath + '\
</header>');