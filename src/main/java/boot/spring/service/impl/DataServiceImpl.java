package boot.spring.service.impl;

import boot.spring.po.TVShipmain;
import boot.spring.mapper.DataMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.xml.crypto.Data;
import org.springframework.stereotype.Service;

@Service
public class DataServiceImpl {

    @Autowired
    public DataMapper datamapper;

    public int update(TVShipmain shipmain){
        return datamapper.update(shipmain);
    }
}
