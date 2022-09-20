if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js", {
            scope: ".",
        })
        .then(
            function (registration) {
                // Registration was successful
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            }
        );
}
// window.addEventListener("load", run);


window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-45CH0H0F54");

