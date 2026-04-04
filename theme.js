(function () {
    var saved = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.querySelector(".theme-toggle");
        if (!btn) return;

        // Egyedi SVG ikonok
        function getMoonIcon() {
            return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 14.5C15.5 16.5 12.5 17.5 9.5 16.5C6.5 15.5 4.5 12.5 5.5 9.5C6.5 6.5 9.5 4.5 12.5 5.5C13 5.7 13.5 6 14 6.5C12.5 7 11.5 8.5 11.5 10C11.5 12.5 13.5 14.5 16 14.5C16.5 14.5 17 14.5 17.5 14.5Z" fill="#222" stroke="#444" stroke-width="1.5"/></svg>';
        }
        function getSunIcon() {
            return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="5" fill="#FFD600" stroke="#B89B00" stroke-width="1.5"/><g stroke="#B89B00" stroke-width="1.2"><line x1="11" y1="2" x2="11" y2="5"/><line x1="11" y1="17" x2="11" y2="20"/><line x1="2" y1="11" x2="5" y2="11"/><line x1="17" y1="11" x2="20" y2="11"/><line x1="4.2" y1="4.2" x2="6.3" y2="6.3"/><line x1="15.7" y1="15.7" x2="17.8" y2="17.8"/><line x1="4.2" y1="17.8" x2="6.3" y2="15.7"/><line x1="15.7" y1="6.3" x2="17.8" y2="4.2"/></g></svg>';
        }
        btn.innerHTML = theme === "dark" ? getSunIcon() : getMoonIcon();

        btn.addEventListener("click", function () {
            var current = document.documentElement.getAttribute("data-theme");
            var next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            btn.innerHTML = next === "dark" ? getSunIcon() : getMoonIcon();
        });
    });
})();
