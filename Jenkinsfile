pipeline {
    agent any
    stages {
        stage('Test Docker') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-nginx-app .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name my-nginx-app my-nginx-app'
            }
        }
    }
}
