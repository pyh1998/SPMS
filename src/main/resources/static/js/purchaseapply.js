var pid;
var station = ["秦皇岛站","山海关站","北京站","刘家庄站","庞家庄站"];
var coal = ["庞神2号","二狗2号","老板1号","学霸2号","杰克2号"];
$(document).ready(function(){
    // formTest[""] = "";
    $("#btn").click(function(){

        if($("#fshipyearnumvcr").val() == "")
            alert("数据不能为空！");
        else {
            insertDetail();
            //     $.post("startpurchase",$("form").serialize(),function(){
            //         alert("申请成功");
            //         LoadAjaxContent("purchase");
            //     });
            var itemlist = $("#itemlist").val();
            console.log(pid);
            console.log("已进入");
            console.log(itemlist);
            $.ajax({
                type: "POST",
                url: "startpurchase",
                data: {pid: pid, itemlist: itemlist},
                success: function () {
                    alert("申请成功");
                    LoadAjaxContent("purchase");
                },
                error: function () {
                    alert("申请失败");
                }
            });
        }
    });
});

function openInfoDetail() {
    faker.locale = "zh_CN";
    var company =Math.floor(Math.random()*(3+1));
    switch (company) {
        case 0:
            $("#company").val("02");
            break;
        case 1:
            $("#company").val("06");
            break;
        case 2:
            $("#company").val("07");
            break;
        case 3:
            $("#company").val("09");
            break;
    }
    var randomDate = faker.date.past(1, new Date("Sat DEC 31 2019 21:35:02 GMT+0200 (CEST)"));
    var countTime =faker.date.past(0.1, randomDate);
    $("#farrivetimedtm").val(randomDate.getFullYear() + "-" + (randomDate.getMonth()+1) + "-" + randomDate.getDate());
    $("#fshipyearnumvcr").val(faker.random.number({min:1000000000,max:9999999999}));
    $("#fshipcodenum").val(faker.random.number({min:10000,max:99999}));
    $("#fshipordernum").val(faker.random.number({min:1000,max:9999}));
    $("#fshipname").val(faker.name.jobTitle());
    $("#fberthnum").val(faker.random.number({min:100,max:999}));
    $("#fberthname").val(faker.name.jobTitle());
    var signton = faker.random.number({min:10000,max:99999});
    $("#fsigntonnum").val(signton);
    $("#fsigntonnum2").val(faker.random.number({min:10000,max:99999}));
    $("#fshipstatevcr").val(faker.random.number({min:1,max:9}));
    $("#fcounttimedtm").val(countTime.getFullYear() + "-" + (countTime.getMonth()+1) + "-" + countTime.getDate());
    $("#fcabinnumnum").val(faker.random.number({min:1,max:9}));
    $("#fmaxweighnum").val(faker.random.number({min:1,max:9,precision:0.001}));
    $("#frton1num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbqton1num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#frton2num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbqbton2num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbmtonnum").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbjtonnum1").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbjtonnum2").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    switch (Math.round(Math.random())){
        case 0:
            $("#linestate").val("合格");
            $("#lineresult").val("合格");
            break;
        case 1:
            $("#linestate").val("不合格");
            $("#lineresult").val("不合格");
            break;
    }
    $("#rton").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#bmton").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#bqton").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#bjton").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#maxton").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#minton").val(faker.random.number({min:1,max:9}));
    $("#rrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#bmrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#bqrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#bjrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#fcoalname1").val(faker.name.jobTitle());
    $("#fcoalname2").val(faker.name.jobTitle());
    var state =Math.floor(Math.random()*(5));
    switch (state) {
        case 0:
            $("#signresult").val("合格");
            $("#signstate").val("合格");
            break;
        case 1:
            $("#signresult").val("基本合格");
            $("#signstate").val("基本合格");
            break;
        case 2:
            $("#signresult").val("签数异常");
            $("#signstate").val("签数异常");
            break;
        case 3:
            $("#signresult").val("签数负异常");
            $("#signstate").val("签数负异常");
            break;
        case 4:
            $("#signresult").val("记录异常");
            $("#signstate").val("记录异常");
            break;
        case 5:
            $("#signresult").val("不合格");
            $("#signstate").val("不合格");
            break;
    }
    $("#signrrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#signbmrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#signbqrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#signbjrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    var stopTime = faker.date.past(1, new Date("Sat DEC 31 2018 21:35:02 GMT+0200 (CEST)"));
    var startTime = faker.date.past(0.01,stopTime);
    $("#fstarttimedtm").val(startTime.getFullYear() + "-" + (startTime.getMonth()+1) + "-" + startTime.getDate());
    $("#fstoptimedtm").val(stopTime.getFullYear() + "-" + (stopTime.getMonth()+1) + "-" + stopTime.getDate());
    $("#fbattlename").val(faker.name.jobTitle());
    $("#fflowname").val(faker.name.jobTitle());
    $("#fcabinnumnumno").val(faker.random.number({min:1,max:9}));
}

