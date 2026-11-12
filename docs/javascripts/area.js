/* Setzt den Bereich (hb3, hb9, allgemein) als Attribut am body, damit die Farben pro Bereich wechseln. */
function setArea() {
  var p = window.location.pathname;
  var a = "start";
  if (p.indexOf("/hb3/") !== -1) a = "hb3";
  else if (p.indexOf("/hb9/") !== -1) a = "hb9";
  else if (p.indexOf("/allgemein/") !== -1) a = "allgemein";
  document.body.setAttribute("data-area", a);
  var c = { hb3: "#F5B58C", hb9: "#EBA9C5", allgemein: "#8FD1C8", start: "#CFD8DC" }[a];
  var m = document.querySelector('meta[name="theme-color"]');
  if (!m) { m = document.createElement("meta"); m.name = "theme-color"; document.head.appendChild(m); }
  m.content = c;
}
setArea();
if (typeof document$ !== "undefined") { document$.subscribe(setArea); }
