pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-nginx-app"
        CONTAINER_NAME = "my-nginx-app"
        HOST_PORT = "8080"
        CONTAINER_PORT = "80"
    }

    stages {

        stage('Test Docker') {
            steps {
                sh 'docker --version'
                sh 'docker ps -a'
            }
        }

        stage('Stop Old Container') {
            steps {
                // Stop container if it exists
                sh """
                if [ \$(docker ps -aq -f name=$CONTAINER_NAME) ]; then
                    echo "Stopping existing container..."
                    docker stop $CONTAINER_NAME
                    docker rm $CONTAINER_NAME
                else
                    echo "No existing container to stop."
                fi
                """
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Run Container') {
            steps {
                sh """
                docker run -d \\
                    --name $CONTAINER_NAME \\
                    -p $HOST_PORT:$CONTAINER_PORT \\
                    $IMAGE_NAME
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps -a'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Check Docker container logs if needed."
        }
    }
}
