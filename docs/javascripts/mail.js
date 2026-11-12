/* Setzt die E-Mail-Adresse erst im Browser zusammen. Einfache Suchprogramme (Crawler) sehen sie nicht im Seitentext. */
function setMail() {
  var els = document.querySelectorAll(".mailschutz");
  for (var i = 0; i < els.length; i++) {
    var e = els[i];
    var adr = e.getAttribute("data-u") + "@" + e.getAttribute("data-d") + "." + e.getAttribute("data-t");
    var a = document.createElement("a");
    a.href = "mailto:" + adr;
    a.textContent = adr;
    e.textContent = "";
    e.appendChild(a);
  }
}
setMail();
if (typeof document$ !== "undefined") { document$.subscribe(setMail); }
