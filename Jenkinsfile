pipeline { // define CI/CD flow
    agent { // define where the pipeline will run
            docker { // use Docker to run the pipeline
                image 'node:22.14.0-alpine' // use the official Node.js image from Docker Hub
                reuseNode true //reuseNode true - to reuse the same container for all stages, so we can share files between stages (like build artifacts)
            }
    } // end of agent definition

    stages {
        stage('Build') { //'build' stage (phase)
             steps { // execute Linux commands below
                sh '''
                    ls -la
                    node --version 
                    npm --version
                    npm install
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    test -f build/index.html
                    npm test -- --watchAll=false    
                '''
            }
        }
    }
}