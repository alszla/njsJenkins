pipeline {
    agent {
        label 'agent'
    }
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }    

        stage('Test') {
            steps {
                sh 'xvfb-run npm test'
            }
        }
    }
}
