const error = '<p style="color:red;">Please enter your input.</p>';
function func(convertedValue,select1,select2,input1,) { 
    // Creating object to format Number 
    let amount = 6000000; 
    // Creating object to format Number 
    let k = new Intl.NumberFormat("en-US", { style: "decimal" }); 
    // Formatting Number 
    convertedValue = k.format(convertedValue);
    let output = `<p><strong style="color:#a90000; font-size:16px;">${input1} ${select1}</strong> is equivalent to <strong style="color:gold;font-size:16px;">${convertedValue}</strong> ${select2}.</p>`; 
    return output
  } 

function convertLength() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const resultInp = document.getElementById("result1");
    const selectedUnit2 = document.getElementById('unitSelect2').value;
    const selectedUnit1 = document.getElementById('unitSelect1').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(input1)) {
        resultDiv.innerHTML = error
        resultInp.value = ""
        return;
    }
    // Conversion factors
    const conversions = {
                kilometers:{
                        miles: input1 * 0.621371,
                        yards: input1 * 1093.61,
                        feet: input1 * 3280.84,
                        inches:input1 * 39370.1,
                        meters: input1 * 1000,
                        centimeters: input1 * 100000,
                        millimeters: input1 * 1000000
                },miles:{ 
                        yards: input1 *1760,
                        feet:input1*5280,
                        inches:input1*63360,
                        kilometers:input1*1.60934,
                        meters:input1*1609.34,
                        centimeters:input1*160934,
                        millimeters:input1*1609344
                },yards:{
                        miles: input1*0.000568182,
                        feet: input1*3,
                        inches:input1*36,
                        kilometers:0.0009144,
                        meters:0.9144,
                        centimeters:91.44,
                        millimeters:914.4
                },feet:{
                        miles:input1*0.000189394,
                        yards:input1*0.333333,
                        inches:input1*12,
                        kilometers:input1*0.0003048,
                        meters:input1*0.3048,
                        centimeters:input1*30.48,
                        millimeters:input1*304.8
                },inches:{
                        miles:input1*0.0000157828,
                        yards:input1*0.0277778,
                        feet:input1*0.0833333,
                        kilometers:input1*0.0000254,
                        meters:input1*0.0254,
                        centimeters:input1*2.54,
                        millimeters:input1*25.4
                },meters:{
                        miles:input1*0.000621371,
                        yards:input1*1.09361,
                        feet:input1*3.28084,
                        inches:input1*39.3701,
                        kilometers:input1*0.001,
                        centimeters:input1*100,
                        millimeters:input1*1000
                },centimeters:{
                        miles:input1*0.00000621371,
                        yards:input1*0.0109361,
                        feet:input1*0.0328084,
                        inches:input1*0.393701,
                        kilometers:input1*0.00001,
                        meters:input1*0.01,
                        millimeters:input1*10
                },millimeters:{
                        miles:input1*0.000000621371,
                        yards:input1*0.00109361,
                        feets:input1*0.00328084,
                        inches:input1*0.0393701,
                        kilometers:input1*0.000001,
                        meters:input1*0.001,
                        centimeters:input1*0.1
                }
    }
    let convertedValue = conversions[selectedUnit1][selectedUnit2];
    if (selectedUnit1===selectedUnit2){
        convertedValue=input1
    }
    // Display the results
    resultDiv.innerHTML = func(convertedValue,selectedUnit1,selectedUnit2,input1)
    resultInp.value = convertedValue.toFixed(8);
};

function convertWeight (){
    const input1 = parseFloat(document.getElementById('inputw').value);
    const resultInp = document.getElementById("resultWeight");
    const weight1 = document.getElementById('weight1').value;
    const weight2 = document.getElementById('weight2').value;
    const resultDiv = document.getElementById('resultWeight2');
    if (isNaN(input1)) {
        resultDiv.innerHTML = error;
        resultInp.value = ""
        return;
    }
    // Conversion factors
    const conversions = {
                kilogram:{
                        gram: input1 * 1000,
                        milligram: input1 * 1000000,
                        metricTon: input1 * 0.001,
                        pound:input1 * 2.20462,
                        ounce: input1 * 35.27396,
                        kiloton: input1 *0.000001 ,
                        megaton: input1 * 0.000000001
                },gram:{ 
                        kilogram: input1 *0.001,
                        milligram:input1*1000,
                        metricTon:input1*0.000001,
                        pound:input1*0.00220462,
                        ounce:input1*0.03527396,
                        kiloton:input1*0.000000001,
                        megaton:input1*0.000000000001
                },milligram:{
                        kilogram: input1*0.000001,
                        gram: input1*0.001,
                        metricTon:input1*0.000000001,
                        pound:0.00000220462,
                        ounce:0.00003527396,
                        kiloton:0.000000000001,
                        megaton:0.000000000000001
                },metricTon:{
                        kilogram:input1*1000,
                        gram:input1*1000000,
                        milligram:input1*1000000000,
                        pound:input1*2204.62262,
                        ounce:input1*35273.9619,
                        kiloton:input1*0.001,
                        megaton:input1*0.000001
                },pound:{
                        kilogram:input1*0.45359237,
                        gram:input1*453.59237,
                        milligram:input1*453592.37,
                        metricTon:input1*0.00045359237,
                        ounce:input1*16,
                        kiloton:input1*0.00000045359237,
                        megaton:input1*0.00000000045359237
                },ounce:{
                        kilogram:input1*0.02834952,
                        gram:input1*28.34952,
                        milligram:input1*28349.52,
                        metricTon:input1*0.00002834952,
                        pound:input1*0.0625,
                        kiloton:input1*0.00000002834952,
                        megaton:input1*0.00000000002834952
                },kiloton:{
                        kilogram:input1*1000000,
                        gram:input1*1000000000,
                        milligram:input1*1000000000000,
                        metricTon:input1*1000,
                        pound:input1*2204620,
                        ounce:input1*35273960,
                        megaton:input1*0.001
                }, megaton:{
                        kilogram:input1*1000000000,
                        gram:input1*1000000000000,
                        milligram:input1*1000000000000000,
                        metricTon:input1*1000000,
                        pound:input1*2204620000,
                        ounce:input1*35273960000,
                        kiloton:input1*1000
                }
    }
    
    let convertedValue = conversions[weight1][weight2];
    if (weight1===weight2){
        convertedValue=input1
    }
    // Display the results
    resultDiv.innerHTML = func(convertedValue,weight1,weight2,input1);
    resultInp.value = convertedValue.toFixed(4);
};

function convertArea() {
        const input1 = parseFloat(document.getElementById('inputa').value);
        const resultInp = document.getElementById("resultArea");
        const area1 = document.getElementById('area1').value;
        const area2 = document.getElementById('area2').value;
        const resultDiv = document.getElementById('resultArea2');
    
        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                    squarekilometer:{
                        hectare: 100,
                        acre: 247.105381,
                        cent : 10000,
                        squaremile:  0.386102,
                        squareyard: 1.00E+06,
                        squarefeet:  1.55E+09,
                        squareinch: 39370.1,
                        squaremeter:  1.00E+06,
                        squarecentimeter: 1.00E+10,
                        squaremillimeter:1.00E+12
                    },
                    hectare:{
                        "squarekilometer": 1.00E-02,
                        "acre": "2.47E+01",
                        "cent": "100",
                        "squaremile": "3.86E-03",
                        "squareyard": "1.20E+04",
                        "squarefeet": "1.08E+05",
                        "squareinch": "1.55E+06",
                        "squaremeter": "1.00E+04",
                        "squarecentimeter": "1.00E+06",
                        "squaremillimeter": "1.00E+08"
                    },
                    acre:
                    {
                        "squarekilometer": "4.05E-03",
                        "hectare": "0.4046856",
                        "cent": "40.46856",
                        "squaremile": "3.11E-04",
                        "squareyard": "4,840.03",
                        "squarefeet": "43,560",
                        "squareinch": "6.27E+05",
                        "squaremeter": "4,046.86",
                        "squarecentimeter": "4.05E+06",
                        "squaremillimeter": "4.05E+09"
                    },
                    cent: {
                        "squarekilometer": "1.00E-04",
                        "hectare": "0.01",
                        "acre": "2.47E-03",
                        "squaremile": "3.86E-05",
                        "squareyard": "1.20E+02",
                        "squarefeet": "1.08E+03",
                        "squareinch": "1.55E+04",
                        "squaremeter": "1.00E+02",
                        "squarecentimeter": "1.00E+04",
                        "squaremillimeter": "1.00E+06"
                    },
                    squaremile:
                    {
                        "squarekilometer": "2.58999",
                        "hectare": "258.999",
                        "acre": "640",
                        "cent": "64,000",
                        "squareyard": "3.10E+06",
                        "squarefeet": "2.79E+07",
                        "squareinch": "4.01E+08",
                        "squaremeter": "2.59E+06",
                        "squarecentimeter": "2.59E+08",
                        "squaremillimeter": "2.59E+10"
                    }
                    ,squareyard: {
                        "squarekilometer": "9.29E-07",
                        "hectare": "9.29E-05",
                        "acre": "2.30E-04",
                        "cent": "22.957",
                        "squaremile": "3.86E-07",
                        "squarefeet": "9",
                        "squareinch": "1296",
                        "squaremeter": "0.836127",
                        "squarecentimeter": "8.36E+03",
                        "squaremillimeter": "8.36E+06"
                    },squarefeet:{
                        "squarekilometer": "9.29E-08",
                        "hectare": "9.29E-06",
                        "acre": "2.30E-05",
                        "cent": "2.2957",
                        "squaremile": "3.86E-08",
                        "squareyard": "0.111111",
                        "squareinch": "144",
                        "squaremeter": "0.092903",
                        "squarecentimeter": "929.03",
                        "squaremillimeter": "9.29E+04"
                    },squareinch:{
                        "squarekilometer": "6.45E-10",
                        "hectare": "6.45E-08",
                        "acre": "1.59E-07",
                        "cent": "1.59E-05",
                        "squaremile": "2.49E-09",
                        "squareyard": "0.000771",
                        "squarefeet": "0.006944",
                        "squaremeter": "6.45E-04",
                        "squarecentimeter": "6.45E+02",
                        "squaremillimeter": "645.16"
                    },squaremeter:{
                        "squarekilometer": "1.00E-06",
                        "hectare": "1.00E-04",
                        "acre": "2.47E-04",
                        "cent": "100",
                        "squaremile": "3.86E-07",
                        "squareyard": "1.19598",
                        "squarefeet": "10.7639",
                        "squareinch": "1550",
                        "squarecentimeter": "1.00E+04",
                        "squaremillimeter": "1.00E+06"
                    },squarecentimeter: {
                        "squarekilometer": "1.00E-08",
                        "hectare": "1.00E-06",
                        "acre": "2.47E-07",
                        "cent": "0.01",
                        "squaremile": "3.86E-09",
                        "squareyard": "1.20E-02",
                        "squarefeet": "1.08E-01",
                        "squaremeter": "1.00E-04",
                        "squareinch": "0.155",
                        "squaremillimeter": "100"
                    },squaremillimeter:{
                        "squarekilometer": "1.00E-12",
                        "hectare": "1.00E-10",
                        "acre": "2.47E-11",
                        "cent": "1.00E-08",
                        "squaremile": "3.86E-13",
                        "squareyard": "1.20E-05",
                        "squarefeet": "1.08E-04",
                        "squaremeter": "1.00E-06",
                        "squarecentimeter": "0.01",
                        "squareinch": "0.00155"
                    }
        }
        let convertedValue = input1*conversions[area1][area2];
        if (area1===area2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,area1,area2,input1)
        resultInp.value = convertedValue.toFixed(8);
};

