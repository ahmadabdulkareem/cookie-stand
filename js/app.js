




var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shops = [];
var tableE1 = document.getElementById('table');
// var tableE1 = document.createElement('table');
// articleE1.appendChild(tableE1);

function CookieSale(location, min, max, average) {
    this.nameOf = location;
    this.min = min;
    this.max = max;
    this.average = average;
    this.calculate = 0;
    this.CoArr = [];
    this.add = 0;
    shops.push(this);
}

CookieSale.prototype.getCalculate = function () {
    for (var i = 0; i < hourArr.length; i++) {

        var cookiePerHour = Math.floor((Math.random() * (this.max - this.min) + this.min) * this.average);

        // this.CoArr[i] = cookiePerHour;
        console.log('cookie', this.CoArr);
        this.CoArr.push(cookiePerHour);
        this.add = this.add + cookiePerHour;
    }
}

CookieSale.prototype.render = function () {
    // this.getCalculate();
    var tr = document.createElement('tr');
    tableE1.appendChild(tr);
    var td1 = document.createElement('td');
    td1.textContent = this.nameOf;
    tr.appendChild(td1);
    console.log(this.CoArr);

    for (var i = 0; i < hourArr.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.CoArr[i];
        tr.appendChild(td);
    }
    console.log(td);


    var tdE1 = document.createElement('td');
    tdE1.textContent = this.add;
    tr.appendChild(tdE1);
}



// //reeeeeeeeeeeeeeeeeeeeeeeeeeee



function headerTable() {
    var headerE1 = document.createElement('tr');
    tableE1.appendChild(headerE1);
    var th1 = document.createElement('th');
    headerE1.appendChild(th1);
    th1.textContent = 'Location';

    for (var i = 0; i < hourArr.length; i++) {
        var th2 = document.createElement('th');
        headerE1.appendChild(th2);
        th2.textContent = hourArr[i];
    }
    var th3 = document.createElement('th');
    headerE1.appendChild(th3);
    th3.textContent = 'Daily Total Cookies';
}
headerTable();


var seattle = new CookieSale('Seattle', '23', '65', '6.3');
console.log(shops);
var tokyo = new CookieSale('Tokyo', '3', '24', '1.2');
console.log(shops);
var dubai = new CookieSale('Dubai', '11', '38', '3.7');
console.log(shops);
var paris = new CookieSale('Paris', '20', '38', '2.3');
console.log(shops);
var lima = new CookieSale('Lima', '2', '16', '4.6');

for (var i = 0; i < shops.length; i++) {
    shops[i].getCalculate();
    shops[i].render();
   
}








// console.log(event);
// console.log(event.target);


function footerT() {
    var totalA = document.createElement('tr');
    totalA.setAttribute('id', 'totalA');
    tableE1.appendChild(totalA);
    var td5 = document.createElement('td');
    totalA.appendChild(td5);
    td5.textContent = 'Totals';

    totalOfTotal = 0;
    for (var k = 0; k < hourArr.length; k++) {
        var hourTotal = 0;

        for (var j = 0; j < shops.length; j++) {
            hourTotal += shops[j].CoArr[k];
        }
        totalOfTotal += hourTotal;
        var td6 = document.createElement('td');
        totalA.appendChild(td6);
        td6.textContent = hourTotal;


    }
    // var totalOfTotal= 0;
    // for(var i=0; i< shops.length; i++){
    //     totalOfTotal+= shops[i].add;
    // }
    var td7 = document.createElement('td');
    totalA.appendChild(td7);
    td7.textContent = totalOfTotal;

}
// footerT();
// td6.textContent = seattle.CoArr[k] + tokyo.CoArr[k] + dubai.CoArr[k] + paris.CoArr[k] + lima.CoArr[k];
// td7.textContent = seattle.add + tokyo.add + dubai.add + paris.add + lima.add;





//////////




// function remove() {
//     var foot = document.getElementById('totalA');
//     // console.log(foot);
    
//     foot.parentNode.removeChild(foot);
// }

var shopForm = document.getElementById('form');
shopForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var location = event.target.location.value;
    var max = parseInt(event.target.max.value);
    var min = parseInt(event.target.min.value);
    var average = parseInt(event.target.avg.value);


    if (!Location || !max || !min || !average) {
        alert('Wrong, please enter values');
    }

    else if (max < min) {
        alert('Unvalid, please re-enter maximum & minimum correctly');

    }
    else {
        
        var objLocation = CookieSale(location, max, min, average);
        // remove();
        objLocation.getCalculate();
        objLocation.render();
        footerT();


    }



}
)
// footerT();
