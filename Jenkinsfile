pipeline {
  agent any

  tools {nodejs "the-node-tool"}

  stages {
    stage('Addnodepackages') {
      steps {
        sh 'npm i --legacy-peer-deps'
      }
    }
    stage('Linting') {
                steps {
                    sh 'npm install eslint'
                }
    }
  }
}
