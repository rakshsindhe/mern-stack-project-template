FOR LINUX AND MAC

1. Goto the project root dir and run the below command to build the docker image for the project.
`docker-compose build node`

 For a no cache build:
`docker-compose build --no-cache node`


If you're running the project first time. Run the following belw commands.

1. `docker-compose run node npm install`
2. `docker-compose run node npm run clientInstall`
3. `docker-compose run node npm run build`
4. Then run `docker-compose up`.


For WINDOWS,

1. Goto the project root directory and the run the below command
`docker build .`

2. After installing, goto the project root dir and explicity run "npm install" to install server dependencies and then cd to client folder and then run "npm install" to install client dependencies.

3. `docker-compose up`