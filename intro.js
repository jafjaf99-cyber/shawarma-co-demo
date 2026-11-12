// Spinning-spit intro: plays once per browser session, skippable, skipped entirely for reduced motion.
// Add ?intro to the URL to force it to replay.
(function () {
  var intro = document.getElementById("intro");
  var force = /[?&]intro\b/.test(location.search);
  var seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!force && (seen || reduced)) { intro.remove(); return; }

  document.documentElement.classList.add("intro-open");
  var done = false;
  function close() {
    if (done) return;
    done = true;
    try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
    intro.classList.add("intro-out");
    document.documentElement.classList.remove("intro-open");
    setTimeout(function () { intro.remove(); }, 700);
  }
  document.getElementById("introSkip").addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  setTimeout(close, 3000);
})();
