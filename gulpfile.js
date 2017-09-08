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
        'echo Stopping Mongo Docker Database',
        'docker container stop mongo-docker-db',
        'docker container rm mongo-docker-db'
    ])
);

gulp.task(
    'start-mongo-docker-db',
    shell.task([
        'echo ',
        'echo Starting Mongo Docker Database',
        'docker run --name mongo-docker-db -it --net=mongo-docker-net -d mongo',
    ])
);

gulp.task(
    'stop-mongo-docker-api',
    shell.task([
        'echo ',
        'echo Stopping Mongo Docker API',
        'docker container stop mongo-docker-api',
        'docker container rm mongo-docker-api',
    ])
);

gulp.task(
    'start-mongo-docker-api',
    shell.task([
        'echo ',
        'echo Starting Mongo Docker API',
        'docker build -t larryschirmer/mongo-docker .',
        'docker run --name mongo-docker-api -p 1234:8080 --net=mongo-docker-net -d larryschirmer/mongo-docker'
    ])
);

gulp.task(
    'start-mongo-docker',
    shell.task([
        'echo ',
        'echo Starting Mongo Docker',
        'gulp start-mongo-docker-db',
        'gulp start-mongo-docker-api',
    ])
);