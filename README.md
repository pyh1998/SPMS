# 报文审批系统

本系统为[煤炭计量查询统计系统](https://github.com/pyh1998/CoalMS)的子系统

  在常用的ERP系统、OA系统的开发中，工作流引擎是一个必不可少的工具。本项目旨在基于Spring boot这一平台，整合业界流行的工作流引擎Activiti，并建立了两个完整的工作流进行演示：请假OA和采购流程。

其中包含的内容如下：

- 不采用activiti自带的用户、角色功能，因为过于简单，转而自行实现一个用户、角色、权限的三级结构，用户到角色，角色到权限均为多对多映射，持久层框架使用mybatis的collection和association标签嵌套实现；

- 使用时，将流程数据和业务数据相分离，使用业务号（businessKey）建立关联流程数据和业务数据的桥梁，使其相互可以访问,业务数据的主键即为业务号；

- 本系统所有表单均使用普通表单，而不是activiti的动态表单和外置表单，这样做是为了分表存放业务数据和流程数据;

- 系统前端采用基于Bootstrap的模板devoops建立。https://github.com/shenzhanwang/devoops
- 当分公司上传数据到总公司时，推送成功和推送失败都会以邮件的方式提醒相关的人员。

![image](https://user-images.githubusercontent.com/71625437/180603123-4fe51312-9665-43bc-b4b3-ea5c75b8341a.png)
![image](https://user-images.githubusercontent.com/71625437/180603136-85d50f60-8cb4-4423-b2b3-03de1820f97b.png)



   
