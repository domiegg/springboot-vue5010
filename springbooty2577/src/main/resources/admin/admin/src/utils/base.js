const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooty2577/",
            name: "springbooty2577",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooty2577/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院信管系统"
        } 
    }
}
export default base
