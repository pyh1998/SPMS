package boot.spring.service;

import java.util.Map;

import boot.spring.po.TVShipmain;
import org.activiti.engine.runtime.ProcessInstance;

import boot.spring.po.PurchaseApply;
import java.util.List;

public interface PurchaseService {
	public ProcessInstance startWorkflow(PurchaseApply apply,String userid,Map<String,Object> variables);
	PurchaseApply getPurchase(int id);
	void updatePurchase(PurchaseApply a);
		public int update(TVShipmain shipmain);
		public int insert(TVShipmain shipmain);
        List<Map<String, Object>> select();
        int delete();

}
