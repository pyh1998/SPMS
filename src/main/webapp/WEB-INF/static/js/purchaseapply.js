function openInfoDetail{

    $.ajax({

        url:"userAction_findMangerByDeptId",//访问的地址
        type:"post",
        data:{"传递到后台的参数名":参数},
        dataType:'text',//后台返回的数据格式类型
        success:function(data){

        })
}

})

}


};