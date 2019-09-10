package boot.spring.mapper;

import boot.spring.po.PurchaseApply;

import java.util.Map;

public interface PurchaseApplyMapper {
	void save(PurchaseApply apply);
	
	PurchaseApply getPurchaseApply(int id);
	
	void updateByPrimaryKeySelective(PurchaseApply apply);

	Map<String, Object> detail(String pid);
}
