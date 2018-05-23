module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify 설정
        uglify: {
            options: {
                banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> / ' //파일의 맨처음 붙는 banner 설정
            },
            build: {
                src: 'public/build/result.js', //uglify할 대상 설정
                dest: 'public/build/result.min.js' //uglify 결과 파일 설정
            }
        },
        //concat 설정
        concat:{
            basic: {
                //concat 타겟 설정(앞에서부터 순서대로 합쳐진다.)
                src: ['public/js/common/util.js', 'public/js/app.js', 'public/js/lib/.js', 'public/js/ctrl/.js'], 
                dest: 'public/build/result.js' //concat 결과 파일
            }
        }
        , concat_css:{

            all:{src:['src/css/common.css','src/css/layout.css'], // 합쳐질 파일의 경로를 입력 'src/css/*.css'와 같은 형식으로도 입력 가능

                 dest:'src/css/style.css' // 최종 파일이 저장되는 경로 및 파일명 지정

            }
        }        
        , sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'src/css/main.css': 'src/css/main.scss',       // 'destination': 'source'
                'src/css/widgets.css': 'src/css/widgets.scss'
              }
            }
        }        
    });
 
    // Load the plugin that provides the "uglify", "concat" tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'sass']); //grunt 명령어로 실행할 작업
 
};