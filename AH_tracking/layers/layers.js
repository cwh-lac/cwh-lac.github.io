var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.604000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CD13_1 = new ol.format.GeoJSON();
var features_CD13_1 = format_CD13_1.readFeatures(json_CD13_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CD13_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CD13_1.addFeatures(features_CD13_1);
var lyr_CD13_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CD13_1, 
                style: style_CD13_1,
                popuplayertitle: 'CD13',
                interactive: true,
                title: '<img src="styles/legend/CD13_1.png" /> CD13'
            });
var format_AHbuildingpermitandCOO_2 = new ol.format.GeoJSON();
var features_AHbuildingpermitandCOO_2 = format_AHbuildingpermitandCOO_2.readFeatures(json_AHbuildingpermitandCOO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AHbuildingpermitandCOO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AHbuildingpermitandCOO_2.addFeatures(features_AHbuildingpermitandCOO_2);
var lyr_AHbuildingpermitandCOO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AHbuildingpermitandCOO_2, 
                style: style_AHbuildingpermitandCOO_2,
                popuplayertitle: 'AH building permit and COO',
                interactive: true,
                title: '<img src="styles/legend/AHbuildingpermitandCOO_2.png" /> AH building permit and COO'
            });
var format_LAHDAHList_2003toNow_3 = new ol.format.GeoJSON();
var features_LAHDAHList_2003toNow_3 = format_LAHDAHList_2003toNow_3.readFeatures(json_LAHDAHList_2003toNow_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAHDAHList_2003toNow_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAHDAHList_2003toNow_3.addFeatures(features_LAHDAHList_2003toNow_3);
var lyr_LAHDAHList_2003toNow_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAHDAHList_2003toNow_3, 
                style: style_LAHDAHList_2003toNow_3,
                popuplayertitle: 'LAHD AH List_2003 to Now',
                interactive: true,
                title: '<img src="styles/legend/LAHDAHList_2003toNow_3.png" /> LAHD AH List_2003 to Now'
            });
