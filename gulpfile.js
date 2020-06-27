let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin  = require("gulp-cssmin");
let uglify = require("gulp-uglify");
let sass = require("gulp-sass")
let babel = require("gulp-babel")
const { dest } = require("gulp");
var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
};
gulp.task("go",async()=>{
    gulp.watch("./src/*.html",async()=>{
        gulp.src("./src/*.html")
        .pipe(htmlmin(options))
        .pipe(gulp.dest("D:\\wamp\\www\\zhongLiang\\cofco_upxian"))
    })
    gulp.watch("./src/sass/*.scss",async()=>{
        gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(cssmin())
        .pipe(dest("D:\\wamp\\www\\zhongLiang\\cofco_upxian\\css"))
    })
    gulp.watch("./src/img/*",async()=>{
        gulp.src("./src/img/*")
        .pipe(gulp.dest("D:\\wamp\\www\\zhongLiang\\cofco_upxian\\img"))
    })
    gulp.watch("./src/js/*.js",async()=>{
        gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("D:\\wamp\\www\\zhongLiang\\cofco_upxian\\js"))
    })
})
