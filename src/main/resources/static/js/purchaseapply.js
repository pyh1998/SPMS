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
    var pastTime = faker.date.past(0.1, randomDate);
    var countTime =faker.date.past(0.1, randomDate);
    $("#farrivetimedtm").val(randomDate.getFullYear() + "-" + (randomDate.getMonth()+1) + "-" + randomDate.getDate());
    $("#fshipyearnumvcr").val(faker.random.number({min:1000000000,max:9999999999}));
    $("#fshipcodenum").val(faker.random.number({min:10000,max:99999}));
    $("#fshipordernum").val(faker.random.number({min:1000,max:9999}));
    $("#fshipname").val(faker.name.jobTitle());
    $("#fberthnum").val(faker.random.number({min:100,max:999}));
    $("#fberthname").val(faker.name.jobTitle());
    $("#fsigntonnum").val(faker.random.number({min:10000,max:99999}));
    var signton = $("#fsigntonnum").val();
    $("#fshipstatevcr").val(faker.random.number({min:1,max:9}));
    $("#fcounttimedtm").val(countTime.getFullYear() + "-" + (countTime.getMonth()+1) + "-" + countTime.getDate());
    $("#fcabinnumnum").val(faker.random.number({min:1,max:9}));
    $("#fmaxweighnum").val(faker.random.number({min:1,max:9,precision:0.001}));
    $("#frton1num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbqton1num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#frton2num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbqton2num").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbmtonnum").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbjtonnum1").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    $("#fbjtonnum2").val(faker.random.number({min:signton - 5000,max:signton - (-5000)}));
    // $("#lineresult").val(data.signbqrate);
    switch (Math.round(Math.random())){
        case 0:
            $("#linestate").val("合格");
            break;
        case 1:
            $("#linestate").val("不合格");
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
    // $("#signresult").val(data.signbqrate);
    // $("#signstate").val(data.signbqrate);
    $("#signrrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#signbmrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#signbqrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    $("#signbjrate").val(faker.random.number({min:-100,max:100,precision:0.00001}));
    // $("#fstarttimedtm").val(faker.random.number({min:signton - 100,max:signton - (-100),precision:0.00001}));
    // $("#fstoptimedtm").val(data.signbqrate);
    $("#fbattlename").val(faker.name.jobTitle());
    $("#fflowname").val(faker.name.jobTitle());
    $("#fcabinnumnumno").val(faker.random.number({min:1,max:9}));
}

function insertDetail(){
        var TVShipMain = {
            "company": $("#company").val(),
            "fshipyearnumvcr": $("#fshipyearnumvcr").val(),
    "farrivetimedtm":$("#farrivetimedtm").val(),
    "fshipcodenum":$("#fshipcodenum").val(),
    "fshipordernum":$("#fshipordernum").val(),
    "fshipname":$("#FSHIPNAME").val(),
    "fberthnum":$("#fberthnum").val(),
    "fberthname":$("#fberthname").val(),
    "fsigntonnum2":$("#fsigntonnum2").val(),
    "fsigntonnum":$("#fsigntonnum").val(),
    "fshipstatevcr":$("#fshipstatevcr").val(),
    "fcounttimedtm":$("#fcounttimedtm").val(),
    "fcabinnumnum":$("#fcabinnumnum").val(),
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
function more(){
    var n = 20000;
    while(n!=0) {
        for (var i = 0; i < 10000; i++, n--) {
            console.log(i);
            // openInfoDetail();
            addToList();
        }
        var data = JSON.stringify(list);
        $.ajax({
            url: "/data/more",//访问的地址
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

function addToList(){
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
    var pastTime = faker.date.past(0.1, randomDate);
    var countTime =faker.date.past(0.1, randomDate);
    
    var signton =  fsigntonnum ;
    
    // var lineresult = data.signbqrate;
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
    "fsigntonnum" : faker.random.number({min:10000,max:99999}),
        "fshipstatevcr" : faker.random.number({min:1,max:9}),
        "fcounttimedtm" : countTime.getFullYear() + "-" + (countTime.getMonth()+1) + "-" + countTime.getDate(),
        "fcabinnumnum" : faker.random.number({min:1,max:9}),
        "fmaxweighnum" : faker.random.number({min:1,max:9,precision:0.001}),
        "frton1num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbqton1num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "frton2num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbqton2num" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbmtonnum" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbjtonnum1" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "fbjtonnum2" : faker.random.number({min:signton - 5000,max:signton - (-5000)}),
        "linestate":linestate,
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
        // "signresult" : data.signbqrate,
        // "signstate" : data.signbqrate,
        "signrrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "signbmrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "signbqrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        "signbjrate" : faker.random.number({min:-100,max:100,precision:0.00001}),
        // "fstarttimedtm" : faker.random.number({min:signton - 100,max:signton - (-100),precision:0.00001}),
        // "fstoptimedtm" : data.signbqrate,
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