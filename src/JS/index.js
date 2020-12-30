
const main = document.getElementById('main');

const squareViewer = document.querySelector('#square-viewer');

var initialValues = {
    topRight: 20,
    topLeft: 30,
    bottomRight: 50,
    bottomLeft: 10,
    width: 400,
    height: 400
}

setValues();

function handleTyped (wich) {
    const input = document.querySelector(`.${wich}`).value;
    return setValues(input, wich);
}


function setValues (inputValue = "", wich = "") {
    if(inputValue === null || inputValue === undefined || inputValue === "") {
        squareViewer.style.borderTopLeftRadius = `${initialValues.topLeft}px`;
        squareViewer.style.borderTopRightRadius = `${initialValues.topRight}px`;
        squareViewer.style.borderBottomRightRadius = `${initialValues.bottomRight}px`;
        squareViewer.style.borderBottomLeftRadius = `${initialValues.bottomLeft}px`;       

    } else {        
            if(wich === "topLeft") {                
                var { topLeft } = initialValues;
                                                
                const p = document.createElement('p');

                topLeft = inputValue;
                
                localStorage.setItem("topLeft", topLeft);

                p.textContent = `border-top-left-radius: ${topLeft}px`;
                return squareViewer.style.borderTopLeftRadius = `${topLeft}px`;
            }
    
            else if(wich === "topRight") {                
                var { topRight } = initialValues;                
                         
                topRight = inputValue;  
                localStorage.setItem("topRight", topRight);                       
                return squareViewer.style.borderTopRightRadius = `${topRight}px`;
            }
    
            else if(wich === "bottomLeft") {                
                var { bottomLeft } = initialValues;
                
                bottomLeft = inputValue;
                localStorage.setItem("bottomLeft", bottomLeft);                            
                return squareViewer.style.borderBottomLeftRadius = `${bottomLeft}px`;
            }
    
            else if(wich === "bottomRight") {
                var { bottomRight } = initialValues;
                                                         
                bottomRight = inputValue;
                localStorage.setItem("bottomRight", bottomRight);                
                return squareViewer.style.borderBottomRightRadius = `${bottomRight}px`;
            }

            else if(wich === "width") {
                var { width } = initialValues;                                                         

                width = inputValue;
                localStorage.setItem("width", width);
                return squareViewer.style.width = `${width}px`;
            }

            else if(wich === "height") {
                var { height } = initialValues;                                                        

                height = inputValue;
                localStorage.setItem("height", height);
                return squareViewer.style.height = `${height}px`;
            }

            else {                         
                squareViewer.style.borderTopLeftRadius = `${initialValues.topLeft}px`;
                squareViewer.style.borderTopRightRadius = `${initialValues.topRight}px`;
                squareViewer.style.borderBottomRightRadius = `${initialValues.bottomRight}px`;
                squareViewer.style.borderBottomLeftRadius = `${initialValues.bottomLeft}px`; 
                squareViewer.style.width = `${initialValues.width}px`;       
                squareViewer.style.height = `${initialValues.height}px`;       
            }
    }
    
}

function get() {
    var viewer = document.getElementById('viewer');
    const final = 
    `
    /* Feito por Allan Julie */
    border-top-right-radius: ${filteredEl(localStorage.getItem("topRight"))}
    border-top-left-radius: ${filteredEl(localStorage.getItem("topLeft"))}
    border-bottom-right-radius: ${filteredEl(localStorage.getItem("bottomRight"))}
    border-bottom-left-radius: ${filteredEl(localStorage.getItem("bottomLeft"))}
    width: ${filteredEl(localStorage.getItem("width"), "width")}
    height: ${filteredEl(localStorage.getItem("height"), "height")}
    /* CSS viewer */
    `;

    viewer.value = final
    viewer.select();
    viewer.setSelectionRange(0, 99999);

    document.execCommand('copy');

    alert("CSS copiado :)");
    localStorage.clear();
}

function filteredEl (el, name = "") {
    if(el === null || el === "null") {

       if(name === "width" || name === "height"){

        return '400px; /* (default) */';
      } else {

        return '0px; /* (no value found) */';
      } 
    } else {
      return `${el}px;`;
    }
}