const main = () => {
	var page = window.location.hash.substr(1);
	if (page == "") page = "home"; // url default
	const li = document.querySelectorAll("nav ul li");
	li.forEach((e) => {
		e.addEventListener("click", function (e) {
			page = e.target.getAttribute("href").substr(1); // atur url berdasarkan navigasi mana yang di klik
			data();
		});
	});

	const loadPage = (page) => {
		return fetch(page).then((response) => {
			if (response.status == 200) return response.text();
			else if (response.status == 404) return `<p>Halaman tidak ditemukan.</p>`;
			return `<p>Ups... Halaman tidak dapat diakses.</p>`;
		});
	};

	const data = async () => {
		try {
			const section = document.querySelector("#section");
			const pages = await loadPage(`../App/pages/${page}.html`);
			window.scrollTo(0, 0);
			section.innerHTML = pages;
		} catch (err) {
			alert(err);
		}
	};
	data();
};
export default main;
