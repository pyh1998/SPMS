package boot.spring.mapper;

import boot.spring.po.TVShipmain;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DataMapper {

    int update(TVShipmain shipmain);

}
