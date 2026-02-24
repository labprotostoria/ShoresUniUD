var wms_layers = [];

var lyr_TINItaly_DEM_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tinitaly.pi.ingv.it/TINItaly_1_1/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "tinitaly_dem",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'TINItaly_DEM',
                            popuplayertitle: 'TINItaly_DEM',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TINItaly_DEM_0, 0]);
var lyr_TINItaly_Hillshade_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tinitaly.pi.ingv.it/TINItaly_1_1/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "tinitaly_hshd",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'TINItaly_Hillshade',
                            popuplayertitle: 'TINItaly_Hillshade',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TINItaly_Hillshade_1, 0]);

        var lyr_EsriSatellite_2 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FVG_rivers_3 = new ol.format.GeoJSON();
var features_FVG_rivers_3 = format_FVG_rivers_3.readFeatures(json_FVG_rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FVG_rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FVG_rivers_3.addFeatures(features_FVG_rivers_3);
var lyr_FVG_rivers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FVG_rivers_3, 
                style: style_FVG_rivers_3,
                popuplayertitle: 'FVG_rivers',
                interactive: true,
                title: '<img src="styles/legend/FVG_rivers_3.png" /> FVG_rivers'
            });
var format_VE_rivers_4 = new ol.format.GeoJSON();
var features_VE_rivers_4 = format_VE_rivers_4.readFeatures(json_VE_rivers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VE_rivers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VE_rivers_4.addFeatures(features_VE_rivers_4);
var lyr_VE_rivers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VE_rivers_4, 
                style: style_VE_rivers_4,
                popuplayertitle: 'VE_rivers',
                interactive: true,
                title: '<img src="styles/legend/VE_rivers_4.png" /> VE_rivers'
            });
var format_VE_rivers_5 = new ol.format.GeoJSON();
var features_VE_rivers_5 = format_VE_rivers_5.readFeatures(json_VE_rivers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VE_rivers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VE_rivers_5.addFeatures(features_VE_rivers_5);
var lyr_VE_rivers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VE_rivers_5, 
                style: style_VE_rivers_5,
                popuplayertitle: 'VE_rivers',
                interactive: true,
                title: '<img src="styles/legend/VE_rivers_5.png" /> VE_rivers'
            });
var format_TV_rivers_6 = new ol.format.GeoJSON();
var features_TV_rivers_6 = format_TV_rivers_6.readFeatures(json_TV_rivers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TV_rivers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TV_rivers_6.addFeatures(features_TV_rivers_6);
var lyr_TV_rivers_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TV_rivers_6, 
                style: style_TV_rivers_6,
                popuplayertitle: 'TV_rivers',
                interactive: true,
                title: '<img src="styles/legend/TV_rivers_6.png" /> TV_rivers'
            });
var format_Regionboundaries_7 = new ol.format.GeoJSON();
var features_Regionboundaries_7 = format_Regionboundaries_7.readFeatures(json_Regionboundaries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionboundaries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionboundaries_7.addFeatures(features_Regionboundaries_7);
var lyr_Regionboundaries_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionboundaries_7, 
                style: style_Regionboundaries_7,
                popuplayertitle: 'Region boundaries',
                interactive: false,
                title: '<img src="styles/legend/Regionboundaries_7.png" /> Region boundaries'
            });
var format_SitesSHORESEIA_8 = new ol.format.GeoJSON();
var features_SitesSHORESEIA_8 = format_SitesSHORESEIA_8.readFeatures(json_SitesSHORESEIA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESEIA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESEIA_8.addFeatures(features_SitesSHORESEIA_8);
var lyr_SitesSHORESEIA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESEIA_8, 
                style: style_SitesSHORESEIA_8,
                popuplayertitle: 'Sites SHORES EIA',
                interactive: true,
    title: 'Sites SHORES EIA<br />\
    <img src="styles/legend/SitesSHORESEIA_8_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA_8_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA_8_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESEIA_8_3.png" /> Hoard<br />' });
