var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



//1

var seattle = {
    min: 23,
    max: 65,
    average: 6.3,
    calculate: 0,
    CoArr: [],
    add: 0,
    // count :0,

    random: function () {

        for (var i = 0; i < hourArr.length; i++) {
            this.calculate =Math.floor((Math.random() * (this.max - this.min ) + this.min) * this.average);
            this.CoArr[i] = this.calculate;
            this.add = this.add + this.calculate;
        }

        console.log(hourArr, this.CoArr, this.add);
    },


    render: function () {
        var mainE = document.getElementById('cool');
        var hE = document.createElement('h1');
        mainE.appendChild(hE);
        hE.textContent = `Seattle`;


        // var mainA = document.getElementsByTagName('main');
        var cool = document.getElementById('cool')
        var ulA = document.createElement('ul');
        cool.appendChild(ulA);

        for (var i = 0; i <hourArr.length; i++) {
            var li = document.createElement('li');
            ulA.appendChild(li);
            li.textContent = `${hourArr[i]} : ${this.CoArr[i]} cookies`;
        } li.textContent=`total: ${this.add} cookies..`;

    }
}
seattle.random();
seattle.render();


//2 

var tokyo = {
    min: 3,
    max: 24,
    average: 1.2,
    calculate: 0,
    CoArr: [],
    add: 0,
    cookienum:0,

    random: function () {

        for (var i = 0; i < hourArr.length; i++) {
            this.calculate = Math.floor(Math.random() * (this.max - this.min) + this.min); 
            this.cookienum= Math.floor( this.calculate * this.average);
            this.CoArr[i] = this.cookienum;
            this.add =this.add + this.cookienum;
        }

        console.log(hourArr, this.CoArr, this.add);
    },


    render: function () {
        var mainE = document.getElementById('cool');
        var hE = document.createElement('h1');
        mainE.appendChild(hE);
        hE.textContent = `Tokyo`;


        var cool = document.getElementById('cool')
        var ulA = document.createElement('ul');
        cool.appendChild(ulA);


        for (var i = 0; i < hourArr.length; i++) {
            var li = document.createElement('li');
            ulA.appendChild(li);
            li.textContent = `${hourArr[i]} : ${this.CoArr[i]} cookies`;
        } li.textContent=`total: ${this.add} cookies..`;

    }
}
tokyo.random();
tokyo.render();




//3
var dubai = {
    min: 11,
    max: 38,
    average: 3.7,
    calculate: 0,
    CoArr: [],
    add: 0,

    random: function () {

        for (var i = 0; i < hourArr.length; i++) {
            this.calculate = Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.average);
            this.CoArr[i] = this.calculate;
            this.add = this.add + this.calculate;
        }

        console.log(hourArr, this.CoArr, this.add);
    },


    render: function () {
        var mainE = document.getElementById('cool');
        var hE = document.createElement('h1');
        mainE.appendChild(hE);
        hE.textContent = `Dubai`;


        var cool = document.getElementById('cool')
        var ulA = document.createElement('ul');
        cool.appendChild(ulA);


        for (var i = 0; i <hourArr.length; i++) {
            var li = document.createElement('li');
            ulA.appendChild(li);
            li.textContent = `${hourArr[i]} : ${this.CoArr[i]} cookies`;
        } li.textContent=`total: ${this.add} cookies..`;

    }
}
dubai.random();
dubai.render();

//4
var paris = {
    min: 20,
    max: 38,
    average: 2.3,
    calculate: 0,
    CoArr: [],
    add: 0,
    cookienum:0,

    random: function () {

        for (var i = 0; i <hourArr.length; i++) {
            this.calculate = Math.floor(Math.random() * (this.max - this.min) + this.min); 
            this.cookienum= Math.floor( this.calculate * this.average);
            this.CoArr[i] = this.cookienum;
            this.add = this.add + this.cookienum;
        }

        console.log(hourArr, this.CoArr, this.add);
    },


    render: function () {
        var mainE = document.getElementById('cool');
        var hE = document.createElement('h1');
        mainE.appendChild(hE);
        hE.textContent = `Paris`;


      
        var cool = document.getElementById('cool')
        var ulA = document.createElement('ul');
        cool.appendChild(ulA);

  
    
        for (var i = 0; i < hourArr.length; i++) {
            var li = document.createElement('li');
            ulA.appendChild(li);
            li.textContent = `${hourArr[i]} : ${this.CoArr[i]} cookies`;
        } li.textContent=`total: ${this.add} cookies..`;

    }
}
paris.random();
paris.render();



//5 
var lima = {
    min: 2,
    max: 16,
    average: 4.6,
    calculate: 0,
    CoArr: [],
    add: 0,
    cookienum:0,

    random: function () {

        for (var i = 0; i <hourArr.length; i++) {
            this.calculate = Math.floor(Math.random() * (this.max - this.min) + this.min); 
            this.cookienum= Math.floor( this.calculate * this.average);
            this.CoArr[i] = this.cookienum;
            this.add = this.add + this.cookienum;
        }

        console.log(hourArr, this.CoArr, this.add);
    },


    render: function () {
        var mainE = document.getElementById('cool');
        var hE = document.createElement('h1');
        mainE.appendChild(hE);
        hE.textContent = `Lima`;


        var cool = document.getElementById('cool')
        var ulA = document.createElement('ul');
        cool.appendChild(ulA);

     

        for (var i = 0; i <hourArr.length; i++) {
            var li = document.createElement('li');
            ulA.appendChild(li);
            li.textContent = `${hourArr[i]} : ${this.CoArr[i]} cookies`;
        } li.textContent=`total: ${this.add} cookies..`;

    }
}
lima.random();
lima.render();

