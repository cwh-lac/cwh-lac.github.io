var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_lacityparcels_2 = new ol.format.GeoJSON();
var features_lacityparcels_2 = format_lacityparcels_2.readFeatures(json_lacityparcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lacityparcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lacityparcels_2.addFeatures(features_lacityparcels_2);
var lyr_lacityparcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lacityparcels_2, 
                style: style_lacityparcels_2,
                popuplayertitle: 'la city parcels',
                interactive: true,
                title: '<img src="styles/legend/lacityparcels_2.png" /> la city parcels'
            });
var format_cd13_3 = new ol.format.GeoJSON();
var features_cd13_3 = format_cd13_3.readFeatures(json_cd13_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cd13_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cd13_3.addFeatures(features_cd13_3);
var lyr_cd13_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cd13_3, 
                style: style_cd13_3,
                popuplayertitle: 'cd13',
                interactive: false,
                title: '<img src="styles/legend/cd13_3.png" /> cd13'
            });
var format_surplus_cd13_0513_4 = new ol.format.GeoJSON();
var features_surplus_cd13_0513_4 = format_surplus_cd13_0513_4.readFeatures(json_surplus_cd13_0513_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surplus_cd13_0513_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surplus_cd13_0513_4.addFeatures(features_surplus_cd13_0513_4);
var lyr_surplus_cd13_0513_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_surplus_cd13_0513_4, 
                style: style_surplus_cd13_0513_4,
                popuplayertitle: 'surplus_cd13_0513',
                interactive: true,
                title: '<img src="styles/legend/surplus_cd13_0513_4.png" /> surplus_cd13_0513'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_lacityparcels_2.setVisible(true);lyr_cd13_3.setVisible(true);lyr_surplus_cd13_0513_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_lacityparcels_2,lyr_cd13_3,lyr_surplus_cd13_0513_4];
