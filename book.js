
/* handelar  */
const errorHandel = document.getElementById('error-handel');
let inputField = document.getElementById('input-field');
const bookContainer = document.getElementById('book-container');
const resultFoundad = document.getElementById('result-fundad');

/* fetch data*/
const SearchButton = () => {
    errorHandel.style.display = 'none';
    const inputText = inputField.value;
    

    if(inputText){
        const url = `https://openlibrary.org/search.json?q=${inputText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => booksUpdata(data));
    }
    else{
        errorHandel.innerText = 'Please try any book';
        errorHandel.style.display = 'block';
        resultFoundad.innerText = 'No ';
        bookContainer.innerText = '';

    }
    inputField.value= '';
}

/* fetch data call*/

const booksUpdata = booksList =>{
    bookContainer.innerText = '';

    console.log(booksList.docs);
    
    booksList.docs.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `    
              <div class="card ">
                           
                        <div class="card-body">
                            <h4 class="card-text bg-secondary text-white fw-bold">Book Name : ${item.title}</h4>
                            <img height="350" src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="card-img-top" alt="...">
                            <h5 class="card-title fw-bold">Author : ${item.author_name ? item.author_name : 'no author found'}</h5>  
                            <h5 class="card-text fw-bold">Publisher name : ${item.publisher}</h5>
                            <p class="card-text fw-bold">First publish: ${item.first_publish_year}</p>
                           
                           
                        </div>
              </div>
        `;
        bookContainer.appendChild(div);
    });
    resultFoundad.innerText = booksList.docs.length ?
    booksList.docs.length : '';
};