function convertVolume(){
        const input1 = parseFloat(document.getElementById('inputv').value);
        const resultInp = document.getElementById("resultVolume");
        const volume1 = document.getElementById('volume1').value;
        const volume2 = document.getElementById('volume2').value;
        const resultDiv = document.getElementById('resultVolume2');
        
        if (isNaN(input1)) {
            resultDiv.innerHTML = error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                    cubicmeter:{
                        "cubicmeter": "1",
                        "cubiccentimeter": "1.00E+06",
                        "cubicmillimeter": "1.00E+09",
                        "cubicfeet": "35.3147",
                        "cubicinch": "6.10E+04",
                        "cubicmile": "2.40E-10",
                        "cubicyard": "1.30795",
                        "cubickilometer": "1.00E-09"
                    },cubiccentimeter:{
                        "cubicmeter": "1.00E-06",
                        "cubiccentimeter": "1",
                        "cubicmillimeter": "1.00E+03",
                        "cubicfeet": "3.53E-05",
                        "cubicinch": "0.0610237",
                        "cubicmile": "2.40E-16",
                        "cubicyard": "1.31E-06",
                        "cubickilometer": "1.00E-15"
                    },cubicmillimeter:{
                        "cubicmeter": "1.00E-09",
                        "cubiccentimeter": "0.001",
                        "cubicmillimeter": "1",
                        "cubicfeet": "3.53E-08",
                        "cubicinch": "6.10E-05",
                        "cubicmile": "2.40E-19",
                        "cubicyard": "1.31E-09",
                        "cubickilometer": "1.00E-18"
                    },cubicfeet:{
                        "cubicmeter": "0.0283168",
                        "cubiccentimeter": "28316.80",
                        "cubicmillimeter": "2.83E+07",
                        "cubicfeet": "1",
                        "cubicinch": "1.73E+03",
                        "cubicmile": "6.79E-12",
                        "cubicyard": "0.037037",
                        "cubickilometer": "2.83E-11"
                    },cubicinch:{
                        "cubicmeter": "1.64E-05",
                        "cubiccentimeter": "16.3871",
                        "cubicmillimeter": "16387.10",
                        "cubicfeet": "5.79E-04",
                        "cubicinch": "1",
                        "cubicmile": "3.93E-14",
                        "cubicyard": "2.14E-05",
                        "cubickilometer": "1.64E-14"
                    },cubicmile:{
                        "cubicmeter": "4.17E+09",
                        "cubiccentimeter": "4.17E+15",
                        "cubicmillimeter": "4.17E+18",
                        "cubicfeet": "1.47E+11",
                        "cubicinch": "2.54E+13",
                        "cubicmile": "1",
                        "cubicyard": "5.45E+09",
                        "cubickilometer": "4.16818"
                    },cubicyard: {
                        "cubicmeter": "0.764555",
                        "cubiccentimeter": "7.65E+05",
                        "cubicmillimeter": "7.65E+08",
                        "cubicfeet": "27",
                        "cubicinch": "46,656",
                        "cubicmile": "1.83E-10",
                        "cubicyard": "1",
                        "cubickilometer": "7.65E-10"
                    }, cubickilometer: {
                        "cubicmeter": "1.00E+09",
                        "cubiccentimeter": "1.00E+15",
                        "cubicmillimeter": "1.00E+18",
                        "cubicfeet": "3.53E+10",
                        "cubicinch": "6.10E+13",
                        "cubicmile": "0.239913",
                        "cubicyard": "1.31E+09",
                        "cubickilometer": "1"
                    }
        }
        let convertedValue =input1* conversions[volume1][volume2];
        if (volume1===volume2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,volume1,volume2,input1)
        resultInp.value = convertedValue.toFixed(4);
};

function convertEnergy(){
        const input1 = parseFloat(document.getElementById('inpute').value);
        const resultInp = document.getElementById("resultEnergy");
        const energy1 = document.getElementById('energy1').value;
        const energy2 = document.getElementById('energy2').value;
        const resultDiv = document.getElementById('resultEnergy2');
        
        if (isNaN(input1)) {
            resultDiv.innerHTML = error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                    joule:{
                        "calorie": "0.239005736",
                        "kilocalorie": "2.39E-04",
                        "kilowatthour": "2.78E-07",
                        "electronvolt": "6.24E+18",
                        "btu": "9.48E-04",
                        "erg": "1.00E+07",
                        "therm": "9.48E-09",
                        "footpound": "0.737562149",
                        "tnt": "2.39E-10",
                        "hartree": "2.29E+17"
                    },calorie:{
                        "joule": "4.184",
                        "kilocalorie": "0.001",
                        "kilowatthour": "1.16E-06",
                        "electronvolt": "2.61E+19",
                        "btu": "3.97E-03",
                        "erg": "4.18E+07",
                        "therm": "3.97E-08",
                        "footpound": "3.087232",
                        "tnt": "1.00E-07",
                        "hartree": "9.58E+16"
                    }
                ,kilocalorie:{
                        "joule": "4184",
                        "calorie": "1000",
                        "kilowatthour": "0.001162222",
                        "electronvolt": "2.61E+22",
                        "btu": "3.96566748",
                        "erg": "4.18E+10",
                        "therm": "3.97E-05",
                        "footpound": "3087.232",
                        "tnt": "0.001",
                        "hartree": "9.58E+19"
                    },
                kilowatthour:{
                        "joule": "3.60e+06",
                        "calorie": "8.60e+05",
                        "kilocalorie": "859.845228",
                        "electronvolt": "2.25e+22",
                        "btu": "3412.14163",
                        "erg": "3.60e+13",
                        "therm": "3.41e-02",
                        "footpound": "2.66e+06",
                        "tnt": "0.859845228",
                        "hartree": "2.29e+24"
                    },
                electronvolt:{
                        "joule": "3.60E+06",
                        "calorie": "3.83E-20",
                        "kilocalorie": "3.83E-23",
                        "kilowatthour": "4.45E-26",
                        "btu": "1.52E-22",
                        "erg": "1.60E-12",
                        "therm": "1.52E-27",
                        "footpound": "1.18E-19",
                        "tnt": "3.83E-29",
                        "hartree": "4.36E-01"
                    },
                btu:{
                        "joule": "1055.06",
                        "calorie": "252.1644",
                        "kilocalorie": "0.2521644",
                        "kilowatthour": "2.93E-04",
                        "electronvolt": "6.59E+21",
                        "erg": "1.06E+10",
                        "therm": "1.00E-05",
                        "footpound": "778.169",
                        "tnt": "2.52E-04",
                        "hartree": "2.29E+20"
                    },
                erg: {
                        "joule": "1.00E-07",
                        "calorie": "2.39E-08",
                        "kilocalorie": "2.39E-11",
                        "kilowatthour": "2.78E-14",
                        "electronvolt": "6.24E+11",
                        "btu": "9.48E-11",
                        "therm": "9.48E-17",
                        "footpound": "7.38E-08",
                        "tnt": "2.39E-15",
                        "hartree": "2.29E+10"
                    },
                therm:{
                        "joule": "1.06E+08",
                        "calorie": "2.52E+07",
                        "kilocalorie": "2.52E+04",
                        "kilowatthour": "29.3001",
                        "electronvolt": "6.59E+26",
                        "btu": "1.00E+05",
                        "erg": "1.06E+15",
                        "footpound": "7.78E+07",
                        "tnt": "2.52",
                        "hartree": "2.29E+25"
                    },
                footpound:{
                        "joule": "1.35581795",
                        "calorie": "0.323831553",
                        "kilocalorie": "3.24E-04",
                        "kilowatthour": "3.77E-04",
                        "electronvolt": "8.46E+18",
                        "btu": "1.29E-03",
                        "erg": "1.36E+07",
                        "therm": "1.36E-08",
                        "tnt": "3.24E-10",
                        "hartree": "3.04E+16"
                    },
                tnt:{
                        "joule": "4.18E+09",
                        "calorie": "1.00E+09",
                        "kilocalorie": "1.00E+06",
                        "kilowatthour": "1.16E+03",
                        "electronvolt": "2.61E+28",
                        "btu": "3.97E+06",
                        "erg": "4.18E+16",
                        "footpound": "3.97E+01",
                        "pound": "3.09E+09",
                        "hartree": "9.58E+25"
                    },
                hartree:{
                        "joule": "4.36E-18",
                        "calorie": "1.04E-18",
                        "kilocalorie": "1.04E-21",
                        "kilowatthour": "1.21E-24",
                        "electronvolt": "27.21138625",
                        "btu": "4.14E-18",
                        "erg": "4.36E-11",
                        "footpound": "4.14E-23",
                        "tnt": "3.24E-18",
                        "hartree": "1.04E-25"
                    }
                
        }
        let convertedValue =input1* conversions[energy1][energy2];
        if (energy1===energy2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,energy1,energy2,input1);
        resultInp.value = convertedValue.toFixed(4);
};

