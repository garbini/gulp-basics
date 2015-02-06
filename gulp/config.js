var dest = "./build";
var src = './app';

module.exports = {

    sass: {
        src: src + "/**/*.{sass,scss}",
        dest: dest,
        autoprefixer: {
            browsers: ['last 5 version']
        },
        settings: {
            errLogToConsole: false,
            outputStyle: 'compressed'
        }
    }

};