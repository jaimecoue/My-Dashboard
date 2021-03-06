zingchart.THEME="classic";
var myConfig = {
    "background-color":"#f2f2f2",
    "graphset":[
        {
            "type":"bar",
            "background-color":"#fff",
            "border-color":"#dae5ec",
            "border-width":"1px",
            "border-radius": "1em",
            "box-shadow": "0 0 5px rgba(25,25,25,.25)",
            "height":"30%",
            "width":"96%",
            "x":"2%",
            "y":"3%",
            "title":{
                "margin-top":"7px",
                "margin-left":"9px",
                "font-family":"'Source Sans Pro', sans-serif",
                "text":"Total Sales",
                "background-color":"none",
                "shadow":0,
                "text-align":"left",
                "font-size":"11px",
                "font-weight":"bold",
                "font-color":"#707d94"
            },
            "scale-y":{
                "values":"0:300:100",
                "max-ticks":4,
                "max-items":4,
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding-right":"5px"
                },
                "guide":{
                    "rules":[
                        {
                          "rule":"%i == 0",
                          "line-width":0
                        },
                        {
                          "rule":"%i > 0",
                          "line-style":"solid",
                          "line-width":"1px",
                          "line-color":"#4fc08d",
                          "alpha":0.4 
                        }
                    
                    ]
                }
            },
            "scale-x":{
                "items-overlap":true,
                "max-items":9999,
                "values":["January","February.","March","April","May","June"],
                "offset-y":"1px",
                "line-color":"#4fc08d",
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "padding-top":"2px"
                },
                "tick":{
                    "visible":false,
                    "line-color":"#d2dae2"
                },
                "guide":{
                    "visible":false
                }
            },
            "plotarea":{
                "margin":"45px 20px 38px 45px"
            },
            "plot":{
                "bar-width":"33px",
                "hover-state":{
                    "visible":false
                },
                "animation":{
                    "delay":500,
                    "effect":"ANIMATION_SLIDE_BOTTOM"
                },
                "tooltip":{
                    "font-color":"#fff",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "border-radius":"6px",
                    "shadow":false,
                    "padding":"5px 10px",
                    "background-color":"#4fc08d"
                }
            },
            "series":[
                {
                    "values":[473,263,173,201,185,195,143],
                    "styles":[
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        }
                    ]
                }
            ]
        },
        {
            "type":"hbar",
            "background-color":"#fff",
            "border-color":"#dae5ec",
            "border-width":"1px",
            "x":"2%",
            "y":"35.2%",
            "height":"63%",
            "width":"30%",
            "title":{
                "margin-top":"7px",
                "margin-left":"9px",
                "text":"Sales this week",
                "background-color":"none",
                "shadow":0,
                "text-align":"left",
                "font-family":"Arial",
                "font-size":"11px",
                "font-color":"#707d94"
            },
            "scale-y":{
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                    "visible":false
                },
                "guide":{
                    "visible":false
                }
            },
            "scale-x":{
                "values":["Johny","Sally","Bob Marley","Drake","Jack","Jill"],
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                    "width":200,
                    "text-align":"left",
                    "offset-x":206,
                    "offset-y":-12,
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "padding-bottom":"8px"
                },
                "guide":{
                    "visible":false
                }
            },
            "plot":{
                "bars-overlap":"100%",
                "bar-width":"12px",
                "thousands-separator":",",
                "tooltip":{
                    "font-color":"#ffffff",
                    "background-color":"#4fc08d",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "border-radius":"6px",
                    "shadow":false,
                    "padding":"5px 10px"
                },
                "hover-state":{
                    "background-color":"#4fc08d"
                },
                "animation":{
                    "delay":500,
                    "effect":"ANIMATION_EXPAND_LEFT"
                }
            },
            "plotarea":{
                "margin":"50px 15px 10px 15px"
            },
            "series":[
                {
                    "values":[103902,112352,121823,154092,182023,263523],
                    "z-index":2,
                    "styles":[
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        },
                        {
                            "background-color":"#4fc08d"
                        }
                    ],
                    "tooltip-text":"$%node-value"
                },
                {
                    "max-trackers":0,
                    "values":[300000,300000,300000,300000,300000,300000],
                    "data-rvalues":[103902,112352,121823,154092,182023,263523],
                    "background-color":"#d9e4eb",
                    "z-index":1,
                    "value-box":{
                        "visible":true,
                        "offset-y":"-12px",
                        "offset-x":"-54px",
                        "text-align":"right",
                        "font-color":"#8391a5",
                        "font-family":"Arial",
                        "font-size":"11px",
                        "text":"$%data-rvalues",
                        "padding-bottom":"8px"
                    }
                }
            ]
        },
        {
            "type":"line",
            "background-color":"#fff",
            "border-color":"#dae5ec",
            "border-width":"1px",
            "width":"64%",
            "height":"63%",
            "x":"34%",
            "y":"35.2%",
            "title":{
                "margin-top":"7px",
                "margin-left":"12px",
                "text":"Year growth",
                "background-color":"none",
                "shadow":0,
                "text-align":"left",
                "font-family":"Arial",
                "font-size":"11px",
                "font-color":"#707d94"
            },
            "plot":{
                "animation":{
                    "delay":500,
                    "effect":"ANIMATION_SLIDE_LEFT"
                }
            },
            "plotarea":{
                "margin":"50px 25px 70px 46px"
            },
            "scale-y":{
                "values":"0:100:25",
                "line-color":"none",
                "guide":{
                    "line-style":"solid",
                    "line-color":"#4fc08d",
                    "line-width":"1px",
                    "alpha":0.5
                },
                "tick":{
                    "visible":false
                },
                "item":{
                    "font-color":"#4fc08d",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding-right":"5px"
                }
            },
            "scale-x":{
                "line-color":"#4fc08d",
                "line-width":"2px",
                "values":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                "tick":{
                    "line-color":"#4fc08d",
                    "line-width":"1px"
                },
                "guide":{
                    "visible":false
                },
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding-top":"5px"
                }
            },
            "legend":{
                "layout":"x4",
                "background-color":"none",
                "shadow":0,
                "margin":"auto auto 15 auto",
                "border-width":0,
                "item":{
                    "font-color":"#707d94",
                    "font-family":"Arial",
                    "padding":"0px",
                    "margin":"0px",
                    "font-size":"9px"
                },
                "marker":{
                    "show-line":"true",
                    "type":"match",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "size":4,
                    "line-width":2,
                    "padding":"3px"
                }
            },
            "crosshair-x":{
                "lineWidth":1,
                "line-color":"#4fc08d",
                "plotLabel":{
                    "shadow":false,
                    "font-color":"#000",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding":"5px 10px",
                    "border-radius":"5px",
                    "alpha":1
                },
                "scale-label":{
                    "font-color":"#ffffff",
                    "background-color":"#4fc08d",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding":"5px 10px",
                    "border-radius":"5px"
                }
            },
            "tooltip":{
                "visible":false
            },
            "series":[
                {
                    "values":[69,68,54,48,70,74,98,70,72,68,49,69],
                    "text":"AAPL",
                    "line-color":"#4fc08d",
                    "line-width":"2px",
                    "shadow":0,
                    "marker":{
                        "background-color":"#fff",
                        "size":3,
                        "border-width":1,
                        "border-color":"#36a2a8",
                        "shadow":0
                    },
                    "palette":0
                },
                {
                    "values":[51,53,47,60,48,52,75,52,55,47,60,48],
                    "text":"BIDU",
                    "line-width":"2px",
                    "line-color":"#4fc08d",
                    "shadow":0,
                    "marker":{
                        "background-color":"#fff",
                        "size":3,
                        "border-width":1,
                        "border-color":"#1993e0",
                        "shadow":0
                    },
                    "palette":1,
                    "visible":1
                },
                {
                    "values":[42,43,30,50,31,48,55,46,48,32,50,38],
                    "text":"NVDA",
                    "line-color":"#4fc08d",
                    "line-width":"2px",
                    "shadow":0,
                    "marker":{
                        "background-color":"#fff",
                        "size":3,
                        "border-width":1,
                        "border-color":"#975098",
                        "shadow":0
                    },
                    "palette":2,
                    "visible":1
                },
                {
                    "values":[25,15,26,21,24,26,33,25,15,25,22,24],
                    "text":"FB",
                    "line-color":"#4fc08d",
                    "line-width":"2px",
                    "shadow":0,
                    "marker":{
                        "background-color":"#fff",
                        "size":3,
                        "border-width":1,
                        "border-color":"#d37e04",
                        "shadow":0
                    },
                    "palette":3
                }
            ]
        }
    ]
};

zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 500, 
	width: '90%' 
});