function convertSpeed(){
        const input1 = parseFloat(document.getElementById('inputs').value);
        const resultInp = document.getElementById("resultSpeed");
        const speed1 = document.getElementById('speed1').value;
        const speed2 = document.getElementById('speed2').value;
        const resultDiv = document.getElementById('resultSpeed2');

        if (isNaN(input1)) {
            resultDiv.innerHTML = error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "kilometer per hour": {
                        "meter per second": "0.277777778",
                        "mile per hour": "0.621371192",
                        "knot": "0.539956803",
                        "foot per second": "0.911344415",
                        "mach": "0.000816298",
                        "centimeter per second": "27.7777778",
                        "inch per second": "10.93613298",
                        "light speed": "9.27e-10"
                    },
                "meter per second":{
                        "kilometer per hour": "3.6",
                        "mile per hour": "2.23693629",
                        "knot": "1.94384449",
                        "foot per second": "3.2808399",
                        "mach": "0.002938583",
                        "centimeter per second": "100",
                        "inch per second": "39.3700787",
                        "light speed": "3.34e-09"
                    },
                "mile per hour":{
                        "meter per second": "0.44704",
                        "kilometer per hour": "1.609344",
                        "knot": "0.868976242",
                        "foot per second": "1.46666667",
                        "mach": "0.00131607",
                        "centimeter per second": "44.704",
                        "inch per second": "17.6",
                        "light speed": "1.49e-09"
                    },
                'knot':{
                        "meter per second": "0.514444444",
                        "kilometer per hour": "1.852",
                        "mile per hour": "1.15077945",
                        "foot per second": "1.68780986",
                        "mach": "0.001515152",
                        "centimeter per second": "51.4444444",
                        "inch per second": "20.2537183",
                        "light speed": "1.72e-09"
                    },
                "foot per second":{
                        "meter per second": "0.3048",
                        "kilometer per hour": "1.09728",
                        "mile per hour": "0.681818182",
                        "knot": "0.592483801",
                        "mach": "0.000893364",
                        "centimeter per second": "30.48",
                        "inch per second": "12",
                        "light speed": "1.02e-09"
                    },
                "mach":{
                        "meter per second": "340.29",
                        "kilometer per hour": "1225.044",
                        "mile per hour": "761.207",
                        "knot": "661.470842",
                        "foot per second": "1116.47",
                        "centimeter per second": "34029",
                        "inch per second": "13397.6378",
                        "light speed": "1.13e-06"
                    },
                "centimeter per second": {
                        "meter per second": "0.01",
                        "kilometer per hour": "0.036",
                        "mile per hour": "0.022369363",
                        "knot": "0.019438445",
                        "foot per second": "0.032808399",
                        "mach": "2.94e-05",
                        "inch per second": "0.393700787",
                        "light speed": "3.34e-11"
                    },
                "inch per second":{
                        "meter per second": "0.0254",
                        "kilometer per hour": "0.09144",
                        "mile per hour": "0.056818182",
                        "knot": "0.049373652",
                        "foot per second": "0.083333333",
                        "mach": "7.43e-05",
                        "centimeter per second": "2.54",
                        "light speed": "8.47e-11"
                    },
                "light speed":{
                        "meter per second": "299792458",
                        "kilometer per hour": "1.08e+09",
                        "mile per hour": "6.71e+08",
                        "knot": "5.83e+08",
                        "foot per second": "9.84e+08",
                        "mach": "874030.489",
                        "centimeter per second": "3.00e+10",
                        "inch per second": "1.18e+10"
                }
        }
        console.log(speed1,speed2)

        let convertedValue =input1* conversions[speed1][speed2] ;
        if (speed1===speed2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML =func(convertedValue,speed1,speed2,input1);
        resultInp.value = convertedValue;
};

function convertPower(){
        const input1 = parseFloat(document.getElementById('inputpower').value);
        const resultInp = document.getElementById("resultPower");
        const power1 = document.getElementById('power1').value;
        const power2 = document.getElementById('power2').value;
        const resultDiv = document.getElementById('resultPower2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "watt": {
                        "kilowatt": "0.001",
                        "megawatt": "1.00e-06",
                        "gigawatt": "1.00e-09",
                        "horsepower (mechanical)": "0.001341022",
                        "horsepower (metric)": "0.001359622",
                        "kilocalories per hour": "0.86042065",
                        "british thermal units per hour": "3.41214163",
                        "erg per second": "1.00e+07",
                        "ton of refrigeration": "2.84e-04",
                        "decibel-milliwatts": "30"
                    },
                "kilowatt":{
                        "watt": "1000",
                        "megawatt": "0.001",
                        "gigawatt": "1.00e-06",
                        "horsepower (mechanical)": "1.34102209",
                        "horsepower (metric)": "1.35962162",
                        "kilocalories per hour": "860.42065",
                        "british thermal units per hour": "3412.14163",
                        "erg per second": "1.00e+10",
                        "ton of refrigeration": "0.284345136",
                        "decibel-milliwatts": "60"
                    },
                "megawatt":{
                        "watt": "1.00e+06",
                        "kilowatt": "1000",
                        "gigawatt": "0.001",
                        "horsepower (mechanical)": "1341.02209",
                        "horsepower (metric)": "1359.62162",
                        "kilocalories per hour": "860420.65",
                        "british thermal units per hour": "3.41e+06",
                        "erg per second": "1.00e+13",
                        "ton of refrigeration": "284.345136",
                        "decibel-milliwatts": "90"
                    },
                'gigawatt':{
                        "watt": "1.00e+09",
                        "kilowatt": "1.00e+06",
                        "megawatt": "1000",
                        "horsepower (mechanical)": "1.34e+06",
                        "horsepower (metric)": "1.36e+06",
                        "kilocalories per hour": "8.60e+08",
                        "british thermal units per hour": "3.41e+09",
                        "erg per second": "1.00e+16",
                        "ton of refrigeration": "2.84e+05",
                        "decibel-milliwatts": "120"
                    },
                "horsepower (mechanical)":{
                        "watt": "745.699872",
                        "kilowatt": "0.745699872",
                        "megawatt": "7.46e-04",
                        "gigawatt": "7.46e-07",
                        "horsepower (metric)": "1.01386998",
                        "kilocalories per hour": "641.18649",
                        "british thermal units per hour": "2544.43358",
                        "erg per second": "7.46e+09",
                        "ton of refrigeration": "0.21203444",
                        "decibel-milliwatts": "58.7266"
                    },
                "horsepower (metric)":{
                        "watt": "735.49875",
                        "kilowatt": "0.73549875",
                        "megawatt": "7.35e-04",
                        "gigawatt": "7.35e-07",
                        "horsepower (mechanical)": "0.986320071",
                        "kilocalories per hour": "632.41565",
                        "british thermal units per hour": "2490.01568",
                        "erg per second": "7.35e+09",
                        "ton of refrigeration": "0.20894932",
                        "decibel-milliwatts": "58.6684"
                    },
                "kilocalories per hour": {
                        "watt": "1.163",
                        "kilowatt": "0.001163",
                        "megawatt": "1.16e-06",
                        "gigawatt": "1.16e-09",
                        "horsepower (mechanical)": "0.001558",
                        "horsepower (metric)": "0.001587",
                        "british thermal units per hour": "3.968",
                        "erg per second": "1.16e+07",
                        "ton of refrigeration": "2.94e-04",
                        "decibel-milliwatts": "37.443"
                    },
                "british thermal units per hour":{
                        "watt": "0.29307107",
                        "kilowatt": "2.93e-04",
                        "megawatt": "2.93e-07",
                        "gigawatt": "2.93e-10",
                        "horsepower (mechanical)": "0.000419884",
                        "horsepower (metric)": "0.000428735",
                        "kilocalories per hour": "0.25104234",
                        "erg per second": "2.93e+05",
                        "ton of refrigeration": "7.44e-05",
                        "decibel-milliwatts": "23.145"
                    },
                "erg per second":{
                        "watt": "1.00e-07",
                        "kilowatt": "1.00e-10",
                        "megawatt": "1.00e-13",
                        "gigawatt": "1.00e-16",
                        "horsepower (mechanical)": "1.34e-10",
                        "horsepower (metric)": "1.36e-10",
                        "kilocalories per hour": "1.16e-06",
                        "british thermal units per hour": "2.93e-05",
                        "ton of refrigeration": "2.84e-10",
                        "decibel-milliwatts": "0.0000034"
                    },
                "ton of refrigeration":{
                        "watt": "3516.853",
                        "kilowatt": "3.516853",
                        "megawatt": "3.52e-03",
                        "gigawatt": "3.52e-06",
                        "horsepower (mechanical)": "4.716681",
                        "horsepower (metric)": "4.745616",
                        "kilocalories per hour": "3500.444",
                        "british thermal units per hour": "12000",
                        "erg per second": "3.52e+09",
                        "decibel-milliwatts": "73.7384"
                    },
                "decibel-milliwatts":{
                        "watt": "1.00e-03",
                        "kilowatt": "1.00e-06",
                        "megawatt": "1.00e-09",
                        "gigawatt": "1.00e-12",
                        "horsepower (mechanical)": "1.34e-06",
                        "horsepower (metric)": "1.36e-06",
                        "kilocalories per hour": "0.02702029",
                        "british thermal units per hour": "0.0930978",
                        "erg per second": "2.84e+03",
                        "ton of refrigeration": "0.0001464"
                    }
        }
        let convertedValue =input1* conversions[power1][power2] ;
        if (power1===power2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,power1,power2,input1);
        resultInp.value = convertedValue;
};

