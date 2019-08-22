package boot.spring.service;

import boot.spring.po.TVShipmain;
import org.springframework.stereotype.Service;


@Service
public interface DataService {
     public int update(TVShipmain shipmain);
}
