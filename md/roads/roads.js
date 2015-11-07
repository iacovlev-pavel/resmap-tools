var gdal = require('gdal');
var path = require('path');

module.exports = {
    name: 'roads',

    inDs: null,
    inLayer: null,

    outFile: '',
    outDs: null,
    outLayer: null,

    init: function() {
        console.info('Initializing module: ' + this.name);

        this.inDs = gdal.open(path.join(__dirname, 'RoadL.shp'));
        this.inLayer = this.inDs.layers.get(0);
    },

    convert: function(options) {
        var self = this;
        options = options ? options : {};

        if(! options.grid) {
            console.trace('Grid layer not specified');
        }

        this.outFile = path.resolve(__dirname, '..', 'out', this.name + '.shp');
        this.outDs = gdal.open(this.outFile, 'w', 'ESRI Shapefile');
        this.outLayer = this.outDs.layers.create("Export", gdal.SpatialReference.fromEPSG(4326), gdal.wkbPolygon);

        /*
        console.log(dem.get(28, 47));
        this.inLayer.features.forEach(function(feature) {
            console.log(feature.fields.toObject());
        });
        inLayer.fields.forEach(function(field) {
        outLayer.fields.add(field);
        });

        inLayer.features.forEach(function(feature) {
        //FIXME:
        if(feature.fid < 100) {
        var newFeature = new gdal.Feature(outLayer);

        var newGeom = feature.getGeometry().buffer(10);
        newFeature.setGeometry(newGeom);

        outLayer.features.add(newFeature);
        }
        });
        outLayer.flush();*/
    }
};