function convertPressure(){
        const input1 = parseFloat(document.getElementById('inputpressure').value);
        const resultInp = document.getElementById("resultPressure");
        const pressure1 = document.getElementById('pressure1').value;
        const pressure2 = document.getElementById('pressure2').value;
        const resultDiv = document.getElementById('resultPressure2');

        if (isNaN(input1)) {
            resultDiv.innerHTML = error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Pascal": {
                        "Kilopascal": "0.001",
                        "Megapascal": "1.00E-06",
                        "Bar": "1.00E-05",
                        "Millibar": "0.01",
                        "Atmosphere": "9.87E-06",
                        "Torr": "0.007500617",
                        "Pounds per square inch": "0.000145038",
                        "Inches of Mercury": "2.95E-05",
                        "Millimeters of Mercury": "0.007500617",
                        "Newton per square meter": "1",
                        "ton of refrigeration": "0.0001464"
                    },
                "Kilopascal":{
                        "Pascal": "1000",
                        "Megapascal": "0.001",
                        "Bar": "0.01",
                        "Millibar": "10",
                        "Atmosphere": "0.009869233",
                        "Torr": "7.50061683",
                        "Pounds per square inch": "0.14503774",
                        "Inches of Mercury": "0.295300144",
                        "Millimeters of Mercury": "7.50061683",
                        "Newton per square meter": "1000"
                    },
                "Megapascal":{
                        "Pascal": "1.00E+06",
                        "Kilopascal": "1000",
                        "Bar": "10",
                        "Millibar": "1.00E+04",
                        "Atmosphere": "9.86923267",
                        "Torr": "7500.61683",
                        "Pounds per square inch": "145.03774",
                        "Inches of Mercury": "295.300144",
                        "Millimeters of Mercury": "7500.61683",
                        "Newton per square meter": "1.00E+06"
                    },
                'Bar':{
                        "Pascal": "1.00E+05",
                        "Kilopascal": "100",
                        "Megapascal": "0.1",
                        "Millibar": "1000",
                        "Atmosphere": "0.986923267",
                        "Torr": "750.061683",
                        "Pounds per square inch": "14.503774",
                        "Inches of Mercury": "29.5300144",
                        "Millimeters of Mercury": "750.061683",
                        "Newton per square meter": "1.00E+05"
                    },
                "Millibar":{
                        "Pascal": "100",
                        "Kilopascal": "0.1",
                        "Megapascal": "1.00E-04",
                        "Bar": "0.001",
                        "Atmosphere": "9.87E-04",
                        "Torr": "0.750061683",
                        "Pounds per square inch": "0.014503774",
                        "Inches of Mercury": "0.029530014",
                        "Millimeters of Mercury": "0.750061683",
                        "Newton per square meter": "100"    
                    },
                "Atmosphere":{
                        "Pascal": "101325",
                        "Kilopascal": "101.325",
                        "Megapascal": "0.101325",
                        "Bar": "1.01325",
                        "Millibar": "1013.25",
                        "Torr": "760",
                        "Pounds per square inch": "14.6959",
                        "Inches of Mercury": "29.9213",
                        "Millimeters of Mercury": "760",
                        "Newton per square meter": "101325"
                    },
                "Torr": {
                        "Pascal": "133.322",
                        "Kilopascal": "0.133322",
                        "Megapascal": "1.33E-04",
                        "Bar": "0.00133322",
                        "Millibar": "1.33322",
                        "Atmosphere": "0.00131579",
                        "Pounds per square inch": "0.0193368",
                        "Inches of Mercury": "0.0393701",
                        "Millimeters of Mercury": "1",
                        "Newton per square meter": "133.322"
                    },
                "Pounds per square inch":{
                        "Pascal": "6894.76",
                        "Kilopascal": "6.89476",
                        "Megapascal": "0.00689476",
                        "Bar": "0.0689476",
                        "Millibar": "68.9476",
                        "Atmosphere": "0.0680459",
                        "Torr": "51.7149",
                        "Inches of Mercury": "2.03602",
                        "Millimeters of Mercury": "51.7149",
                        "Newton per square meter": "6894.76"
                    },
                "Inches of Mercury":{
                        "Pascal": "3386.39",
                        "Kilopascal": "3.38639",
                        "Megapascal": "0.00338639",
                        "Bar": "0.0338639",
                        "Millibar": "33.8639",
                        "Atmosphere": "0.0334211",
                        "Torr": "25.4",
                        "Pounds per square inch ": "0.491154",
                        "Millimeters of Mercury": "25.4",
                        "Newton per square meter": "3386.39"
                    },
                "Millimeters of Mercury":{
                        "Pascal": "133.322",
                        "Kilopascal": "0.133322",
                        "Megapascal": "1.33E-04",
                        "Bar": "0.00133322",
                        "Millibar": "1.33322",
                        "Atmosphere": "0.00131579",
                        "Torr": "1",
                        "Pounds per square inch ": "0.0193368",
                        "Inches of Mercury": "0.0393701",
                        "Newton per square meter": "133.322"
                    },
                "Newton per square meter":{
                        "Pascal": "1",
                        "Kilopascal": "0.001",
                        "Megapascal": "1.00E-06",
                        "Bar": "1.00E-05",
                        "Millibar": "0.01",
                        "Atmosphere": "9.87E-06",
                        "Torr": "7.50E-03",
                        "Pounds per square inch ": "1.45E-04",
                        "Inches of Mercury": "2.95E-05",
                        "Newton per square meter": "7.50E-03"
                    }
        }

        let convertedValue =input1* conversions[pressure1][pressure2] ;
        if (pressure1===pressure2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,pressure1,pressure2,input1)
        resultInp.value = convertedValue;
};

function convertTime(){
        const input1 = parseFloat(document.getElementById('inputTime').value);
        const resultInp = document.getElementById("resultTime");
        const time1 = document.getElementById('time1').value;
        const time2 = document.getElementById('time2').value;
        const resultDiv = document.getElementById('resultTime2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Second": {
                        "Millisecond": "1000",
                        "Microsecond": "1.00E+06",
                        "Nanosecond": "1.00E+09",
                        "Picosecond": "1.00E+12",
                        "Minute": "0.0166667",
                        "Hour": "0.000277778",
                        "Day": "1.16E-05",
                        "Week": "1.65E-06",
                        "Month": "3.80E-07",
                        "Year": "3.17E-08",
                        "Decade": "3.17E-09",
                        "Century": "3.17E-10",
                        "Millennium": "3.17E-11"
                    },
                "Millisecond":{
                        "Second": "0.001",
                        "Microsecond": "1000",
                        "Nanosecond": "1.00E+06",
                        "Picosecond": "1.00E+09",
                        "Minute": "1.67E-05",
                        "Hour": "2.78E-07",
                        "Day": "1.16E-08",
                        "Week": "1.65E-09",
                        "Month": "3.80E-10",
                        "Year": "3.17E-11",
                        "Decade": "3.17E-12",
                        "Century": "3.17E-13",
                        "Millennium": "3.17E-14"
                },
                "Microsecond":{
                        "Second": "1.00E-06",
                        "Millisecond": "0.001",
                        "Nanosecond": "1000",
                        "Picosecond": "1.00E+06",
                        "Minute": "1.67E-08",
                        "Hour": "2.78E-10",
                        "Day": "1.16E-11",
                        "Week": "1.65E-12",
                        "Month": "3.80E-13",
                        "Year": "3.17E-14",
                        "Decade": "3.17E-15",
                        "Century": "3.17E-16",
                        "Millennium": "3.17E-17"
                    },
                'Nanosecond':{
                        "Second": "1.00E-09",
                        "Millisecond": "1.00E-06",
                        "Microsecond": "0.001",
                        "Picosecond": "1000",
                        "Minute": "1.67E-11",
                        "Hour": "2.78E-13",
                        "Day": "1.16E-14",
                        "Week": "1.65E-15",
                        "Month": "3.80E-16",
                        "Year": "3.17E-17",
                        "Decade": "3.17E-18",
                        "Century": "3.17E-19",
                        "Millennium": "3.17E-20"
                    },
                "Picosecond":{
                        "Second": "1.00E-12",
                        "Millisecond": "1.00E-09",
                        "Microsecond": "1.00E-06",
                        "Nanosecond": "0.001",
                        "Minute": "1.67E-14",
                        "Hour": "2.78E-16",
                        "Day": "1.16E-17",
                        "Week": "1.65E-18",
                        "Month": "3.80E-19",
                        "Year": "3.17E-20",
                        "Decade": "3.17E-21",
                        "Century": "3.17E-22",
                        "Millennium": "3.17E-23"
                    },                
                "Minute":{
                        "Second": "60",
                        "Millisecond": "60000",
                        "Microsecond": "6.00E+07",
                        "Nanosecond": "6.00E+10",
                        "Picosecond": "6.00E+13",
                        "Hour": "0.0166667",
                        "Day": "0.000694444",
                        "Week": "9.92E-05",
                        "Month": "2.31E-05",
                        "Year": "1.90E-06",
                        "Decade": "1.90E-07",
                        "Century": "1.90E-08",
                        "Millennium": "1.90E-09"
                    },
                "Hour": {
                        "Second": "3600",
                        "Millisecond": "3.60E+06",
                        "Microsecond": "3.60E+09",
                        "Nanosecond": "3.60E+12",
                        "Picosecond": "3.60E+15",
                        "Minute": "60",
                        "Day": "0.0416667",
                        "Week": "0.00595238",
                        "Month": "0.00138889",
                        "Year": "0.000114155",
                        "Decade": "1.14E-05",
                        "Century": "1.14E-06",
                        "Millennium": "1.14E-07"
                    },
                "Day":{
                        "Second": "86400",
                        "Millisecond": "8.64E+07",
                        "Microsecond": "8.64E+10",
                        "Nanosecond": "8.64E+13",
                        "Picosecond": "8.64E+16",
                        "Minute": "1440",
                        "Hour": "24",
                        "Week": "0.142857",
                        "Month": "0.0333333",
                        "Year": "0.00273973",
                        "Decade": "0.000273973",
                        "Century": "2.74E-05",
                        "Millennium": "2.74E-06"
                    },
                "Week":{
                        "Second": "604800",
                        "Millisecond": "6.05E+08",
                        "Microsecond": "6.05E+11",
                        "Nanosecond": "6.05E+14",
                        "Picosecond": "6.05E+17",
                        "Minute": "10080",
                        "Hour": "168",
                        "Day": "7",
                        "Month": "0.233333",
                        "Year": "0.0191781",
                        "Decade": "0.00191781",
                        "Century": "0.000191781",
                        "Millennium": "1.92E-05"
                    },
                "Day":{
                        "Second": "2592000",
                        "Millisecond": "2.59E+09",
                        "Microsecond": "2.59E+12",
                        "Nanosecond": "2.59E+15",
                        "Picosecond": "2.59E+18",
                        "Minute": "43200",
                        "Hour": "720",
                        "Day": "30",
                        "Week": "4.28571",
                        "Year": "0.0821918",
                        "Decade": "0.00821918",
                        "Century": "0.000821918",
                        "Millennium": "8.22E-05"
                    },
                "Year":{
                        "Second": "31536000",
                        "Millisecond": "3.15E+10",
                        "Microsecond": "3.15E+13",
                        "Nanosecond": "3.15E+16",
                        "Picosecond": "3.15E+19",
                        "Minute": "525600",
                        "Hour": "8760",
                        "Day": "365",
                        "Week": "52.1429",
                        "Month": "12.1667",
                        "Decade": "0.1",
                        "Century": "0.01",
                        "Millennium": "0.001"
                    },
                "Decade":{
                        "Second": "3.15E+08",
                        "Millisecond": "3.15E+11",
                        "Microsecond": "3.15E+14",
                        "Nanosecond": "3.15E+17",
                        "Picosecond": "3.15E+20",
                        "Minute": "5.26E+06",
                        "Hour": "87600",
                        "Day": "3650",
                        "Week": "521.429",
                        "Month": "121.667",
                        "Year": "10",
                        "Century": "0.1",
                        "Millennium": "0.01"
                    },
                "Century":{
                        "Second": "3.15E+09",
                        "Millisecond": "3.15E+12",
                        "Microsecond": "3.15E+15",
                        "Nanosecond": "3.15E+18",
                        "Picosecond": "3.15E+21",
                        "Minute": "5.26E+07",
                        "Hour": "876000",
                        "Day": "36500",
                        "Week": "5214.29",
                        "Month": "1216.67",
                        "Year": "100",
                        "Decade": "10",
                        "Millennium": "0.1"
                    },
                "Millennium":{
                        "Second": "3.15E+10",
                        "Millisecond": "3.15E+13",
                        "Microsecond": "3.15E+16",
                        "Nanosecond": "3.15E+19",
                        "Picosecond": "3.15E+22",
                        "Minute": "5.26E+08",
                        "Hour": "8760000",
                        "Day": "365000",
                        "Week": "52142.9",
                        "Month": "12166.7",
                        "Year": "1000",
                        "Decade": "100",
                        "Century": "10"
                    }
        }
        
        let convertedValue =input1* conversions[time1][time2] ;
        if (time1===time2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,time1,time2,input1)
        resultInp.value = convertedValue;
};

