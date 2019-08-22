package boot.spring.controller;

import boot.spring.po.TVShipmain;
import com.github.javafaker.Faker;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import  boot.spring.service.DataService;

//@Controller
@RestController
@RequestMapping("/data")
public class DataController {

//    String[] COMPANYarr={"02","06","07","09"};
//
//    @RequestMapping(value="/faker",method=RequestMethod.GET)
////    @ResponseBody
//    public void faker() throws ParseException {
//        Faker faker = new Faker();
//        SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
//        Random r = new Random();
//        String COMPANY = COMPANYarr[r.nextInt(4)];
//        String FSHIPYEARNUMVCR = faker.number().digits(10);
//        String FSHIPORDERNUM = faker.number().digits(4);
//        Date from = dateformat.parse("2014-06-19");
//        Date to = dateformat.parse("2015-06-19");
//        Date FARRIVETIMEDTM = faker.date().between(from,to);
//        int FSHIPCODENUM = faker.random().nextInt(10000,99999);
//        String FSHIPNAME = faker.name().firstName();
//        String FBERTHNUM = faker.number().digits(3);
//        int FSIGNTONNUM = faker.number().numberBetween(10000,99999);
//        String FSHIPSTATEVCR = faker.number().digits(1);
//        Date FCOUNTTIMEDTM = faker.date().between(from,to);
//        int FCABINNUMNUM = faker.number().numberBetween(1,999);
//        int FRTON1NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int FBQTON1NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int FRTON2NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int FBQTON2NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int FBMTONNUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int FBJTON1NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int FBJTON2NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int RTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int BJTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int BQTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        int BMTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
//        double RRATE = faker.number().randomDouble(5,-100,100);
//        double BJRATE = faker.number().randomDouble(5,-100,100);
//        double BQRATE = faker.number().randomDouble(5,-100,100);
//        double BMRATE = faker.number().randomDouble(5,-100,100);
//        String FCOALNAME1 = faker.name().firstName();
//        double SIGNRRATE = faker.number().randomDouble(5,-100,100);
//        double SIGNBMRATE = faker.number().randomDouble(5,-100,100);
//        double SIGNBQRATE = faker.number().randomDouble(5,-100,100);
//        double SIGNBJRATE = faker.number().randomDouble(5,-100,100);
//        String FBATTLENAME = faker.book().title();
//        String FFLOWNAME = faker.book().title();
//        String FCABINNUMNUMNO = faker.number().digits(1);
//        System.out.println(COMPANY);
//        System.out.println(FSHIPYEARNUMVCR);
//        System.out.println(FSHIPORDERNUM);
//        System.out.println(FARRIVETIMEDTM);
//        System.out.println(FSHIPCODENUM);
//        System.out.println(FSHIPNAME);
//        System.out.println(FBERTHNUM);
//        System.out.println(FSHIPSTATEVCR);
//        System.out.println(FCOUNTTIMEDTM);
//        System.out.println(FCABINNUMNUM);
//        System.out.println(FBQTON1NUM);
//        System.out.println(FRTON1NUM);
//        System.out.println(FRTON2NUM);
//        System.out.println(FBMTONNUM);
//        System.out.println(RTON);
//        System.out.println(BMTON);
//        System.out.println(BQTON);
//        System.out.println(BJTON);
//        System.out.println(RRATE);
//        System.out.println(BMRATE);
//        System.out.println(BQRATE);
//        System.out.println(BJRATE);
//        System.out.println(FCOALNAME1);
//        System.out.println(SIGNRRATE);
//        System.out.println(SIGNBMRATE);
//        System.out.println(SIGNBQRATE);
//        System.out.println(SIGNBJRATE);
//        System.out.println(FBATTLENAME);
//    }




@Autowired
DataService DataService;

    @RequestMapping(value="/update123",method=RequestMethod.POST)
    public String update(TVShipmain shipmain)
    {
        int result = DataService.update(shipmain);
        if (result >= 1) {
            return "修改成功";
        } else {
            return "修改失败";
        }


    }




}
