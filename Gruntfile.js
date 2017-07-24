/*global module, require*/
module.exports = function (grunt) {

    "use strict";

    var jsBanner = '/*\n * This is an plugin to equalize the height of elements of columns with the same top offset.\n * https://github.com/sandroweb/height-equalizer\n */';

    grunt.initConfig({

        jslint: {
            sources: {
                src: [
                    'source/height-equalizer.js'
                ],
                directives: {
                    unused: true,
                    todo: true,
                    indent: 2,
                    vars: true,
                    node: true,
                    stupid: true,
                    ass: true,
                    plusplus: true,
                    regexp: true
                },
                options: {
                    regexp: false,
                    failOnError: true,
                    forin: true,
                    edition: 'latest',
                }
            }
        },

        uglify: {
            mainMin: {
                options: {
                    beautify: false,
                    sourceMap: true,
                    compress: {
                        drop_console: false
                    },
                    banner: jsBanner
                },
                files: {
                    'dist/height-equalizer.min.js': ['source/height-equalizer.js']
                }
            },
            main: {
                options: {
                    beautify: false,
                    sourceMap: false,
                    compress: {
                        drop_console: false
                    },
                    banner: jsBanner
                },
                files: {
                    'dist/height-equalizer.js': ['source/height-equalizer.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'source/height-equalizer.js'],
                tasks: ['jslint', 'uglify']
            }
        }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['jslint', 'uglify']);

    grunt.registerTask('w', ['default', 'watch']);
};