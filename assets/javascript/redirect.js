const protocol = window.document.location.protocol;
if (protocol === "http:") {
  window.location.href = "https://" + window.document.location.hostname;
}
