package boot.spring.mapper;

import boot.spring.po.TVShipmain;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DataMapper {

    int update(TVShipmain shipmain);

    int insert(TVShipmain shipmain);

    List<Map<String, Object>> select();

    int delete();
}