function insertDetail(){


    pid = Date.parse(new Date());

    var TVShipMain = {
    "pid":pid,
    "company": $("#company").val(),
    "fshipyearnumvcr": $("#fshipyearnumvcr").val(),
    "farrivetimedtm":$("#farrivetimedtm").val(),
    "fshipcodenum":$("#fshipcodenum").val(),
    "fshipordernum":$("#fshipordernum").val(),
    "fshipname":$("#fshipname").val(),
    "fberthnum":$("#fberthnum").val(),
    "fberthname":$("#fberthname").val(),
    "fsigntonnum2":$("#fsigntonnum2").val(),
    "fsigntonnum":$("#fsigntonnum").val(),
    "fshipstatevcr":$("#fshipstatevcr").val(),
    "fcounttimedtm":$("#fcounttimedtm").val(),
    "fcabinnumnum":$("#fcabinnumnum").val(),
    "fmaxweighnum" :$("#fmaxweighnum").val(),
    "frton1num":$("#frton1num").val(),
    "fbqton1num":$("#fbqton1num").val(),
    "frton2num":$("#frton2num").val(),
    "fbqbton2num":$("#fbqbton2num").val(),
    "fbmtonnum":$("#fbmtonnum").val(),
    "fbjtonnum1":$("#fbjtonnum1").val(),
    "fbjtonnum2":$("#fbjtonnum2").val(),
    "lineresult":$("#lineresult").val(),
    "linestate":$("#linestate").val(),
    "rton":$("#rton").val(),
    "bmton":$("#bmton").val(),
    "bqton":$("#bqton").val(),
    "bjton":$("#bjton").val(),
    "maxton":$("#maxton").val(),
    "minton":$("#minton").val(),
    "rrate":$("#rrate").val(),
    "bmrate":$("#bmrate").val(),
    "bqrate":$("#bqrate").val(),
    "bjrate":$("#bjrate").val(),
    "fcoalname1":$("#fcoalname1").val(),
    "fcoalname2":$("#fcoalname2").val(),
    "signresult":$("#signresult").val(),
    "signstate":$("#signstate").val(),
    "signrrate":$("#signrrate").val(),
    "signbmrate":$("#signbmrate").val(),
    "signbqrate":$("#signbqrate").val(),
    "signbjrate":$("#signbjrate").val(),
    "fstarttimedtm":$("#fstarttimedtm").val(),
    "fstoptimedtm":$("#fstoptimedtm").val(),
    "fbattlename":$("#fbattlename").val(),
    "fflowname":$("#fflowname").val(),
    "fcabinnumnumno":$("#fcabinnumnumno").val()
}
    var data = JSON.stringify(TVShipMain);
    $.ajax({
        url:"/data/insert",//访问的地址
        async:"true",
        contentType : "application/json",
            traditional: true,
        type:"post",
            data:data,
        success:function(data) {
            if(data.success){
                console.log("####");
            }else{
                console.log("!!!!!");
            }

        }
    })
}
var list =[];
var code = new Array(50);
function moreShip(){
    list = [];
    var n = 10000;
    while(n!=0) {
        for (var i = 0; i < 10000 && n != 0; i++, n--) {
            addToShipList();
        }
        var data = JSON.stringify(list);
        $.ajax({
            url: "/data/moreShip",//访问的地址
            contentType: "application/json",
            traditional: true,
            type: "post",
            data: data,
            success: function (data) {
                if (data.success) {
                    console.log("####");
                } else {
                    console.log("!!!!!");
                }

            }
        })
    }
    alert("finish!");
}

function moreTrain(){
    list = [];
    for(var i = 0; i < 25 ; i++)
        code[i] = faker.random.number({min:1000000000,max:9999999999});
    var n = 5000;
    while(n!=0) {
        for (var i = 0; i < 10000 && n != 0; i++, n--) {
            addToTrainList();
        }
        var data = JSON.stringify(list);
        $.ajax({
            url: "/data/moreTrain",//访问的地址
            contentType: "application/json",
            traditional: true,
            type: "post",
            data: data,
            success: function (data) {
                if (data.success) {
                    console.log("####");
                } else {
                    console.log("!!!!!");
                }

            }
        })
    }
    alert("finish!");
}

