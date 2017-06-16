module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      dist: [
        './.tmp',
        './dist/**/*',
        '!./dist/ng',
        '!./dist/ng/**/*'
      ]
    },
    ngtemplates: {
      app: {
        src: 'src/client/app/**/*.html',
        dest: 'src/client/app/app.templates.js',
        options: {
          module: 'angularSeed',
          prefix: '',
          htmlmin: {
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true,
            removeOptionalTags: true,
            keepClosingSlash: true,
            minifyJS: true
          }
        }
      }
    },
    useminPrepare: {
      html: 'src/client/index.html',
      options: {
        dest: './dist',
        staging: './.tmp',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglify'],
              css: ['cssmin']
            }
          }
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true,
        rebase: true
      },
      generated: {}
    },
    usemin: {
      html: ['./dist/**/*.html'],
      css: ['./dist/styles/**/*.css'],
      js: ['./dist/scripts/**/*.js'],
      options: {
        blockReplacements: {
          css: function(block) {
            var file = getFile(grunt.filerev.summary, block);
            return '<link rel="stylesheet" href="' + file + '" />';
          },
          js: function(block) {
            var file = getFile(grunt.filerev.summary, block);
            return '<script src="' + file + '"></script>';
          }
        }
      }
    },
    concat: {
      generated: {
        files: [
          {
            dest: '.tmp/concat/js/app.js',
            src: [
              'src/client/app/app.module.js',
              'src/client/app/app.config.js',

              'src/client/app/**/*.module.js',
              'src/client/app/**/*!(.modules.js'
            ]
          }
        ]
      }
    },
    copy: {
      dist: {
        files: [{
          src: 'src/client/index.html',
          dest: 'dist/index.html'
        }]
      }
    },
    uglify: {
      options: {
        beautify: false,
        mangle: true,
        compress: true,
        sourceMap: true
      },
      generated: {
        files: [
          {
            src: [
              './.tmp/concat/js/app.js'
            ],
            dest: './dist/js/app.js'
          }
        ]
      }
    },
    filerev: {
      dist: {
        src: [
          'dist/scripts/{,*/}*.js',
          'dist/styles/{,*/}*.css'
        ]
      }
    },
    includeSource: {
      options: {
      },
      dev: {
        files: {
          'src/client/index.html': 'src/client/index.html'
        }
      },
      build: {
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    },
    wiredep: {
      task: {
        src: ['src/client/index.html'],
        // aboslute paths instead of relative paths http://stackoverflow.com/a/26024882/679716
        ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/
      }
    },

    angularFileLoader: {
      options: {
        scripts: [
          'src/client/app/**/*.js'
        ],
        relative: false
      },
      your_target: {
        src: ['src/client/index.html']
      }
    },

    nodemon: {
      dev: {
        script: 'src/server/app.js'
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          'src/client/styles/main.css': 'src/client/scss/style.scss'
        }]
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      sass: {
        files: ['src/client/scss/**/*.scss'],
        tasks: ['sass']
      },
      angularFileLoader: {
        files: ['src/client/app/**/*.js'],
        tasks: ['angularFileLoader']
      },
      includeSource: {
        files: ['dist/ng/*.js'],
        tasks: ['includeSource:dev']
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true,
      },
      default: [
        'nodemon',
        'watch'
      ]
    }

  });

  // concurrent tasks most go last
  grunt.registerTask('default', [
    'wiredep',
    'angularFileLoader',
    'includeSource:dev',
    'sass',
    'concurrent:default'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'ngtemplates',
    'wiredep',
    'angularFileLoader',
    'sass',
    'useminPrepare',
    'concat:generated',
    'copy:dist',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin',
    'includeSource:build'
  ]);

  function getFile(summary, block) {
    var searchPath = block.searchPath[0] || '';

    if (searchPath === '.') {
      searchPath = '';
    }

    var file = searchPath + 'dist/' + block.dest;

    return summary[file].replace(searchPath, '');
  }
};
