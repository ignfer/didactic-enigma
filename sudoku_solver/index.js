/*
    ·"main" part of the page, auto executes on load and set up the visuals and 
    ·the sudoku grid
*/
const row1 = ['1','2','3','10','11','12','19','20','21'];
const row2 = ['4','5','6','13','14','15','22','23','24'];
const row3 = ['7','8','9','16','17','18','25','26','27'];
const row4 = ['28','29','30','37','38','39','46','47','48'];
const row5 = ['31','32','33','40','41','42','49','50','51'];
const row6 =  ['34','35','36','43','44','45','52','53','54'];
const row7 =  ['55','56','57','64','65','66','73','74','75'];
const row8 =  ['58','59','60','67','68','69','76','77','78'];
const row9 =  ['61','62','63','70','71','72','79','80','81'];
const rowAll = [row1, row2, row3, row4, row5, row6, row7, row8,row9];

const col1 =  ['1','4','7','28','31','34','55','58','61'];
const col2 =  ['2','5','8','29','32','35','56','59','62'];
const col3 =  ['3','6','9','30','33','36','57','60','63'];
const col4 =  ['10','13','16','37','40','43','64','67','70'];
const col5 =  ['11','14','17','38','41','44','65','68','71'];
const col6 =  ['12','15','18','39','42','45','66','69','72'];
const col7 =  ['19','22','25','46','49','52','73','76','79'];
const col8 =  ['20','23','26','47','50','53','74','77','80'];
const col9 =  ['21','24','27','48','51','54','75','78','81'];
const colAll = [col1, col2, col3, col4, col5, col6, col7, col8,col9];

const sec1 = ['1','2','3','4','5','6','7','8','9'];
const sec2 = ['10','11','12','13','14','15','16','17','18'];
const sec3 = ['19','20','21','22','23','24','25','26','27'];
const sec4 = ['28','29','30','31','32','33','34','35','36'];
const sec5 = ['37','38','39','40','41','42','43','44','45'];
const sec6 = ['46','47','48','49','50','51','52','53','54'];
const sec7 = ['55','56','57','58','59','60','61','62','63'];
const sec8 = ['64','65','66','67','68','69','70','71','72'];
const sec9 = ['73','74','75','76','77','78','79','80','81'];
const secAll = [sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9];

let grid = [];
let wholeRange = ['1','2','3','4','5','6','7','8','9'];
let AlreadyDone = false;
var varLastSelected;
let pointerA = 1;
let limit_a = 81;
    createContainer();
    createDivs(); 
    createGrid(pointerA,limit_a,div1,div2,div3,div4,div5,div6,div7,div8,div9);
    

/*
    ·the 'createGrid' functions receive 'pointerA' and 'limit_a', resulting on a 81-steps cycle
    ·it also receives 9 divs created on runtime on the 'createDivs' function
    ·with each cycle of the loop the code will, in order, do this:
    ·'btn' is an abreviated form to easily manage the document.createElement("button"); statement
    ·the content of each button is defined to '0'
    ·an auto-incremental id is asigned to each button, for example the
    ·button with the '5' id was created on the fifth cycle or when 'pointerA' equals 5
    ·the className of each button is set to 'notEmpty', wich is used to control the visuals of each button
    ·we append the 'increment()' function on each button
*/

function createGrid (pointerA,limit_a,div1,div2,div3,div4,div5,div6,div7,div8,div9){
    while (pointerA <= limit_a) {
        let btn = document.createElement("button");
        btn.innerHTML = "0";
        btn.id = (pointerA);
        btn.className = ("notEmpty");
        /*
            ·the increment function check that the value of each sudoku cell never pass 9
            ·and if it does its restored to 1 
        */
        btn.onclick = function utilities (){
            findSection(btn);
            findRow(btn);
            findColumn(btn);
            lastSelected(btn);
        }
        locateButton(btn,pointerA);
        pointerA += 1;  
    }
   
}
/*
    ·this function simply creates a div called 'container', this div has his css properties 
    ·already defined so as soon as is created the styles are applied to it.
*/
function createContainer(){
    let div = document.createElement("div");
        div.id = "container";
        document.body.appendChild(div);
}
/*
    ·creates the 9 divs needed for each sudoku section, and appends them to the 'container' div
*/
function createDivs(){
    let a = 1;
    let b = 9;
    while(a <= 9 ){
    let div = document.createElement("div");
    div.id = "div" + a.toString();
    container.appendChild(div);
    a += 1;
    }
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");
    var div6 = document.getElementById("div6");
    var div7 = document.getElementById("div7");
    var div8 = document.getElementById("div8");
    var div9 = document.getElementById("div9");
}

