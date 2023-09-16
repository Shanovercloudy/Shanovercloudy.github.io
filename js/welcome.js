//首次访问弹窗
if (localStorage.getItem("popWelcomeWindow") != "0") {
    if(document.referrer==undefined||document.referrer.indexOf("yisous.xyz")!=-1||document.referrer.indexOf("ariasaka.top")!=-1){ //改成自己域名，注意是referrer!!! qwq
        Snackbar.show({
            pos: "top-right",
            showAction: false,
            text: '欢迎来到月桂餐厅！想吃点什么呢♪'
        })
    }else{
        Snackbar.show({
                pos: "top-right",
                showAction: false,
                text: `欢迎来自${document.referrer.split("://")[1].split("/")[0]}的producer到访月桂，想吃点什么呢♪`
            })
        localStorage.setItem("popWelcomeWindow", "0");
    }
}