function convertTemperature(){
        const input1 = parseFloat(document.getElementById('inputTemp').value);
        const resultInp = document.getElementById("resultTemp");
        const temp1 = document.getElementById('temp1').value;
        const temp2 = document.getElementById('temp2').value;
        const resultDiv = document.getElementById('resultTemp2');

        if (isNaN(input1)) {
            resultDiv.innerHTML = error;
            resultInp.value = ""
            return;
        }
        let x = input1
        console.log(temp1,temp2)
        // Conversion factors
        const conversions = {
                "Kelvin": {
                        "Celsius": "${x} - 273.15",
                        "Fahrenheit": "(${x} - 273.15) × 9/5 + 32",
                        "Ran${x}ine": "${x} * 1.8",
                        "Delisle": "(373.15 - ${x}) × 3/2",
                        "Newton": "(${x} - 273.15) × 33/100",
                        "Réaumur": "(${x} - 273.15) × 4/5",
                        "Rømer": "(${x} - 273.15) × 21/40 + 7.5"
                    },
                "Millisecond":{
                        "Second": "0.001",
                        "Microsecond": "1000",
                        "Nanosecond": "1.00E+06",
                        "Picosecond": "1.00E+09",
                        "Minute": "1.67E-05",
                        "Hour": "2.78E-07",
                        "Day": "1.16E-08",
                        "Week": "1.65E-09",
                        "Month": "3.80E-10",
                        "Year": "3.17E-11",
                        "Decade": "3.17E-12",
                        "Century": "3.17E-13",
                        "Millennium": "3.17E-14"
                },
                "Microsecond":{
                        "Second": "1.00E-06",
                        "Millisecond": "0.001",
                        "Nanosecond": "1000",
                        "Picosecond": "1.00E+06",
                        "Minute": "1.67E-08",
                        "Hour": "2.78E-10",
                        "Day": "1.16E-11",
                        "Week": "1.65E-12",
                        "Month": "3.80E-13",
                        "Year": "3.17E-14",
                        "Decade": "3.17E-15",
                        "Century": "3.17E-16",
                        "Millennium": "3.17E-17"
                    },
                'Nanosecond':{
                        "Second": "1.00E-09",
                        "Millisecond": "1.00E-06",
                        "Microsecond": "0.001",
                        "Picosecond": "1000",
                        "Minute": "1.67E-11",
                        "Hour": "2.78E-13",
                        "Day": "1.16E-14",
                        "Week": "1.65E-15",
                        "Month": "3.80E-16",
                        "Year": "3.17E-17",
                        "Decade": "3.17E-18",
                        "Century": "3.17E-19",
                        "Millennium": "3.17E-20"
                    },
                "Picosecond":{
                        "Second": "1.00E-12",
                        "Millisecond": "1.00E-09",
                        "Microsecond": "1.00E-06",
                        "Nanosecond": "0.001",
                        "Minute": "1.67E-14",
                        "Hour": "2.78E-16",
                        "Day": "1.16E-17",
                        "Week": "1.65E-18",
                        "Month": "3.80E-19",
                        "Year": "3.17E-20",
                        "Decade": "3.17E-21",
                        "Century": "3.17E-22",
                        "Millennium": "3.17E-23"
                    },                
                "Minute":{
                        "Second": "60",
                        "Millisecond": "60000",
                        "Microsecond": "6.00E+07",
                        "Nanosecond": "6.00E+10",
                        "Picosecond": "6.00E+13",
                        "Hour": "0.0166667",
                        "Day": "0.000694444",
                        "Week": "9.92E-05",
                        "Month": "2.31E-05",
                        "Year": "1.90E-06",
                        "Decade": "1.90E-07",
                        "Century": "1.90E-08",
                        "Millennium": "1.90E-09"
                    },
                "Hour": {
                        "Second": "3600",
                        "Millisecond": "3.60E+06",
                        "Microsecond": "3.60E+09",
                        "Nanosecond": "3.60E+12",
                        "Picosecond": "3.60E+15",
                        "Minute": "60",
                        "Day": "0.0416667",
                        "Week": "0.00595238",
                        "Month": "0.00138889",
                        "Year": "0.000114155",
                        "Decade": "1.14E-05",
                        "Century": "1.14E-06",
                        "Millennium": "1.14E-07"
                    },
                "Day":{
                        "Second": "86400",
                        "Millisecond": "8.64E+07",
                        "Microsecond": "8.64E+10",
                        "Nanosecond": "8.64E+13",
                        "Picosecond": "8.64E+16",
                        "Minute": "1440",
                        "Hour": "24",
                        "Week": "0.142857",
                        "Month": "0.0333333",
                        "Year": "0.00273973",
                        "Decade": "0.000273973",
                        "Century": "2.74E-05",
                        "Millennium": "2.74E-06"
                    },
                "Week":{
                        "Second": "604800",
                        "Millisecond": "6.05E+08",
                        "Microsecond": "6.05E+11",
                        "Nanosecond": "6.05E+14",
                        "Picosecond": "6.05E+17",
                        "Minute": "10080",
                        "Hour": "168",
                        "Day": "7",
                        "Month": "0.233333",
                        "Year": "0.0191781",
                        "Decade": "0.00191781",
                        "Century": "0.000191781",
                        "Millennium": "1.92E-05"
                    },
                "Day":{
                        "Second": "2592000",
                        "Millisecond": "2.59E+09",
                        "Microsecond": "2.59E+12",
                        "Nanosecond": "2.59E+15",
                        "Picosecond": "2.59E+18",
                        "Minute": "43200",
                        "Hour": "720",
                        "Day": "30",
                        "Week": "4.28571",
                        "Year": "0.0821918",
                        "Decade": "0.00821918",
                        "Century": "0.000821918",
                        "Millennium": "8.22E-05"
                    },
                "Year":{
                        "Second": "31536000",
                        "Millisecond": "3.15E+10",
                        "Microsecond": "3.15E+13",
                        "Nanosecond": "3.15E+16",
                        "Picosecond": "3.15E+19",
                        "Minute": "525600",
                        "Hour": "8760",
                        "Day": "365",
                        "Week": "52.1429",
                        "Month": "12.1667",
                        "Decade": "0.1",
                        "Century": "0.01",
                        "Millennium": "0.001"
                    },
                "Decade":{
                        "Second": "3.15E+08",
                        "Millisecond": "3.15E+11",
                        "Microsecond": "3.15E+14",
                        "Nanosecond": "3.15E+17",
                        "Picosecond": "3.15E+20",
                        "Minute": "5.26E+06",
                        "Hour": "87600",
                        "Day": "3650",
                        "Week": "521.429",
                        "Month": "121.667",
                        "Year": "10",
                        "Century": "0.1",
                        "Millennium": "0.01"
                    },
                "Century":{
                        "Second": "3.15E+09",
                        "Millisecond": "3.15E+12",
                        "Microsecond": "3.15E+15",
                        "Nanosecond": "3.15E+18",
                        "Picosecond": "3.15E+21",
                        "Minute": "5.26E+07",
                        "Hour": "876000",
                        "Day": "36500",
                        "Week": "5214.29",
                        "Month": "1216.67",
                        "Year": "100",
                        "Decade": "10",
                        "Millennium": "0.1"
                    },
                "Millennium":{
                        "Second": "3.15E+10",
                        "Millisecond": "3.15E+13",
                        "Microsecond": "3.15E+16",
                        "Nanosecond": "3.15E+19",
                        "Picosecond": "3.15E+22",
                        "Minute": "5.26E+08",
                        "Hour": "8760000",
                        "Day": "365000",
                        "Week": "52142.9",
                        "Month": "12166.7",
                        "Year": "1000",
                        "Decade": "100",
                        "Century": "10"
                    }
        }
        
        let convertedValue = conversions[temp1][temp2] ;
        if (temp1===temp2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML =func(convertedValue,temp1,temp2,input1)
        resultInp.value = convertedValue;
};

function convertvolumeliquids(){
        const input1 = parseFloat(document.getElementById('inputvl').value);
        const resultInp = document.getElementById("resultvl");
        const vl1 = document.getElementById('vl1').value;
        const vl2 = document.getElementById('vl2').value;
        const resultDiv = document.getElementById('resultvl2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Milliliter": {
                        "Liter": "0.001",
                        "Cubic Meter": "1.00E-06",
                        "Cubic Centimeter": "1",
                        "Cubic Decimeter": "0.001",
                        "Gallon (US)": "2.64E-04",
                        "Gallon (UK)": "2.20E-04",
                        "Quart (US)": "0.001056688",
                        "Pint (US)": "0.002113376",
                        "Pint (UK)": "0.001759754",
                        "Fluid Ounce (US)": "0.033814023",
                        "Fluid Ounce (UK)": "0.035195079",
                        "Barrel (Oil)": "6.29E-06",
                        "Cup (US)": "0.004226753",
                        "Cup (Metric)": "0.004"
                    },
                "Liter":{
                        "Milliliter": "1000",
                        "Cubic Meter": "0.001",
                        "Cubic Centimeter": "1000",
                        "Cubic Decimeter": "1",
                        "Gallon (US)": "0.26417205",
                        "Gallon (UK)": "0.21996925",
                        "Quart (US)": "1.056688",
                        "Pint (US)": "2.113376",
                        "Pint (UK)": "1.759754",
                        "Fluid Ounce (US)": "33.814023",
                        "Fluid Ounce (UK)": "35.195079",
                        "Barrel (Oil)": "0.006289811",
                        "Cup (US)": "4.226753",
                        "Cup (Metric)": "4"
                    },
                "Cubic Meter":{
                        "Milliliter": "1.00E+06",
                        "Liter": "1000",
                        "Cubic Centimeter": "1.00E+06",
                        "Cubic Decimeter": "1000",
                        "Gallon (US)": "264.17205",
                        "Gallon (UK)": "219.96925",
                        "Quart (US)": "1056.688",
                        "Pint (US)": "2113.376",
                        "Pint (UK)": "1759.754",
                        "Fluid Ounce (US)": "33814.023",
                        "Fluid Ounce (UK)": "35195.079",
                        "Barrel (Oil)": "6.2898108",
                        "Cup (US)": "4226.753",
                        "Cup (Metric)": "4000"
                    },
                'Cubic Centimeter':{
                        "Milliliter": "1",
                        "Liter": "0.001",
                        "Cubic Meter": "1.00E-06",
                        "Cubic Decimeter": "0.001",
                        "Gallon (US)": "2.64E-04",
                        "Gallon (UK)": "2.20E-04",
                        "Quart (US)": "0.001056688",
                        "Pint (US)": "0.002113376",
                        "Pint (UK)": "0.001759754",
                        "Fluid Ounce (US)": "0.033814023",
                        "Fluid Ounce (UK)": "0.035195079",
                        "Barrel (Oil)": "6.29E-06",
                        "Cup (US)": "0.004226753",
                        "Cup (Metric)": "0.004"
                    },
                "Cubic Decimeter":{
                        "Milliliter": "1000",
                        "Liter": "1",
                        "Cubic Meter": "0.001",
                        "Cubic Centimeter": "1000",
                        "Gallon (US)": "0.264172052",
                        "Gallon (UK)": "0.219969248",
                        "Quart (US)": "1.05669",
                        "Pint (US)": "2.11338",
                        "Pint (UK)": "1.75975",
                        "Fluid Ounce (US)": "33.814",
                        "Fluid Ounce (UK)": "35.1951",
                        "Barrel (Oil)": "0.006289811",
                        "Cup (US)": "4.22675",
                        "Cup (Metric)": "4"
                    },                
                "Gallon (US)":{
                        "Milliliter": "3785.41",
                        "Liter": "3.78541",
                        "Cubic Meter": "0.00378541",
                        "Cubic Centimeter": "3785.41",
                        "Cubic Decimeter": "3.78541",
                        "Gallon (UK)": "0.832674",
                        "Quart (US)": "4",
                        "Pint (US)": "8",
                        "Pint (UK)": "6.66139",
                        "Fluid Ounce (US)": "128",
                        "Fluid Ounce (UK)": "133.228",
                        "Barrel (Oil)": "0.023809524",
                        "Cup (US)": "16",
                        "Cup (Metric)": "15.7725"
                    },
                "Gallon (UK)": {
                        "Milliliter": "4546.09",
                        "Liter": "4.54609",
                        "Cubic Meter": "0.00454609",
                        "Cubic Centimeter": "4546.09",
                        "Cubic Decimeter": "4.54609",
                        "Gallon (US)": "1.20095",
                        "Quart (US)": "4.8038",
                        "Pint (US)": "9.6076",
                        "Pint (UK)": "8",
                        "Fluid Ounce (US)": "153.722",
                        "Fluid Ounce (UK)": "160",
                        "Barrel (Oil)": "0.028594",
                        "Cup (US)": "19.2152",
                        "Cup (Metric)": "18.1844"
                    },
                "Quart (US)":{
                        "Milliliter": "946.353",
                        "Liter": "0.946353",
                        "Cubic Meter": "0.000946353",
                        "Cubic Centimeter": "946.353",
                        "Cubic Decimeter": "0.946353",
                        "Gallon (US)": "0.25",
                        "Gallon (UK)": "0.208168",
                        "Pint (US)": "2",
                        "Pint (UK)": "1.66535",
                        "Fluid Ounce (US)": "32",
                        "Fluid Ounce (UK)": "33.307",
                        "Barrel (Oil)": "0.00595238",
                        "Cup (US)": "4",
                        "Cup (Metric)": "3.94314"
                    },
                "Pint (US)":{
                        "Milliliter": "473.176",
                        "Liter": "0.473176",
                        "Cubic Meter": "0.000473176",
                        "Cubic Centimeter": "473.176",
                        "Cubic Decimeter": "0.473176",
                        "Gallon (US)": "0.125",
                        "Gallon (UK)": "0.104084",
                        "Quart (US)": "0.5",
                        "Pint (UK)": "0.832674",
                        "Fluid Ounce (US)": "16",
                        "Fluid Ounce (UK)": "16.6535",
                        "Barrel (Oil)": "0.00297619",
                        "Cup (US)": "2",
                        "Cup (Metric)": "1.97157"
                    },
                "Pint (UK)":{
                        "Milliliter": "568.261",
                        "Liter": "0.568261",
                        "Cubic Meter": "0.000568261",
                        "Cubic Centimeter": "568.261",
                        "Cubic Decimeter": "0.568261",
                        "Gallon (US)": "0.150119",
                        "Gallon (UK)": "0.125",
                        "Quart (US)": "0.600475",
                        "Pint (US)": "1.20095",
                        "Fluid Ounce (US)": "19.2152",
                        "Fluid Ounce (UK)": "20",
                        "Barrel (Oil)": "0.00357424",
                        "Cup (US)": "2.40237",
                        "Cup (Metric)": "2.27306"
                    },
                "Fluid Ounce (US)":{
                        "Milliliter": "29.5735",
                        "Liter": "0.0295735",
                        "Cubic Meter": "2.96E-05",
                        "Cubic Centimeter": "29.5735",
                        "Cubic Decimeter": "0.0295735",
                        "Gallon (US)": "0.0078125",
                        "Gallon (UK)": "0.00650527",
                        "Quart (US)": "0.03125",
                        "Pint (US)": "0.0625",
                        "Pint (UK)": "0.0520421",
                        "Fluid Ounce (UK)": "1.04084",
                        "Barrel (Oil)": "4.93E-05",
                        "Cup (US)": "0.125",
                        "Cup (Metric)": "0.118294"
                    },
                "Fluid Ounce (UK)":{
                        "Milliliter": "28.4131",
                        "Liter": "0.0284131",
                        "Cubic Meter": "2.84E-05",
                        "Cubic Centimeter": "28.4131",
                        "Cubic Decimeter": "0.0284131",
                        "Gallon (US)": "0.00750594",
                        "Gallon (UK)": "0.00625",
                        "Quart (US)": "0.0300238",
                        "Pint (US)": "0.0600476",
                        "Pint (UK)": "0.05",
                        "Fluid Ounce (US)": "0.96076",
                        "Barrel (Oil)": "4.54E-05",
                        "Cup (US)": "0.120095",
                        "Cup (Metric)": "0.113653"
                    },
                "Barrel (Oil)":{
                        "Milliliter": "158987",
                        "Liter": "158.987",
                        "Cubic Meter": "0.158987",
                        "Cubic Centimeter": "158987",
                        "Cubic Decimeter": "158.987",
                        "Gallon (US)": "42",
                        "Gallon (UK)": "34.9723",
                        "Quart (US)": "168",
                        "Pint (US)": "336",
                        "Pint (UK)": "279.778",
                        "Fluid Ounce (US)": "5376",
                        "Fluid Ounce (UK)": "5595.57",
                        "Cup (US)": "672",
                        "Cup (Metric)": "634.148"
                    },
                "Cup (US)":{
                        "Milliliter": "236.588",
                        "Liter": "0.236588",
                        "Cubic Meter": "0.000236588",
                        "Cubic Centimeter": "236.588",
                        "Cubic Decimeter": "0.236588",
                        "Gallon (US)": "0.0625",
                        "Gallon (UK)": "0.0520421",
                        "Quart (US)": "0.25",
                        "Pint (US)": "0.5",
                        "Pint (UK)": "0.416337",
                        "Fluid Ounce (US)": "8",
                        "Fluid Ounce (UK)": "8.32674",
                        "Barrel (Oil)": "0.0014881",
                        "Cup (Metric)": "0.946352946"
                    },
                "Cup (Metric)":{
                        "MiMilliliter": "250",
                        "Liter": "0.25",
                        "Cubic Meter": "0.00025",
                        "Cubic Centimeter": "250",
                        "Cubic Decimeter": "0.25",
                        "Gallon (US)": "0.066043",
                        "Gallon (UK)": "0.0550459",
                        "Quart (US)": "0.264172",
                        "Pint (US)": "0.528344",
                        "Pint (UK)": "0.440925",
                        "Fluid Ounce (US)": "8.45351",
                        "Fluid Ounce (UK)": "8.79977",
                        "Barrel (Oil)": "0.00157226",
                        "Cup (US)": "1.05669"
                    }
        }
        
        let convertedValue =input1* conversions[vl1][vl2] ;
        if (vl1===vl2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,vl1,vl2,input1)
        resultInp.value = convertedValue;
};

