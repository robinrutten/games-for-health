var serveStatic = require('serve-static');

module.exports = function(grunt) {

	grunt.initConfig({
		src: 'src',
		dist: 'dist',
		bower_components: 'bower_components',

		connect: {
            server: {
                options: {
                    port: 9020,
                    hostname: 'localhost',
                    open: true,
                    keepalive: true,
                    middleware: function (connect) {
                        return [
                            connect().use(
                                '/bower_components/',
                                serveStatic('./bower_components')
                            ),
                            serveStatic('./src')
                        ];
                    }
                }
            }
        }

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('serve', ['connect:server']);
	grunt.registerTask('default', []);
};
