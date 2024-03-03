var arrayNum = [];

function validateInput(event) {
    const input = event.target.value;
    const numericInput = input.replace(/\D/g, '').slice(0, 8); // ตัดทุกอักขระที่ไม่ใช่ตัวเลขและใช้เฉพาะ 8 ตัวแรก

    event.target.value = numericInput; // กำหนดค่าใหม่ให้กับ input
}

function sendNumLotto() {
    var numLotto = document.getElementById("num_lotto").value;
    if (numLotto.length < 8 || numLotto.length > 8) {
        return false;
    }
    arrayNum = [];
    if(numLotto > 0){
        // แปลงตัวเลขใน numLotto เป็น string และแยกแต่ละหลัก
        for (var i = 0; i < numLotto.length; i++) {
            arrayNum.push(numLotto.charAt(i));
        }

        calculate(arrayNum)

    }else{
        return false;
    }


}

function refreshNumLotto() {
    document.getElementById("num_lotto").value = "";
    document.getElementById("tableGoodLuck").innerHTML = "";
    document.getElementById("tableLuckyNumber").innerHTML = "";
    document.getElementById("tableLucky").innerHTML = "";
    document.getElementById("tableCount").innerHTML = "";
    document.getElementById("tableLuckySimulation").innerHTML = "";
    document.getElementById("tableMerged").innerHTML = "";
    document.getElementById("tableNumMain").innerHTML = '';
    document.getElementById("tableNumTry").innerHTML = '';
    

    document.getElementById("tableGoodLuck").classList.remove("box-info");
    document.getElementById("tableLuckyNumber").classList.remove("box-info");
    document.getElementById("tableLucky").classList.remove("box-info");
    document.getElementById("tableCount").classList.remove("box-info");
    document.getElementById("tableLuckySimulation").classList.remove("box-info");
    document.getElementById("tableMerged").classList.remove("box-info");
    document.getElementById("tableNumMain").classList.remove("box-info");
    document.getElementById("tableNumTry").classList.remove("box-info");
}

var arrayLogNum = [];

