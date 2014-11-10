'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      src: ['Gruntfile.js', 'server.js'],
      options: {
        jshintrc: true
      }
    },

    simplemocha: {
      src: ['./test/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
