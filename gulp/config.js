var src = './app';
var dest = "./public";

module.exports = {

    // Compass task configuration.
    compass: {
        src: src + "/**/*.{sass,scss}",
        dest: dest,
        autoprefixer: {
            browsers: ['last 10 version']
        },
        settings: {
            sass: src + '/styles',
            css: dest + '/styles',
            style: 'compressed',
            sourcemap: true
        }
    },

    // Fonts task configuration.
    fonts: {
        src: src + '/styles/fonts/**',
        dest: dest + '/styles/fonts'
    },

    // CoffeeScript configuration.
    coffee: {},

    // AngularJS Templates configuration.
    angular: {},

    // Images task configuration.
    images: {
        src: src + "/**/*.{jpg,png,gif}",
        dest: dest,
        settings: {}
    }

};