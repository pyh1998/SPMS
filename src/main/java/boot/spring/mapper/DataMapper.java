package boot.spring.mapper;

import boot.spring.po.TVShipmain;
import boot.spring.po.TVTrain;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DataMapper {

    int update(TVShipmain shipmain);

    int setFlag();

    int insert(TVShipmain shipmain);

    int moreShip(List<TVShipmain> list);

    int moreTrain(List<TVTrain> list);

    List<TVShipmain> select();

    int delete();
}
