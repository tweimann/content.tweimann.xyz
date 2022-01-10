fetch('https://www.cloudflare.com/cdn-cgi/trace')
  .then(res => {
    var resArray = String(res).split('\n');
    resArray.forEach(e => {
      if (e.startsWith('ip')) {
        document.write(e);
      }
    });
  });

fetch('https://www.cloudflare.com/cdn-cgi/trace')
  .then(res => {
    document.write(res); 
    console.log(res);
  });
