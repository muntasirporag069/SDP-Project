/*let query=document.querySelector('.query');
let searchBtn=document.querySelector('.searchBtn');

searchBtn.onclick=function(){
    let url='https://www.google.com/search?'
}
*/
const searchButton = document.querySelector('#search_button');
const seachResult = document.querySelector('#search_result');

searchButton.addEventListener('click', async function() {
    // alert("Button clicked"); // Add this line
    const transcribedText = document.getElementById('convert_text').innerText;
    const searchQuery = encodeURIComponent(transcribedText);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    
    const result = await fetch(searchUrl,{
        mode: 'no-cors',
    });
console.log(result)
    seachResult.innerHTML = result;
    // // Open a new tab with the search URL
    // window.open(searchUrl, '_blank');
});

/*const searchButton = document.getElementById('search_button');
const searchResultsElement = document.getElementById('search_result');

searchButton.addEventListener('click', function() {
    const transcribedText = document.getElementById('convert_text').innerHTML;
    const searchQuery = encodeURIComponent(transcribedText);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    
    // Fetch search results
    fetch(searchUrl)
        .then(response => response.text())
        .then(data => {
            searchResultsElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
});
*/