function convertFrequency(){
        const input1 = parseFloat(document.getElementById('inputFrequency').value);
        const resultInp = document.getElementById("resultFrequency");
        const frequency1 = document.getElementById('frequency1').value;
        const frequency2 = document.getElementById('frequency2').value;
        const resultDiv = document.getElementById('resultFrequency2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error
            resultInp.value = ""
            return;
        }
        let x = input1
        // Conversion factors
        const conversions = {
                "Hertz": {
                        "Kilohertz": "0.001",
                        "Megahertz": "1.00E-06",
                        "Gigahertz": "1.00E-09",
                        "Terahertz": "1.00E-12",
                        "Kilocycles": "0.001",
                        "Megacycles": "1.00E-06",
                        "Revolutions per minute": "60",
                        "Cycles per second": "1"
                    },
                "Kilohertz":{
                        "Hertz": "1000",
                        "Megahertz": "0.001",
                        "Gigahertz": "1.00E-06",
                        "Terahertz": "1.00E-09",
                        "Kilocycles": "1",
                        "Megacycles": "0.001",
                        "Revolutions per minute": "60000",
                        "Cycles per second": "1000"
                    },
                "Megahertz":{
                        "Hertz": "1.00E+06",
                        "Kilohertz": "1000",
                        "Gigahertz": "0.001",
                        "Terahertz": "1.00E-06",
                        "Kilocycles": "1000",
                        "Megacycles": "1",
                        "Revolutions per minute": "6.00E+07",
                        "Cycles per second": "1.00E+06"
                    },
                'Gigahertz':{
                        "Hertz": "1.00E+09",
                        "Kilohertz": "1.00E+06",
                        "Megahertz": "1000",
                        "Terahertz": "0.001",
                        "Kilocycles": "1.00E+06",
                        "Megacycles": "1000",
                        "Revolutions per minute": "6.00E+10",
                        "Cycles per second": "1.00E+09"
                    },
                "Terahertz":{
                        "Hertz": "1.00E+12",
                        "Kilohertz": "1.00E+09",
                        "Megahertz": "1.00E+06",
                        "Gigahertz": "1000",
                        "Kilocycles": "1.00E+09",
                        "Megacycles": "1.00E+06",
                        "Revolutions per minute": "6.00E+13",
                        "Cycles per second": "1.00E+12"
                    },                
                "Kilocycles":{
                        "Hertz": "1000",
                        "Kilohertz": "1",
                        "Megahertz": "0.001",
                        "Gigahertz": "1.00E-06",
                        "Terahertz": "1.00E-09",
                        "Megacycles": "0.001",
                        "Revolutions per minute": "60000",
                        "Cycles per second": "1000"
                    },
                "Megacycles": {
                        "Hertz": "1.00E+06",
                        "Kilohertz": "1000",
                        "Megahertz": "1",
                        "Gigahertz": "0.001",
                        "Terahertz": "1.00E-06",
                        "Kilocycles": "1000",
                        "Revolutions per minute": "6.00E+07",
                        "Cycles per second": "1.00E+06"
                    },
                "Revolutions per minute":{
                        "Hertz": "0.0166667",
                        "Kilohertz": "1.67E-05",
                        "Megahertz": "1.67E-08",
                        "Gigahertz": "1.67E-11",
                        "Terahertz": "1.67E-14",
                        "Kilocycles": "1.67E-05",
                        "Megacycles": "1.67E-08",
                        "Cycles per second": "0.0166667"
                    },
                "Cycles per second":{
                        "Hertz": "1",
                        "Kilohertz": "0.001",
                        "Megahertz": "1.00E-06",
                        "Gigahertz": "1.00E-09",
                        "Terahertz": "1.00E-12",
                        "Kilocycles": "0.001",
                        "Megacycles": "1.00E-06",
                        "Revolutions per minute": "60"
                    }
        }
        
        let convertedValue = input1*conversions[frequency1][frequency2] ;
        if (frequency1===frequency2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML =func(convertedValue,frequency1,frequency2,input1)
        resultInp.value = convertedValue;
};

function convertForce(){
        const input1 = parseFloat(document.getElementById('inputForce').value);
        const resultInp = document.getElementById("resultForce");
        const force1 = document.getElementById('force1').value;
        const force2 = document.getElementById('force2').value;
        const resultDiv = document.getElementById('resultForce2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Newton": {
                        "Kilonewton": "0.001",
                        "Dyne": "1.00E+05",
                        "Kilogram-force": "0.101971621",
                        "Pound-force": "0.224808943",
                        "Ounce-force": "3.5969431",
                        "Ton-force (metric)": "1.02E-04",
                        "Ton-force (US)": "1.12E-04",
                        "Poundal": "7.23301385",
                        "Sthène": "1.00E-03",
                        "Grave-force": "101.971621"
                    },
                "Kilonewton":{
                        "Newton": "1000",
                        "Dyne": "1.00E+08",
                        "Kilogram-force": "101.971621",
                        "Pound-force": "224.808943",
                        "Ounce-force": "3596.9431",
                        "Ton-force (metric)": "0.101971621",
                        "Ton-force (US)": "0.112404474",
                        "Poundal": "7233.01385",
                        "Sthène": "1",
                        "Grave-force": "1.02E+05"
                    },
                "Dyne": {
                        "Newton": "1.00E-05",
                        "Kilonewton": "1.00E-08",
                        "Kilogram-force": "1.02E-06",
                        "Pound-force": "2.25E-06",
                        "Ounce-force": "3.60E-05",
                        "Ton-force (metric)": "1.02E-09",
                        "Ton-force (US)": "1.12E-09",
                        "Poundal": "7.23E-05",
                        "Sthène": "1.00E-08",
                        "Grave-force": "0.000101972"
                    },
                'Kilogram-force':{
                        "Newton": "9.80665",
                        "Kilonewton": "0.00980665",
                        "Dyne": "9.81E+05",
                        "Pound-force": "2.20462262",
                        "Ounce-force": "35.2739619",
                        "Ton-force (metric)": "0.001",
                        "Ton-force (US)": "0.00110231",
                        "Poundal": "70.932835",
                        "Sthène": "0.00980665",
                        "Grave-force": "1000"
                    },
                "Pound-force":{
                        "Newton": "4.44822162",
                        "Kilonewton": "0.004448222",
                        "Dyne": "4.45E+05",
                        "kilogram-force": "0.45359237",
                        "Ounce-force": "16",
                        "Ton-force (metric)": "4.54E-04",
                        "Ton-force (US)": "5.00E-04",
                        "Poundal": "32.1740486",
                        "Sthène": "0.004448222",
                        "Grave-force": "453.59237"
                    },                
                "Ounch-force":{
                        "Newton": "0.27801385",
                        "Kilonewton": "0.000278014",
                        "Dyne": "2.78E+04",
                        "kilogram-force": "0.028349523",
                        "Pound-force": "0.0625",
                        "Ton-force (metric)": "2.84E-05",
                        "Ton-force (US)": "3.13E-05",
                        "Poundal": "2.01087804",
                        "Sthène": "0.000278014",
                        "Grave-force": "28.3495231"
                    },
                "Ton-force (metric)": {
                        "Newton": "9806.65",
                        "Kilonewton": "9.80665",
                        "Dyne": "9.81E+08",
                        "kilogram-force": "1000",
                        "Pound-force": "2204.62262",
                        "Ounce-force": "35273.9619",
                        "Ton-force (US)": "1.10231131",
                        "Poundal": "70932.835",
                        "Sthène": "9.80665",
                        "Grave-force": "1.00E+06"
                    },
                "Ton-force (US)":{
                        "Newton": "8896.44323",
                        "Kilonewton": "8.89644323",
                        "Dyne": "8.90E+08",
                        "kilogram-force": "907.18474",
                        "Pound-force": "2000",
                        "Ounce-force": "32000",
                        "Ton-force (metric)": "0.90718474",
                        "Poundal": "64368.086",
                        "Sthène": "8.89644323",
                        "Grave-force": "907184.74"
                    },
                "Poundal":{
                        "Newton": "0.138254954",
                        "Kilonewton": "1.38E-04",
                        "Dyne": "13825.4954",
                        "kilogram-force": "0.014098082",
                        "Pound-force": "0.03108095",
                        "Ounce-force": "0.4972952",
                        "Ton-force (metric)": "1.41E-05",
                        "Ton-force (US)": "1.55E-05",
                        "Sthène": "1.38E-04",
                        "Grave-force": "14.0980819"
                    },
                "Sthène":{
                        "Newton": "1000",
                        "Kilonewton": "1",
                        "Dyne": "1.00E+08",
                        "kilogram-force": "101.971621",
                        "Pound-force": "224.808943",
                        "Ounce-force": "3596.9431",
                        "Ton-force (metric)": "0.101971621",
                        "Ton-force (US)": "0.112404474",
                        "Poundal": "7233.01385",
                        "Grave-force": "101971.621"
                    },
                "Grave-force":{
                        "Newton": "9.80665",
                        "Kilonewton": "0.00980665",
                        "Dyne": "9.81E+05",
                        "kilogram-force": "0.001",
                        "Pound-force": "0.002204623",
                        "Ounce-force": "0.035273962",
                        "Ton-force (metric)": "1.00E-06",
                        "Ton-force (US)": "1.10E-06",
                        "Poundal": "0.070932835",
                        "Sthène": "0.00980665",
                        "Grave-force": "101971.621"
                    }
        }
        
        let convertedValue = input1*conversions[force1][force2] ;
        if (frequency1===frequency2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,force1,force2,input1)
        resultInp.value = convertedValue;
};

