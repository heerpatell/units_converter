const calculate = () =>{
    const unitNum = document.getElementById('inp').value;
    const from = document.getElementById('from');
    const to = document.getElementById('To');
    const ansField = document.getElementById('ansField');

    const valueOfFrom = from.options[from.selectedIndex].value;
    const valueOfTo = to.options[to.selectedIndex].value;
    
        const MetToCm = (x) =>{
            let y=x*100;
            return y;
        }
        const MetToKm =(x) =>{
            let y=x/1000;
            return y;
        }
        const MetToFt =(x) =>{
            let y=x*3.28084;
            return y;
        }
        const MetToIn =(x) =>{
            let y=x*39.37008;
            return y;
        }
        const MetToMil =(x) =>{
            let y=x/1609;
            return y;
        }
        const MetToMillimetre =(x) =>{
            let y=x*1000;
            return y;
        }
        const MetToYard =(x) =>{
            let y=x*1.094;
            return y;
        }

        const CmToMet =(x) =>{
            let y=x/100;
            return y;
        }
        const CmToKm =(x) =>{
            let y=x/100000;
            return y;
        }
        const CmToFoot =(x) =>{
            let y=x/30.48;
            return y;
        }
        const CmToInch =(x) =>{
            let y=x/2.54;
            return y;
        }
        const CmToMile =(x) =>{
            let y=x/160934;
            return y;
        }
        const CmToMillimetre =(x) =>{
            let y=x*10;
            return y;
        }
        const CmToYard =(x) =>{
            let y=x/91.44;
            return y;
        }

        const KmToMet =(x) =>{
            let y=x*1000;
            return y;
        }
        const KmToCm =(x) =>{
            let y=x*100000;
            return y;
        }
        const KmToFoot =(x) =>{
            let y=x* 3281;
            return y;
        }
        const KmToInch =(x) =>{
            let y=x*39370;
            return y;
        }
        const KmToYard =(x) =>{
            let y=x*1094;
            return y;
        }
        const KmToMillimetre =(x) =>{
            let y=x*1e+6;
            return y;
        }
        const KmToMile =(x) =>{
            let y=x/1.609;
            return y;
        }

        const FtToMet =(x) =>{
            let y=x/3.281;
            return y;
        }
        const FtToCm =(x) =>{
            let y=x*30.48;
            return y;
        }
        const FtToKm =(x) =>{
            let y=x/3281;
            return y;
        }
        const FtToInch =(x) =>{
            let y=x*12;
            return y;
        }
        const FtToYard =(x) =>{
            let y=x/3;
            return y;
        }
        const FtToMillimetre =(x) =>{
            let y=x*305;
            return y;
        }
        const FtToMile =(x) =>{
            let y=x/5280;
            return y;
        }

        const InToMet =(x) =>{
            let y=x/39.37;
            return y;
        }
        const InToCm =(x) =>{
            let y=x*2.54;
            return y;
        }
        const InToKm =(x) =>{
            let y=x/39370;
            return y;
        }
        const InToFoot =(x) =>{
            let y=x/12;
            return y;
        }
        const InToYard =(x) =>{
            let y=x/36;
            return y;
        }
        const InToMillimetre =(x) =>{
            let y=x*25.4;
            return y;
        }
        const InToMile =(x) =>{
            let y=x/63360;
            return y;
        }

        const MileToMet =(x) =>{
            let y=x*1609;
            return y;
        }
        const MileToCm =(x) =>{
            let y=x*160934;
            return y;
        }
        const MileToKm =(x) =>{
            let y=x*1.609;
            return y;
        }
        const MileToFoot =(x) =>{
            let y=x*5280;
            return y;
        }
        const MileToYard =(x) =>{
            let y=x*1760;
            return y;
        }
        const MileToMillimetre =(x) =>{
            let y=x*1.609e+6;
            return y;
        }
        const MileToInch =(x) =>{
            let y=x* 63360;
            return y;
        }

        const MillimetreToMet =(x) =>{
            let y=x/1000;
            return y;
        }
        const MillimetreToCm =(x) =>{
            let y=x/10;
            return y;
        }
        const MillimetreToKm =(x) =>{
            let y=x/1e+6;
            return y;
        }
        const MillimetreToFoot =(x) =>{
            let y=x/305;
            return y;
        }
        const MillimetreToYard =(x) =>{
            let y=x/914;
            return y;
        }
        const MillimetreToMile =(x) =>{
            let y=x/1.609e+6;
            return y;
        }
        const MillimetreToInch =(x) =>{
            let y=x/25.4;
            return y;
        }

        const YardToMet =(x) =>{
            let y=x/1.094;
            return y;
        }
        const YardToCm =(x) =>{
            let y=x*91.44;
            return y;
        }
        const YardToKm =(x) =>{
            let y=x/1094;
            return y;
        }
        const YardToFoot =(x) =>{
            let y=x*3;
            return y;
        }
        const YardToMillimetre =(x) =>{
            let y=x*914;
            return y;
        }
        const YardToMile =(x) =>{
            let y=x/ 1760;
            return y;
        }
        const YardToInch =(x) =>{
            let y=x*36;
            return y;
        }

        let result;
        if(valueOfFrom == 'Meter' && valueOfTo =="Centimeter"){
            result = MetToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Kilometer"){
            result = MetToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Foot"){
            result = MetToFt(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Inch"){
            result = MetToIn(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Mile"){
            result = MetToMil(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Millimetre"){
            result = MetToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Yard"){
            result = MetToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Meter' && valueOfTo =="Meter"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Kilometer' && valueOfTo =="Meter"){
            result = KmToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Centimeter"){
            result =KmToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Foot"){
            result = KmToFoot(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Inch"){
            result = KmToInch(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Mile"){
            result = KmToMile(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Millimetre"){
            result = KmToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Yard"){
            result = KmToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Kilometer' && valueOfTo =="Kilometer"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Centimeter' && valueOfTo =="Meter"){   
            result = CmToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Foot"){   
            result = CmToFoot(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Inch"){   
            result = CmToInch(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Kilometer"){   
            result = CmToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Millimetre"){   
            result = CmToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Mile"){   
            result = CmToMile(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Yard"){   
            result = CmToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Centimeter' && valueOfTo =="Centimeter"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Foot' && valueOfTo =="Meter"){   
            result = InToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Kilometer"){   
            result = FtToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Inch"){   
            result = FtToInch(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Centimeter"){   
            result = FtToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Millimetre"){   
            result = FtToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Mile"){   
            result = FtToMile(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Yard"){   
            result = FtToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Foot' && valueOfTo =="Foot"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Inch' && valueOfTo =="Meter"){   
            result = InToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Kilometer"){   
            result = InToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Foot"){   
            result = InToFoot(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Centimeter"){   
            result = InToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Millimetre"){   
            result = InToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Mile"){   
            result = InToMile(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Yard"){   
            result = InToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Inch' && valueOfTo =="Inch"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Mile' && valueOfTo =="Meter"){   
            result = MileToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Kilometer"){   
            result = MileToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Foot"){   
            result = MileToFoot(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Centimeter"){   
            result = MileToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Millimetre"){   
            result = MileToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Inch"){   
            result = MileToInch(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Yard"){   
            result = MileToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Mile' && valueOfTo =="Mile"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Millimetre' && valueOfTo =="Meter"){   
            result = MillimetreToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Kilometer"){   
            result = MillimetreToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Foot"){   
            result = MillimetreToFoot(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Centimeter"){   
            result = MillimetreToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Mile"){   
            result = MillimetreToMile(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Inch"){   
            result = MillimetreToInch(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Yard"){   
            result = MillimetreToYard(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Millimetre' && valueOfTo =="Millimetre"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
        else if(valueOfFrom == 'Yard' && valueOfTo =="Meter"){   
            result = YardToMet(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Kilometer"){   
            result = YardToKm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Foot"){   
            result = YardToFoot(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Centimeter"){   
            result = YardToCm(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Mile"){   
            result = YardToMile(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Inch"){   
            result = YardToInch(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Millimetre"){   
            result = YardToMillimetre(unitNum);
            console.log(result);
            document.getElementById('result').innerHTML=`${unitNum} ${valueOfFrom} = ${result} ${valueOfTo}`;
            ansField.value=`${result}`;
        }else if(valueOfFrom == 'Yard' && valueOfTo =="Yard"){
            document.getElementById('result').innerHTML=`Oops! check again unit pls!`;
            ansField.value= 0 ;
        }
    }
