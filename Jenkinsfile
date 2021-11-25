pipeline {
  agent any

  tools {nodejs "the-node-tool"}

  stages {
    stage('Install npm') {
      steps {
         sh 'npm i --legacy-peer-deps'
      }
    }
    stage('Run Lint'){
      steps{
        sh 'npm run lint'
        }
    }
  }
}