/*
    ·recieves 3 values (the one to be evaluated,min,max)
    ·return true if the value is between the minimum and the maximum
    ·note that we use 'inRange(a,1,9)' and after that 'inrange(a,10,18)'
    ·being a = 4 for example because it could create a problem on the
    ·edge value, in this case 9
*/
function inRange(a,b,c){
    return a >= b  && a <= c
}

function whereIs(pointerA){
    let i = 1;
    let k = 9;
    while(i <= 73){
        if(inRange(pointerA,i,k)){
            let value = k / 9;
            return value;
        }else{
            i += 9;
            k += 9;
        }
    }
}   

function locateButton(btn,pointerA){
    let position = whereIs(pointerA)
    var location = {
        1: 'div1.appendChild(btn)',
        2: 'div2.appendChild(btn)',
        3: 'div3.appendChild(btn)',
        4: 'div4.appendChild(btn)',
        5: 'div5.appendChild(btn)',
        6: 'div6.appendChild(btn)',
        7: 'div7.appendChild(btn)',
        8: 'div8.appendChild(btn)',
        9: 'div9.appendChild(btn)'
    };
    eval(location[position]);
}

function emptyFinder(){
/*
    ·this function is called by a button on the DOM, it search button by button the ones
    ·that have a value of '0' and when it finds them, it changes the className property
    ·to 'empty', the 'empty' class has his own css styles already defined
    ·so it will make the empty buttons change their color
    ·if the button is not empty then the function just overwrite the className to 'notEmpty'
*/
    let i = 1;
    let emptys = [];
        while(i <= 81){
            let btn = document.getElementById(i);
            if (btn.innerHTML == 0){
                btn.className = ("empty");
                emptys.push(btn.id);
            }
                else{
                    btn.classList = ("notEmpty");
                }
            i += 1;
        }
    return emptys;
}

function lastSelected(btn){
    varLastSelected = btn.id;
}

function select(num){
    btn = document.getElementById(varLastSelected);
    btn.innerHTML = num;
}
/*Paint a 3x3 selection depending on the selected field*/
function findSection(btn){
    clearSelecteds();
    let id = btn.id;
    let section = [];  
    for(i = 0; i < 9; i++){
        let actualSecAll = secAll[i];
        if(actualSecAll.includes(id)){
            for(k = 0; k < actualSecAll.length; k++){
                let part = document.getElementById(actualSecAll[k]);
                    part.className = ("selected");
                section.push(actualSecAll[k])
            }
            return(section);
            break;
        }
    }
}

/*Paint a row depending on the selected field */
function findRow(btn){
    let id = btn.id;
    let row = [];
    for(i = 0; i < 9; i++){
        let actualRowAll = rowAll[i];  
        if(actualRowAll.includes(id)){
            for(k = 0; k < actualRowAll.length; k++){
                let part = document.getElementById(actualRowAll[k]);
                    part.className = ("selected");
                row.push(actualRowAll[k]);
            }
            return row;
            break;
        }
    }
}

/*Paint a column depending on the selected field*/
function findColumn(btn){
    let id = btn.id;
    let col = [];
    for(i = 0; i < 9; i++){
        let actualColAll = colAll[i];  
        if(actualColAll.includes(id)){
            for(k = 0; k < actualColAll.length; k++){
                let part = document.getElementById(actualColAll[k]);
                    part.className = ("selected");
                col.push(actualColAll[k]);
            }
            return col;
            break;
        }
    }
}

