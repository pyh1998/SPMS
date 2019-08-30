package boot.spring.service.impl;

import java.util.Map;

import boot.spring.mapper.DataMapper;
import boot.spring.po.TVShipmain;
import org.activiti.engine.IdentityService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import boot.spring.mapper.PurchaseApplyMapper;
import boot.spring.po.PurchaseApply;
import boot.spring.service.PurchaseService;
import java.util.List;

@Transactional(propagation=Propagation.REQUIRED,isolation=Isolation.DEFAULT,timeout=5)
@Service
public class PurchaseServiceImpl implements PurchaseService{
	@Autowired
	PurchaseApplyMapper purchasemapper;
	@Autowired
	IdentityService identityservice;
	@Autowired
	RuntimeService runtimeservice;
	@Autowired
	TaskService taskservice;

	@Autowired
	public DataMapper datamapper;

	public int update(TVShipmain shipmain){
		return datamapper.update(shipmain);
	}

	public int insert(TVShipmain shipmain){
		return datamapper.insert(shipmain);
	}

	public int more(List<TVShipmain> list){
		System.out.println("Service");
		return datamapper.more(list);
	}

    public List<Map<String, Object>> select(){
        return datamapper.select();
    }
    public int delete(){
        return datamapper.delete();
    }


    public ProcessInstance startWorkflow(PurchaseApply apply, String userid,Map<String, Object> variables) {
		purchasemapper.save(apply);
		String businesskey=String.valueOf(apply.getId());//使用leaveapply表的主键作为businesskey,连接业务数据和流程数据
		identityservice.setAuthenticatedUserId(userid);
		ProcessInstance instance=runtimeservice.startProcessInstanceByKey("purchase",businesskey,variables);
//		String instanceid=instance.getId();
		return instance;
	}

	public PurchaseApply getPurchase(int id) {
		return purchasemapper.getPurchaseApply(id);
	}

	public void updatePurchase(PurchaseApply a) {
		purchasemapper.updateByPrimaryKeySelective(a);
	}

}
