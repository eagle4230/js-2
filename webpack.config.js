const path = require('path')

module.exports = {
    entry: [
        './src/public/js/ProductComponent.js',
        './src/public/js/CartComponent.js',
        './src/public/js/FilterComp.js',
        './src/public/js/ErrorComp.js',
        './src/public/js/main.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public/js/')
    }
}