var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');

Metalsmith(__dirname)
  .metadata({
    title: "Bodies in Balance Pilates Website",
    generator: "Metalsmith",
    url: "http://localhost:3000"
  })
  .source('./source')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
