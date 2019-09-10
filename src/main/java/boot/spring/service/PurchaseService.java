package boot.spring.service;

import java.util.Map;

import boot.spring.po.TVShipmain;
import boot.spring.po.TVTrain;
import io.swagger.models.HttpMethod;
import org.activiti.engine.runtime.ProcessInstance;

import boot.spring.po.PurchaseApply;
import java.util.List;

public interface PurchaseService {
	ProcessInstance startWorkflow(PurchaseApply apply,String userid,Map<String,Object> variables);
	PurchaseApply getPurchase(int id);
	void updatePurchase(PurchaseApply a);
		int update(TVShipmain shipmain);
    int setFlag();
		int insert(TVShipmain shipmain);
		int moreShip(List<TVShipmain> list);
	int moreTrain(List<TVTrain> list);
        List<TVShipmain> select();
        int delete();
	void client(String url, HttpMethod method);
	Map<String, Object> detail(String pid);
}
