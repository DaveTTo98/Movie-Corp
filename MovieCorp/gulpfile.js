import {src, dest, watch} from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
// Unir gulpsass y dartass en una sola funtion para optimizar 
const sass = gulpSass(dartSass);

//COMPILAR  SCSS 
export function css( done ){
    src('src/scss/app.scss')
    .pipe( sass().on('error', sass.logError) ) // control y orden sobre la ejecución de funciones
    .pipe( dest('build/css') )



    done()  
}

export function dev(){
    watch('src/scss/**/*.scss', css)
}

