function openInfoDetail(){

    $.ajax({

        url:"/data/faker",//访问的地址
        type:"get",
        success:function(data) {
            console.log(data.company);
            show_detail(data);

        }
        })
}

function show_detail(data) {
        $("#company").val(data.company);
        $("#farrivetimedtm").val(data.farrivetimedtm);
        $("#FSHIPYEARNUMVCR").val(data.FSHIPYEARNUMVCR);
        $("#fshipcodenum").val(data.fshipcodenum);
        $("#fshipordernum").val(data.fshipordernum);
        $("#FSHIPNAME").val(data.FSHIPNAME);
        $("#fberthnum").val(data.fberthnum);
        $("#fberthname").val(data.fberthname);
        $("#FSIGNTON2").val(data.FSIGNTONNUM2);
        $("#FSIGNTON1").val(data.FSIGNTONNUM);
        $("#fshipstatevcr").val(data.fshipstatevcr);
        $("#fcounttimedtm").val(data.fcounttimedtm);
        $("#fcabinnumnum").val(data.fcabinnumnum);
        $("#frton1num").val(data.frton1num);
        $("#fbqton1num").val(data.fbqton1num);
        $("#frton2num").val(data.frton2num);
        $("#fbqbton2num").val(data.fbqbton2num);
        $("#fbmtonnum").val(data.fbmtonnum);
        $("#fbjtonnum1").val(data.fbjtonnum1);
        $("#fbjtonnum2").val(data.fbjtonnum2);
        $("#lineresult").val(data.lineresult);
        $("#linestate").val(data.linestate);
        $("#rton").val(data.rton);
        $("#bmton").val(data.bmton);
        $("#bqton").val(data.bqton);
        $("#bjton").val(data.bjton);
        $("#maxton").val(data.maxton);
        $("#minton").val(data.minton);
        $("#rrate").val(data.rrate);
        $("#bmrate").val(data.bmrate);
        $("#bqrate").val(data.bqrate);
        $("#bjrate").val(data.bjrate);
        $("#fcoalname1").val(data.fcoalname1);
        $("#fcoalname2").val(data.fcoalname2);
        $("#signresult").val(data.signresult);
        $("#signstate").val(data.signstate);
        $("#signrrate").val(data.signrrate);
        $("#signbmrate").val(data.signbmrate);
        $("#signbqrate").val(data.signbqrate);
        $("#signbjrate").val(data.signbjrate);
        $("#fstarttimedtm").val(data.fstarttimedtm);
        $("#fstoptimedtm").val(data.fstoptimedtm);
        $("#fbattlename").val(data.fbattlename);
        $("#fflowname").val(data.fflowname);
        $("#fcabinnumnumno").val(data.fcabinnumnumno);

}
function insertdetail(){

    $.ajax({

        url:"/data/insert",//访问的地址
        type:"get",
        success:function(data) {
            console.log(data);
        }
    })
}

