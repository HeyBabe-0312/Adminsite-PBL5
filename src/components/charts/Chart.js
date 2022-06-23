import React,{useState, useEffect} from 'react';
import "./chart.css";
import { Line } from "react-chartjs-2";

var today =  new Date((new Date()).valueOf()).toLocaleDateString('fr-CA');
var yesterday = new Date((new Date()).valueOf() - 86400000).toLocaleDateString('fr-CA');
var yesterday2 = new Date((new Date()).valueOf() - 172800000).toLocaleDateString('fr-CA');
var yesterday3 = new Date((new Date()).valueOf() - 259200000).toLocaleDateString('fr-CA');
var yesterday4 = new Date((new Date()).valueOf() - 345600000).toLocaleDateString('fr-CA');
var yesterday5 = new Date((new Date()).valueOf() - 432000000).toLocaleDateString('fr-CA');
var yesterday6 = new Date((new Date()).valueOf() - 518400000).toLocaleDateString('fr-CA');
var lastmonth = new Date();
lastmonth.setMonth(lastmonth.getMonth()-1);
var lastmonth2 = new Date();
lastmonth2.setMonth(lastmonth2.getMonth()-2);
var lastmonth3 = new Date();
lastmonth3.setMonth(lastmonth3.getMonth()-3);
var lastmonth4 = new Date();
lastmonth4.setMonth(lastmonth4.getMonth()-4);
var lastmonth5 = new Date();
lastmonth5.setMonth(lastmonth5.getMonth()-5);
var lastmonth6 = new Date();
lastmonth6.setMonth(lastmonth6.getMonth()-6);
var lastmonth7 = new Date();
lastmonth7.setMonth(lastmonth7.getMonth()-7);
var lastmonth8 = new Date();
lastmonth8.setMonth(lastmonth8.getMonth()-8);
var lastmonth9 = new Date();
lastmonth9.setMonth(lastmonth9.getMonth()-9);
var lastmonth10 = new Date();
lastmonth10.setMonth(lastmonth10.getMonth()-10);
var lastmonth11 = new Date();
lastmonth11.setMonth(lastmonth11.getMonth()-11);

var arrDayOfWeek = [];

