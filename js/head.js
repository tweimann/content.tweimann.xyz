var title = window.location.hostname.substring(1, window.location.hostname.indexOf('.'))
var favicon = window.location.hostname.substring(0, 1) + '.ico'

document.write('\
<link rel="shortcut icon" type="image/png" href="./icons/favicon.png"/>\
<title>Home | tweimann</title>\
<link rel="stylesheet" href="./style.css">\
<link rel="preconnect" href="https://fonts.googleapis.com">\
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">\
');