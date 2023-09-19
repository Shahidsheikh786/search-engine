

const accessKey = "MuS9fWiZbaVTCl1wiaxbhIOLGOxnLQEHcQ51aOTzlsw";

const searchArea = document.getElementById('search-area');

const searchBox =  document.getElementById('search-box');

const loadingContainer = document.querySelector('.loading-container')

const searchResult = document.getElementById('search-result');

const showMore = document.getElementById('show-more');



let keyword = "";
let page = 1;


async function searchImgs() {
  
  loadingContainer.style.display= "flex";
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12` ;
    
    
    
    const response = await fetch(url);
    const data = await response.json();
      loadingContainer.style.display= "none";

    
    if(page === 1){
       searchResult.innerHTML = "";
    }
    
    
    const results = data.results;
    
   results.map((result) =>{
 const image = document.createElement("img");
      
      image.src = result.urls.small;
      imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      
      
      imageLink.appendChild(image);
  searchResult.appendChild(imageLink);
  
   })
    showMore.style.display = "block";
}




searchArea.addEventListener("submit",   (e) => {
   e.preventDefault();
   page = 1;
   searchImgs();
})


showMore.addEventListener("click", ()=>{
  
 page++;
 searchImgs();
});


const info = () =>{
   alert("This Websit use unsplash api for images ")
}



