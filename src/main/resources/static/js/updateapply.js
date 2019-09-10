    $(document).ready(function(){
	$('#startime').datepicker({setDate: new Date(), dateFormat: 'yy-mm-dd'});
	$('#endtime').datepicker({setDate: new Date(), dateFormat: 'yy-mm-dd'});
        var tvshipmain={};
        var pid;
    	$("#dept").hide();
	    var grid=$("#grid-data").bootgrid({
	    	navigation:2,
  			columnSelection:false,
		    ajax:true,
		    url:"updatepurchaseapply",
		    formatters: {
		    "applytime":function(column, row){
		    	return getLocalTime(row.applytime);
		    },
		    "commands": function(column, row)
		    {
                tvshipmain=row.tvshipMain;
                console.log(tvshipmain);
                pid=tvshipmain["PID"];
                console.log(pid);
                return '<button class="btn btn-xs btn-default ajax-link command-run1" data-itemlist="'+row.itemlist+'" data-total="'+row.total+'" data-row-id="'+ row.taskid + '">处理</button>';
		    }
	    	}
	    }).on("loaded.rs.jquery.bootgrid", function()
	    		{
	    	    grid.find(".command-run1").on("click", function(e)
	    	    {
                    $("#company").val(tvshipmain['COMPANY']);
                    $("#fshipyearnumvcr").val(tvshipmain['FSHIPYEARNUMVCR']);
                    $("#farrivetimedtm").val(tvshipmain['FARRIVETIMEDTM']);
                    $("#fshipcodenum").val(tvshipmain['FSHIPCODENUM']);
                    $("#fshipordernum").val(tvshipmain['FSHIPORDERNUM']);
                    $("#fshipname").val(tvshipmain['FSHIPNAME']);
                    $("#fberthnum").val(tvshipmain['FBERTHNUM']);
                    $("#fberthname").val(tvshipmain['FBERTHNAME']);
                    $("#fsigntonnum2").val(tvshipmain['FSIGNTONNUM2']);
                    $("#fsigntonnum").val(tvshipmain['FSIGNTONNUM']);
                    $("#fshipstatevcr").val(tvshipmain['FSHIPSTATEVCR']);
                    $("#fcounttimedtm").val(tvshipmain['FCOUNTTIMEDTM']);
                    $("#fcabinnumnum").val(tvshipmain['FCABINNUMNUM']);
                    $("#fmaxweighnum").val(tvshipmain['FMAXWEIGHNUM']);
                    $("#frton1num").val(tvshipmain['FRTON1NUM']);
                    $("#fbqton1num").val(tvshipmain['FBQTON1NUM']);
                    $("#frton2num").val(tvshipmain['FRTON2NUM']);
                    $("#fbqbton2num").val(tvshipmain['FBQBTON2NUM']);
                    $("#fbmtonnum").val(tvshipmain['FBMTONNUM']);
                    $("#fbjtonnum1").val(tvshipmain['FBJTONNUM1']);
                    $("#fbjtonnum2").val(tvshipmain['FBJTONNUM2']);
                    $("#lineresult").val(tvshipmain['LINERESULT']);
                    $("#linestate").val(tvshipmain['LINESTATE']);
                    $("#rton").val(tvshipmain['RTON']);
                    $("#bmton").val(tvshipmain['BMTON']);
                    $("#bqton").val(tvshipmain['BQTON']);
                    $("#bjton").val(tvshipmain['BJTON']);
                    $("#maxton").val(tvshipmain['MAXTON']);
                    $("#minton").val(tvshipmain['MINTON']);
                    $("#rrate").val(tvshipmain['RRATE']);
                    $("#bmrate").val(tvshipmain['BMRATE']);
                    $("#bqrate").val(tvshipmain['BQRATE']);
                    $("#bjrate").val(tvshipmain['BJRATE']);
                    $("#fcoalname1").val(tvshipmain['FCOALNAME1']);
                    $("#fcoalname2").val(tvshipmain['FCOALNAME2']);
                    $("#signresult").val(tvshipmain['SIGNRESULT']);
                    $("#signstate").val(tvshipmain['SIGNSTATE']);
                    $("#signrrate").val(tvshipmain['SIGNRRATE']);
                    $("#signbmrate").val(tvshipmain['SIGNBMRATE']);
                    $("#signbqrate").val(tvshipmain['SIGNBQRATE']);
                    $("#signbjrate").val(tvshipmain['SIGNBJRATE']);
                    $("#fstarttimedtm").val(tvshipmain['FSTARTTIMEDTM']);
                    $("#fstoptimedtm").val(tvshipmain['FSTOPTIMEDTM']);
                    $("#fbattlename").val(tvshipmain['FBATTLENAME']);
                    $("#fflowname").val(tvshipmain['FFLOWNAME']);
                    $("#fcabinnumnumno").val(tvshipmain['FCABINNUMNUMNO']);
	    	    	var taskid=$(this).data("row-id");
	    	    	var itemlist=$(this).data("itemlist");
	    	    	$("#itemlist").val(itemlist);
	    	    	$("#dept").show();
	    	    	$("#btn").click(function(){
	    	    	    tvshipmain={
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
                        var data = JSON.stringify(tvshipmain);
                        $.ajax({
                            url:"/data/update",//访问的地址
                            async:"false",
                            contentType : "application/json",
                            traditional: true,
                            type:"post",
                            data:data,
                            error:function (XMLHttpRequest, textStatus, errorThrown) {
                                alert(XMLHttpRequest.status);
                            }
                        });
	    		    	$.post("task/updateapplycomplete/"+taskid,{itemlist:$("#itemlist").val(), updateapply:$("#updateapply").val()},function(a){
	    		    		alert("处理成功");
	    		    		LoadAjaxContent("updateapply");
	    		    	});
	    	    });
	    	    });
	    
	    
	    });
	  });
	  
	   function getLocalTime(nS) {  
 return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');  
}
