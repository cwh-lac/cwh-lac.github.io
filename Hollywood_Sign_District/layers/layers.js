var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Street_1 = new ol.layer.Tile({
            'title': 'Street',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_HollywoodSignDistrict_2 = new ol.format.GeoJSON();
var features_HollywoodSignDistrict_2 = format_HollywoodSignDistrict_2.readFeatures(json_HollywoodSignDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HollywoodSignDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HollywoodSignDistrict_2.addFeatures(features_HollywoodSignDistrict_2);
var lyr_HollywoodSignDistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HollywoodSignDistrict_2, 
                style: style_HollywoodSignDistrict_2,
                popuplayertitle: 'Hollywood Sign District',
                interactive: false,
                title: '<img src="styles/legend/HollywoodSignDistrict_2.png" /> Hollywood Sign District'
            });
var format_ParcelsinSignDistrict_3 = new ol.format.GeoJSON();
var features_ParcelsinSignDistrict_3 = format_ParcelsinSignDistrict_3.readFeatures(json_ParcelsinSignDistrict_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelsinSignDistrict_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelsinSignDistrict_3.addFeatures(features_ParcelsinSignDistrict_3);
var lyr_ParcelsinSignDistrict_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelsinSignDistrict_3, 
                style: style_ParcelsinSignDistrict_3,
                popuplayertitle: 'Parcels in Sign District',
                interactive: true,
                title: '<img src="styles/legend/ParcelsinSignDistrict_3.png" /> Parcels in Sign District'
            });
var format_CD13_4 = new ol.format.GeoJSON();
var features_CD13_4 = format_CD13_4.readFeatures(json_CD13_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CD13_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CD13_4.addFeatures(features_CD13_4);
var lyr_CD13_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CD13_4, 
                style: style_CD13_4,
                popuplayertitle: 'CD13',
                interactive: false,
                title: '<img src="styles/legend/CD13_4.png" /> CD13'
            });

lyr_Satellite_0.setVisible(true);lyr_Street_1.setVisible(true);lyr_HollywoodSignDistrict_2.setVisible(true);lyr_ParcelsinSignDistrict_3.setVisible(true);lyr_CD13_4.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_Street_1,lyr_HollywoodSignDistrict_2,lyr_ParcelsinSignDistrict_3,lyr_CD13_4];
lyr_HollywoodSignDistrict_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'DIST_TYPE': 'DIST_TYPE', 'TOOLTIP': 'TOOLTIP', });
lyr_ParcelsinSignDistrict_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ASSETID': 'ASSETID', 'MAPSHEET': 'MAPSHEET', 'ID': 'ID', 'BPP': 'BPP', 'MAP_REF': 'MAP_REF', 'TRACT': 'TRACT', 'BLOCK': 'BLOCK', 'MOD': 'MOD', 'LOT': 'LOT', 'ARB': 'ARB', 'PIND': 'PIND', 'PIN': 'PIN', 'BOOK': 'BOOK', 'PAGE': 'PAGE', 'PARCEL': 'PARCEL', 'ENG_DIST': 'ENG_DIST', 'CNCL_DIST': 'CNCL_DIST', 'NLA_URL': 'NLA_URL', 'TOOLTIP': 'TOOLTIP', 'ENG_DIST_DESC': 'ENG_DIST_DESC', });
lyr_CD13_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'District': 'District', 'District_Name': 'District_Name', 'TOOLTIP': 'TOOLTIP', 'NLA_URL': 'NLA_URL', });
lyr_HollywoodSignDistrict_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'NAME': 'TextEdit', 'DIST_TYPE': 'TextEdit', 'TOOLTIP': 'TextEdit', });
lyr_ParcelsinSignDistrict_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ASSETID': 'Range', 'MAPSHEET': 'TextEdit', 'ID': 'Range', 'BPP': 'TextEdit', 'MAP_REF': 'TextEdit', 'TRACT': 'TextEdit', 'BLOCK': 'TextEdit', 'MOD': 'TextEdit', 'LOT': 'TextEdit', 'ARB': 'TextEdit', 'PIND': 'TextEdit', 'PIN': 'TextEdit', 'BOOK': 'TextEdit', 'PAGE': 'TextEdit', 'PARCEL': 'TextEdit', 'ENG_DIST': 'TextEdit', 'CNCL_DIST': 'TextEdit', 'NLA_URL': 'TextEdit', 'TOOLTIP': 'TextEdit', 'ENG_DIST_DESC': 'TextEdit', });
lyr_CD13_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'District': 'Range', 'District_Name': 'TextEdit', 'TOOLTIP': 'TextEdit', 'NLA_URL': 'TextEdit', });
lyr_HollywoodSignDistrict_2.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'DIST_TYPE': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', });
lyr_ParcelsinSignDistrict_3.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'ASSETID': 'inline label - always visible', 'MAPSHEET': 'inline label - always visible', 'ID': 'inline label - always visible', 'BPP': 'inline label - always visible', 'MAP_REF': 'inline label - always visible', 'TRACT': 'inline label - always visible', 'BLOCK': 'inline label - always visible', 'MOD': 'inline label - always visible', 'LOT': 'inline label - always visible', 'ARB': 'inline label - always visible', 'PIND': 'inline label - always visible', 'PIN': 'inline label - always visible', 'BOOK': 'inline label - always visible', 'PAGE': 'inline label - always visible', 'PARCEL': 'inline label - always visible', 'ENG_DIST': 'inline label - always visible', 'CNCL_DIST': 'inline label - always visible', 'NLA_URL': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', 'ENG_DIST_DESC': 'inline label - always visible', });
lyr_CD13_4.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'District': 'inline label - always visible', 'District_Name': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', 'NLA_URL': 'inline label - always visible', });
lyr_CD13_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});