function calculate(num){

    arrayLogNum = [];

    var num0 = num[0];
    var num1 = num[1];
    var num2 = num[2];
    var num3 = num[3];
    var num4 = num[4];
    var num5 = num[5];
    var num6 = num[6];
    var num7 = num[7];

    //ค่าคงที่ 0, 3, 5, 6, 7, 8

    var sum1 = parseInt(num3) + parseInt(num4) + parseInt(num5);
    var sum2 = parseInt(num5) + parseInt(num6) + parseInt(num7);
    var sum3 = parseInt(num2) + parseInt(num5) + parseInt(num5) + parseInt(num5) + parseInt(num5) + parseInt(num7);

    var result1 = parseInt(getLastDigit(parseInt(getLastDigit(sum1)) + 6));
    var result2 = parseInt(getLastDigit(parseInt(getLastDigit(sum1)) + 5));
    var result3 = parseInt(getLastDigit(parseInt(getLastDigit(sum2)) + 7));
    var result4 = parseInt(getLastDigit(parseInt(getLastDigit(sum2)) + 8));

    var result5 = parseInt(getLastDigit(sum3 + 0));
    var result6 = parseInt(getLastDigit(sum3 + 3));
    var result7 = parseInt(getLastDigit(sum3 + 5));
    var result8 = parseInt(getLastDigit(sum3 + 8));
    
    arrayLogNum.push(result1);
    arrayLogNum.push(result2);
    arrayLogNum.push(result3);
    arrayLogNum.push(result4);
    arrayLogNum.push(result5);
    arrayLogNum.push(result6);
    arrayLogNum.push(result7);
    arrayLogNum.push(result8);

    var htmlTableGoodLuck = `
    <span class="line-clamp">Index.</span>
    <table>
        <tr>
        <td>${result1}</td>
        <td>${result2}</td>
        <td>${result3}</td>
        <td>${result4}</td>
        </tr>
        <tr>
        <td>${result5}</td>
        <td>${result6}</td>
        <td>${result7}</td>
        <td>${result8}</td>
        </tr>
    </table>`;

    document.getElementById("tableGoodLuck").innerHTML = '';
    document.getElementById("tableGoodLuck").classList.remove("box-info");

    document.getElementById("tableGoodLuck").innerHTML = htmlTableGoodLuck;
    document.getElementById("tableGoodLuck").classList.add("box-info");

    let counts = {};

    for (let num of arrayLogNum) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let table = "<table>";
    table += `<tr>
                <th>Index</th>
                <th>AmountDuplicate</th>
            </tr>`;

    for (let num in counts) {
        if (counts[num] > 1) {
            // เพิ่มแต่ละแถวของตารางด้วยข้อมูลที่ตรวจพบ
            table += `<tr>
                        <td>${num[0]}</td>
                        <td>${counts[num]}</td>
                    </tr>`;
        }
    }
    table += `</table>`;

    document.getElementById("tableCount").innerHTML = '';
    document.getElementById("tableCount").classList.remove("box-info");

    document.getElementById("tableCount").innerHTML = table;
    document.getElementById("tableCount").classList.add("box-info");

    var luckyNumber1 = arrayLogNum[2].toString() + arrayLogNum[3].toString();
    var luckyNumber2 = arrayLogNum[1].toString() + arrayLogNum[0].toString();
    var luckyNumber3 = arrayLogNum[2].toString() + arrayLogNum[1].toString();

    var luckyNumber4 = arrayLogNum[3].toString() + arrayLogNum[0].toString();
    var luckyNumber5 = arrayLogNum[2].toString() + arrayLogNum[0].toString();
    var luckyNumber6 = arrayLogNum[3].toString() + arrayLogNum[1].toString();

    var luckyNumber7 = arrayLogNum[7].toString() + arrayLogNum[4].toString();
    var luckyNumber8 = arrayLogNum[5].toString() + arrayLogNum[6].toString();
    var luckyNumber9 = arrayLogNum[7].toString() + arrayLogNum[5].toString();

    var luckyNumber10 = arrayLogNum[4].toString() + arrayLogNum[6].toString();
    var luckyNumber11 = arrayLogNum[7].toString() + arrayLogNum[6].toString();
    var luckyNumber12 = arrayLogNum[4].toString() + arrayLogNum[5].toString();

    var luckyNumber13 = arrayLogNum[1].toString() + arrayLogNum[6].toString();
    var luckyNumber14 = arrayLogNum[2].toString() + arrayLogNum[5].toString();
    var luckyNumber15 = arrayLogNum[4].toString() + arrayLogNum[1].toString();

    var luckyNumber16 = arrayLogNum[5].toString() + arrayLogNum[0].toString();
    var luckyNumber17 = arrayLogNum[4].toString() + arrayLogNum[0].toString();
    var luckyNumber18 = arrayLogNum[5].toString() + arrayLogNum[1].toString();

    var luckyNumber19 = arrayLogNum[7].toString() + arrayLogNum[2].toString();
    var luckyNumber20 = arrayLogNum[3].toString() + arrayLogNum[6].toString();
    var luckyNumber21 = arrayLogNum[3].toString() + arrayLogNum[7].toString();

    var luckyNumber22 = arrayLogNum[2].toString() + arrayLogNum[6].toString();
    var luckyNumber23 = arrayLogNum[7].toString() + arrayLogNum[6].toString();
    var luckyNumber24 = arrayLogNum[3].toString() + arrayLogNum[2].toString();

    var luckyNumber25 = arrayLogNum[3].toString() + arrayLogNum[4].toString();

    var arrayLucky = [];

    arrayLucky.push(luckyNumber1);
    arrayLucky.push(luckyNumber2);
    arrayLucky.push(luckyNumber3);

    arrayLucky.push(luckyNumber4);
    arrayLucky.push(luckyNumber5);
    arrayLucky.push(luckyNumber6);

    arrayLucky.push(luckyNumber7);
    arrayLucky.push(luckyNumber8);
    arrayLucky.push(luckyNumber9);

    arrayLucky.push(luckyNumber10);
    arrayLucky.push(luckyNumber11);
    arrayLucky.push(luckyNumber12);

    arrayLucky.push(luckyNumber13);
    arrayLucky.push(luckyNumber14);
    arrayLucky.push(luckyNumber15);

    arrayLucky.push(luckyNumber16);
    arrayLucky.push(luckyNumber17);
    arrayLucky.push(luckyNumber18);

    arrayLucky.push(luckyNumber19);
    arrayLucky.push(luckyNumber20);
    arrayLucky.push(luckyNumber21);

    arrayLucky.push(luckyNumber22);
    arrayLucky.push(luckyNumber23);
    arrayLucky.push(luckyNumber24);

    arrayLucky.push(luckyNumber25);


var uniqueLuckyNumbers = new Set(arrayLucky);
var uniqueArrayLucky = Array.from(uniqueLuckyNumbers);
var htmlTableLuckyNumber = '<table>';

for (let index = 0; index < uniqueArrayLucky.length; index++) {
    // เมื่อเริ่มแถวใหม่ (หรือถ้าเป็นแถวแรก) ให้เริ่มแถวใหม่ในตาราง
    if (index % 7 === 0) {
        htmlTableLuckyNumber += '<tr>';
    }

    const element = uniqueArrayLucky[index];
    // เพิ่มเลขโชคดีลงในคอลัมน์ในแถวปัจจุบัน
    htmlTableLuckyNumber += `<td>${element}</td>`;

    // เมื่อครบ 3 คอลัมน์ ให้ปิดแถวปัจจุบัน
    if ((index + 1) % 7 === 0 || index === uniqueArrayLucky.length - 1) {
        htmlTableLuckyNumber += '</tr>';
    }
}

htmlTableLuckyNumber += '</table>';

document.getElementById("tableLuckyNumber").innerHTML = '';
document.getElementById("tableLuckyNumber").classList.remove("box-info");

document.getElementById("tableLuckyNumber").innerHTML = htmlTableLuckyNumber;
document.getElementById("tableLuckyNumber").classList.add("box-info");


const uniqueNumberslast = new Set(arrayLucky);

const groupedNumberslast = {};
uniqueNumberslast.forEach((number) => {
    const key = number.slice(-1); 
    if (!groupedNumberslast[key]) {
        groupedNumberslast[key] = [];
    }
    groupedNumberslast[key].push(number);
});
buildTableLucky(groupedNumberslast);

const uniqueNumbersfirst = new Set(arrayLucky);

const groupedNumbersfirst = {};
uniqueNumbersfirst.forEach((number) => {
    const key = number.slice(0, 1); 
    if (!groupedNumbersfirst[key]) {
        groupedNumbersfirst[key] = [];
    }
    groupedNumbersfirst[key].push(number);
});
buildTableLuckySimulation(groupedNumbersfirst);

let mergedNumbers = {};

for (let key in groupedNumberslast) {
    if (groupedNumbersfirst.hasOwnProperty(key)) {
        let numbersFromLast = groupedNumberslast[key];
        let numbersFromFirst = groupedNumbersfirst[key];
        let mergedArray = [...new Set([...numbersFromLast, ...numbersFromFirst])];
        mergedNumbers[key] = mergedArray;
    }
}
buildTableMergedNumbers(mergedNumbers);

const uniqueValues = new Set();
const duplicateValues = new Set();

for (let key in mergedNumbers) {
    if (mergedNumbers.hasOwnProperty(key)) {
        let subArray = mergedNumbers[key];
        subArray.forEach(value => {
            if (uniqueValues.has(value)) {
                duplicateValues.add(value);
            } else {
                uniqueValues.add(value);
            }
        });
    }
}
const duplicatesArray = [...duplicateValues];
buildTableNumMain(duplicatesArray);


const uniqueValuesNotDuplicate = {};
const printedValues = []; // สร้างอาร์เรย์เพื่อเก็บค่าที่ถูกพิมพ์

for (let key in mergedNumbers) {
    if (mergedNumbers.hasOwnProperty(key)) {
        let subArray = mergedNumbers[key];
        subArray.forEach(value => {
            uniqueValuesNotDuplicate[value] = (uniqueValuesNotDuplicate[value] || 0) + 1;
        });
    }
}

for (let value in uniqueValuesNotDuplicate) {
    if (uniqueValuesNotDuplicate[value] === 1) {
        printedValues.push(value); // เพิ่มค่าลงในอาร์เรย์เมื่อค่าถูกพิมพ์
    }
}
buildTableNumTry(printedValues);


} 