function addToShipList(){
    faker.locale = "zh_CN";
    var r =Math.floor(Math.random()*(3+1));
    switch (r) {
        case 0:
            var company = "02";
            break;
        case 1:
            var company = "06";
            break;
        case 2:
            var company = "07";
            break;
        case 3:
            var company = "09";
            break;
    }
    var randomDate = faker.date.past(1, new Date("Sat DEC 31 2019 21:35:02 GMT+0200 (CEST)"));
    var stopTime = faker.date.past(0.01, new Date("Sat DEC 31 2018 21:35:02 GMT+0200 (CEST)"));
    var startTime = faker.date.past(1, stopTime);
    var pastTime = faker.date.past(0.1, randomDate);
    var countTime =faker.date.past(0.1, randomDate);
    
    var signton =  faker.random.number({min:10000,max:99999}) ;

    switch (Math.round(Math.random())){
        case 0:
            var linestate = "合格";
            break;
        case 1:
            var linestate = "不合格";
            break;
    }


    var TVShipMain = {
        "company":company,
        "farrivetimedtm" : randomDate.getFullYear() + "-" + (randomDate.getMonth()+1) + "-" + randomDate.getDate(),
    "fshipyearnumvcr" : faker.random.number({min:1000000000,max:9999999999}),
    "fshipcodenum" : faker.random.number({min:10000,max:99999}),
    "fshipordernum" : faker.random.number({min:1000,max:9999}),
    "fshipname" : faker.name.jobTitle(),
    "fberthnum" : faker.random.number({min:100,max:999}),
    "fberthname" : faker.name.jobTitle(),
    "fsigntonnum" : signton,
        "fsigntonnum2" : faker.random.number({min:10000,max:99999}),
        "fshipstatevcr" : faker.random.number({min:1,max:9}),
        "fcounttimedtm" : countTime.getFullYear() + "-" + (countTime.getMonth()+1) + "-" + countTime.getDate(),
        "fcabinnumnum" : faker.random.number({min:1,max:9}),
        "fmaxweighnum" : faker.random.number({min:1,max:9,precision:0.001}),
        "frton1num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbqton1num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "frton2num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbqbton2num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbmtonnum" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbjtonnum1" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbjtonnum2" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "linestate":linestate,
        "lineresult" : linestate,
        "rton" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "bmton" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "bqton" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "bjton" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "maxton" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "minton" : faker.random.number({min:1,max:9}),
        "rrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "bmrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "bqrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "bjrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "fcoalname1" : faker.name.jobTitle(),
        "fcoalname2" : faker.name.jobTitle(),
        "signresult" : linestate,
        "signstate" : linestate,
        "signrrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "signbmrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "signbqrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "signbjrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "fstarttimedtm" : startTime.getFullYear() + "-" + (startTime.getMonth()+1) + "-" + startTime.getDate(),
        "fstoptimedtm" : stopTime.getFullYear() + "-" + (stopTime.getMonth()+1) + "-" + stopTime.getDate(),
        "fbattlename" : faker.name.jobTitle(),
        "fflowname" : faker.name.jobTitle(),
        "fcabinnumnumno" : faker.random.number({min:1,max:9})
        // "company": $("#company").val(),
        // "fshipyearnumvcr": $("#fshipyearnumvcr").val(),
        // "farrivetimedtm":$("#farrivetimedtm").val(),
        // "fshipcodenum":$("#fshipcodenum").val(),
        // "fshipordernum":$("#fshipordernum").val(),
        // "fshipname":$("#FSHIPNAME").val(),
        // "fberthnum":$("#fberthnum").val(),
        // "fberthname":$("#fberthname").val(),
        // "fsigntonnum2":$("#fsigntonnum2").val(),
        // "fsigntonnum":$("#fsigntonnum").val(),
        // "fshipstatevcr":$("#fshipstatevcr").val(),
        // "fcounttimedtm":$("#fcounttimedtm").val(),
        // "fcabinnumnum":$("#fcabinnumnum").val(),
        // "frton1num":$("#frton1num").val(),
        // "fbqton1num":$("#fbqton1num").val(),
        // "frton2num":$("#frton2num").val(),
        // "fbqbton2num":$("#fbqbton2num").val(),
        // "fbmtonnum":$("#fbmtonnum").val(),
        // "fbjtonnum1":$("#fbjtonnum1").val(),
        // "fbjtonnum2":$("#fbjtonnum2").val(),
        // "lineresult":$("#lineresult").val(),
        // "linestate":$("#linestate").val(),
        // "rton":$("#rton").val(),
        // "bmton":$("#bmton").val(),
        // "bqton":$("#bqton").val(),
        // "bjton":$("#bjton").val(),
        // "maxton":$("#maxton").val(),
        // "minton":$("#minton").val(),
        // "rrate":$("#rrate").val(),
        // "bmrate":$("#bmrate").val(),
        // "bqrate":$("#bqrate").val(),
        // "bjrate":$("#bjrate").val(),
        // "fcoalname1":$("#fcoalname1").val(),
        // "fcoalname2":$("#fcoalname2").val(),
        // "signresult":$("#signresult").val(),
        // "signstate":$("#signstate").val(),
        // "signrrate":$("#signrrate").val(),
        // "signbmrate":$("#signbmrate").val(),
        // "signbqrate":$("#signbqrate").val(),
        // "signbjrate":$("#signbjrate").val(),
        // "fstarttimedtm":$("#fstarttimedtm").val(),
        // "fstoptimedtm":$("#fstoptimedtm").val(),
        // "fbattlename":$("#fbattlename").val(),
        // "fflowname":$("#fflowname").val(),
        // "fcabinnumnumno":$("#fcabinnumnumno").val()
    }
    list.push(TVShipMain);
}

