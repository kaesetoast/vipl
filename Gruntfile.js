module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },

        uglify: {
            all: {
                files: {
                    'dist/vipl.min.js': 'src/vipl.js'
                }
            }
        },

        watch: {
            all: {
                files: ['src/*.js', 'demo/*.html'],
                tasks: ['jshint', 'uglify'],
                options: {
                    livereload: 35729
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib');

    grunt.registerTask('default', ['jshint', 'uglify', 'watch']);

};