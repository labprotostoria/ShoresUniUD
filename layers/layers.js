var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlehybrid_1 = new ol.layer.Tile({
            'title': 'Google hybrid',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FVG_fiumi_2 = new ol.format.GeoJSON();
var features_FVG_fiumi_2 = format_FVG_fiumi_2.readFeatures(json_FVG_fiumi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FVG_fiumi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FVG_fiumi_2.addFeatures(features_FVG_fiumi_2);
var lyr_FVG_fiumi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FVG_fiumi_2, 
                style: style_FVG_fiumi_2,
                popuplayertitle: 'FVG_fiumi',
                interactive: true,
                title: '<img src="styles/legend/FVG_fiumi_2.png" /> FVG_fiumi'
            });
var format_VE_fiumi_3 = new ol.format.GeoJSON();
var features_VE_fiumi_3 = format_VE_fiumi_3.readFeatures(json_VE_fiumi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VE_fiumi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VE_fiumi_3.addFeatures(features_VE_fiumi_3);
var lyr_VE_fiumi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VE_fiumi_3, 
                style: style_VE_fiumi_3,
                popuplayertitle: 'VE_fiumi',
                interactive: true,
                title: '<img src="styles/legend/VE_fiumi_3.png" /> VE_fiumi'
            });
var format_VE_fiumi_4 = new ol.format.GeoJSON();
var features_VE_fiumi_4 = format_VE_fiumi_4.readFeatures(json_VE_fiumi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VE_fiumi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VE_fiumi_4.addFeatures(features_VE_fiumi_4);
var lyr_VE_fiumi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VE_fiumi_4, 
                style: style_VE_fiumi_4,
                popuplayertitle: 'VE_fiumi',
                interactive: true,
                title: '<img src="styles/legend/VE_fiumi_4.png" /> VE_fiumi'
            });
var format_TV_fiumi_5 = new ol.format.GeoJSON();
var features_TV_fiumi_5 = format_TV_fiumi_5.readFeatures(json_TV_fiumi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TV_fiumi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TV_fiumi_5.addFeatures(features_TV_fiumi_5);
var lyr_TV_fiumi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TV_fiumi_5, 
                style: style_TV_fiumi_5,
                popuplayertitle: 'TV_fiumi',
                interactive: true,
                title: '<img src="styles/legend/TV_fiumi_5.png" /> TV_fiumi'
            });
var format_SitiSHORESEIA_6 = new ol.format.GeoJSON();
var features_SitiSHORESEIA_6 = format_SitiSHORESEIA_6.readFeatures(json_SitiSHORESEIA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESEIA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESEIA_6.addFeatures(features_SitiSHORESEIA_6);
var lyr_SitiSHORESEIA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESEIA_6, 
                style: style_SitiSHORESEIA_6,
                popuplayertitle: 'Siti SHORES EIA',
                interactive: true,
    title: 'Siti SHORES EIA<br />\
    <img src="styles/legend/SitiSHORESEIA_6_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA_6_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA_6_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESEIA_6_3.png" /> Hoard<br />' });
var format_SitiSHORESEIA3_7 = new ol.format.GeoJSON();
var features_SitiSHORESEIA3_7 = format_SitiSHORESEIA3_7.readFeatures(json_SitiSHORESEIA3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESEIA3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESEIA3_7.addFeatures(features_SitiSHORESEIA3_7);
var lyr_SitiSHORESEIA3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESEIA3_7, 
                style: style_SitiSHORESEIA3_7,
                popuplayertitle: 'Siti SHORES EIA3',
                interactive: true,
    title: 'Siti SHORES EIA3<br />\
    <img src="styles/legend/SitiSHORESEIA3_7_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA3_7_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA3_7_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESEIA3_7_3.png" /> Hoard<br />' });
var format_SitiSHORESEIA2_8 = new ol.format.GeoJSON();
var features_SitiSHORESEIA2_8 = format_SitiSHORESEIA2_8.readFeatures(json_SitiSHORESEIA2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESEIA2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESEIA2_8.addFeatures(features_SitiSHORESEIA2_8);
var lyr_SitiSHORESEIA2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESEIA2_8, 
                style: style_SitiSHORESEIA2_8,
                popuplayertitle: 'Siti SHORES EIA2',
                interactive: true,
    title: 'Siti SHORES EIA2<br />\
    <img src="styles/legend/SitiSHORESEIA2_8_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA2_8_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA2_8_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESEIA2_8_3.png" /> Hoard<br />' });
