// Import stylesheets

if (window.orbita) {
  window.orbita.load();
}
// const self = window;
console.log("Test");
// Write Javascript code!
$(document).ready(function () {
  $("#serverurl").val(
    localStorage.getItem("serverurl") || "https://aurora.orbita.cloud:8443"
  );
  $("#endpoint").val(localStorage.getItem("endpoint") || "/bot/security");
});
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Dock-Float</h1>`;

function getInput() {
  const serverurl = document.getElementById("serverurl").value;
  const endpoint = "/oeapi" + document.getElementById("endpoint").value;
  const provider = document.getElementById("provider").value;
  const clientId = document.getElementById("clientId").value;
  const clientSecret = document.getElementById("clientSecret").value;
  console.log(serverurl);
  self.orbita.oauthserverUrl = serverurl || "https://aurora.orbita.cloud:8443";
  self.orbita.serverUrl = serverurl + endpoint;
  self.orbita.serverUrlTest = self.orbita.serverUrl;
  self.orbita.provider = provider;
  self.orbita.clientId = clientId || self.orbita.clientId;
  self.orbita.clientSecret = clientSecret || self.orbita.clientSecret;

  localStorage.setItem("serverurl", serverurl);
  localStorage.setItem("endpoint", document.getElementById("endpoint").value);
  localStorage.setItem("clientId", clientId);
  localStorage.setItem("clientSecret", clientSecret);

  self.orbita.load();
}

function clearCache() {
  localStorage.clear();
  window.location.reload();
}
window.OrbitaChatBotPlugin.registerEvents("afterInit", function () {
  console.log("after initialization");
  $(".spinner-grow").hide();
});
$(".dropdown-menu").click(function (e) {
  console.log(e.target.innerHTML);
  self.orbita.theme = e.target.innerHTML;
  self.orbita.load();
});
$(".dropdown-toggle").dropdown();
window.getInput = getInput;
window.clearCache = clearCache;