function addToTrainList(){

    faker.locale = "zh_CN";
    var r =Math.floor(Math.random()*(3+1));
    switch (r) {
        case 0:
            var company = "02";
            break;
        case 1:
            var company = "06";
            break;
        case 2:
            var company = "07";
            break;
        case 3:
            var company = "09";
            break;
    }
    var randomDate = faker.date.past(1, new Date("Sat DEC 31 2019 21:35:02 GMT+0200 (CEST)"));
    var stopTime = faker.date.past(2, new Date("Sat SEP 4 2019 21:35:02 GMT+0200 (CEST)"));
    var startTime = faker.date.past(1, stopTime);
    var pastTime = faker.date.past(0.1, randomDate);
    var countTime =faker.date.past(0.1, randomDate);

    var fchecktonnum =  faker.random.number({min:2000,max:9000}) ;


    switch (Math.round(Math.random())){
        case 0:
            var linestate = "合格";
            break;
        case 1:
            var linestate = "不合格";
            break;
    }


    var TVTrainMain = {
        "company":company,
            "ftraincodevcr":code[Math.floor(Math.random()*(3+1))],
    "ftrainordervcr":faker.random.number({min:100,max:9999}),
    "farriveporttimedtm":randomDate.getFullYear() + "-" + (randomDate.getMonth()+1) + "-" + randomDate.getDate(),
    "ftrainnumnum":faker.random.number({min:10,max:99}),
    "funloadflagnum":faker.random.number({min:1,max:9}),
    "fisweightnum":faker.random.number({min:1,max:9}),
    "fweightdtm":countTime.getFullYear() + "-" + (countTime.getMonth()+1) + "-" + countTime.getDate(),
    "fweightflag":faker.random.number({min:1,max:9}),
    "fbelongdatetimedtm":stopTime.getFullYear() + "-" + (stopTime.getMonth()+1) + "-" + stopTime.getDate(),
    "isvalid":Math.round(Math.random()),
    "ftrainordernum":faker.random.number({min:1,max:9}),
    "ftrainnonum":faker.random.number({min:100000000,max:9999999999}),
    "fstatstastioncodenum":faker.random.number({min:100,max:999}),
    "fstatstastionname":station[Math.floor(Math.random()*(5))],
    "fcoalcodevcr":faker.random.number({min:100000000,max:9999999999}),
    "fcoalname":coal[Math.floor(Math.random()*(5))],
    "fconsignernum":faker.random.number({min:1,max:9}),
    "fconsignername":faker.name.jobTitle(),
    "fchecktonnum":fchecktonnum,
    "fweighttonnum":faker.random.number({min:fchecktonnum - 150,max:fchecktonnum - (-150)}),
    "fisweightnumd":faker.random.number({min:1,max:9}),
    "fdisbuttcodevcr":faker.random.number({min:1000,max:9999}),
    "fdisbuttname":faker.name.jobTitle(),
    "fheavytonnum":faker.random.number({min:1000,max:9999}),
    "femptytonnum":faker.random.number({min:1000,max:9999}),
    "femptytimedtm":startTime.getFullYear() + "-" + (startTime.getMonth()+1) + "-" + startTime.getDate(),
    "ticketNo":faker.name.jobTitle(),
    "ftrainnonum2":faker.random.number({min:100000000,max:9999999999}),
    "fvolume":faker.random.number({min:1000,max:9999}),
    "traincount":faker.random.number({min:1000,max:9999})
    }
    list.push(TVTrainMain);
}