var format_SitiSHORESEIA1_9 = new ol.format.GeoJSON();
var features_SitiSHORESEIA1_9 = format_SitiSHORESEIA1_9.readFeatures(json_SitiSHORESEIA1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESEIA1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESEIA1_9.addFeatures(features_SitiSHORESEIA1_9);
var lyr_SitiSHORESEIA1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESEIA1_9, 
                style: style_SitiSHORESEIA1_9,
                popuplayertitle: 'Siti SHORES EIA1',
                interactive: true,
    title: 'Siti SHORES EIA1<br />\
    <img src="styles/legend/SitiSHORESEIA1_9_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA1_9_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESEIA1_9_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESEIA1_9_3.png" /> Hoard<br />' });
var format_SitiSHORESFBA_10 = new ol.format.GeoJSON();
var features_SitiSHORESFBA_10 = format_SitiSHORESFBA_10.readFeatures(json_SitiSHORESFBA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESFBA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESFBA_10.addFeatures(features_SitiSHORESFBA_10);
var lyr_SitiSHORESFBA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESFBA_10, 
                style: style_SitiSHORESFBA_10,
                popuplayertitle: 'Siti SHORES FBA',
                interactive: true,
    title: 'Siti SHORES FBA<br />\
    <img src="styles/legend/SitiSHORESFBA_10_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA_10_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA_10_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESFBA_10_3.png" /> Hoard<br />' });
var format_SitiSHORESFBA3_11 = new ol.format.GeoJSON();
var features_SitiSHORESFBA3_11 = format_SitiSHORESFBA3_11.readFeatures(json_SitiSHORESFBA3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESFBA3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESFBA3_11.addFeatures(features_SitiSHORESFBA3_11);
var lyr_SitiSHORESFBA3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESFBA3_11, 
                style: style_SitiSHORESFBA3_11,
                popuplayertitle: 'Siti SHORES FBA3',
                interactive: true,
    title: 'Siti SHORES FBA3<br />\
    <img src="styles/legend/SitiSHORESFBA3_11_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA3_11_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA3_11_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESFBA3_11_3.png" /> Hoard<br />' });
var format_SitiSHORESFBA2_12 = new ol.format.GeoJSON();
var features_SitiSHORESFBA2_12 = format_SitiSHORESFBA2_12.readFeatures(json_SitiSHORESFBA2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESFBA2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESFBA2_12.addFeatures(features_SitiSHORESFBA2_12);
var lyr_SitiSHORESFBA2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESFBA2_12, 
                style: style_SitiSHORESFBA2_12,
                popuplayertitle: 'Siti SHORES FBA2',
                interactive: true,
    title: 'Siti SHORES FBA2<br />\
    <img src="styles/legend/SitiSHORESFBA2_12_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA2_12_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA2_12_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESFBA2_12_3.png" /> Hoard<br />' });
var format_SitiSHORESFBA1_13 = new ol.format.GeoJSON();
var features_SitiSHORESFBA1_13 = format_SitiSHORESFBA1_13.readFeatures(json_SitiSHORESFBA1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESFBA1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESFBA1_13.addFeatures(features_SitiSHORESFBA1_13);
var lyr_SitiSHORESFBA1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESFBA1_13, 
                style: style_SitiSHORESFBA1_13,
                popuplayertitle: 'Siti SHORES FBA1',
                interactive: true,
    title: 'Siti SHORES FBA1<br />\
    <img src="styles/legend/SitiSHORESFBA1_13_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA1_13_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESFBA1_13_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESFBA1_13_3.png" /> Hoard<br />' });
var format_SitiSHORESRBA_14 = new ol.format.GeoJSON();
var features_SitiSHORESRBA_14 = format_SitiSHORESRBA_14.readFeatures(json_SitiSHORESRBA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESRBA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESRBA_14.addFeatures(features_SitiSHORESRBA_14);
var lyr_SitiSHORESRBA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESRBA_14, 
                style: style_SitiSHORESRBA_14,
                popuplayertitle: 'Siti SHORES RBA',
                interactive: true,
    title: 'Siti SHORES RBA<br />\
    <img src="styles/legend/SitiSHORESRBA_14_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESRBA_14_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESRBA_14_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESRBA_14_3.png" /> Hoard<br />' });
