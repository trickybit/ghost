module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: ['dist', 'tmp']
    },
    jshint: {
      options: grunt.file.readYAML('jshint.yml'),
      configurations: ['Gruntfile.js', 'package.json']
    },
    less: {
      specimen: {
        files: [
          {'tmp/less/specimen.css': 'src/less/specimen.less'}
        ]
      }
    },
    release: {
      options: {
        file: 'bower.json'
      }
    },
    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['clean', 'test', 'less:specimen']);
};
