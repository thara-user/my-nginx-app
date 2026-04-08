pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-nginx-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f my-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8081:80 --name my-container my-nginx-app'
            }
        }
    }
}
