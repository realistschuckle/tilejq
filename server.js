var http = require('http')
  , namp = require('namp')
  , fs = require('fs')
  , urlparse = require('url').parse
  , crypto = require('crypto')
  , path = require('path')
  , base = __dirname
  , mimes = {
      '.js': 'application/javascript',
      '.html': 'text/html',
      '.css': 'text/css',
      '.png': 'image/png'
    }
  ;

http.createServer(function(req, res) {
  var urlo = urlparse(req.url);
  var receivedEtag = req.headers['if-none-match'];
  if(urlo.pathname === '/' || urlo.pathname === '') {
    urlo.pathname = '/index.html';
  }
  fs.readFile(path.join(base, urlo.pathname), 'utf8', function(err, data) {
    if(err) {
      res.writeHead(404);
      return res.end('Error loading ' + urlo.pathname);
    }
    var md5 = crypto.createHash('md5');
    md5.update(data);
    var etag = new Buffer(md5.digest()).toString('hex');
    if(etag === receivedEtag) {
      res.writeHead(304);
      return res.end();
    }
    if(path.extname(urlo.pathname) === '.md') {
      data = namp.toHTML(data, {highlight: true}).html;
      urlo.pathname += '.html';
    }
    res.writeHead(200, {
      'ETag': etag,
      'Content-Type': mimes[path.extname(urlo.pathname)]
    });
    res.end(data);
  });
}).listen(8080);
