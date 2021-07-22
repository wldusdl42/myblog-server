module.exports = {
    "apps" : [{
        "name": "server",
        "script": "./dist/main.js",
        "instances": 2, // 앱 인스턴스의 수
        "watch": true,
        "error_file": "./errors.log",
        "env": { // 환경변수. 모든 배포 환경에서 공통으로 사용한다.
            "NODE_ENV": 'development',
          },
        "env_production" : {
            "NODE_ENV": "production"
        }
    }]
}