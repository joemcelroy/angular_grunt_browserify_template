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
          "dist/css/screen.css": "resources/less/import.less"
        }
      }  
    },

    concat: {
      build: {
        src: [
          'resources/js/jquery.js',
          'resources/js/angular.min.js',
          'resources/js/angular-ui-router.min.js'
        ],
        dest: 'dist/js/vendor.js'
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
          files: ["resources/less/import.less"],
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

  grunt.registerTask('build', ['clean', 'concat', 'less', 'html2js', 'browserify']);
  grunt.registerTask('watchAll', ['build', 'watch'])

};