lyr_lacityparcels_2.set('fieldAliases', {'fid': 'fid', 'AIN': 'AIN', 'APN': 'APN', 'SitusHouseNo': 'SitusHouseNo', 'SitusFraction': 'SitusFraction', 'SitusDirection': 'SitusDirection', 'SitusUnit': 'SitusUnit', 'SitusStreet': 'SitusStreet', 'SitusAddress': 'SitusAddress', 'SitusCity': 'SitusCity', 'SitusZIP': 'SitusZIP', 'SitusFullAddress': 'SitusFullAddress', 'TaxRateArea': 'TaxRateArea', 'TaxRateCity': 'TaxRateCity', 'AgencyClassNo': 'AgencyClassNo', 'AgencyName': 'AgencyName', 'AgencyType': 'AgencyType', 'UseCode': 'UseCode', 'RecDate': 'RecDate', 'RecDocNo': 'RecDocNo', 'OwnerName': 'OwnerName', 'OwnerOverflow': 'OwnerOverflow', 'SecondOwner': 'SecondOwner', 'OwnerFullName': 'OwnerFullName', 'MailHouseNo': 'MailHouseNo', 'MailFraction': 'MailFraction', 'MailDirection': 'MailDirection', 'MailUnit': 'MailUnit', 'MailStreet': 'MailStreet', 'MailAddress': 'MailAddress', 'MailCity': 'MailCity', 'MailZip': 'MailZip', 'LegalDescLine1': 'LegalDescLine1', 'LegalDescLine2': 'LegalDescLine2', 'LegalDescLine3': 'LegalDescLine3', 'LegalDescLine4': 'LegalDescLine4', 'LegalDescLine5': 'LegalDescLine5', 'LegalDescLineLast': 'LegalDescLineLast', 'LegalDescription': 'LegalDescription', 'ParcelCreateDate': 'ParcelCreateDate', 'CENTER_LAT': 'CENTER_LAT', 'CENTER_LON': 'CENTER_LON', 'CENTER_X': 'CENTER_X', 'CENTER_Y': 'CENTER_Y', 'LAT_LON': 'LAT_LON', 'OBJECTID': 'OBJECTID', 'SHAPE__Area': 'SHAPE__Area', 'SHAPE__Length': 'SHAPE__Length', });
lyr_cd13_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'District': 'District', 'District_Name': 'District_Name', 'TOOLTIP': 'TOOLTIP', 'NLA_URL': 'NLA_URL', });
lyr_surplus_cd13_0513_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ASSETID': 'ASSETID', 'MAPSHEET': 'MAPSHEET', 'ID': 'ID', 'BPP': 'BPP', 'MAP_REF': 'MAP_REF', 'TRACT': 'TRACT', 'BLOCK': 'BLOCK', 'MOD': 'MOD', 'LOT': 'LOT', 'ARB': 'ARB', 'PIND': 'PIND', 'PIN': 'PIN', 'BOOK': 'BOOK', 'PAGE': 'PAGE', 'PARCEL': 'PARCEL', 'ENG_DIST': 'ENG_DIST', 'CNCL_DIST': 'CNCL_DIST', 'NLA_URL': 'NLA_URL', 'TOOLTIP': 'TOOLTIP', 'ENG_DIST_DESC': 'ENG_DIST_DESC', });
lyr_lacityparcels_2.set('fieldImages', {'fid': 'TextEdit', 'AIN': 'TextEdit', 'APN': 'TextEdit', 'SitusHouseNo': 'TextEdit', 'SitusFraction': 'TextEdit', 'SitusDirection': 'TextEdit', 'SitusUnit': 'TextEdit', 'SitusStreet': 'TextEdit', 'SitusAddress': 'TextEdit', 'SitusCity': 'TextEdit', 'SitusZIP': 'TextEdit', 'SitusFullAddress': 'TextEdit', 'TaxRateArea': 'TextEdit', 'TaxRateCity': 'TextEdit', 'AgencyClassNo': 'Range', 'AgencyName': 'TextEdit', 'AgencyType': 'TextEdit', 'UseCode': 'TextEdit', 'RecDate': 'TextEdit', 'RecDocNo': 'Range', 'OwnerName': 'TextEdit', 'OwnerOverflow': 'TextEdit', 'SecondOwner': 'TextEdit', 'OwnerFullName': 'TextEdit', 'MailHouseNo': 'TextEdit', 'MailFraction': 'TextEdit', 'MailDirection': 'TextEdit', 'MailUnit': 'TextEdit', 'MailStreet': 'TextEdit', 'MailAddress': 'TextEdit', 'MailCity': 'TextEdit', 'MailZip': 'TextEdit', 'LegalDescLine1': 'TextEdit', 'LegalDescLine2': 'TextEdit', 'LegalDescLine3': 'TextEdit', 'LegalDescLine4': 'TextEdit', 'LegalDescLine5': 'TextEdit', 'LegalDescLineLast': 'TextEdit', 'LegalDescription': 'TextEdit', 'ParcelCreateDate': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_X': 'TextEdit', 'CENTER_Y': 'TextEdit', 'LAT_LON': 'TextEdit', 'OBJECTID': 'Range', 'SHAPE__Area': 'TextEdit', 'SHAPE__Length': 'TextEdit', });
lyr_cd13_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'District': 'Range', 'District_Name': 'TextEdit', 'TOOLTIP': 'TextEdit', 'NLA_URL': 'TextEdit', });
lyr_surplus_cd13_0513_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ASSETID': 'Range', 'MAPSHEET': 'TextEdit', 'ID': 'Range', 'BPP': 'TextEdit', 'MAP_REF': 'TextEdit', 'TRACT': 'TextEdit', 'BLOCK': 'TextEdit', 'MOD': 'TextEdit', 'LOT': 'TextEdit', 'ARB': 'TextEdit', 'PIND': 'TextEdit', 'PIN': 'TextEdit', 'BOOK': 'TextEdit', 'PAGE': 'TextEdit', 'PARCEL': 'TextEdit', 'ENG_DIST': 'TextEdit', 'CNCL_DIST': 'TextEdit', 'NLA_URL': 'TextEdit', 'TOOLTIP': 'TextEdit', 'ENG_DIST_DESC': 'TextEdit', });
lyr_lacityparcels_2.set('fieldLabels', {'fid': 'inline label - always visible', 'AIN': 'inline label - always visible', 'APN': 'inline label - always visible', 'SitusHouseNo': 'inline label - always visible', 'SitusFraction': 'inline label - always visible', 'SitusDirection': 'inline label - always visible', 'SitusUnit': 'inline label - always visible', 'SitusStreet': 'inline label - always visible', 'SitusAddress': 'inline label - always visible', 'SitusCity': 'inline label - always visible', 'SitusZIP': 'inline label - always visible', 'SitusFullAddress': 'inline label - always visible', 'TaxRateArea': 'inline label - always visible', 'TaxRateCity': 'inline label - always visible', 'AgencyClassNo': 'inline label - always visible', 'AgencyName': 'inline label - always visible', 'AgencyType': 'inline label - always visible', 'UseCode': 'inline label - always visible', 'RecDate': 'inline label - always visible', 'RecDocNo': 'inline label - always visible', 'OwnerName': 'inline label - always visible', 'OwnerOverflow': 'inline label - always visible', 'SecondOwner': 'inline label - always visible', 'OwnerFullName': 'inline label - always visible', 'MailHouseNo': 'inline label - always visible', 'MailFraction': 'inline label - always visible', 'MailDirection': 'inline label - always visible', 'MailUnit': 'inline label - always visible', 'MailStreet': 'inline label - always visible', 'MailAddress': 'inline label - always visible', 'MailCity': 'inline label - always visible', 'MailZip': 'inline label - always visible', 'LegalDescLine1': 'inline label - always visible', 'LegalDescLine2': 'inline label - always visible', 'LegalDescLine3': 'inline label - always visible', 'LegalDescLine4': 'inline label - always visible', 'LegalDescLine5': 'inline label - always visible', 'LegalDescLineLast': 'inline label - always visible', 'LegalDescription': 'inline label - always visible', 'ParcelCreateDate': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_X': 'inline label - always visible', 'CENTER_Y': 'inline label - always visible', 'LAT_LON': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'SHAPE__Area': 'inline label - always visible', 'SHAPE__Length': 'inline label - always visible', });
lyr_cd13_3.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'District': 'inline label - always visible', 'District_Name': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', 'NLA_URL': 'inline label - always visible', });
lyr_surplus_cd13_0513_4.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'ASSETID': 'inline label - always visible', 'MAPSHEET': 'inline label - always visible', 'ID': 'inline label - always visible', 'BPP': 'inline label - always visible', 'MAP_REF': 'inline label - always visible', 'TRACT': 'inline label - always visible', 'BLOCK': 'inline label - always visible', 'MOD': 'inline label - always visible', 'LOT': 'inline label - always visible', 'ARB': 'inline label - always visible', 'PIND': 'inline label - always visible', 'PIN': 'inline label - always visible', 'BOOK': 'inline label - always visible', 'PAGE': 'inline label - always visible', 'PARCEL': 'inline label - always visible', 'ENG_DIST': 'inline label - always visible', 'CNCL_DIST': 'inline label - always visible', 'NLA_URL': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', 'ENG_DIST_DESC': 'inline label - always visible', });
lyr_surplus_cd13_0513_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});