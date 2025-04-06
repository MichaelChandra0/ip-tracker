document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    const requestv4 = new XMLHttpRequest();
    const requestv6 = new XMLHttpRequest();
    // load IPv4
    requestv4.onload = function () {
      const data = JSON.parse(this.responseText);
      const ip = data.ip;
      document.getElementById("headingv4").innerHTML = "IPv4 : ";
      document.getElementById("ipv4").innerHTML = ip;
    };

    // load IPv6
    requestv6.onload = function () {
      const data = JSON.parse(this.responseText);
      const ip = data.ip;
      document.getElementById("headingv6").innerHTML = "IPv6 : ";
      document.getElementById("ipv6").innerHTML = ip;
    };

    requestv4.open("GET", "https://api.ipify.org?format=json");
    requestv4.send();
    requestv6.open("GET", "https://api6.ipify.org?format=json");
    requestv6.send();
  });
});
