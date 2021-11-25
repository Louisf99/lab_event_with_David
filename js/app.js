document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);

})



const handleFormSubmit = function (event) {
event.preventDefault();
const newListItem = document.createElement('li');
newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
const list = document.querySelector('ul');
list.appendChild(newListItem);
this.reset();
};
