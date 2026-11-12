/* Setzt den Bereich (hb3, hb9, allgemein) als Attribut am body, damit die Farben pro Bereich wechseln. */
function setArea() {
  var p = window.location.pathname;
  var a = "start";
  if (p.indexOf("/hb3/") !== -1) a = "hb3";
  else if (p.indexOf("/hb9/") !== -1) a = "hb9";
  else if (p.indexOf("/allgemein/") !== -1) a = "allgemein";
  document.body.setAttribute("data-area", a);
}
setArea();
if (typeof document$ !== "undefined") { document$.subscribe(setArea); }
