module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {  
        'dist/Baidu.css': 'Baidu.css'
      },
      uglify: {
        release:{
          files: {
            'dist/baidu.js': 'baidu.js'
          }
        }
      }	    
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };