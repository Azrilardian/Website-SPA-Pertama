const main = () => {
	var page = window.location.hash.substr(1);
	if (page == "") page = "home";
	const li = document.querySelectorAll("nav ul li");
	li.forEach((e) => {
		e.addEventListener("click", function (e) {
			page = e.target.getAttribute("href").substr(1);
			loadPage(`../App/pages/${page}.html`);
		});
	});

	const loadPage = (page) => {
		const section = document.querySelector("#section");
		fetch(page)
			.then((response) => {
				if (response.status == 200) return response.text();
				else if (response.status == 404) section.innerHTML = `<p>Halaman tidak ditemukan.</p>`;
				else {
					section.innerHTML = `<p>Ups... Halaman tidak dapat diakses.</p>`;
				}
			})
			.then((response) => (section.innerHTML = response));
	};
	loadPage(`../App/pages/${page}.html`);
};
export default main;
