module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadTasks('grunt-tasks');

  grunt.initConfig({
    pkg:'<json:package.json>',

    clean:['dist'],

    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "dist/css/screen.css": "resources/less/screen.less"
        }
      }  
    },

    html2js: {

      development: {
        src: ['src/**/*.tmpl.html'],
        dest:'dist/js/templates.js',
        options: {
          base: 'src'
        }
      },

    },

    browserify:{

      core:{
        src:['src/index.js'],
        dest:'dist/js/application.js'     
      }

    },

    watch: {
        options: {
          livereload: true,
          nospawn:true
        },

        less: {
          files: ["resources/less/screen.less"],
          tasks: ['less']
        },

        html: {
          files: ['index.html']
        },

        templates:{
          files:['src/**/*.tmpl.html'],
          tasks:['html2js']
        }

    }

  });

  grunt.registerTask('build', ['clean', 'less', 'html2js', 'browserify']);
  grunt.registerTask('watchAll', ['build', 'watch'])

};