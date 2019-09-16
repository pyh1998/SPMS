    $(document).ready(function(){
		var tvshipmain={};
    	$("#dept").hide();
	    var grid=$("#grid-data").bootgrid({
	    	navigation:2,
  			columnSelection:false,
		    ajax:true,
		    url:"managertasklist",
		    formatters: {
		    "taskcreatetime":function(column, row){
		    	return getLocalTime(row.taskcreatetime);
		    },
		    "commands": function(column, row)
		    {
				tvshipmain=row.tvshipMain;

				return '<button class="btn btn-xs btn-default ajax-link command-run1" data-itemlist="'+row.itemlist+'" data-total="'+row.total+'" data-row-id="'+ row.taskid + '">处理</button>';		    }
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
	    	    	var total=$(this).data("total");
	    	    	var itemlist=$(this).data("itemlist");
	    	    	var taskid=$(this).data("row-id");
					if(total == 0){
						$("#modify").html("否");
					}
					else if(total == 1)
						$("#modify").html("是");
	    	    	$("#itemlist").val(itemlist);
	    	    	$("#dept").show();
	    	    	$("#btn").click(function(){
	    		    	// $.post("task/managercomplete/"+taskid,$("form").serialize(),function(a){
	    		    	// 	alert("处理成功");
	    		    	// 	LoadAjaxContent("manager");
	    		    	// });
						$.ajax({
							type:"POST",
							url:"task/managercomplete/"+taskid,
							data:{manager:$("#manager").val(), total:total},
							success: function(){
								alert("申请成功");
								LoadAjaxContent("manager");
							}
						});
	    	    });
	    	    });
	    
	    
	    });
	  });
	  
function getLocalTime(nS) {  
 return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');  
}