var format_SitiSHORESRBA2_15 = new ol.format.GeoJSON();
var features_SitiSHORESRBA2_15 = format_SitiSHORESRBA2_15.readFeatures(json_SitiSHORESRBA2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESRBA2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESRBA2_15.addFeatures(features_SitiSHORESRBA2_15);
var lyr_SitiSHORESRBA2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESRBA2_15, 
                style: style_SitiSHORESRBA2_15,
                popuplayertitle: 'Siti SHORES RBA2',
                interactive: true,
    title: 'Siti SHORES RBA2<br />\
    <img src="styles/legend/SitiSHORESRBA2_15_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESRBA2_15_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESRBA2_15_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESRBA2_15_3.png" /> Hoard<br />' });
var format_SitiSHORESRBA1_16 = new ol.format.GeoJSON();
var features_SitiSHORESRBA1_16 = format_SitiSHORESRBA1_16.readFeatures(json_SitiSHORESRBA1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESRBA1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESRBA1_16.addFeatures(features_SitiSHORESRBA1_16);
var lyr_SitiSHORESRBA1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESRBA1_16, 
                style: style_SitiSHORESRBA1_16,
                popuplayertitle: 'Siti SHORES RBA1',
                interactive: true,
    title: 'Siti SHORES RBA1<br />\
    <img src="styles/legend/SitiSHORESRBA1_16_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESRBA1_16_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESRBA1_16_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESRBA1_16_3.png" /> Hoard<br />' });
var format_SitiSHORESMBA_17 = new ol.format.GeoJSON();
var features_SitiSHORESMBA_17 = format_SitiSHORESMBA_17.readFeatures(json_SitiSHORESMBA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESMBA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESMBA_17.addFeatures(features_SitiSHORESMBA_17);
var lyr_SitiSHORESMBA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESMBA_17, 
                style: style_SitiSHORESMBA_17,
                popuplayertitle: 'Siti SHORES MBA',
                interactive: true,
    title: 'Siti SHORES MBA<br />\
    <img src="styles/legend/SitiSHORESMBA_17_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA_17_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA_17_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESMBA_17_3.png" /> Hoard<br />' });
var format_SitiSHORESMBA3_18 = new ol.format.GeoJSON();
var features_SitiSHORESMBA3_18 = format_SitiSHORESMBA3_18.readFeatures(json_SitiSHORESMBA3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESMBA3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESMBA3_18.addFeatures(features_SitiSHORESMBA3_18);
var lyr_SitiSHORESMBA3_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESMBA3_18, 
                style: style_SitiSHORESMBA3_18,
                popuplayertitle: 'Siti SHORES MBA3',
                interactive: true,
    title: 'Siti SHORES MBA3<br />\
    <img src="styles/legend/SitiSHORESMBA3_18_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA3_18_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA3_18_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESMBA3_18_3.png" /> Hoard<br />' });
var format_SitiSHORESMBA2_19 = new ol.format.GeoJSON();
var features_SitiSHORESMBA2_19 = format_SitiSHORESMBA2_19.readFeatures(json_SitiSHORESMBA2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESMBA2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESMBA2_19.addFeatures(features_SitiSHORESMBA2_19);
var lyr_SitiSHORESMBA2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESMBA2_19, 
                style: style_SitiSHORESMBA2_19,
                popuplayertitle: 'Siti SHORES MBA2',
                interactive: true,
    title: 'Siti SHORES MBA2<br />\
    <img src="styles/legend/SitiSHORESMBA2_19_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA2_19_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA2_19_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESMBA2_19_3.png" /> Hoard<br />' });
var format_SitiSHORESMBA1_20 = new ol.format.GeoJSON();
var features_SitiSHORESMBA1_20 = format_SitiSHORESMBA1_20.readFeatures(json_SitiSHORESMBA1_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESMBA1_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESMBA1_20.addFeatures(features_SitiSHORESMBA1_20);
var lyr_SitiSHORESMBA1_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESMBA1_20, 
                style: style_SitiSHORESMBA1_20,
                popuplayertitle: 'Siti SHORES MBA1',
                interactive: true,
    title: 'Siti SHORES MBA1<br />\
    <img src="styles/legend/SitiSHORESMBA1_20_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA1_20_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESMBA1_20_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESMBA1_20_3.png" /> Hoard<br />' });
var format_SitiSHORESEBA2_21 = new ol.format.GeoJSON();
var features_SitiSHORESEBA2_21 = format_SitiSHORESEBA2_21.readFeatures(json_SitiSHORESEBA2_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORESEBA2_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORESEBA2_21.addFeatures(features_SitiSHORESEBA2_21);
var lyr_SitiSHORESEBA2_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORESEBA2_21, 
                style: style_SitiSHORESEBA2_21,
                popuplayertitle: 'Siti SHORES EBA2',
                interactive: true,
    title: 'Siti SHORES EBA2<br />\
    <img src="styles/legend/SitiSHORESEBA2_21_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORESEBA2_21_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORESEBA2_21_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORESEBA2_21_3.png" /> Hoard<br />' });
