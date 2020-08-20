const path = require('path')

const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    addPostcssPlugins,
    addBabelPlugins
} = require("customize-cra")

module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
    addPostcssPlugins([require("postcss-px2rem-exclude")({
        rootValue: 100,
        unitPrecision: 5,
        propList: ['*'],
        // selectorBlackList: [/^\.am-/],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude: /node_modules|rc-calendar/i
    })]),
    ...addBabelPlugins('@babel/plugin-proposal-optional-chaining')
)
