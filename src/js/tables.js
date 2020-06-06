let table = -1;
const tables = document.querySelectorAll('.one1');
tables.forEach( (element, index) => {
	if (localStorage.getItem(index) === 'ordered') {
		element.setAttribute('hidden','');
	}else{
		element.addEventListener('click', _ => {
			localStorage.setItem(index, 'ordered');
			table = index;
		});
	}
});

export default table;