const gulp = require("gulp");
const sass = require("gulp-sass");

/*
        -- top level functions
        gulp.task -  Define tasks
        gulp.src  -  points to files to use
        gulp.dest - points to folder output   
        gulp.watch - watch files and folders for change
*/

// logs message
gulp.task("message", function() {
    return console.log("gulp fungerar");
})

//copy all HTML-files
gulp.task("copyhtml", function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("build"));
})
//compile sass
gulp.task("sass", function(){
    gulp.src("src/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("build/css"))
})


// standardkörning
gulp.task("default", ["copyhtml", "sass"])

//gulp watch
gulp.task("watch", function(){
    gulp.watch("src/*.html", ["copyhtml"]);
    gulp.watch("src/sass/*.scss",["sass"]);
})
