module.exports = [{
    script: './dist/main.js',
    name: 'myblog_server',
    exec_mode: 'cluster',
    instances: 2
  }, {
    script: 'worker.js',
    name: 'worker'
  }]