var format_SitesSHORESEIA3_9 = new ol.format.GeoJSON();
var features_SitesSHORESEIA3_9 = format_SitesSHORESEIA3_9.readFeatures(json_SitesSHORESEIA3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESEIA3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESEIA3_9.addFeatures(features_SitesSHORESEIA3_9);
var lyr_SitesSHORESEIA3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESEIA3_9, 
                style: style_SitesSHORESEIA3_9,
                popuplayertitle: 'Sites SHORES EIA3',
                interactive: true,
    title: 'Sites SHORES EIA3<br />\
    <img src="styles/legend/SitesSHORESEIA3_9_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA3_9_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA3_9_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESEIA3_9_3.png" /> Hoard<br />' });
var format_SitesSHORESEIA2_10 = new ol.format.GeoJSON();
var features_SitesSHORESEIA2_10 = format_SitesSHORESEIA2_10.readFeatures(json_SitesSHORESEIA2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESEIA2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESEIA2_10.addFeatures(features_SitesSHORESEIA2_10);
var lyr_SitesSHORESEIA2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESEIA2_10, 
                style: style_SitesSHORESEIA2_10,
                popuplayertitle: 'Sites SHORES EIA2',
                interactive: true,
    title: 'Sites SHORES EIA2<br />\
    <img src="styles/legend/SitesSHORESEIA2_10_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA2_10_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA2_10_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESEIA2_10_3.png" /> Hoard<br />' });
var format_SitesSHORESEIA1_11 = new ol.format.GeoJSON();
var features_SitesSHORESEIA1_11 = format_SitesSHORESEIA1_11.readFeatures(json_SitesSHORESEIA1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESEIA1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESEIA1_11.addFeatures(features_SitesSHORESEIA1_11);
var lyr_SitesSHORESEIA1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESEIA1_11, 
                style: style_SitesSHORESEIA1_11,
                popuplayertitle: 'Sites SHORES EIA1',
                interactive: true,
    title: 'Sites SHORES EIA1<br />\
    <img src="styles/legend/SitesSHORESEIA1_11_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA1_11_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESEIA1_11_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESEIA1_11_3.png" /> Hoard<br />' });
var format_SitesSHORESFBA_12 = new ol.format.GeoJSON();
var features_SitesSHORESFBA_12 = format_SitesSHORESFBA_12.readFeatures(json_SitesSHORESFBA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESFBA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESFBA_12.addFeatures(features_SitesSHORESFBA_12);
var lyr_SitesSHORESFBA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESFBA_12, 
                style: style_SitesSHORESFBA_12,
                popuplayertitle: 'Sites SHORES FBA',
                interactive: true,
    title: 'Sites SHORES FBA<br />\
    <img src="styles/legend/SitesSHORESFBA_12_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA_12_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA_12_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESFBA_12_3.png" /> Hoard<br />' });
var format_SitesSHORESFBA3_13 = new ol.format.GeoJSON();
var features_SitesSHORESFBA3_13 = format_SitesSHORESFBA3_13.readFeatures(json_SitesSHORESFBA3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESFBA3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESFBA3_13.addFeatures(features_SitesSHORESFBA3_13);
var lyr_SitesSHORESFBA3_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESFBA3_13, 
                style: style_SitesSHORESFBA3_13,
                popuplayertitle: 'Sites SHORES FBA3',
                interactive: true,
    title: 'Sites SHORES FBA3<br />\
    <img src="styles/legend/SitesSHORESFBA3_13_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA3_13_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA3_13_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESFBA3_13_3.png" /> Hoard<br />' });
var format_SitesSHORESFBA2_14 = new ol.format.GeoJSON();
var features_SitesSHORESFBA2_14 = format_SitesSHORESFBA2_14.readFeatures(json_SitesSHORESFBA2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESFBA2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESFBA2_14.addFeatures(features_SitesSHORESFBA2_14);
var lyr_SitesSHORESFBA2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESFBA2_14, 
                style: style_SitesSHORESFBA2_14,
                popuplayertitle: 'Sites SHORES FBA2',
                interactive: true,
    title: 'Sites SHORES FBA2<br />\
    <img src="styles/legend/SitesSHORESFBA2_14_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA2_14_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA2_14_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESFBA2_14_3.png" /> Hoard<br />' });
