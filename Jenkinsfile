pipeline { // define CI/CD flow
    agent any // run at any available machine
// image node:22.14.0-alpine - use Docker image with Node.js version 22.14.0, npm (Node Package Manager) on Alpine Linux for all stages in this pipeline
    stages { //“Jenkins, execute my pipeline in a container  (Docker) which has Node.js installed”
        stage('Build') { //'build' stage (phase)
            agent { // define agent for this stage - agent is a machine where the code will be built and tested
                docker { // use Docker to run the 'build' stage in a container
                    image 'node:22.14.0-alpine' //docker will run my code in a Docker container with Node.js version 22.14.0 on Alpine Linux
                    reuseNode true //reuseNode true - to reuse the same container for all stages, so we can share files between stages (like build artifacts)
                }
            }

            steps { // execute Node.js commands below
                sh '''
                    ls -la
                    node --version 
                    npm --version
                    npm install
                    npm run build
                    ls -la
                '''
            }
        }// end of 'Build' stage

        stage('Test') { // 'test' stage (phase)
            agent {
                docker {
                    image 'node:22.14.0-alpine' // use Docker to run the 'Test' stage in a container
                    reuseNode true // reuse the same container for the 'Test' stage, so we can access the build artifacts from the 'Build' stage (like build/index.html)
                }
            }
            steps { 
                sh '''
                    test -f build/index.html 
                    npm test -- --watchAll=false
                '''
            }
        }// end of 'Test' stage

        stage('Deploy') {// 'deploy' stage (phase)
            agent { // use Docker to run the 'Deploy' stage in a container
                docker {
                    image 'node:22.14.0-alpine'
                    reuseNode true
                }
            }
            steps {
            withCredentials([// withCredentials - to securely inject sensitive information (like API tokens) into the build environment without hardcoding them in the Jenkinsfile
                string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_AUTH_TOKEN'),
                string(credentialsId: 'NETLIFY_SITE_ID', variable: 'NETLIFY_SITE_ID')
            ]) {
                sh '''             
                    echo "Deploying to Production..."
                    npx netlify-cli deploy --prod --dir=build --no-build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
                '''
            }// end of withCredentials
            } // end of steps
        } // end of 'Deploy' stage    
    }// end of stages
} // end of pipeline definition

