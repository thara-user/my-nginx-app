pipeline {
    agent any

    stages {

        stage('Test Docker') {
            steps {
                bat 'docker ps'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-nginx-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop my-container'
                bat 'docker rm my-container'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8080:80 --name my-container my-nginx-app'
            }
        }
    }
}