var format_AffordableCovenants2010onwards_4 = new ol.format.GeoJSON();
var features_AffordableCovenants2010onwards_4 = format_AffordableCovenants2010onwards_4.readFeatures(json_AffordableCovenants2010onwards_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AffordableCovenants2010onwards_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AffordableCovenants2010onwards_4.addFeatures(features_AffordableCovenants2010onwards_4);
var lyr_AffordableCovenants2010onwards_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AffordableCovenants2010onwards_4, 
                style: style_AffordableCovenants2010onwards_4,
                popuplayertitle: 'Affordable Covenants (2010 onwards)',
                interactive: true,
                title: '<img src="styles/legend/AffordableCovenants2010onwards_4.png" /> Affordable Covenants (2010 onwards)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CD13_1.setVisible(true);lyr_AHbuildingpermitandCOO_2.setVisible(true);lyr_LAHDAHList_2003toNow_3.setVisible(true);lyr_AffordableCovenants2010onwards_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CD13_1,lyr_AHbuildingpermitandCOO_2,lyr_LAHDAHList_2003toNow_3,lyr_AffordableCovenants2010onwards_4];
lyr_CD13_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'District': 'District', 'District_Name': 'District_Name', 'TOOLTIP': 'TOOLTIP', 'NLA_URL': 'NLA_URL', });
lyr_AHbuildingpermitandCOO_2.set('fieldAliases', {'zip_code': 'zip_code', 'ct': 'ct', 'construction': 'construction', 'hl': 'hl', 'use_code': 'use_code', 'ev': 'ev', 'permit_nbr': 'permit_nbr', 'apc': 'apc', 'pin_nbr': 'pin_nbr', 'cd': 'cd', 'primary_address': 'primary_address', 'height': 'height', 'type_lat_lon': 'type_lat_lon', 'status_date': 'status_date', 'status_desc': 'status_desc', 'solar': 'solar', 'issue_date': 'issue_date', 'adu_changed': 'adu_changed', 'use_desc': 'use_desc', 'square_footage': 'square_footage', 'valuation': 'valuation', 'cofo_date': 'cofo_date', 'business_unit': 'business_unit', 'du_changed': 'du_changed', 'apn': 'apn', 'lon': 'lon', 'work_desc': 'work_desc', 'permit_type': 'permit_type', 'permit_group': 'permit_group', 'zone': 'zone', 'refresh_time': 'refresh_time', 'submitted_date': 'submitted_date', 'junior_adu': 'junior_adu', 'lat': 'lat', 'cpa': 'cpa', 'permit_sub_type': 'permit_sub_type', 'cnc': 'cnc', 'affordable_units': 'affordable_units', });
lyr_LAHDAHList_2003toNow_3.set('fieldAliases', {'apn': 'apn', 'project_nu': 'project_nu', 'name': 'name', 'developmen': 'developmen', 'constructi': 'constructi', 'address': 'address', 'council_di': 'council_di', 'site_cd': 'site_cd', 'site_units': 'site_units', 'project_to': 'project_to', 'housing_ty': 'housing_ty', 'supportive': 'supportive', 'sh_units_p': 'sh_units_p', 'date_date_': 'date_date_', 'time_date_': 'time_date_', 'hcidla_fun': 'hcidla_fun', 'leverage': 'leverage', 'tax_exempt': 'tax_exempt', 'tdc': 'tdc', 'in_service': 'in_service', 'developer': 'developer', 'management': 'management', 'contact_ph': 'contact_ph', 'jobs': 'jobs', 'reporturl2': 'reporturl2', 'contract_n': 'contract_n', 'date_stamp': 'date_stamp', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_AffordableCovenants2010onwards_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROJECT_NA': 'PROJECT_NA', 'AV_ADD': 'AV_ADD', 'TOOLTIP': 'TOOLTIP', 'NLA_URL': 'NLA_URL', });
lyr_CD13_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'District': 'Range', 'District_Name': 'TextEdit', 'TOOLTIP': 'TextEdit', 'NLA_URL': 'TextEdit', });
lyr_AHbuildingpermitandCOO_2.set('fieldImages', {'zip_code': 'TextEdit', 'ct': 'TextEdit', 'construction': 'TextEdit', 'hl': 'TextEdit', 'use_code': 'TextEdit', 'ev': 'TextEdit', 'permit_nbr': 'TextEdit', 'apc': 'TextEdit', 'pin_nbr': 'TextEdit', 'cd': 'TextEdit', 'primary_address': 'TextEdit', 'height': 'TextEdit', 'type_lat_lon': 'TextEdit', 'status_date': 'DateTime', 'status_desc': 'TextEdit', 'solar': 'TextEdit', 'issue_date': 'DateTime', 'adu_changed': 'TextEdit', 'use_desc': 'TextEdit', 'square_footage': 'TextEdit', 'valuation': 'TextEdit', 'cofo_date': 'DateTime', 'business_unit': 'TextEdit', 'du_changed': 'TextEdit', 'apn': 'TextEdit', 'lon': 'TextEdit', 'work_desc': 'TextEdit', 'permit_type': 'TextEdit', 'permit_group': 'TextEdit', 'zone': 'TextEdit', 'refresh_time': 'DateTime', 'submitted_date': 'DateTime', 'junior_adu': 'TextEdit', 'lat': 'TextEdit', 'cpa': 'TextEdit', 'permit_sub_type': 'TextEdit', 'cnc': 'TextEdit', 'affordable_units': '', });
lyr_LAHDAHList_2003toNow_3.set('fieldImages', {'apn': 'TextEdit', 'project_nu': 'TextEdit', 'name': 'TextEdit', 'developmen': 'TextEdit', 'constructi': 'TextEdit', 'address': 'TextEdit', 'council_di': 'TextEdit', 'site_cd': 'TextEdit', 'site_units': 'TextEdit', 'project_to': 'TextEdit', 'housing_ty': 'TextEdit', 'supportive': 'TextEdit', 'sh_units_p': 'TextEdit', 'date_date_': 'DateTime', 'time_date_': 'TextEdit', 'hcidla_fun': 'TextEdit', 'leverage': 'TextEdit', 'tax_exempt': 'TextEdit', 'tdc': 'TextEdit', 'in_service': 'TextEdit', 'developer': 'TextEdit', 'management': 'TextEdit', 'contact_ph': 'TextEdit', 'jobs': 'TextEdit', 'reporturl2': 'TextEdit', 'contract_n': 'TextEdit', 'date_stamp': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_AffordableCovenants2010onwards_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROJECT_NA': 'TextEdit', 'AV_ADD': 'TextEdit', 'TOOLTIP': 'TextEdit', 'NLA_URL': 'TextEdit', });
lyr_CD13_1.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'District': 'inline label - always visible', 'District_Name': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', 'NLA_URL': 'inline label - always visible', });
lyr_AHbuildingpermitandCOO_2.set('fieldLabels', {'zip_code': 'inline label - always visible', 'ct': 'hidden field', 'construction': 'inline label - always visible', 'hl': 'hidden field', 'use_code': 'hidden field', 'ev': 'hidden field', 'permit_nbr': 'hidden field', 'apc': 'hidden field', 'pin_nbr': 'hidden field', 'cd': 'inline label - always visible', 'primary_address': 'inline label - always visible', 'height': 'hidden field', 'type_lat_lon': 'hidden field', 'status_date': 'inline label - always visible', 'status_desc': 'inline label - always visible', 'solar': 'hidden field', 'issue_date': 'inline label - always visible', 'adu_changed': 'hidden field', 'use_desc': 'inline label - always visible', 'square_footage': 'hidden field', 'valuation': 'hidden field', 'cofo_date': 'inline label - always visible', 'business_unit': 'hidden field', 'du_changed': 'inline label - always visible', 'apn': 'inline label - always visible', 'lon': 'hidden field', 'work_desc': 'inline label - always visible', 'permit_type': 'inline label - always visible', 'permit_group': 'hidden field', 'zone': 'inline label - always visible', 'refresh_time': 'inline label - always visible', 'submitted_date': 'inline label - always visible', 'junior_adu': 'hidden field', 'lat': 'hidden field', 'cpa': 'hidden field', 'permit_sub_type': 'hidden field', 'cnc': 'hidden field', 'affordable_units': 'inline label - always visible', });
lyr_LAHDAHList_2003toNow_3.set('fieldLabels', {'apn': 'inline label - always visible', 'project_nu': 'inline label - always visible', 'name': 'inline label - always visible', 'developmen': 'inline label - always visible', 'constructi': 'inline label - always visible', 'address': 'inline label - always visible', 'council_di': 'inline label - always visible', 'site_cd': 'inline label - always visible', 'site_units': 'inline label - always visible', 'project_to': 'inline label - always visible', 'housing_ty': 'inline label - always visible', 'supportive': 'inline label - always visible', 'sh_units_p': 'inline label - always visible', 'date_date_': 'inline label - always visible', 'time_date_': 'inline label - always visible', 'hcidla_fun': 'inline label - always visible', 'leverage': 'inline label - always visible', 'tax_exempt': 'inline label - always visible', 'tdc': 'inline label - always visible', 'in_service': 'inline label - always visible', 'developer': 'inline label - always visible', 'management': 'inline label - always visible', 'contact_ph': 'inline label - always visible', 'jobs': 'inline label - always visible', 'reporturl2': 'inline label - always visible', 'contract_n': 'inline label - always visible', 'date_stamp': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_AffordableCovenants2010onwards_4.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'PROJECT_NA': 'inline label - always visible', 'AV_ADD': 'inline label - always visible', 'TOOLTIP': 'inline label - always visible', 'NLA_URL': 'inline label - always visible', });
lyr_AffordableCovenants2010onwards_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});