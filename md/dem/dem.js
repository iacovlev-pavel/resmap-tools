var gdal = require('gdal');
var path = require('path');

module.exports = {
    name: 'dem',

    inDs: null,
    inLayer: null,

    init: function() {
        var self = this;

        console.info('Initializing module: ' + this.name);

        this.inDs = gdal.open(path.join(__dirname, 'w001001.adf'));
        this.inDs.bands.forEach(function(band) {
            self.inLayer = band;
        });
    },

    get: function(lng, lat) {
        var gt = this.inDs.geoTransform;

        var y = (lng - gt[0]) / gt[1];
        var x = (lat - gt[3]) / gt[5];

        try {
            var res = this.inLayer.pixels.get(x, y)
        } catch(err) {
            console.trace(err);
            var res = false;
        }
        return res;
    }
};