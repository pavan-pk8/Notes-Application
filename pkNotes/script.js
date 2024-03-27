const addButton = document.querySelector('#add');
const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
 <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"> </textarea>`;
note.insertAdjacentHTML('afterbegin',htmlData);
document.body.appendChild(note);

const editButton = note.querySelector('.edit');
const deleteButton = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');

deleteButton.addEventListener('click',() => {
    note.remove();
})

textarea.value = text;
mainDiv.innerHTML = text;

editButton.addEventListener('click',() => {
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})

textarea.addEventListener('change',(event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;
})

}
addButton.addEventListener('click',()=>{
    addNewNote();
})