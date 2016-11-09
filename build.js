const Metalsmith  = require('metalsmith')
const collections = require('metalsmith-collections')
const markdown    = require('metalsmith-markdown')
const layouts     = require('metalsmith-layouts')
const permalinks  = require('metalsmith-permalinks')
const tidy        = require('metalsmith-html-tidy')
const debug       = require('metalsmith-debug')
const models      = require('metalsmith-models')
const within      = require('metalsmith-handlebars-within')
const assets      = require('metalsmith-assets')
const templates   = require('metalsmith-templates')
const inplace     = require('metalsmith-in-place')
const handlebars  = require('handlebars')
const _           = require('lodash')

handlebars.registerHelper('iftt', function (item, comparison, options) {
    if (item == comparison) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

const metalsmith = Metalsmith(__dirname)

metalsmith
  .use(debug())
  .metadata({
    title: "Test Page",
    description: "Just testing metalsmith"
  })
  .use(models({ 
    directory: './models' 
  }))
  .metadata(require('./meta'))
  .source('./src')
  .destination('./public')

  /*.use(collections({
    experience: {
      sortBy: 'date',
      reverse: true,
      pattern: 'experience/*.json'
      //metadata: 'path/to/file.json'
    }
  }))*/
  .clean(true)
  .use(templates('handlebars'))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(markdown())
  .use(permalinks())
  .use(within())
  .use(layouts({ 
    engine: 'handlebars',
    partials: {
      nav: 'partials/nav',
      content_footer: 'partials/content_footer',
      content_header: 'partials/content_header',
      html_foot: 'partials/html_foot',
      html_head: 'partials/html_head'
    }
  }))
  .use(inplace({
    engine: 'handlebars'
  }))
  .use(tidy({
    tidyOptions: {
      'indent-spaces': 4
      ,'clean': true
      ,'output-html': true
      ,'hide-comments': true
      ,'show-errors': 6
      //,'show-info': true
      //,'show-warnings': true
      ,'uppercase-attributes': false
      ,'uppercase-tags': false
      ,'drop-empty-elements': false
      ,'drop-empty-paras': false
      ,'fix-backslash': false
      ,'fix-bad-comments': false
      ,'fix-uri': false
      ,'join-styles': false
      ,'lower-literals': false
      ,'merge-divs': false
      ,'merge-emphasis': false
      ,'merge-spans': false
      ,'skip-nested': false
    },
  }))
  .build(function(err, files) {
    if (err) throw err

      console.log('Metadata:',metalsmith)

  })
