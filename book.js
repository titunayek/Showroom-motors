
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
        // console.log(url)
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
    // console.log(booksList.docs.length);

    booksList.docs.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `    
              <div onclick="immageUpdata(${item.coverId})" class="card">
                            <img height="350" src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h4 class="card-text">Book Name :${item.title}</h4>
                            <h5 class="card-title">author :${item.author_name ? item.author_name : 'no author found'}</h5>
                            <p class="card-text">first publish year:${item.first_publish_year}</p>
                            <p class="card-text">length:${item.length}</p>
                           
                        </div>
              </div>
        `;
        bookContainer.appendChild(div);
    });
    resultFoundad.innerText = booksList.docs.length ?
    booksList.docs.length : '';
};