function convertData(){
        const input1 = parseFloat(document.getElementById('inputData').value);
        const resultInp = document.getElementById("resultData");
        const data1 = document.getElementById('data1').value;
        const data2 = document.getElementById('data2').value;
        const resultDiv = document.getElementById('resultData2');

        if (isNaN(input1)) {
            resultDiv.innerHTML = error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Bit": {
                        "Byte": "0.125",
                        "Kilobyte": "1.25E-04",
                        "Megabyte": "1.25E-07",
                        "Gigabyte": "1.25E-10",
                        "Terabyte": "1.25E-13",
                        "Petabyte": "1.25E-16",
                        "Exabyte": "1.25E-19",
                        "Zettabyte": "1.25E-22",
                        "Yottabyte": "1.25E-25",
                        "Kilobit": "0.001",
                        "Megabit": "1.00E-06",
                        "Gigabit": "1.00E-09"
                    },
                "Byte":{
                        "Bit": "8",
                        "Kilobyte": "0.001",
                        "Megabyte": "1.00E-06",
                        "Gigabyte": "1.00E-09",
                        "Terabyte": "1.00E-12",
                        "Petabyte": "1.00E-15",
                        "Exabyte": "1.00E-18",
                        "Zettabyte": "1.00E-21",
                        "Yottabyte": "1.00E-24",
                        "Kilobit": "0.008",
                        "Megabit": "8.00E-06",
                        "Gigabit": "8.00E-09"
                    },
                "Kilobyte":{
                        "Bit": "8000",
                        "Byte": "1000",
                        "Megabyte": "0.001",
                        "Gigabyte": "1.00E-06",
                        "Terabyte": "1.00E-09",
                        "Petabyte": "1.00E-12",
                        "Exabyte": "1.00E-15",
                        "Zettabyte": "1.00E-18",
                        "Yottabyte": "1.00E-21",
                        "Kilobit": "8",
                        "Megabit": "0.008",
                        "Gigabit": "8.00E-06"
                    },
                'Megabyte':{
                        "Bit": "8.00E+06",
                        "Byte": "1.00E+06",
                        "Kilobyte": "1000",
                        "Gigabyte": "0.001",
                        "Terabyte": "1.00E-06",
                        "Petabyte": "1.00E-09",
                        "Exabyte": "1.00E-12",
                        "Zettabyte": "1.00E-15",
                        "Yottabyte": "1.00E-18",
                        "Kilobit": "8000",
                        "Megabit": "8",
                        "Gigabit": "0.008"
                    },
                "Gigabyte":{
                        "Bit": "8.00E+09",
                        "Byte": "1.00E+09",
                        "Kilobyte": "1.00E+06",
                        "Megabyte": "1000",
                        "Terabyte": "0.001",
                        "Petabyte": "1.00E-06",
                        "Exabyte": "1.00E-09",
                        "Zettabyte": "1.00E-12",
                        "Yottabyte": "1.00E-15",
                        "Kilobit": "8.00E+06",
                        "Megabit": "8000",
                        "Gigabit": "8"
                    },                
                "Terabyte":{
                        "Bit": "8.00E+12",
                        "Byte": "1.00E+12",
                        "Kilobyte": "1.00E+09",
                        "Megabyte": "1.00E+06",
                        "Gigabyte": "1000",
                        "Petabyte": "0.001",
                        "Exabyte": "1.00E-06",
                        "Zettabyte": "1.00E-09",
                        "Yottabyte": "1.00E-12",
                        "Kilobit": "8.00E+09",
                        "Megabit": "8.00E+06",
                        "Gigabit": "8000"
                    },
                "Petabyte": {
                        "Bit": "8.00E+15",
                        "Byte": "1.00E+15",
                        "Kilobyte": "1.00E+12",
                        "Megabyte": "1.00E+09",
                        "Gigabyte": "1.00E+06",
                        "Terabyte": "1000",
                        "Exabyte": "0.001",
                        "Zettabyte": "1.00E-06",
                        "Yottabyte": "1.00E-09",
                        "Kilobit": "8.00E+12",
                        "Megabit": "8.00E+09",
                        "Gigabit": "8.00E+06"
                    },
                "Exabyte":{
                        "Bit": "8.00E+18",
                        "Byte": "1.00E+18",
                        "Kilobyte": "1.00E+15",
                        "Megabyte": "1.00E+12",
                        "Gigabyte": "1.00E+09",
                        "Terabyte": "1.00E+06",
                        "Petabyte": "1000",
                        "Zettabyte": "0.001",
                        "Yottabyte": "1.00E-06",
                        "Kilobit": "8.00E+15",
                        "Megabit": "8.00E+12",
                        "Gigabit": "8.00E+09"
                    },
                "Zettabyte":{
                        "Bit": "8.00E+21",
                        "Byte": "1.00E+21",
                        "Kilobyte": "1.00E+18",
                        "Megabyte": "1.00E+15",
                        "Gigabyte": "1.00E+12",
                        "Terabyte": "1.00E+09",
                        "Petabyte": "1.00E+06",
                        "Exabyte": "1000",
                        "Yottabyte": "0.001",
                        "Kilobit": "8.00E+18",
                        "Megabit": "8.00E+15",
                        "Gigabit": "8.00E+12"
                    },
                "Yottabyte":{
                        "Bit":"8E+24",
                        "Byte": "1.00E+24",
                        "Kilobyte": "1.00E+21",
                        "Megabyte": "1.00E+18",
                        "Gigabyte": "1.00E+15",
                        "Terabyte": "1.00E+12",
                        "Petabyte": "1.00E+09",
                        "Exabyte": "1.00E+06",
                        "Zettabyte": "1000",
                        "Kilobit": "8.00E+21",
                        "Megabit": "8.00E+18",
                        "Gigabit": "8.00E+15"
                    },
                "Kilobit": {
                        "Bit": "1000",
                        "Byte": "125",
                        "Kilobyte": "0.125",
                        "Megabyte": "1.25E-04",
                        "Gigabyte": "1.25E-07",
                        "Terabyte": "1.25E-10",
                        "Petabyte": "1.25E-13",
                        "Exabyte": "1.25E-16",
                        "Zettabyte": "1.25E-19",
                        "Yottabyte": "1.25E-22",
                        "Megabit": "0.001",
                        "Gigabit": "1.00E-06"
                    },
                "Megabit":{
                        "Bit": "1.00E+06",
                        "Byte": "125000",
                        "Kilobyte": "125",
                        "Megabyte": "0.125",
                        "Gigabyte": "1.25E-04",
                        "Terabyte": "1.25E-07",
                        "Petabyte": "1.25E-10",
                        "Exabyte": "1.25E-13",
                        "Zettabyte": "1.25E-16",
                        "Yottabyte": "1.25E-19",
                        "Kilobit": "1000",
                        "Gigabit": "0.001"
                    },
                "Gigabit":{
                        "Bit": "1.00E+09",
                        "Byte": "1.25E+08",
                        "Kilobyte": "125000",
                        "Megabyte": "125",
                        "Gigabyte": "0.125",
                        "Terabyte": "1.25E-04",
                        "Petabyte": "1.25E-07",
                        "Exabyte": "1.25E-10",
                        "Zettabyte": "1.25E-13",
                        "Yottabyte": "1.25E-16",
                        "Kilobit": "1.00E+06",
                        "Megabit": "1000"
                    }
        }
        
        let convertedValue = input1*conversions[data1][data2] ;
        if (data1===data2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,data1,data2,input1)
        resultInp.value = convertedValue;
};

