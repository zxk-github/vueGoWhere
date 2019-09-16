import Vue from 'vue';
//自定义滚动条
import "classlist-polyfill";
import PerfectScrollbar from 'perfect-scrollbar';
import "perfect-scrollbar/css/perfect-scrollbar.css";
import $ from 'jquery';


var containWidth;
var containHeight;
var tableWidth;
var tableHeight;

function getArg() {
    containWidth = $(".el-table__body-wrapper").width();
    containHeight = $(".el-table__body-wrapper").height();
    
    Promise.resolve(() => {
        var timer = setInterval(() => {
            tableWidth = $(".el-table__body").width();
            tableHeight = $(".el-table__body").height();
            if(tableWidth && tableHeight) {
                timer = null;
                resolve({tableWidth, tableHeight})
            }   
        }, 10)
    }).then((res) => {
        addEvent(res) 
    })

}

function initPs(el) {
    const ps = new PerfectScrollbar($(el)[0], {
        minScrollbarLength: 100
      });
}

function addEvent() {
    initPs('.el-table__body-wrapper');
    $(".el-table__body-wrapper").off();
    $(".el-table__body-wrapper").mouseenter(() => { 
        $(".ps__rail-x").css({
            opacity: 0.6,
            width: containWidth,
            display: 'block'
        })
        $(".ps__rail-y").css({
            opacity: 0.6,
            height: containHeight,
            display: 'block'
        })
        let thumbXWidth = containWidth * containWidth / tableWidth > 50 ? containWidth * containWidth / tableWidth : 50; 
        $(".ps__thumb-x").width(thumbXWidth);
        let thumbXHeight = containHeight * containHeight / tableHeight > 50 ? containHeight * containHeight / tableHeight : 50; 
        $(".ps__thumb-y").height(thumbXHeight);
    })

    $(".el-table__body-wrapper").mouseleave(() => {
        $(".ps__rail-x").css({
            display: 'none'
        })
        $(".ps__rail-y").css({
            display: 'none'
        })
    })
}

export default {getArg}