function buildTableLucky(groupedNumberslast) {
    var htmlTableLucky = `<table>
        <tr>
            <th>Index</th>
            <th>LuckyNumbers</th>
        </tr>`;
    for (const key in groupedNumberslast) {
        htmlTableLucky += `
            <tr>
                <td>Index ${key} :</td>
                <td>(${groupedNumberslast[key].join(', ')})</td>
            </tr>`;
    }

    htmlTableLucky += `</table>`;


    document.getElementById("tableLucky").innerHTML = '';
    document.getElementById("tableLucky").classList.remove("box-info");

    document.getElementById('tableLucky').innerHTML = htmlTableLucky;
    document.getElementById("tableLucky").classList.add("box-info");
}

function buildTableLuckySimulation(groupedNumbersfirst) {
    var htmlTableLuckySimulation = `<table>
        <tr>
            <th>Index</th>
            <th>LuckyNumbers</th>
        </tr>`;
    for (const key in groupedNumbersfirst) {
        htmlTableLuckySimulation += `
            <tr>
                <td>Index ${key} :</td>
                <td>(${groupedNumbersfirst[key].join(', ')})</td>
            </tr>`;
    }

    htmlTableLuckySimulation += `</table>`;


    document.getElementById("tableLuckySimulation").innerHTML = '';
    document.getElementById("tableLuckySimulation").classList.remove("box-info");

    document.getElementById('tableLuckySimulation').innerHTML = htmlTableLuckySimulation;
    document.getElementById("tableLuckySimulation").classList.add("box-info");
}