var format_SitiSHORES_22 = new ol.format.GeoJSON();
var features_SitiSHORES_22 = format_SitiSHORES_22.readFeatures(json_SitiSHORES_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiSHORES_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiSHORES_22.addFeatures(features_SitiSHORES_22);
var lyr_SitiSHORES_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiSHORES_22, 
                style: style_SitiSHORES_22,
                popuplayertitle: 'Siti SHORES',
                interactive: true,
    title: 'Siti SHORES<br />\
    <img src="styles/legend/SitiSHORES_22_0.png" /> Fortified Settlement<br />\
    <img src="styles/legend/SitiSHORES_22_1.png" /> Settlement<br />\
    <img src="styles/legend/SitiSHORES_22_2.png" /> Funerary<br />\
    <img src="styles/legend/SitiSHORES_22_3.png" /> Hoard<br />' });
var format_Area_ricerca_23 = new ol.format.GeoJSON();
var features_Area_ricerca_23 = format_Area_ricerca_23.readFeatures(json_Area_ricerca_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_ricerca_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_ricerca_23.addFeatures(features_Area_ricerca_23);
var lyr_Area_ricerca_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_ricerca_23, 
                style: style_Area_ricerca_23,
                popuplayertitle: 'Area_ricerca',
                interactive: false,
                title: '<img src="styles/legend/Area_ricerca_23.png" /> Area_ricerca'
            });
var group_Corsidacqua = new ol.layer.Group({
                                layers: [lyr_FVG_fiumi_2,lyr_VE_fiumi_3,lyr_VE_fiumi_4,lyr_TV_fiumi_5,],
                                fold: 'close',
                                title: 'Corsi d\'acqua'});

