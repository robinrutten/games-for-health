var serveStatic = require('serve-static');

module.exports = function(grunt) {

	grunt.initConfig({
		src: 'src',
		dist: 'dist',
		bower_components: 'bower_components',

	    copy: {
	      dist: {
	        files: [{
	          expand: true,
	          dot: true,
	          cwd: '<%= src %>',
	          dest: '<%= dist %>',
	          src: [
	            '*.{ico,png,txt}',
	            '.htaccess', 
	            '*.html',
	        	'styles/{,*/}*.css', 
	            'img/{,*/}*.{webp,png,jpg,gif,svg}', 
	            'fonts/{,*/}*.*'
	          ]
	        }]
	      }
	    },

	    sass: {
	      main: {
	        src: ['<%= src %>/styles/main.scss'],
	        dest: '<%= dist %>/styles/main.css'
	      }
	    },

	    usemin: {
	      html: ['<%= dist %>/{,*/}*.html'],
	      options: {
	        assetsDirs: [
	          '<%= dist %>',
	          '<%= dist %>/img',
	          '<%= dist %>/styles'
	        ]
	      }
	    },

		useminPrepare: {
		  options: {
		    dest: '<%= dist %>',
		    flow: {
		      html: {
		        steps: {
		          js: ['concat'],
		        },
		        post: {}
		      }
		    }
		  },
		   html: '<%= src %>/index.html',
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
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('serve', ['connect:server']);
	grunt.registerTask('default', []);
	grunt.registerTask('dist', ['useminPrepare', 'sass', 'copy', 'usemin', 'concat']);
};
