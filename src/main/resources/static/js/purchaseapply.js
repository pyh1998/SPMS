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
function insertDetail(){
        var TVShipMain = new map();
        TVShipMain.set("company",$("#company").val());
        TVShipMain.set("fshipyearnumvcr",$("#FSHIPYEARNUMVCR").val());
        // TVShipMain[company]=$("#company").val();
        // TVShipMain[farrivetimedtm]=$("#farrivetimedtm").val();
        // TVShipMain[fshipyearnumvcr]=$("#FSHIPYEARNUMVCR").val();
        // TVShipMain[fshipcodenum]=$("#fshipcodenum").val();
        // TVShipMain[fshipordernum]=$("#fshipordernum").val();
        // TVShipMain[fshipname]=$("#FSHIPNAME").val();
        // TVShipMain[fberthnum]=$("#fberthnum").val();
        // TVShipMain[fberthname]=$("#fberthname").val();
        // TVShipMain[]=$("#FSIGNTON2").val();
        // TVShipMain[]=$("#FSIGNTON1").val();
        // TVShipMain[]=$("#fshipstatevcr").val();
        // TVShipMain[]=$("#fcounttimedtm").val();
        // TVShipMain[]=$("#fcabinnumnum").val();
        // TVShipMain[]=$("#frton1num").val();
        // TVShipMain[]=$("#fbqton1num").val();
        // TVShipMain[]=$("#frton2num").val();
        // TVShipMain[]=$("#fbqbton2num").val();
        // TVShipMain[]=$("#fbmtonnum").val();
        // TVShipMain[]=$("#fbjtonnum1").val();
        // TVShipMain[]=$("#fbjtonnum2").val();
        // TVShipMain[]=$("#lineresult").val();
        // TVShipMain[]=$("#linestate").val();
        // TVShipMain[]=$("#rton").val();
        // TVShipMain[]=$("#bmton").val();
        // TVShipMain[]=$("#bqton").val();
        // TVShipMain[]=$("#bjton").val();
        // TVShipMain[]=$("#maxton").val();
        // TVShipMain[]=$("#minton").val();
        // TVShipMain[]=$("#rrate").val();
        // TVShipMain[]=$("#bmrate").val();
        // TVShipMain[]=$("#bqrate").val();
        // TVShipMain[]=$("#bjrate").val();
        // TVShipMain[]=$("#fcoalname1").val();
        // TVShipMain[]=$("#fcoalname2").val();
        // TVShipMain[]=$("#signresult").val();
        // TVShipMain[]=$("#signstate").val();
        // TVShipMain[]=$("#signrrate").val();
        // TVShipMain[]=$("#signbmrate").val();
        // TVShipMain[]=$("#signbqrate").val();
        // TVShipMain[]=$("#signbjrate").val();
        // TVShipMain[]=$("#fstarttimedtm").val();
        // TVShipMain[]=$("#fstoptimedtm").val();
        // TVShipMain[]=$("#fbattlename").val();
        // TVShipMain[]=$("#fflowname").val();
        // TVShipMain[]=$("#fcabinnumnumno").val();
        console.log(TVShipMain);
    $.ajax({
        url:"/data/insert",//访问的地址
            traditional: true,
        type:"get",
            data:{tvShipMain:TVShipMain},
        success:function(data) {
            console.log(data);
        }
    })
}

