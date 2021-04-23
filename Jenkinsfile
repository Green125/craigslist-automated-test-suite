pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Run tests') {
            steps {
                echo 'We are running tests....'
                sh "echo hello there"
                sleep 25 // seconds
            }
        }
    }
}
