module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  var angularFiles = [
    'dist/ng/dev/inline.bundle.js',
    'dist/ng/dev/polyfills.bundle.js',
    'dist/ng/dev/styles.bundle.js',
    'dist/ng/dev/vendor.bundle.js',
    'dist/ng/dev/main.bundle.js'
  ];

  var angularDevFiles = angularFiles;

  var angularBuildFiles = angularFiles.map(function(path) {
    return path.replace(/\.bundle\.js/, '.*.bundle.js').replace(/\/dev\//, '/build/');
  });

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
      js: [
        './dist/scripts/**/*.js'
      ],
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
              'src/client/app/**/*!.modules.js'
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

    injector: ({
      angular_dev: {
        options: {
          template: 'src/client/index.html',
          starttag: '<!-- injector:angular -->',
          endtag: '<!-- endinjector -->',
          relative: false
        },
        files: [
          {
            src: angularDevFiles,
            dest: 'src/client/index.html'
          }
        ]
      },
      angular_build: {
        options: {
          template: 'src/client/index.html',
          starttag: '<!-- injector:angular -->',
          endtag: '<!-- endinjector -->',
          relative: false
        },
        files: [
          {
            src: angularBuildFiles,
            dest: 'dist/index.html'
          }
        ]
      }
    }),
    exec: {
      ng_dev_build: {
        command: 'npm run build:dev',
        stdout: true,
        stderr: true
      },
      ng_watch: {
        command: 'npm run build:watch',
        stdout: true,
        stderr: true
      },
      ng_build: {
        command: 'npm run build',
        stdout: true,
        stderr: true
      }
    },
    wiredep: {
      task: {
        src: ['src/client/index.html', './karma.conf.js'],
        // aboslute paths instead of relative paths http://stackoverflow.com/a/26024882/679716
        ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/
      }
    },

    angularFileLoader: {
      options: {
        scripts: [
          'src/client/app/**/*.js',
          '!src/client/app/**/*.spec.js'
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
      injector_angular_dev: {
        files: ['dist/ng/dev/*.js'],
        tasks: ['injector:angular_dev']
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true,
      },
      default: [
        'nodemon',
        'watch',
        'exec:ng_watch'
      ]
    }
  });

  // concurrent tasks most go last
  grunt.registerTask('default', [
    'wiredep',
    'angularFileLoader',
    'sass',
    'concurrent:default'
  ]);

  grunt.registerTask('build', [
    'exec:ng_build',
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
    'injector:angular_build'
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
