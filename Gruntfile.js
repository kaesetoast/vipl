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
                tasks: ['jshint', 'uglify', 'qunit'],
                options: {
                    livereload: 35729
                }
            }
        },

        qunit: {
            all: ['test/**/*.html']
        }

    });

    grunt.loadNpmTasks('grunt-contrib');

    grunt.registerTask('default', ['jshint', 'uglify', 'qunit', 'watch']);

};