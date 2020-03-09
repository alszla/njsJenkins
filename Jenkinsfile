pipeline {
    agent {
        label 'agentgit'
    }
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }    

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
