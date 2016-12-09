var _ = require('lodash');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

var ArrayFlow = function() {
    chunkFlow();
    compactFlow();
    differenceFlow();
    findIndexFlow();
};

var chunkFlow = function() {
    console.log('================ Chunck Example ================');
    var people = ["Tim", "Ann", "Emma", "Richard", "Andrew", "Emily"];
    console.log("Initial object: " + JSON.stringify(people));
    console.log('Couples are: ' + JSON.stringify(_.chunk(people, 2)));
    console.log('Families are: ' + JSON.stringify(_.chunk(people, 3)));
    console.log('');
};

var compactFlow = function() {
    console.log('================ Compact Example ================');
    var x = [0, 1, 2, '', false, 3, '', 4, 0, '', false, 5, 'false'];
    console.log("Initial object: " + JSON.stringify(x));
    console.log("Filterred array: " + JSON.stringify(_.compact(x)));
    console.log('');
};

var differenceFlow = function() {
    console.log('================ Difference Example ================');
    var org = {
        operationalManagers: ['barney', 'ann', 'fred', 'emily', 'pebbles'],
        managers: ['tim', 'richard', 'barney', 'ann', 'fred', 'andrew', 'emily', 'emma', 'pebbles', 'sam']
    };
    console.log('Initial object: ' + JSON.stringify(org));
    console.log('Non operatioinal managers: ' + JSON.stringify(_.difference(org.managers, org.operationalManagers)));
    console.log('');
};

var findIndexFlow = function() {
    console.log('================ Find Index Example ================');
    var projects = [
        {name: 'Dark Matter', status: 'Active'},
        {name: 'Cool Daddy', status: 'Active'},
        {name: 'White Roses', status: 'Scrapped'},
        {name: 'Ugly Birds', status: 'Completer'},
        {name: 'VFX', status: 'Active'},
        {name: 'White Roses', status: 'Active'}
    ];
    console.log('Index of the first project Cool Daddy: ' + _.findIndex(projects, function(o) {return o.name = 'Cool Daddy'}));
    console.log('Index of the first project with status as Scrapped: ' + _.findIndex(projects, ['status', 'Scrapped']));
    console.log('Index of Ugly Birds project: ' + _.findIndex(projects, {name: 'Ugly Birds', status: 'Completer'}));

    console.log('');
};

module.exports = ArrayFlow;