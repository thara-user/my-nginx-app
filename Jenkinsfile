pipeline {
    agent { label 'linux-agent' }
    stages {
        stage('Test Curl') {
            steps {
                sh 'curl http://10.255.255.254:8081'
            }
        }
    }
}
