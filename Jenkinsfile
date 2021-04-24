pipeline {
  agent any

  tools {nodejs "the-node-tool"}

  stages {
    stage('AddNPM') {
      steps {
         sh 'npm i --legacy-peer-deps'
      }
    }
    stage('RunLint'){
      steps{
        sh 'npm run lint'
        }
    }
  }
}
