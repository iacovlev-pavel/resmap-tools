var gdal = require('gdal');
var path = require('path');

module.exports = {
    name: 'grid',

    inDs: null,
    inLayer: null,

    init: function() {
        console.info('Initializing module: ' + this.name);

        this.inDs = gdal.open(path.join(__dirname, 'ne_10m_graticules_1.shp'));
        this.inLayer = this.inDs.layers.get(0);
    }
};