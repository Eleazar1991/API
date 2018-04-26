pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo '==Build stage=='
                docker build -t api-eoi .
            }
        }
        stage('Deploy') {
            steps {
                echo '==Deploy stage=='
                eb deploy
            }
        }
    }
}
