const Metalsmith    = require('metalsmith')
const collections   = require('metalsmith-collections')
const markdown      = require('metalsmith-markdown')
const layouts       = require('metalsmith-layouts')
const permalinks    = require('metalsmith-permalinks')
const tidy          = require('metalsmith-html-tidy')
const debug         = require('metalsmith-debug')
const models        = require('metalsmith-models')
const within        = require('metalsmith-handlebars-within')
const assets        = require('metalsmith-assets')
const templates     = require('metalsmith-templates')
const inplace       = require('metalsmith-in-place')
const handlebars    = require('handlebars')
const date          = require('metalsmith-build-date')
const more          = require('metalsmith-more')
const gravatar      = require('metalsmith-gravatar')
const writemetadata = require('metalsmith-writemetadata')
const copy          = require('metalsmith-copy')
const jsonFiles     = require('metalsmith-json')
const jsonToFiles   = require('metalsmith-json-to-files')
const tojson        = require('metalsmith-to-json')
const metadata      = require('metalsmith-metadata')
const metafiles     = require('metalsmith-metafiles')
const static        = require('metalsmith-static')
const dateFormatter = require('metalsmith-date-formatter')
const gist          = require('metalsmith-gist')
const include       = require('metalsmith-include')
const s3            = require('metalsmith-s3')
const _             = require('lodash')
 
handlebars.registerHelper('iftt', function (item, comparison, options) {
    if (item == comparison) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
})

handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context)
})

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
    .use(metafiles('models', {
        postfix: '.custom',
        parsers: {
            ".json": true
        }
    }))
    .use(gist({
        debug: true,
        caching: true,
        cacheDir: '.gists'
    }))
    .use(dateFormatter({
        dates: [
            {
                key: 'beginDate',
                format: 'MM YYYY'
            },
            {
                key: 'endDate',
                format: 'MM YYYY'
            },
            {
                key: 'publishDate',
                format: 'MM YYYY'                
            }
        ]
    }))
    .source( './src' )
    .destination( './public' )
    .clean( true )
    .use(include())
    /*.use( static({
        src: "models/skillsets.json",
        dest: "json/skillsets.json",
    }))*/
    .use( date() )
    .use( gravatar({
        justinhyland: "j@linux.com"
    }))
    .use( templates( 'handlebars' ) )
    .use( assets({
        source: './assets', 
        destination: './assets' 
    }))
    .use( markdown() )
    .use( within() )
    .use( layouts({ 
        engine: 'handlebars',
        partials: {
            nav: 'partials/nav',
            content_footer: 'partials/content_footer',
            content_header: 'partials/content_header',
            html_foot: 'partials/html_foot',
            html_head: 'partials/html_head'
        }
    }))
    .use( inplace({
        engine: 'handlebars'
    }))
    /*
    .use( tidy({
        tidyOptions: {
            'indent-spaces': 4
            ,'clean': true
            ,'output-html': true
            //,'hide-comments': true
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
        }
    }))
    */
    /**
    Access Key ID: AKIAIIUGXRENWW4TQGGQ
    Secret Access Key: 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

    export AWS_ACCESS_KEY_ID='AKIAIIUGXRENWW4TQGGQ'
    export AWS_SECRET_ACCESS_KEY='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'

    User: arn:aws:iam::871731382815:user/web
    Bucket: justinhyland.com.s3-website-us-west-1.amazonaws.com
    */
    .use(s3({
        action: 'write',
        bucket: 'justinhyland.com'
    }))
    .build(function(err, files) {
        if (err) throw err

        console.log('Completed')
    })