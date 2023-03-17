

class NewsApi {
    constructor() {
        this.page = 0;
        this.inputValue = "";
    }
 
     getNews() {
      this.addPage();
       
      return fetch(`https://pixabay.com/api/?q=${this.inputValue}&page=${this.page}&key=33284507-4b4f85104b5ec42410d3af705&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        
        
    }
      
    addPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 0;
    }
    
}

export default NewsApi




