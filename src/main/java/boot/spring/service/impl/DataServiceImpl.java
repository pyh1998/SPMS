package boot.spring.service.impl;

import boot.spring.po.TVShipmain;
import boot.spring.mapper.DataMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.xml.crypto.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataServiceImpl {

    DataMapper datamapper;

    public int update(TVShipmain shipmain){
        return datamapper.update(shipmain);
    }
    public int more(List<TVShipmain> list){
        System.out.println("Service");
        return datamapper.insert(list.get(0)); }
}
