 class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       * {
        font-family:Ubuntu !important;
        font-size: 98%;
        }
       nav a {
        font-size: 22px;
        font-weight: 400;
        text-decoration: none;
        color: white;
        }
     
        nav a:hover {
        font-weight: bold;
        }

        nav li {
            display: inline;
            list-style-type: none;
            margin-right: 20px;
         }
         
         nav {
            background-color: #2f56a3;
            padding: 5px;
            position: sticky;
            top: 0;
         }

         .flex-container-column {
            display: flex;
            /* properti pendukung */
            flex-direction: column;
            margin: 5px auto;
            text-align: left;
         }
          
         .flex-container-row {
            display: flex;
         }
          
         .box_navi {
            flex-basis: 50%;
         }
        

       .search-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 5px;
           border-radius: 5px;
           display: flex;
           top: 10px;
           background-color: white;
       }
      
       .search-container > input {
           width: 75%;
           padding: 5px;
           border: 0;
           border-bottom: 1px solid cornflowerblue;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid cornflowerblue;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: cornflowerblue;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: cornflowerblue;
           color: white;
           border: 0;
           text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){
            
            .box_navi, 
            .search-container {
                flex-direction: column;
                position: static;
            }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
        
       </style>
       <nav>
       <div class="flex-container-column">
            <div class="flex-container-row">
                <div class="box_navi">
                    <ul>
                    
                            <a href="#"></img>Dunia Dalam Corona</a>
                    </ul>
                </div>
                <div class="box_navi">
                    <div id="search-container" class="search-container">
                            <input placeholder="Pencarian belum berfungsi" id="searchElement" type="search">
                            <button id="searchButtonElement" type="submit">Cari</button>
                    </div>
                </div>
            </div>
        </div>
        </nav>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);