var grid = require('./grid/grid.js');
grid.init();

var dem = require('./dem/dem.js');
dem.init();

var roads = require('./roads/roads.js');
roads.init();
roads.convert({grid: grid});