function buildTableMergedNumbers(obj) {

    var htmlTableMerged = `<table>
            <tr>
                <th>Set :</th>
                <th>LuckyNumbers</th>
            </tr>`;
    for (const key in obj) {
        htmlTableMerged += `
            <tr>
                <td>${key} :</td>
                <td>(${obj[key].join(', ')})</td>
            </tr>`;
    }

    htmlTableMerged += `</table>`;

    document.getElementById("tableMerged").innerHTML = '';
    document.getElementById("tableMerged").classList.remove("box-info");

    document.getElementById('tableMerged').innerHTML = htmlTableMerged;
    document.getElementById("tableMerged").classList.add("box-info");
}

function buildTableNumMain(duplicatesArray){

    var htmlTableNumMain = '<span class="line-clamp">lucky number main.</span><table>';

    for (let index = 0; index < duplicatesArray.length; index++) {
        if (index % 7 === 0) {
            htmlTableNumMain += '<tr>';
        }

        const element = duplicatesArray[index];
        htmlTableNumMain += `<td>${element}</td>`;

        if ((index + 1) % 7 === 0 || index === duplicatesArray.length - 1) {
            htmlTableNumMain += '</tr>';
        }
    }

    htmlTableNumMain += '</table>';

    document.getElementById("tableNumMain").innerHTML = '';
    document.getElementById("tableNumMain").classList.remove("box-info");

    document.getElementById('tableNumMain').innerHTML = htmlTableNumMain;
    document.getElementById("tableNumMain").classList.add("box-info");


}

function buildTableNumTry(printedValues){

    var htmlTableNumTry = '<span class="line-clamp">lucky number try.</span><table>';

    for (let index = 0; index < printedValues.length; index++) {
        if (index % 7 === 0) {
            htmlTableNumTry += '<tr>';
        }

        const element = printedValues[index];
        htmlTableNumTry += `<td>${element}</td>`;

        if ((index + 1) % 7 === 0 || index === printedValues.length - 1) {
            htmlTableNumTry += '</tr>';
        }
    }

    htmlTableNumTry += '</table>';

    document.getElementById("tableNumTry").innerHTML = '';
    document.getElementById("tableNumTry").classList.remove("box-info");

    document.getElementById('tableNumTry').innerHTML = htmlTableNumTry;
    document.getElementById("tableNumTry").classList.add("box-info");

}

function getLastDigit(number) {
    return number.toString().charAt(number.toString().length - 1);
}
