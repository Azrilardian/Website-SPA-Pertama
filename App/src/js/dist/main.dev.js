"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var main = function main() {
  var page = window.location.hash.substr(1);
  if (page == "") page = "home"; // url default

  var li = document.querySelectorAll("nav ul li");
  li.forEach(function (e) {
    e.addEventListener("click", function (e) {
      page = e.target.getAttribute("href").substr(1); // atur url berdasarkan navigasi mana yang di klik

      data();
    });
  });

  var loadPage = function loadPage(page) {
    return fetch(page).then(function (response) {
      if (response.status == 200) return response.text();else if (response.status == 404) return "<p>Halaman tidak ditemukan.</p>";else {
        return "<p>Ups... Halaman tidak dapat diakses.</p>";
      }
    });
  };

  var data = function data() {
    var section, pages;
    return regeneratorRuntime.async(function data$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            section = document.querySelector("#section");
            _context.next = 4;
            return regeneratorRuntime.awrap(loadPage("../App/pages/".concat(page, ".html")));

          case 4:
            pages = _context.sent;
            section.innerHTML = pages;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            alert(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };

  data();
};

var _default = main;
exports["default"] = _default;