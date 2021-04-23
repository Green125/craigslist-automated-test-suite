pipeline {
  agent any

  tools {nodejs "the-node-tool"}

  stages {
    stage('Example') {
      steps {
        sh 'npm config ls'
      }
    }
  }
}
