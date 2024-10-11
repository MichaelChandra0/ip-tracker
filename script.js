document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("button").addEventListener("click", () => {

        const request = new XMLHttpRequest();
        request.onload = function(){
            const data = JSON.parse(this.responseText);
            const ip = data.ip;

            document.getElementById("ip").innerHTML = ip


        }

        request.open("GET", "https://api.ipify.org/?format=json")
        request.send();
        
    })
})