for(let i = 7; i < 84; i++){
  var days = new Date();
  days.setDate(days.getDate()-i);
  arrDayOfWeek.push(days.toLocaleDateString('fr-CA'));
}
var todayV = [], yesterdayV = [], yesterday2V = [], yesterday3V = [], yesterday4V = [], yesterday5V = [], yesterday6V = [];
var lastMV = [], lastMV1 = [], lastMV2 = [], lastMV3 = [], lastMV4 = [], lastMV5 =[], lastMV6 = [], lastMV7 = [], lastMV8 = [], lastMV9 = [], lastMV10 = [], lastMV11 = [];
var weekMV1 = [], weekMV2 = [], weekMV3 = [], weekMV4 = [], weekMV5 =[], weekMV6 = [], weekMV7 = [], weekMV8 = [], weekMV9 = [], weekMV10 = [], weekMV11 = [];
export default function Chart({typeR,dataVenue}) {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [monthV, setMonthV] = useState(0);
  const [monthV1, setMonthV1] = useState(0);
  const [monthV2, setMonthV2] = useState(0);
  const [monthV3, setMonthV3] = useState(0);
  const [monthV4, setMonthV4] = useState(0);
  const [monthV5, setMonthV5] = useState(0);
  const [monthV6, setMonthV6] = useState(0);
  const [monthV7, setMonthV7] = useState(0);
  const [monthV8, setMonthV8] = useState(0);
  const [monthV9, setMonthV9] = useState(0);
  const [monthV10, setMonthV10] = useState(0);
  const [monthV11, setMonthV11] = useState(0);
  const [weekV1, setWeekV1] = useState(0);
  const [weekV2, setWeekV2] = useState(0);
  const [weekV3, setWeekV3] = useState(0);
  const [weekV4, setWeekV4] = useState(0);
  const [weekV5, setWeekV5] = useState(0);
  const [weekV6, setWeekV6] = useState(0);
  const [weekV7, setWeekV7] = useState(0);
  const [weekV8, setWeekV8] = useState(0);
  const [weekV9, setWeekV9] = useState(0);
  const [weekV10, setWeekV10] = useState(0);
  const [weekV11, setWeekV11] = useState(0);
  useEffect(() => {
    var todaySum = 0, ySum = 0, y2Sum = 0, y3Sum = 0, y4Sum = 0, y5Sum =0, y6Sum =0;
    var mSum = 0, mSum1 = 0, mSum2 = 0, mSum3 = 0, mSum4 =0, mSum5 =0, mSum6 =0, mSum7 =0, mSum8 =0, mSum9 =0, mSum10 =0, mSum11 =0; 
    var wSum1 = 0, wSum2 = 0, wSum3 = 0, wSum4 =0, wSum5 =0, wSum6 =0, wSum7 =0, wSum8 =0, wSum9 =0, wSum10 =0, wSum11 =0; 
    todayV = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(today) > -1;
    });
    todayV.map((d)=>{
      todaySum += d.so_tien;
    }); setValue(todaySum);
    yesterdayV = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(yesterday) > -1;
    }); 
    yesterdayV.map((d)=>{
      ySum += d.so_tien;
    }); setValue1(ySum);
    yesterday2V = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(yesterday2) > -1;
    });
    yesterday2V.map((d)=>{
      y2Sum += d.so_tien;
    }); setValue2(y2Sum);
    yesterday3V = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(yesterday3) > -1;
    });
    yesterday3V.map((d)=>{
      y3Sum += d.so_tien;
    }); setValue3(y3Sum);
    yesterday4V = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(yesterday4) > -1;
    });
    yesterday4V.map((d)=>{
      y4Sum += d.so_tien;
    }); setValue4(y4Sum);
    yesterday5V = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(yesterday5) > -1;
    });
    yesterday5V.map((d)=>{
      y5Sum += d.so_tien;
    }); setValue5(y5Sum);
    yesterday6V = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(yesterday6) > -1;
    }); 
    yesterday6V.map((d)=>{
      y6Sum += d.so_tien;
    }); setValue6(y6Sum);
    //Week 
    weekMV1 = dataVenue.result.filter(function (el) {
      var i = 0;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV1.map((d)=>{
      wSum1 += d.so_tien;
    }); setWeekV1(wSum1);
    weekMV2 = dataVenue.result.filter(function (el) {
      var i = 7;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV2.map((d)=>{
      wSum2 += d.so_tien;
    }); setWeekV2(wSum2);
    weekMV3 = dataVenue.result.filter(function (el) {
      var i = 14;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV3.map((d)=>{
      wSum3 += d.so_tien;
    }); setWeekV3(wSum3);
    weekMV4 = dataVenue.result.filter(function (el) {
      var i = 21;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV4.map((d)=>{
      wSum4 += d.so_tien;
    }); setWeekV4(wSum4);
    weekMV5 = dataVenue.result.filter(function (el) {
      var i = 28;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV5.map((d)=>{
      wSum5 += d.so_tien;
    }); setWeekV5(wSum5);
    weekMV6 = dataVenue.result.filter(function (el) {
      var i = 35;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV6.map((d)=>{
      wSum6 += d.so_tien;
    }); setWeekV6(wSum6);
    weekMV7 = dataVenue.result.filter(function (el) {
      var i = 42;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV7.map((d)=>{
      wSum7 += d.so_tien;
    }); setWeekV7(wSum7);
    weekMV8 = dataVenue.result.filter(function (el) {
      var i = 49;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV8.map((d)=>{
      wSum8 += d.so_tien;
    }); setWeekV8(wSum8);
    weekMV9 = dataVenue.result.filter(function (el) {
      var i = 56;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV9.map((d)=>{
      wSum9 += d.so_tien;
    }); setWeekV9(wSum9);
    weekMV10 = dataVenue.result.filter(function (el) {
      var i = 63;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV10.map((d)=>{
      wSum10 += d.so_tien;
    }); setWeekV10(wSum10);
    weekMV11 = dataVenue.result.filter(function (el) {
      var i = 70;
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+1]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+2]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+3]) > -1
              || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+4]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+5]) > -1 || xuliDay(el.ngay).toString().substring(0,10).indexOf(arrDayOfWeek[i+6]) > -1;
    });
    weekMV11.map((d)=>{
      wSum11 += d.so_tien;
    }); setWeekV11(wSum11);
    //Month
    lastMV = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(today.substring(0, 7)) > -1;
    });
    lastMV.map((d)=>{
      mSum += d.so_tien;
    }); setMonthV(mSum);
    lastMV1 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV1.map((d)=>{
      mSum1 += d.so_tien;
    }); setMonthV1(mSum1);
    lastMV2 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth2.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV2.map((d)=>{
      mSum2 += d.so_tien;
    }); setMonthV2(mSum2);
    lastMV3 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth3.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV3.map((d)=>{
      mSum3 += d.so_tien;
    }); setMonthV3(mSum3);
    lastMV4 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth4.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV4.map((d)=>{
      mSum4 += d.so_tien;
    }); setMonthV4(mSum4);
    lastMV5 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth5.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV5.map((d)=>{
      mSum5 += d.so_tien;
    }); setMonthV5(mSum5);
    lastMV6 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth6.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV6.map((d)=>{
      mSum6 += d.so_tien;
    }); setMonthV6(mSum6);
    lastMV7 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth7.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV7.map((d)=>{
      mSum7 += d.so_tien;
    }); setMonthV7(mSum7);
    lastMV8 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth8.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV8.map((d)=>{
      mSum8 += d.so_tien;
    }); setMonthV8(mSum8);
    lastMV9 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth9.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV9.map((d)=>{
      mSum9 += d.so_tien;
    }); setMonthV9(mSum9);
    lastMV10 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth10.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV10.map((d)=>{
      mSum10 += d.so_tien;
    }); setMonthV10(mSum10);
    lastMV11 = dataVenue.result.filter(function (el) {
      return xuliDay(el.ngay).toString().substring(0,10).indexOf(lastmonth11.toLocaleDateString('fr-CA').substring(0,7).substring(0, 7)) > -1;
    });
    lastMV11.map((d)=>{
      mSum11 += d.so_tien;
    }); setMonthV11(mSum11);
  }, []);
  var weekSum = value + value1 + value2 + value3 + value4 + value5 + value6;
  var arrDay = weekSum/7000;
  const data = {
    labels: [
      yesterday6,
      yesterday5,
      yesterday4,
      yesterday3,
      yesterday2,
      yesterday,
      "Hôm nay"],
    datasets: [
      {
        xAxes: [{
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: {'day': 'MM/YY'},
            tooltipFormat: 'DD/MM/YY',
            unit: 'month',
           }
        }],
        label: "Số tiền (triệu Đồng)",
        data: [value6/1000, value5/1000, value4/1000, value3/1000, value2/1000, value1/1000, value/1000],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Trung bình (triệu Đồng)",
        data: [arrDay, arrDay, arrDay, arrDay, arrDay, arrDay, arrDay],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  var arrWeek = (weekV1 + weekV2 + weekV3 + weekV4 + weekV5 + weekV6 + weekV7 + weekV8 + weekV9 + weekV10 + weekV11 + weekSum)/12000;
  const data2 = {
    labels: [
      arrDayOfWeek[76].substring(5,7)+"/"+arrDayOfWeek[76].substring(8,10)+" - "+arrDayOfWeek[70].substring(5,7)+"/"+arrDayOfWeek[70].substring(8,10),
      arrDayOfWeek[69].substring(5,7)+"/"+arrDayOfWeek[69].substring(8,10)+" - "+arrDayOfWeek[63].substring(5,7)+"/"+arrDayOfWeek[63].substring(8,10),
      arrDayOfWeek[62].substring(5,7)+"/"+arrDayOfWeek[62].substring(8,10)+" - "+arrDayOfWeek[56].substring(5,7)+"/"+arrDayOfWeek[56].substring(8,10),
      arrDayOfWeek[55].substring(5,7)+"/"+arrDayOfWeek[55].substring(8,10)+" - "+arrDayOfWeek[49].substring(5,7)+"/"+arrDayOfWeek[49].substring(8,10),
      arrDayOfWeek[48].substring(5,7)+"/"+arrDayOfWeek[48].substring(8,10)+" - "+arrDayOfWeek[42].substring(5,7)+"/"+arrDayOfWeek[42].substring(8,10),
      arrDayOfWeek[41].substring(5,7)+"/"+arrDayOfWeek[41].substring(8,10)+" - "+arrDayOfWeek[35].substring(5,7)+"/"+arrDayOfWeek[35].substring(8,10),
      arrDayOfWeek[34].substring(5,7)+"/"+arrDayOfWeek[34].substring(8,10)+" - "+arrDayOfWeek[28].substring(5,7)+"/"+arrDayOfWeek[28].substring(8,10),
      arrDayOfWeek[27].substring(5,7)+"/"+arrDayOfWeek[27].substring(8,10)+" - "+arrDayOfWeek[21].substring(5,7)+"/"+arrDayOfWeek[21].substring(8,10),
      arrDayOfWeek[20].substring(5,7)+"/"+arrDayOfWeek[20].substring(8,10)+" - "+arrDayOfWeek[14].substring(5,7)+"/"+arrDayOfWeek[14].substring(8,10),
      arrDayOfWeek[13].substring(5,7)+"/"+arrDayOfWeek[13].substring(8,10)+" - "+arrDayOfWeek[7].substring(5,7)+"/"+arrDayOfWeek[7].substring(8,10),
      arrDayOfWeek[6].substring(5,7)+"/"+arrDayOfWeek[6].substring(8,10)+" - "+arrDayOfWeek[0].substring(5,7)+"/"+arrDayOfWeek[0].substring(8,10),
      "Tuần trước"],
    datasets: [
      {
        xAxes: [{
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: {'day': 'MM/YY'},
            tooltipFormat: 'DD/MM/YY',
            unit: 'month',
           }
        }],
        label: "Số tiền (triệu Đồng)",
        data: [weekV11/1000, weekV10/1000, weekV9/1000, weekV8/1000, weekV7/1000, weekV6/1000, weekV5/1000, weekV4/1000, weekV3/1000, weekV2/1000, weekV1/1000, weekSum/1000],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Trung bình (triệu Đồng)",
        data: [arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek, arrWeek],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  var arrYear = (monthV + monthV1 + monthV2 + monthV3 + monthV4 + monthV5 + monthV6 + monthV7 + monthV8 + monthV9 + monthV10 + monthV11)/12000;
  const data3 = {
    labels: [
      "Tháng " + lastmonth11.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth10.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth9.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth8.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth7.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth6.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth5.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth4.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth3.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth2.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + lastmonth.toLocaleDateString('fr-CA').substring(5,7),
      "Tháng " + today.substring(5, 7)],
    datasets: [
      {
        xAxes: [{
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: {'day': 'MM/YY'},
            tooltipFormat: 'DD/MM/YY',
            unit: 'month',
           }
        }],
        label: "Số tiền (triệu Đồng)",
        data: [monthV11/1000, monthV10/1000, monthV9/1000, monthV8/1000, monthV7/1000, monthV6/1000, monthV5/1000, monthV4/1000, monthV3/1000, monthV2/1000, monthV1/1000, monthV/1000],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Trung bình (triệu Đồng)",
        data:  [arrYear, arrYear, arrYear, arrYear, arrYear, arrYear, arrYear, arrYear, arrYear, arrYear, arrYear, arrYear],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  return (
    <div className="App">
      <Line data={typeR==="tuan"?data:typeR==="quy"?data2:data3}/>
    </div>
  );
}
function xuliDay(val){
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var dt = date.getDate();
  
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var day = year+'-' + month + '-'+dt;
  return(day);
}