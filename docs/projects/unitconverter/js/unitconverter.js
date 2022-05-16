
function converterMass(i, o){
    if(i=="kilo"&&o=="hecto"){document.getElementById("output").innerHTML=(Math.round(input.value*10));}
    else if(i=="kilo"&&o=="gram"){document.getElementById("output").innerHTML=(Math.round(input.value*1000));}
    else if(i=="kilo"&&o=="stone"){document.getElementById("output").innerHTML=(Math.round(input.value/6.35));}
    else if(i=="kilo"&&o=="pound"){document.getElementById("output").innerHTML=(Math.round(input.value*2.205));}
    else if(i=="kilo"&&o=="ounce"){document.getElementById("output").innerHTML=(Math.round(input.value*35.274));}

    else if(i=="hecto"&&o=="kilo"){document.getElementById("output").innerHTML=(Math.round(input.value*0.1));}
    else if(i=="hecto"&&o=="gram"){document.getElementById("output").innerHTML=(Math.round(input.value*100));}
    else if(i=="hecto"&&o=="stone"){document.getElementById("output").innerHTML=(Math.round(input.value/63.5));}
    else if(i=="hecto"&&o=="pound"){document.getElementById("output").innerHTML=(Math.round(input.value*0.2205));}
    else if(i=="hecto"&&o=="ounce"){document.getElementById("output").innerHTML=(Math.round(input.value*3.5274));}

    else if(i=="gram"&&o=="kilo"){document.getElementById("output").innerHTML=(Math.round(input.value*0.001));}
    else if(i=="gram"&&o=="hecto"){document.getElementById("output").innerHTML=(Math.round(input.value*0.01));}
    else if(i=="gram"&&o=="stone"){document.getElementById("output").innerHTML=(Math.round(input.value/635));}
    else if(i=="gram"&&o=="pound"){document.getElementById("output").innerHTML=(Math.round(input.value/454));}
    else if(i=="gram"&&o=="ounce"){document.getElementById("output").innerHTML=(Math.round(input.value/28.35));}

    else if(i=="stone"&&o=="kilo"){document.getElementById("output").innerHTML=(Math.round(input.value*6.35));}
    else if(i=="stone"&&o=="hecto"){document.getElementById("output").innerHTML=(Math.round(input.value*63.5));}
    else if(i=="stone"&&o=="gram"){document.getElementById("output").innerHTML=(Math.round(input.value*6350));}
    else if(i=="stone"&&o=="pound"){document.getElementById("output").innerHTML=(Math.round(input.value*14));}
    else if(i=="stone"&&o=="ounce"){document.getElementById("output").innerHTML=(Math.round(input.value*224));}

    else if(i=="pound"&&o=="kilo"){document.getElementById("output").innerHTML=(Math.round(input.value/2.205));}
    else if(i=="pound"&&o=="hecto"){document.getElementById("output").innerHTML=(Math.round(input.value/22.05));}
    else if(i=="pound"&&o=="gram"){document.getElementById("output").innerHTML=(Math.round(input.value*454));}
    else if(i=="pound"&&o=="stone"){document.getElementById("output").innerHTML=(Math.round(input.value/14));}
    else if(i=="pound"&&o=="ounce"){document.getElementById("output").innerHTML=(Math.round(input.value*16));}

    else if(i=="ounce"&&o=="kilo"){document.getElementById("output").innerHTML=(Math.round(input.value/35.274));}
    else if(i=="ounce"&&o=="hecto"){document.getElementById("output").innerHTML=(Math.round(input.value/3.5274));}
    else if(i=="ounce"&&o=="gram"){document.getElementById("output").innerHTML=(Math.round(input.value*28.35));}
    else if(i=="ounce"&&o=="stone"){document.getElementById("output").innerHTML=(Math.round(input.value/224));}
    else if(i=="ounce"&&o=="pound"){document.getElementById("output").innerHTML=(Math.round(input.value/16));}

    else if(i==o){document.getElementById("output").innerHTML=input.value;}
    else{document.getElementById("output").innerHTML="please select both units";}
}
function converterDistance(i2, o2){
    if(i2=="meter"&&o2=="mile"){document.getElementById("output2").innerHTML=(Math.round(input2.value/1609));}
    else if(i2=="meter"&&o2=="yard"){document.getElementById("output2").innerHTML=(Math.round(input2.value*1.094));}
    else if(i2=="meter"&&o2=="foot"){document.getElementById("output2").innerHTML=(Math.round(input2.value*3.281));}
    else if(i2=="meter"&&o2=="inch"){document.getElementById("output2").innerHTML=(Math.round(input2.value*39.37));}
    else if(i2=="meter"&&o2=="nmi"){document.getElementById("output2").innerHTML=(Math.round(input2.value/1852));}

    else if(i2=="mile"&&o2=="meter"){document.getElementById("output2").innerHTML=(Math.round(input2.value*1609));}
    else if(i2=="mile"&&o2=="yard"){document.getElementById("output2").innerHTML=(Math.round(input2.value*1760));}
    else if(i2=="mile"&&o2=="foot"){document.getElementById("output2").innerHTML=(Math.round(input2.value*5280));}
    else if(i2=="mile"&&o2=="inch"){document.getElementById("output2").innerHTML=(Math.round(input2.value*63360));}
    else if(i2=="mile"&&o2=="nmi"){document.getElementById("output2").innerHTML=(Math.round(input2.value/1.151));}

    else if(i2=="yard"&&o2=="meter"){document.getElementById("output2").innerHTML=(Math.round(input2.value/1.094));}
    else if(i2=="yard"&&o2=="mile"){document.getElementById("output2").innerHTML=(Math.round(input2.value/1760));}
    else if(i2=="yard"&&o2=="foot"){document.getElementById("output2").innerHTML=(Math.round(input2.value*3));}
    else if(i2=="yard"&&o2=="inch"){document.getElementById("output2").innerHTML=(Math.round(input2.value*36));}
    else if(i2=="yard"&&o2=="nmi"){document.getElementById("output2").innerHTML=(Math.round(input2.value/2025));}

    else if(i2=="foot"&&o2=="meter"){document.getElementById("output2").innerHTML=(Math.round(input2.value/3.281));}
    else if(i2=="foot"&&o2=="mile"){document.getElementById("output2").innerHTML=(Math.round(input2.value/63360));}
    else if(i2=="foot"&&o2=="yard"){document.getElementById("output2").innerHTML=(Math.round(input2.value/36));}
    else if(i2=="foot"&&o2=="inch"){document.getElementById("output2").innerHTML=(Math.round(input2.value*12));}
    else if(i2=="foot"&&o2=="nmi"){document.getElementById("output2").innerHTML=(Math.round(input2.value/6076));}

    else if(i2=="inch"&&o2=="meter"){document.getElementById("output2").innerHTML=(Math.round(input2.value/39.37));}
    else if(i2=="inch"&&o2=="mile"){document.getElementById("output2").innerHTML=(Math.round(input2.value/5280));}
    else if(i2=="inch"&&o2=="yard"){document.getElementById("output2").innerHTML=(Math.round(input2.value/3));}
    else if(i2=="inch"&&o2=="foot"){document.getElementById("output2").innerHTML=(Math.round(input2.value/12));}
    else if(i2=="inch"&&o2=="nmi"){document.getElementById("output2").innerHTML=(Math.round(input2.value/72913));}

    else if(i2=="nmi"&&o2=="meter"){document.getElementById("output2").innerHTML=(Math.round(input2.value*1852));}
    else if(i2=="nmi"&&o2=="mile"){document.getElementById("output2").innerHTML=(Math.round(input2.value*1.151));}
    else if(i2=="nmi"&&o2=="yard"){document.getElementById("output2").innerHTML=(Math.round(input2.value*2025));}
    else if(i2=="nmi"&&o2=="foot"){document.getElementById("output2").innerHTML=(Math.round(input2.value*6076));}
    else if(i2=="nmi"&&o2=="inch"){document.getElementById("output2").innerHTML=(Math.round(input2.value*72913));}

    else if(i2==o2){document.getElementById("output2").innerHTML=input2.value;}
    else{document.getElementById("output2").innerHTML="please select both units";}
}