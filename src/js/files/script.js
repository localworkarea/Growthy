// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const items = document.querySelector('[data-iso-items]');
if (items) {
	const itemsGrid = new Isotope(items, {
		itemSelector: '[data-iso-item]',
		layoutMode: 'vertical'
		// masonry: {
		// 	fitWidth: false,
		// 	gutter: 20
		// }
	});

	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.closest(".filter-cases__item")) {
			const filterItem = targetElement.closest(".filter-cases__item");
			const filterValue = filterItem.dataset.filter;
			const filterActiveItem = document.querySelector('.filter-cases__item.active');

			filterValue === "*" ? itemsGrid.arrange({ filter: `` }) :
				itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` })

			filterActiveItem.classList.remove("active");
			filterItem.classList.add("active");


			e.preventDefault();
		}
	}

}

