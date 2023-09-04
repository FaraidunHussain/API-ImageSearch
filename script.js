n = () => {
  let date = new Date();
  let hour = date.getHours();
  if(hour >= 0 ){
    document.body.style.backgroundColor = 'white';
  }
}
window.addEventListener('load', n);
document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    apiRequest();
});
apiRequest = () => {
  document.querySelector("#grid").textContent = "";
  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=P-GpLPUY4qFd0Xsr5lz6XqFE3Z1DZgeqgpXiAPICYls';
  fetch(url)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })
   .then(data => {
      loadImages(data);
   })  
}
loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "20";
    document.querySelector("#grid").appendChild(image);
  }
}