var format_SitesSHORESFBA1_15 = new ol.format.GeoJSON();
var features_SitesSHORESFBA1_15 = format_SitesSHORESFBA1_15.readFeatures(json_SitesSHORESFBA1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESFBA1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESFBA1_15.addFeatures(features_SitesSHORESFBA1_15);
var lyr_SitesSHORESFBA1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESFBA1_15, 
                style: style_SitesSHORESFBA1_15,
                popuplayertitle: 'Sites SHORES FBA1',
                interactive: true,
    title: 'Sites SHORES FBA1<br />\
    <img src="styles/legend/SitesSHORESFBA1_15_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA1_15_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESFBA1_15_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESFBA1_15_3.png" /> Hoard<br />' });
var format_SitesSHORESRBA_16 = new ol.format.GeoJSON();
var features_SitesSHORESRBA_16 = format_SitesSHORESRBA_16.readFeatures(json_SitesSHORESRBA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESRBA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESRBA_16.addFeatures(features_SitesSHORESRBA_16);
var lyr_SitesSHORESRBA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESRBA_16, 
                style: style_SitesSHORESRBA_16,
                popuplayertitle: 'Sites SHORES RBA',
                interactive: true,
    title: 'Sites SHORES RBA<br />\
    <img src="styles/legend/SitesSHORESRBA_16_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESRBA_16_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESRBA_16_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESRBA_16_3.png" /> Hoard<br />' });
var format_SitesSHORESRBA2_17 = new ol.format.GeoJSON();
var features_SitesSHORESRBA2_17 = format_SitesSHORESRBA2_17.readFeatures(json_SitesSHORESRBA2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESRBA2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESRBA2_17.addFeatures(features_SitesSHORESRBA2_17);
var lyr_SitesSHORESRBA2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESRBA2_17, 
                style: style_SitesSHORESRBA2_17,
                popuplayertitle: 'Sites SHORES RBA2',
                interactive: true,
    title: 'Sites SHORES RBA2<br />\
    <img src="styles/legend/SitesSHORESRBA2_17_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESRBA2_17_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESRBA2_17_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESRBA2_17_3.png" /> Hoard<br />' });
var format_SitesSHORESRBA1_18 = new ol.format.GeoJSON();
var features_SitesSHORESRBA1_18 = format_SitesSHORESRBA1_18.readFeatures(json_SitesSHORESRBA1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESRBA1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESRBA1_18.addFeatures(features_SitesSHORESRBA1_18);
var lyr_SitesSHORESRBA1_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESRBA1_18, 
                style: style_SitesSHORESRBA1_18,
                popuplayertitle: 'Sites SHORES RBA1',
                interactive: true,
    title: 'Sites SHORES RBA1<br />\
    <img src="styles/legend/SitesSHORESRBA1_18_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESRBA1_18_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESRBA1_18_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESRBA1_18_3.png" /> Hoard<br />' });
var format_SitesSHORESMBA_19 = new ol.format.GeoJSON();
var features_SitesSHORESMBA_19 = format_SitesSHORESMBA_19.readFeatures(json_SitesSHORESMBA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESMBA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESMBA_19.addFeatures(features_SitesSHORESMBA_19);
var lyr_SitesSHORESMBA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESMBA_19, 
                style: style_SitesSHORESMBA_19,
                popuplayertitle: 'Sites SHORES MBA',
                interactive: true,
    title: 'Sites SHORES MBA<br />\
    <img src="styles/legend/SitesSHORESMBA_19_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA_19_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA_19_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESMBA_19_3.png" /> Hoard<br />' });
var format_SitesSHORESMBA3_20 = new ol.format.GeoJSON();
var features_SitesSHORESMBA3_20 = format_SitesSHORESMBA3_20.readFeatures(json_SitesSHORESMBA3_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESMBA3_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESMBA3_20.addFeatures(features_SitesSHORESMBA3_20);
var lyr_SitesSHORESMBA3_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESMBA3_20, 
                style: style_SitesSHORESMBA3_20,
                popuplayertitle: 'Sites SHORES MBA3',
                interactive: true,
    title: 'Sites SHORES MBA3<br />\
    <img src="styles/legend/SitesSHORESMBA3_20_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA3_20_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA3_20_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESMBA3_20_3.png" /> Hoard<br />' });
