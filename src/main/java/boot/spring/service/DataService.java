package boot.spring.service;

import boot.spring.po.TVShipmain;
import org.springframework.stereotype.Service;


@Service
public interface DataService {
     int update(TVShipmain shipmain);
}
