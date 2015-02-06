var dest = "./build";
var src = './app';

module.exports = {

    sass: {
        src: src + "/**/*.{sass,scss}",
        dest: dest,
        settings: {
            // errLogToConsole: true,
            outputStyle: 'compressed'
        }
    }

};