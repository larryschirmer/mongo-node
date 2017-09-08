const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
    'stop-mongo-docker',
    shell.task([
        'echo ',
        'echo Stopping Mongo Docker',
        'docker container stop mongo-docker-api',
        'docker container rm mongo-docker-api',
        'docker container stop mongo-docker-db',
        'docker container rm mongo-docker-db'
    ])
);

gulp.task(
    'stop-mongo-docker-db',
    shell.task([
        'echo ',
        'echo Stopping Mongo Docker',
        'docker container stop mongo-docker-db',
        'docker container rm mongo-docker-db'
    ])
);