var format_SitesSHORESMBA2_21 = new ol.format.GeoJSON();
var features_SitesSHORESMBA2_21 = format_SitesSHORESMBA2_21.readFeatures(json_SitesSHORESMBA2_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESMBA2_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESMBA2_21.addFeatures(features_SitesSHORESMBA2_21);
var lyr_SitesSHORESMBA2_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESMBA2_21, 
                style: style_SitesSHORESMBA2_21,
                popuplayertitle: 'Sites SHORES MBA2',
                interactive: true,
    title: 'Sites SHORES MBA2<br />\
    <img src="styles/legend/SitesSHORESMBA2_21_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA2_21_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA2_21_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESMBA2_21_3.png" /> Hoard<br />' });
var format_SitesSHORESMBA1_22 = new ol.format.GeoJSON();
var features_SitesSHORESMBA1_22 = format_SitesSHORESMBA1_22.readFeatures(json_SitesSHORESMBA1_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESMBA1_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESMBA1_22.addFeatures(features_SitesSHORESMBA1_22);
var lyr_SitesSHORESMBA1_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESMBA1_22, 
                style: style_SitesSHORESMBA1_22,
                popuplayertitle: 'Sites SHORES MBA1',
                interactive: true,
    title: 'Sites SHORES MBA1<br />\
    <img src="styles/legend/SitesSHORESMBA1_22_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA1_22_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESMBA1_22_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESMBA1_22_3.png" /> Hoard<br />' });
var format_SitesSHORESEBA2_23 = new ol.format.GeoJSON();
var features_SitesSHORESEBA2_23 = format_SitesSHORESEBA2_23.readFeatures(json_SitesSHORESEBA2_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORESEBA2_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORESEBA2_23.addFeatures(features_SitesSHORESEBA2_23);
var lyr_SitesSHORESEBA2_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORESEBA2_23, 
                style: style_SitesSHORESEBA2_23,
                popuplayertitle: 'Sites SHORES EBA2',
                interactive: true,
    title: 'Sites SHORES EBA2<br />\
    <img src="styles/legend/SitesSHORESEBA2_23_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORESEBA2_23_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORESEBA2_23_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORESEBA2_23_3.png" /> Hoard<br />' });
var format_SitesSHORES_24 = new ol.format.GeoJSON();
var features_SitesSHORES_24 = format_SitesSHORES_24.readFeatures(json_SitesSHORES_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesSHORES_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesSHORES_24.addFeatures(features_SitesSHORES_24);
var lyr_SitesSHORES_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesSHORES_24, 
                style: style_SitesSHORES_24,
                popuplayertitle: 'Sites SHORES',
                interactive: true,
    title: 'Sites SHORES<br />\
    <img src="styles/legend/SitesSHORES_24_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitesSHORES_24_1.png" /> Settlement<br />\
    <img src="styles/legend/SitesSHORES_24_2.png" /> Funerary<br />\
    <img src="styles/legend/SitesSHORES_24_3.png" /> Hoard<br />' });
var format_Research_Area_25 = new ol.format.GeoJSON();
var features_Research_Area_25 = format_Research_Area_25.readFeatures(json_Research_Area_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Research_Area_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Research_Area_25.addFeatures(features_Research_Area_25);
var lyr_Research_Area_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Research_Area_25, 
                style: style_Research_Area_25,
                popuplayertitle: 'Research_Area',
                interactive: false,
                title: '<img src="styles/legend/Research_Area_25.png" /> Research_Area'
            });
var group_Waterways = new ol.layer.Group({
                                layers: [lyr_FVG_rivers_3,lyr_VE_rivers_4,lyr_VE_rivers_5,lyr_TV_rivers_6,],
                                fold: 'close',
                                title: 'Waterways'});