lyr_OpenStreetMap_0.setVisible(false);lyr_Googlehybrid_1.setVisible(true);lyr_FVG_fiumi_2.setVisible(true);lyr_VE_fiumi_3.setVisible(true);lyr_VE_fiumi_4.setVisible(true);lyr_TV_fiumi_5.setVisible(true);lyr_SitiSHORESEIA_6.setVisible(false);lyr_SitiSHORESEIA3_7.setVisible(false);lyr_SitiSHORESEIA2_8.setVisible(false);lyr_SitiSHORESEIA1_9.setVisible(false);lyr_SitiSHORESFBA_10.setVisible(false);lyr_SitiSHORESFBA3_11.setVisible(false);lyr_SitiSHORESFBA2_12.setVisible(false);lyr_SitiSHORESFBA1_13.setVisible(false);lyr_SitiSHORESRBA_14.setVisible(false);lyr_SitiSHORESRBA2_15.setVisible(false);lyr_SitiSHORESRBA1_16.setVisible(false);lyr_SitiSHORESMBA_17.setVisible(false);lyr_SitiSHORESMBA3_18.setVisible(false);lyr_SitiSHORESMBA2_19.setVisible(false);lyr_SitiSHORESMBA1_20.setVisible(false);lyr_SitiSHORESEBA2_21.setVisible(false);lyr_SitiSHORES_22.setVisible(true);lyr_Area_ricerca_23.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlehybrid_1,group_Corsidacqua,lyr_SitiSHORESEIA_6,lyr_SitiSHORESEIA3_7,lyr_SitiSHORESEIA2_8,lyr_SitiSHORESEIA1_9,lyr_SitiSHORESFBA_10,lyr_SitiSHORESFBA3_11,lyr_SitiSHORESFBA2_12,lyr_SitiSHORESFBA1_13,lyr_SitiSHORESRBA_14,lyr_SitiSHORESRBA2_15,lyr_SitiSHORESRBA1_16,lyr_SitiSHORESMBA_17,lyr_SitiSHORESMBA3_18,lyr_SitiSHORESMBA2_19,lyr_SitiSHORESMBA1_20,lyr_SitiSHORESEBA2_21,lyr_SitiSHORES_22,lyr_Area_ricerca_23];
lyr_FVG_fiumi_2.set('fieldAliases', {'CODICE_FVG': 'CODICE_FVG', 'NATURA': 'NATURA', 'NOME': 'NOME', 'TIPOLOGIA': 'TIPOLOGIA', 'CARATTERIS': 'CARATTERIS', 'NOME_CTR': 'NOME_CTR', 'NOME_RD': 'NOME_RD', 'NOME_FORES': 'NOME_FORES', 'NOME_CONSO': 'NOME_CONSO', 'NOME_1': 'NOME_1', 'NOME_2': 'NOME_2', 'NOME_3': 'NOME_3', 'CODICE_RD': 'CODICE_RD', 'CODICE_PT': 'CODICE_PT', 'CODICE_FOR': 'CODICE_FOR', 'ORDINE': 'ORDINE', 'NOTE': 'NOTE', 'CORSO_ACQU': 'CORSO_ACQU', });
lyr_VE_fiumi_3.set('fieldAliases', {'cod': 'cod', 'astvin': 'astvin', 'denom': 'denom', 'descriz': 'descriz', 'id1': 'id1', });
lyr_VE_fiumi_4.set('fieldAliases', {'cod': 'cod', 'astvin': 'astvin', 'denom': 'denom', 'descriz': 'descriz', 'id1': 'id1', });
lyr_TV_fiumi_5.set('fieldAliases', {'cod': 'cod', 'astvin': 'astvin', 'denom': 'denom', 'descriz': 'descriz', 'id1': 'id1', });
lyr_SitiSHORESEIA_6.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESEIA3_7.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESEIA2_8.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESEIA1_9.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESFBA_10.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESFBA3_11.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESFBA2_12.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESFBA1_13.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESRBA_14.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESRBA2_15.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESRBA1_16.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESMBA_17.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESMBA3_18.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESMBA2_19.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESMBA1_20.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORESEBA2_21.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_SitiSHORES_22.set('fieldAliases', {'id': 'id', 'Nome sito': 'Nome sito', 'fatto/da f': 'fatto/da f', 'Type': 'Type', 'EBA2': 'EBA2', 'MBA1': 'MBA1', 'MBA2': 'MBA2', 'MBA3': 'MBA3', 'RBA1': 'RBA1', 'RBA2': 'RBA2', 'FBA1': 'FBA1', 'FBA2': 'FBA2', 'FBA3': 'FBA3', 'EIA1': 'EIA1', 'EIA2': 'EIA2', 'EIA3': 'EIA3', 'Ab Chrono': 'Ab Chrono', 'Botanic an': 'Botanic an', 'Faunal an': 'Faunal an', 'Hum Rem an': 'Hum Rem an', 'Drillings': 'Drillings', 'Notes': 'Notes', 'Date': 'Date', 'Biblio': 'Biblio', 'MBA': 'MBA', 'RBA': 'RBA', 'FBA': 'FBA', 'EIA': 'EIA', 'Link': 'Link', 'ID_1': 'ID_1', });
lyr_Area_ricerca_23.set('fieldAliases', {'id': 'id', });
lyr_FVG_fiumi_2.set('fieldImages', {'CODICE_FVG': 'TextEdit', 'NATURA': 'TextEdit', 'NOME': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'CARATTERIS': 'TextEdit', 'NOME_CTR': 'TextEdit', 'NOME_RD': 'TextEdit', 'NOME_FORES': 'TextEdit', 'NOME_CONSO': 'TextEdit', 'NOME_1': 'TextEdit', 'NOME_2': 'TextEdit', 'NOME_3': 'TextEdit', 'CODICE_RD': 'TextEdit', 'CODICE_PT': 'TextEdit', 'CODICE_FOR': 'TextEdit', 'ORDINE': 'TextEdit', 'NOTE': 'TextEdit', 'CORSO_ACQU': 'TextEdit', });
lyr_VE_fiumi_3.set('fieldImages', {'cod': 'TextEdit', 'astvin': 'TextEdit', 'denom': 'TextEdit', 'descriz': 'TextEdit', 'id1': 'TextEdit', });
lyr_VE_fiumi_4.set('fieldImages', {'cod': 'TextEdit', 'astvin': 'TextEdit', 'denom': 'TextEdit', 'descriz': 'TextEdit', 'id1': 'TextEdit', });
lyr_TV_fiumi_5.set('fieldImages', {'cod': 'TextEdit', 'astvin': 'TextEdit', 'denom': 'TextEdit', 'descriz': 'TextEdit', 'id1': 'TextEdit', });
lyr_SitiSHORESEIA_6.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESEIA3_7.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESEIA2_8.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESEIA1_9.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESFBA_10.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESFBA3_11.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESFBA2_12.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESFBA1_13.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESRBA_14.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESRBA2_15.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESRBA1_16.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESMBA_17.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESMBA3_18.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESMBA2_19.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESMBA1_20.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORESEBA2_21.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SitiSHORES_22.set('fieldImages', {'id': 'TextEdit', 'Nome sito': 'TextEdit', 'fatto/da f': 'TextEdit', 'Type': 'TextEdit', 'EBA2': 'TextEdit', 'MBA1': 'TextEdit', 'MBA2': 'TextEdit', 'MBA3': 'TextEdit', 'RBA1': 'TextEdit', 'RBA2': 'TextEdit', 'FBA1': 'TextEdit', 'FBA2': 'TextEdit', 'FBA3': 'TextEdit', 'EIA1': 'TextEdit', 'EIA2': 'TextEdit', 'EIA3': 'TextEdit', 'Ab Chrono': 'TextEdit', 'Botanic an': 'TextEdit', 'Faunal an': 'TextEdit', 'Hum Rem an': 'TextEdit', 'Drillings': 'TextEdit', 'Notes': 'TextEdit', 'Date': 'TextEdit', 'Biblio': 'TextEdit', 'MBA': 'TextEdit', 'RBA': 'TextEdit', 'FBA': 'TextEdit', 'EIA': 'TextEdit', 'Link': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_Area_ricerca_23.set('fieldImages', {'id': 'TextEdit', });
lyr_FVG_fiumi_2.set('fieldLabels', {'CODICE_FVG': 'hidden field', 'NATURA': 'hidden field', 'NOME': 'inline label - visible with data', 'TIPOLOGIA': 'inline label - visible with data', 'CARATTERIS': 'hidden field', 'NOME_CTR': 'hidden field', 'NOME_RD': 'hidden field', 'NOME_FORES': 'hidden field', 'NOME_CONSO': 'hidden field', 'NOME_1': 'hidden field', 'NOME_2': 'hidden field', 'NOME_3': 'hidden field', 'CODICE_RD': 'hidden field', 'CODICE_PT': 'hidden field', 'CODICE_FOR': 'hidden field', 'ORDINE': 'hidden field', 'NOTE': 'hidden field', 'CORSO_ACQU': 'hidden field', });
lyr_VE_fiumi_3.set('fieldLabels', {'cod': 'hidden field', 'astvin': 'hidden field', 'denom': 'inline label - visible with data', 'descriz': 'hidden field', 'id1': 'hidden field', });
lyr_VE_fiumi_4.set('fieldLabels', {'cod': 'hidden field', 'astvin': 'hidden field', 'denom': 'inline label - visible with data', 'descriz': 'hidden field', 'id1': 'hidden field', });
lyr_TV_fiumi_5.set('fieldLabels', {'cod': 'hidden field', 'astvin': 'hidden field', 'denom': 'inline label - visible with data', 'descriz': 'hidden field', 'id1': 'hidden field', });
lyr_SitiSHORESEIA_6.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESEIA3_7.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESEIA2_8.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESEIA1_9.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESFBA_10.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESFBA3_11.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESFBA2_12.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESFBA1_13.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESRBA_14.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESRBA2_15.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESRBA1_16.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESMBA_17.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESMBA3_18.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESMBA2_19.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESMBA1_20.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'inline label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORESEBA2_21.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_SitiSHORES_22.set('fieldLabels', {'id': 'hidden field', 'Nome sito': 'header label - visible with data', 'fatto/da f': 'hidden field', 'Type': 'inline label - visible with data', 'EBA2': 'hidden field', 'MBA1': 'hidden field', 'MBA2': 'hidden field', 'MBA3': 'hidden field', 'RBA1': 'hidden field', 'RBA2': 'hidden field', 'FBA1': 'hidden field', 'FBA2': 'hidden field', 'FBA3': 'hidden field', 'EIA1': 'hidden field', 'EIA2': 'hidden field', 'EIA3': 'hidden field', 'Ab Chrono': 'inline label - visible with data', 'Botanic an': 'inline label - visible with data', 'Faunal an': 'inline label - visible with data', 'Hum Rem an': 'inline label - visible with data', 'Drillings': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Biblio': 'hidden field', 'MBA': 'inline label - visible with data', 'RBA': 'inline label - visible with data', 'FBA': 'inline label - visible with data', 'EIA': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'ID_1': 'hidden field', });
lyr_Area_ricerca_23.set('fieldLabels', {'id': 'no label', });
lyr_Area_ricerca_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});