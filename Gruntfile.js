module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            javascript: {
                src: [
                    'src/assets/js/*.js'
                ],
                dest: 'src/static/js/script.js'
            }
        },

        uglify: {
            options: {
                compress: {
                    drop_console: true // <-
                }
            },
            javascript: {
                src: ['src/static/js/script.js'],
                dest:'src/static/js/script.js'
            }
        },

        cssmin: {
            styles: {
                src: ['src/assets/css/editor.css'],
                dest:'src/static/css/editor.css'
            }
        },

        copy: {
            fonts: {
                cwd: 'bower_components/font-awesome/fonts',
                src: '**',
                dest: 'public/fonts',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            img: {
                cwd: 'app/assets/img',
                src: '**',
                dest: 'public/img',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        },

        watch: {
            javascript: {
                files: [
                    'src/assets/*.js'
                ],
                tasks: ['local']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('prod', ['concat','uglify','cssmin','copy']);
    grunt.registerTask('local', ['concat']);
    grunt.registerTask('default', ['local','watch:javascript']);

};