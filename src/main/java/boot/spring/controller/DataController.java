package boot.spring.controller;

import boot.spring.po.TVShipmain;
import boot.spring.service.PurchaseService;
import com.github.javafaker.Faker;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.math.BigDecimal;



//@Controller
@RestController
@RequestMapping("/data")
public class DataController {

    String[] COMPANYarr={"02","06","07","09"};

    @RequestMapping(value="/faker",method=RequestMethod.GET)
    @ResponseBody
    public TVShipmain faker() throws  ParseException{
        Faker faker = new Faker();
        TVShipmain tvShipmain = new TVShipmain();
        SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
        Random r = new Random();
        String COMPANY = COMPANYarr[r.nextInt(4)];
        String FSHIPYEARNUMVCR = faker.number().digits(10);
        String FSHIPORDERNUM = faker.number().digits(4);
        Date from = dateformat.parse("2014-06-19");
        Date to = dateformat.parse("2015-06-19");
        Date FARRIVETIMEDTM = faker.date().between(from,to);
        int FSHIPCODENUM = faker.random().nextInt(10000,99999);
        String FSHIPNAME = faker.name().firstName();
        String FBERTHNUM = faker.number().digits(3);
        int FSIGNTONNUM = faker.number().numberBetween(10000,99999);
        String FSHIPSTATEVCR = faker.number().digits(1);
        Date FCOUNTTIMEDTM = faker.date().between(from,to);
        int FCABINNUMNUM = faker.number().numberBetween(1,999);
        int FRTON1NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int FBQTON1NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int FRTON2NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int FBQTON2NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int FBMTONNUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int FBJTON1NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int FBJTON2NUM = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int RTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int BJTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int BQTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        int BMTON = faker.number().numberBetween(FSIGNTONNUM-5000,FSIGNTONNUM+5000);
        double RRATE = faker.number().randomDouble(5,-100,100);
        double BJRATE = faker.number().randomDouble(5,-100,100);
        double BQRATE = faker.number().randomDouble(5,-100,100);
        double BMRATE = faker.number().randomDouble(5,-100,100);
        String FCOALNAME1 = faker.name().firstName();
        double SIGNRRATE = faker.number().randomDouble(5,-100,100);
        double SIGNBMRATE = faker.number().randomDouble(5,-100,100);
        double SIGNBQRATE = faker.number().randomDouble(5,-100,100);
        double SIGNBJRATE = faker.number().randomDouble(5,-100,100);
        String FBATTLENAME = faker.book().title();
        String FFLOWNAME = faker.book().title();
        String FCABINNUMNUMNO = faker.number().digits(1);
        tvShipmain.setCompany(COMPANY);
        tvShipmain.setFshipyearnumvcr(FSHIPYEARNUMVCR);
        tvShipmain.setFshipordernum(new BigDecimal(FSHIPORDERNUM));
        tvShipmain.setFarrivetimedtm(FARRIVETIMEDTM);
        tvShipmain.setFshipcodenum(new BigDecimal(FSHIPCODENUM));
        tvShipmain.setFshipname(FSHIPNAME);
        tvShipmain.setFberthnum(new BigDecimal(FBERTHNUM));
//        tvShipmain.setFberthname(FBERTHNAME);
//        tvShipmain.setFsigntonnum2(FSIGNTONNUM2);
        tvShipmain.setFsigntonnum(new BigDecimal(FSIGNTONNUM));
        tvShipmain.setFshipstatevcr(FSHIPSTATEVCR);
        tvShipmain.setFcounttimedtm(FCOUNTTIMEDTM);
        tvShipmain.setFcabinnumnum(new BigDecimal(FCABINNUMNUM));
//        tvShipmain.setFmaxweighnum(FMAXWEIGHNUM);
        tvShipmain.setFrton1num(new BigDecimal(FRTON1NUM));
        tvShipmain.setFbqton1num(new BigDecimal(FBQTON1NUM));
        tvShipmain.setFrton2num(new BigDecimal(FRTON2NUM));
//        tvShipmain.setFbqbton2num(FBQBTON2NUM);
        tvShipmain.setFbmtonnum(new BigDecimal(FBMTONNUM));
//        tvShipmain.setFbjtonnum1(FBJTONNUM1);
//        tvShipmain.setFbjtonnum2(FBJTONNUM2);
//        tvShipmain.setLineresult(LINERESULT);
//        tvShipmain.setLinestate(LINESTATE);
        tvShipmain.setRton(new BigDecimal(RTON));
        tvShipmain.setBmton(new BigDecimal(BMTON));
        tvShipmain.setBqton(new BigDecimal(BQTON));
        tvShipmain.setBjton(new BigDecimal(BJTON));;
//        tvShipmain.setMaxton(MAXTON);
//        tvShipmain.setMinton(MINTON);
        tvShipmain.setRrate(new BigDecimal(RRATE));
        tvShipmain.setBmrate(new BigDecimal(BMRATE));
        tvShipmain.setBqrate(new BigDecimal(BQRATE));
        tvShipmain.setBjrate(new BigDecimal(BJRATE));
        tvShipmain.setFcoalname1(FCOALNAME1);
//        tvShipmain.setFcoalname2(FCOALNAME2);
//        tvShipmain.setSignresult(SIGNRESULT);
//        tvShipmain.setSignstate(SIGNSTATE);
        tvShipmain.setSignrrate(new BigDecimal(SIGNRRATE));
        tvShipmain.setSignbmrate(new BigDecimal(SIGNBMRATE));
        tvShipmain.setSignbqrate(new BigDecimal(SIGNBQRATE));
        tvShipmain.setSignbjrate(new BigDecimal(SIGNBJRATE));
//        tvShipmain.setFstarttimedtm(FSTARTTIMEDTM);
//        tvShipmain.setFstoptimedtm(FSTOPTIMEDTM);
        tvShipmain.setFbattlename(FBATTLENAME);
        tvShipmain.setFflowname(FFLOWNAME);
        tvShipmain.setFcabinnumnumno(new BigDecimal(FCABINNUMNUMNO));
        return tvShipmain;
    }




@Autowired
    PurchaseService purchaseService;

    @RequestMapping(value="/update")
    public String update(TVShipmain shipmain)
    {
        int result = purchaseService.update(shipmain);
        if (result >= 1) {
            return "修改成功";
        } else {
            return "修改失败";
        }


    }


    @RequestMapping(value="/insert")
    public String insert(TVShipmain shipmain) throws ParseException {

        shipmain = faker();

        int result = purchaseService.insert(shipmain);//函数调用问题
        if (result >= 1) {
            return "添加成功";
        } else {
            return "添加失败";
        }


    }



}
