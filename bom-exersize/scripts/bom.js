//Get Elements
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

//Add event listener
button.addEventListener('click', () => {
	if (input.value !== '') {
		let chapter = input.value;

		const li = document.createElement('li');
		const deleteBtn = document.createElement('button');

		li.textContent = chapter;
		deleteBtn.textContent = '❌';
		deleteBtn.addEventListener('click', () => {
			list.removeChild(li);
		});
		
		li.appendChild(deleteBtn);
		list.appendChild(li);
	}
	input.value = '';
	input.focus();

});

