ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8168671.186158, -3805166.168011, -7409049.108318, -3366566.985675]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Energias_Potenciales_1 = new ol.format.GeoJSON();
var features_Energias_Potenciales_1 = format_Energias_Potenciales_1.readFeatures(json_Energias_Potenciales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Energias_Potenciales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Energias_Potenciales_1.addFeatures(features_Energias_Potenciales_1);
var lyr_Energias_Potenciales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Energias_Potenciales_1, 
                style: style_Energias_Potenciales_1,
                popuplayertitle: "Energias_Potenciales",
                interactive: true,
                title: '<img src="styles/legend/Energias_Potenciales_1.png" /> Energias_Potenciales'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Energias_Potenciales_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Energias_Potenciales_1];
lyr_Energias_Potenciales_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', 'Tipo fuente de energia recomendada': 'Tipo fuente de energia recomendada', });
lyr_Energias_Potenciales_1.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', 'Tipo fuente de energia recomendada': 'TextEdit', });
lyr_Energias_Potenciales_1.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'hidden field', 'cod_comuna': 'hidden field', 'codregion': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Region': 'header label - always visible', 'Comuna': 'header label - always visible', 'Provincia': 'hidden field', 'Tipo fuente de energia recomendada': 'inline label - visible with data', });
lyr_Energias_Potenciales_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});