module.exports = {
    "apps" : [{
        "name": "server",
        "script": "./dist/main.js",
        "exec_mode": "cluster",
        "instances": 2, // 앱 인스턴스의 수
        "watch": true,
        "error_file": "./errors.log"
    }]
}