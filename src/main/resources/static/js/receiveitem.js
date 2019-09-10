    $(document).ready(function(){
	$('#startime').datepicker({setDate: new Date(), dateFormat: 'yy-mm-dd'});
	$('#endtime').datepicker({setDate: new Date(), dateFormat: 'yy-mm-dd'});
    
    	$("#dept").hide();
	    var grid=$("#grid-data").bootgrid({
	    	navigation:2,
  			columnSelection:false,
		    ajax:true,
		    url:"receivetasklist",
		    formatters: {
		    "taskcreatetime":function(column, row){
		    	return getLocalTime(row.taskcreatetime);
		    },
		    "commands": function(column, row)
		    {
				return '<button class="btn btn-xs btn-default ajax-link command-run1" data-itemlist="'+row.itemlist+'" data-total="'+row.total+'" data-row-id="'+ row.taskid + '">处理</button>';
		    }
	    	}
	    
	    }).on("loaded.rs.jquery.bootgrid", function()
	    		{
	    	    grid.find(".command-run1").on("click", function(e)
	    	    {
	    	    	var taskid=$(this).data("row-id");
	    	    	var total=$(this).data("total");
	    	    	var itemlist=$(this).data("itemlist");
					if(total == 0){
						$("#modify").html("否");
					}
					else if(total == 1)
						$("#modify").html("是");
	    	    	$("#itemlist").val(itemlist);
	    	    	$("#dept").show();
	    	    	$("#btn").click(function(){
	    		    	// $.post("task/receivecomplete/"+taskid,$("form").serialize(),function(a){
	    		    	// 	alert("处理成功");
	    		    	// 	LoadAjaxContent("receiveitem");
	    		    	// });
						$.ajax({
							type:"POST",
							url:"task/receivecomplete/"+taskid,
							success: function(){
								$.ajax({
									type:"POST",
									url:"mail/send",
									error:function(XMLHttpRequest, textStatus, errorThrown){
										alert("邮件："+XMLHttpRequest.status);
									}
								});
								alert("已确认并推送至总公司，邮件已发送到您的邮箱");
								LoadAjaxContent("receiveitem");
							},
							error:function(XMLHttpRequest, textStatus, errorThrown){
								alert("总："+XMLHttpRequest.status);
							}
						});
	    	    });
	    	    });
	    
	    
	    });
	  });
	  
	   function getLocalTime(nS) {  
 return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');  
}
