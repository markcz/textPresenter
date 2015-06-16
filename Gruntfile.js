module.exports = function(grunt) {

    grunt.initConfig({
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },
        bowerRequirejs: {
            target: {
                rjsConfig: 'source/main.js'
            }
        }
    });

  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.registerTask('default', ['bowerRequirejs']);

};