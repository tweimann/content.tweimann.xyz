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
  .then(res => document.write(res));

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  // Convert key-value pairs to JSON
  // https://stackoverflow.com/a/39284735/452587
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  console.log(data);
});
