/* Druckknopf am Seitenende, auch nach Seitenwechsel (Instant Navigation) */
document$.subscribe(function () {
  var art = document.querySelector("article.md-content__inner");
  if (!art || art.querySelector(".print-button-bar")) return;
  var istBlatt = /uebungsblatt-/.test(location.pathname);
  var bar = document.createElement("div");
  bar.className = "print-button-bar";
  var b = document.createElement("button");
  b.className = "print-button";
  b.type = "button";
  b.textContent = istBlatt ? "🖨️ Blatt drucken" : "🖨️ Seite drucken / als PDF speichern";
  b.addEventListener("click", function () { window.print(); });
  bar.appendChild(b);
  art.appendChild(bar);
});
