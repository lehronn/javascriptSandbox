module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/main.sass'
        }
      }
    },
    jshint: {
      all: ['js/*.js']
    },
    watch: {
      scripts: {
          files: ['sass/*.sass', 'js/*.js'],
          tasks: ['sass', 'jshint'], //this task is doing when "watch" notice changes in files and catalogs that You set line above.  
          options: {
              spawn: false,
          },
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
};