/*Un-paint the previously selected fields */
function clearSelecteds(){
    for(i = 1; i <= 81; i++){
        btn = document.getElementById(i);
        btn.className = ("notEmpty");
    }
}

function removeDuplicates(arr){
/*
    ·this function recieves the 'selectionValues' array and transform it into a set
    ·so the repeated elements are eliminated, then, transform it again into an array
    ·and returns it
*/
    const arrClean = new Set(arr);
    return Array.from(arrClean);
}

function wholeRangeReset(){
    wholeRange = ['1','2','3','4','5','6','7','8','9'];
}

function selectRandom(arr){
    let random = Math.floor(Math.random() * arr.length)
    return arr[random];
}

function gridBackUp(){
    if (!AlreadyDone){
        let i = 1;
        while(i <= 81){
        let btn = document.getElementById(i);
        let element = btn.innerHTML;
        grid.push(element);
        i += 1;
        }
        AlreadyDone = true;
    }
    return grid;
}

function loadBackup(){
    for(i = 1; i<=81 ; i++){
        let btn = document.getElementById(i);
        btn.innerHTML = grid[i];
    }
}
function findSelection(btn){
    /*
    ·creates 3 arrays called, section, columnd and row and then merge them into
    ·a new one called 'selection'; 'selection' is the union of findSection(),findRow() and findColumn();
    */
    let section = findSection(btn);
    let column = findColumn(btn);
    let row = findRow(btn);
    return section.concat(column.concat(row));
}
function getSelectionValues(btn){
    let selection = findSelection(btn);
    let selectionValues = [];
    /*
    ·cycles through the array called 'selection' wich contains the id of the actual
    ·selection, on every id push the value into the array called 'selectionValues'
    ·then 'selectionValues' array is sended to 'removeDuplicates' function and 
    ·returns a new array without duplicated values called 'selectionValues'
    */
    let i = 0;
    while (i < selection.length){
        let btn = document.getElementById(selection[i]);
        let value = btn.innerHTML;
        selectionValues.push(value);
        i += 1;
    }
    selectionValues = removeDuplicates(selectionValues);
    return selectionValues;
}

function filterWholeRange(selectionValues){
    /*
    ·if a value from 'selectionValues' is on the whole range 
    ·removes-it from the 'wholeRange' array 
    */
    let pointerValues = 0;
        while (pointerValues < selectionValues.length){
            let actualValue = selectionValues[pointerValues];
            let pointerWhole = 0;
                while(pointerWhole < wholeRange.length){
                    if (actualValue === wholeRange[pointerWhole]){
                        wholeRange[pointerWhole] = -1;
                    }
                    pointerWhole += 1;
                }
            pointerValues += 1;
        }
    return wholeRange.filter(Element => Element > 0);
}

function getValidValues(id){
    gridBackUp(); 
    wholeRangeReset();
    let btn = document.getElementById(id);  
    let selectionValues = getSelectionValues(btn);
    let validValues = filterWholeRange(selectionValues);
    return validValues;
}
function solve(varLastSelected){
    let btn = document.getElementById(varLastSelected);
    let validValues = getValidValues(varLastSelected);
        if(selectRandom(validValues) === undefined){
            return false;
        }
            else{
                btn.innerHTML = selectRandom(validValues);
                return true;
            }
}
function isPossible(values,k){
    let newK  = k.toString();
    return values.includes(newK);
}
function isFull(){
    let emptys = emptyFinder();
    if (emptys.length === 0){
        return(true);
    }
}
function autoSolve(){
    for(let i = 1; i <= 81; i++){
        let btn = document.getElementById(i);
            if(btn.innerHTML == 0){
                varLastSelected = btn.id;
                let values = getValidValues(varLastSelected);
                    for(let k = 1; k <= 9; k++){
                        
                        if(isPossible(values,k)){
                            btn.innerHTML = k;
                            autoSolve();
                        }
                    }
            btn.innerHTML = 0;
            return;
            }
    }
    throw new Error("basta");
}

