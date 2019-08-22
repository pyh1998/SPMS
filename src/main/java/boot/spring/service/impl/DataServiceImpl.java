package boot.spring.service.impl;

import boot.spring.po.TVShipmain;
import boot.spring.mapper.DataMapper;

import javax.xml.crypto.Data;

public class DataServiceImpl {

    public int update(TVShipmain shipmain){
        return DataMapper.update(shipmain);
    }
}
