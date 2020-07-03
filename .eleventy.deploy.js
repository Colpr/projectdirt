const htmlmin = require('html-minifier')

module.exports = (config) => {
    config.addTransform('htmlmin', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            })

            return minified
        }

        return content
    })

    return {
        dir: {
            input: 'src',
            output: 'docs',
        },
        pathPrefix: '/front-matter-search/',
    }
}