function convertDensity(){
        const input1 = parseFloat(document.getElementById('inputDensity').value);
        const resultInp = document.getElementById("resultDensity");
        const density1 = document.getElementById('density1').value;
        const density2 = document.getElementById('density2').value;
        const resultDiv = document.getElementById('resultDensity2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Kilogram per cubic meter": {
                        "Gram per cubic centimeter": "0.001",
                        "Gram per liter": "1",
                        "Pound per cubic inch": "3.61E-05",
                        "Pound per cubic foot": "0.062428",
                        "Ounce per cubic inch": "0.000578043",
                        "Ton per cubic yard": "0.000842777",
                        "Kilogram per liter": "0.001",
                        "Milligram per liter": "1.00E+06",
                        "Carat per milliliter": "5"
                    },
                "Gram per cubic centimeter":{
                        "Kilogram per cubic meter": "1000",
                        "Gram per liter": "1000",
                        "Pound per cubic inch": "0.0361273",
                        "Pound per cubic foot": "62.428",
                        "Ounce per cubic inch": "0.578043",
                        "Ton per cubic yard": "0.842777",
                        "Kilogram per liter": "1",
                        "Milligram per liter": "1.00E+09",
                        "Carat per milliliter": "5000"
                    },
                "Gram per liter":{
                        "Kilogram per cubic meter": "1",
                        "Gram per cubic centimeter": "0.001",
                        "Pound per cubic inch": "3.61E-05",
                        "Pound per cubic foot": "0.062428",
                        "Ounce per cubic inch": "0.000578043",
                        "Ton per cubic yard": "0.000842777",
                        "Kilogram per liter": "0.001",
                        "Milligram per liter": "1000",
                        "Carat per milliliter": "5"
                    },
                'Pound per cubic inch':{
                        "Kilogram per cubic meter": "27679.9",
                        "Gram per cubic centimeter": "27.6799",
                        "Gram per liter": "27679.9",
                        "Pound per cubic foot": "1728",
                        "Ounce per cubic inch": "16",
                        "Ton per cubic yard": "23.9874",
                        "Kilogram per liter": "27.6799",
                        "Milligram per liter": "2.77E+07",
                        "Carat per milliliter": "5"
                    },
                "Pound per cubic foot":{
                        "Kilogram per cubic meter": "16.0185",
                        "Gram per cubic centimeter": "0.0160185",
                        "Gram per liter": "16.0185",
                        "Pound per cubic inch": "0.000578704",
                        "Ounce per cubic inch": "0.00925926",
                        "Ton per cubic yard": "0.0134162",
                        "Kilogram per liter": "0.0160185",
                        "Milligram per liter": "1.60E+04",
                        "Carat per milliliter": "80.0925"
                    },                
                "Ounce per cubic inch":{
                        "Kilogram per cubic meter": "1729.994",
                        "Gram per cubic centimeter": "1.729994",
                        "Gram per liter": "1729.994",
                        "Pound per cubic inch": "0.0625",
                        "Pound per cubic foot": "108",
                        "Ton per cubic yard": "1.499215",
                        "Kilogram per liter": "1.729994",
                        "Milligram per liter": "1.73E+06",
                        "Carat per milliliter": "8649.97"
                    },
                "Ton per cubic yard": {
                        "Kilogram per cubic meter": "1186.55",
                        "Gram per cubic centimeter": "1.18655",
                        "Gram per liter": "1186.55",
                        "Pound per cubic inch": "0.0416667",
                        "Pound per cubic foot": "2000",
                        "Ounce per cubic inch": "24",
                        "Kilogram per liter": "1.18655",
                        "Milligram per liter": "1.19E+06",
                        "Carat per milliliter": "5932.75"
                    },
                "Kilogram per liter":{
                        "Kilogram per cubic meter": "1000",
                        "Gram per cubic centimeter": "1",
                        "Gram per liter": "1000",
                        "Pound per cubic inch": "0.0361273",
                        "Pound per cubic foot": "62.428",
                        "Ounce per cubic inch": "0.578043",
                        "Ton per cubic yard": "0.842777",
                        "Milligram per liter": "1.00E+06",
                        "Carat per milliliter": "5000"
                    },
                "Milligram per liter": {
                        "Kilogram per cubic meter": "0.001",
                        "Gram per cubic centimeter": "1.00E-06",
                        "Gram per liter": "0.001",
                        "Pound per cubic inch": "3.61E-08",
                        "Pound per cubic foot": "6.24E-05",
                        "Ounce per cubic inch": "5.78E-07",
                        "Ton per cubic yard": "8.43E-07",
                        "Kilogram per liter": "1.00E-06",
                        "Carat per milliliter": "0.005"
                    },
                "Carat per milliliter":{
                        "Kilogram per cubic meter": "2000",
                        "Gram per cubic centimeter": "2",
                        "Gram per liter": "2000",
                        "Pound per cubic inch": "0.0722546",
                        "Pound per cubic foot": "124.855",
                        "Ounce per cubic inch": "1.15607",
                        "Ton per cubic yard": "1.68555",
                        "Kilogram per liter": "2",
                        "Milligram per liter": "2.00E+06"
                    }
        }
        
        let convertedValue =input1* conversions[density1][density2] ;
        if (time1===time2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,density1,density2,input1)
        resultInp.value = convertedValue;
};

function convertAngle(){
        const input1 = parseFloat(document.getElementById('inputAngle').value);
        const resultInp = document.getElementById("resultAngle");
        const angle1 = document.getElementById('angle1').value;
        const angle2 = document.getElementById('angle2').value;
        const resultDiv = document.getElementById('resultAngle2');

        if (isNaN(input1)) {
            resultDiv.innerHTML =error;
            resultInp.value = ""
            return;
        }
        // Conversion factors
        const conversions = {
                "Radian":{
                        "Degree": "57.29577951",
                        "Gradian": "63.66197724",
                        "Minute of arc": "3437.746771",
                        "Second of arc": "206264.8062",
                        "Circle": "0.159154943",
                        "Turn": "0.159154943"
                    },
                "Degree":{
                        "Radian": "0.017453293",
                        "Gradian": "1.111111111",
                        "Minute of arc": "60",
                        "Second of arc": "3600",
                        "Circle": "0.002777778",
                        "Turn": "0.002777778"
                    },
                "Gradian":{
                        "Radian": "0.015707963",
                        "Degree": "0.9",
                        "Minute of arc": "54",
                        "Second of arc": "3240",
                        "Circle": "0.0025",
                        "Turn": "0.0025"
                    },
                'Minute of arc':{
                        "Radian": "0.000290888",
                        "Degree": "0.016666667",
                        "Gradian": "0.018518519",
                        "Second of Arc": "60",
                        "Circle": "4.63E-05",
                        "Turn": "4.63E-05"
                    },
                "Second of arc":{
                        "Radian": "4.85E-06",
                        "Degree": "0.000277778",
                        "Gradian": "0.000308642",
                        "Minute of Arc": "0.016666667",
                        "Circle": "7.72E-07",
                        "Turn": "7.72E-07"
                    },                
                "Circle":{
                        "Radian": "6.283185307",
                        "Degree": "360",
                        "Gradian": "400",
                        "Minute of Arc": "21600",
                        "Second of Arc": "1296000",
                        "Turn": "1"
                    },
                "Turn": {
                        "Radian": "6.283185307",
                        "Degree": "360",
                        "Gradian": "400",
                        "Minute of Arc": "21600",
                        "Second of Arc": "1296000",
                        "Circle": "1"
                    }
        }
        
        let convertedValue =input1* conversions[angle1][angle2] ;
        if (angle1===angle2){
            convertedValue=input1
        }
        // Display the results
        resultDiv.innerHTML = func(convertedValue,angle1,angle2,input1)
        resultInp.value = convertedValue;
};

   
function showSection(sectionId) {
        console.log(sectionId)
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
          section.classList.remove('active');
        });
        const section1 = document.getElementById('section1');
        document.getElementById(sectionId).classList.add('active');
        section1.classList.add('hide')
  
}



function back(){
    const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
          section.classList.remove('active');
        });
    const section1 = document.getElementById('section1');
    section1.classList.remove('hide')
}
























