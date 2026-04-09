pipeline {
    agent any

    stages {

        stage('Test Docker') {
            steps {
                sh 'docker ps'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-nginx-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f my-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:80 --name my-container my-nginx-app'
            }
        }
    }
}
