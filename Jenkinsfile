pipeline {
    agent { label 'linux-agent' } // runs on your Linux agent
    environment {
        APP_URL = 'http://10.255.255.254:8081' // Windows Docker container IP
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/your-username/my-nginx-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies (if any)...'
                sh '''
                # Example: npm install or other tools
                # Uncomment if using Node.js
                # npm install
                '''
            }
        }
        stage('Build') {
            steps {
                echo 'Building project...'
                sh '''
                # Example: build commands
                # npm run build
                '''
            }
        }
        stage('Test Container') {
            steps {
                echo "Testing if app is reachable at $APP_URL"
                sh '''
                STATUS=$(curl -o /dev/null -s -w "%{http_code}" $APP_URL)
                if [ "$STATUS" -eq 200 ]; then
                    echo "✅ App is reachable at $APP_URL"
                else
                    echo "❌ App returned status $STATUS"
                    exit 1
                fi
                '''
            }
        }
        stage('Deploy/Other Steps') {
            steps {
                echo 'Deploy or other steps go here...'
                sh '''
                # For example, copying files, building Docker images, etc.
                '''
            }
        }
    }
    post {
        always {
            echo 'Cleaning up workspace...'
            sh 'rm -rf *'
        }
        success {
            echo 'Pipeline completed successfully! 🎉'
        }
        failure {
            echo 'Pipeline failed! ❌'
        }
    }
}
