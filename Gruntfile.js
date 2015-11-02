var serveStatic = require('serve-static');

module.exports = function(grunt) {

	grunt.initConfig({
		src: 'src',
		dist: 'dist',
		bower_components: 'bower_components',

	    sass: {
	      main: {
	        src: ['<%= src %>/styles/main.scss'],
	        dest: '<%= dist %>/styles/main.css'
	      }
	    },

		watch: {
		  sass: {
		    files: ['<%= src %>/styles/{,*/}*.scss'],
		    tasks: ['sass'],
		    options: {
		      livereload: false
		    }
		  },
	      js: {
	        files: ['<%= src %>/js/{,*/}*.js'],
	        options: {
	          livereload: '<%= connect.server.options.livereload %>'
	        }
	      },
	      css: {
	        files: ['<%= dist %>/styles/{,*/}*.css'],
	        options: {
	          livereload: '<%= connect.server.options.livereload %>'
	        }
	      }
		},

		connect: {
            server: {
                options: {
                    port: 9020,
                    hostname: 'localhost',
                    open: true,
                    keepalive: true,
                    livereload: 35729,
                    middleware: function (connect) {
                        return [
                            connect().use(
                                '/bower_components/',
                                serveStatic('./bower_components')
                            ),
                            connect().use(
                                '/styles/',
                                serveStatic('./dist/styles')
                            ),
                            serveStatic('./src')
                        ];
                    }
                }
            }
        }

	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('serve', ['connect:server']);
	grunt.registerTask('default', []);
};