lyr_TINItaly_DEM_0.setVisible(true);lyr_TINItaly_Hillshade_1.setVisible(true);lyr_EsriSatellite_2.setVisible(true);lyr_FVG_rivers_3.setVisible(true);lyr_VE_rivers_4.setVisible(true);lyr_VE_rivers_5.setVisible(true);lyr_TV_rivers_6.setVisible(true);lyr_Regionboundaries_7.setVisible(true);lyr_SitesSHORESEIA_8.setVisible(false);lyr_SitesSHORESEIA3_9.setVisible(false);lyr_SitesSHORESEIA2_10.setVisible(false);lyr_SitesSHORESEIA1_11.setVisible(false);lyr_SitesSHORESFBA_12.setVisible(false);lyr_SitesSHORESFBA3_13.setVisible(false);lyr_SitesSHORESFBA2_14.setVisible(false);lyr_SitesSHORESFBA1_15.setVisible(false);lyr_SitesSHORESRBA_16.setVisible(false);lyr_SitesSHORESRBA2_17.setVisible(false);lyr_SitesSHORESRBA1_18.setVisible(false);lyr_SitesSHORESMBA_19.setVisible(false);lyr_SitesSHORESMBA3_20.setVisible(false);lyr_SitesSHORESMBA2_21.setVisible(false);lyr_SitesSHORESMBA1_22.setVisible(false);lyr_SitesSHORESEBA2_23.setVisible(false);lyr_SitesSHORES_24.setVisible(true);lyr_Research_Area_25.setVisible(true);
var layersList = [lyr_TINItaly_DEM_0,lyr_TINItaly_Hillshade_1,lyr_EsriSatellite_2,group_Waterways,lyr_Regionboundaries_7,lyr_SitesSHORESEIA_8,lyr_SitesSHORESEIA3_9,lyr_SitesSHORESEIA2_10,lyr_SitesSHORESEIA1_11,lyr_SitesSHORESFBA_12,lyr_SitesSHORESFBA3_13,lyr_SitesSHORESFBA2_14,lyr_SitesSHORESFBA1_15,lyr_SitesSHORESRBA_16,lyr_SitesSHORESRBA2_17,lyr_SitesSHORESRBA1_18,lyr_SitesSHORESMBA_19,lyr_SitesSHORESMBA3_20,lyr_SitesSHORESMBA2_21,lyr_SitesSHORESMBA1_22,lyr_SitesSHORESEBA2_23,lyr_SitesSHORES_24,lyr_Research_Area_25];
lyr_FVG_rivers_3.set('fieldAliases', {'CODICE_FVG': 'CODICE_FVG', 'NATURA': 'NATURA', 'NOME': 'NOME', 'TIPOLOGIA': 'TIPOLOGIA', 'CARATTERIS': 'CARATTERIS', 'NOME_CTR': 'NOME_CTR', 'NOME_RD': 'NOME_RD', 'NOME_FORES': 'NOME_FORES', 'NOME_CONSO': 'NOME_CONSO', 'NOME_1': 'NOME_1', 'NOME_2': 'NOME_2', 'NOME_3': 'NOME_3', 'CODICE_RD': 'CODICE_RD', 'CODICE_PT': 'CODICE_PT', 'CODICE_FOR': 'CODICE_FOR', 'ORDINE': 'ORDINE', 'NOTE': 'NOTE', 'CORSO_ACQU': 'CORSO_ACQU', });
lyr_VE_rivers_4.set('fieldAliases', {'cod': 'cod', 'astvin': 'astvin', 'denom': 'denom', 'descriz': 'descriz', 'id1': 'id1', });
lyr_VE_rivers_5.set('fieldAliases', {'cod': 'cod', 'astvin': 'astvin', 'denom': 'denom', 'descriz': 'descriz', 'id1': 'id1', });
lyr_TV_rivers_6.set('fieldAliases', {'cod': 'cod', 'astvin': 'astvin', 'denom': 'denom', 'descriz': 'descriz', 'id1': 'id1', });
lyr_Regionboundaries_7.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SitesSHORESEIA_8.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESEIA3_9.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESEIA2_10.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESEIA1_11.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESFBA_12.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESFBA3_13.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESFBA2_14.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESFBA1_15.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESRBA_16.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESRBA2_17.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESRBA1_18.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESMBA_19.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESMBA3_20.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESMBA2_21.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESMBA1_22.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORESEBA2_23.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitesSHORES_24.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_Research_Area_25.set('fieldAliases', {'id': 'id', });
lyr_FVG_rivers_3.set('fieldImages', {'CODICE_FVG': 'TextEdit', 'NATURA': 'TextEdit', 'NOME': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'CARATTERIS': 'TextEdit', 'NOME_CTR': 'TextEdit', 'NOME_RD': 'TextEdit', 'NOME_FORES': 'TextEdit', 'NOME_CONSO': 'TextEdit', 'NOME_1': 'TextEdit', 'NOME_2': 'TextEdit', 'NOME_3': 'TextEdit', 'CODICE_RD': 'TextEdit', 'CODICE_PT': 'TextEdit', 'CODICE_FOR': 'TextEdit', 'ORDINE': 'TextEdit', 'NOTE': 'TextEdit', 'CORSO_ACQU': 'TextEdit', });
lyr_VE_rivers_4.set('fieldImages', {'cod': 'TextEdit', 'astvin': 'TextEdit', 'denom': 'TextEdit', 'descriz': 'TextEdit', 'id1': 'TextEdit', });
lyr_VE_rivers_5.set('fieldImages', {'cod': 'TextEdit', 'astvin': 'TextEdit', 'denom': 'TextEdit', 'descriz': 'TextEdit', 'id1': 'TextEdit', });
lyr_TV_rivers_6.set('fieldImages', {'cod': 'TextEdit', 'astvin': 'TextEdit', 'denom': 'TextEdit', 'descriz': 'TextEdit', 'id1': 'TextEdit', });
lyr_Regionboundaries_7.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SitesSHORESEIA_8.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESEIA3_9.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESEIA2_10.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESEIA1_11.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESFBA_12.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESFBA3_13.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESFBA2_14.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESFBA1_15.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESRBA_16.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESRBA2_17.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESRBA1_18.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESMBA_19.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESMBA3_20.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESMBA2_21.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESMBA1_22.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORESEBA2_23.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitesSHORES_24.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_Research_Area_25.set('fieldImages', {'id': 'TextEdit', });
lyr_FVG_rivers_3.set('fieldLabels', {'CODICE_FVG': 'hidden field', 'NATURA': 'hidden field', 'NOME': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'CARATTERIS': 'hidden field', 'NOME_CTR': 'hidden field', 'NOME_RD': 'hidden field', 'NOME_FORES': 'hidden field', 'NOME_CONSO': 'hidden field', 'NOME_1': 'hidden field', 'NOME_2': 'hidden field', 'NOME_3': 'hidden field', 'CODICE_RD': 'hidden field', 'CODICE_PT': 'hidden field', 'CODICE_FOR': 'hidden field', 'ORDINE': 'hidden field', 'NOTE': 'hidden field', 'CORSO_ACQU': 'hidden field', });
lyr_VE_rivers_4.set('fieldLabels', {'cod': 'hidden field', 'astvin': 'hidden field', 'denom': 'inline label - visible with data', 'descriz': 'hidden field', 'id1': 'hidden field', });
lyr_VE_rivers_5.set('fieldLabels', {'cod': 'hidden field', 'astvin': 'hidden field', 'denom': 'inline label - visible with data', 'descriz': 'hidden field', 'id1': 'hidden field', });
lyr_TV_rivers_6.set('fieldLabels', {'cod': 'hidden field', 'astvin': 'hidden field', 'denom': 'inline label - visible with data', 'descriz': 'hidden field', 'id1': 'hidden field', });
lyr_Regionboundaries_7.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SitesSHORESEIA_8.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESEIA3_9.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESEIA2_10.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESEIA1_11.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESFBA_12.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESFBA3_13.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESFBA2_14.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESFBA1_15.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESRBA_16.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESRBA2_17.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESRBA1_18.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESMBA_19.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESMBA3_20.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESMBA2_21.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESMBA1_22.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'inline label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORESEBA2_23.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitesSHORES_24.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_Research_Area_25.set('fieldLabels', {'id': 'no label', });
lyr_Research_Area_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});