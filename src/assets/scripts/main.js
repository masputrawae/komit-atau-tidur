// Mengambil elemen pertama yang cocok dengan selector
export const $ = (selector, scope = document) => scope.querySelector(selector)

// Mengambil semua elemen yang cocok dengan selector (NodeList)
export const $$ = (selector, scope = document) => scope.querySelectorAll(selector)

// Membuat elemen baru dengan tag tertentu
// Contoh penggunaan: const div = createElement('div');
export const createElement = (tag) => document.createElement(tag)

// Menambahkan event listener ke elemen
// Contoh penggunaan: onClick(button, () => alert('Klik!'));
export const onClick = (element, handler) => element.addEventListener('click', handler)

// Menghapus semua child dari sebuah elemen
// Contoh penggunaan: clearChildren(container);
export const clearChildren = (element) => {
	while (element.firstChild) {
		element.removeChild(element.firstChild)
	}
}

// Mengatur teks pada elemen
// Contoh penggunaan: setText(header, 'Halo Dunia');
export const setText = (element, text) => {
	element.textContent = text
}

// ====================== SIDEBAR
$$('[data-sidebar-target]').forEach((btn) => {
	onClick(btn, () => $('#sidebar').classList.toggle('isActive'))
})

// ====================== TABS
$$('[data-tab-target]').forEach((btn) => {
	const target = btn.getAttribute('data-tab-target')

	onClick(btn, () => {
		$$('.tab-content__item').forEach((e) => e.classList.remove('tab-content__item--active'))
		$$('[data-tab-target]').forEach((e) => e.classList.remove('tab-control__btn--active'))

		$(`#${target}`).classList.add('tab-content__item--active')
		$(`[data-tab-target=${target}]`).classList.add('tab-control__btn--active')
	})
})

// ====================== DropDown

const dropdownMap = new Map()
$$('[data-dropdown-target]').forEach((btn) => {
	const target = btn.getAttribute('data-dropdown-target')
	const dropdown = $(`#${target}`)

	// Simpan relasi btn dan dropdown
	dropdownMap.set(btn, dropdown)

	onClick(btn, (e) => {
		// Toggle tampil
		dropdown.classList.toggle('tab-control__nav--active')
		// Hentikan bubbling agar klik pada btn tidak dianggap klik luar
		e.stopPropagation()
	})
})

onClick(document, (event) => {
	dropdownMap.forEach((dropdown, btn) => {
		// Jika klik di luar tombol dropdown, tutup
		if (!btn.contains(event.target)) {
			dropdown.classList.remove('tab-control__nav--active')
		}
	})
})
