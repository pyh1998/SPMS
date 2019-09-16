package boot.spring.controller;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
public class MailController extends HttpServlet{
//    String authCode="flase";
    String email="weizhideka@qq.com";
    @RequestMapping(value="/send")
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("进入servlet成功");
        email = "976754000@qq.com";
        System.out.println(email);
//		resp.setCharacterEncoding("UTF-8");
//		resp.setContentType("application/json; charset=utf-8");
        String state="0";
//        authCode=achieveCode();
//        System.out.println(authCode);

        if(sendAuthCodeEmail(email)==0) {
            System.out.println("发送成功，已返回验证码");
            resp.getWriter().flush();
            resp.getWriter() .close();
        }else {
            System.out.println("发送出错，请检查");
            state="1";
            resp.getWriter().println(state);
            resp.getWriter().flush();
            resp.getWriter() .close();
        }
    }

    public int sendAuthCodeEmail(String email) {
        try {
            System.out.println("进入发送阶段");
            SimpleEmail mail = new SimpleEmail();
            mail.setHostName("smtp.qq.com");//发送邮件的服务器
            mail.setAuthentication("weizhideka@qq.com","iwpiboxmwegrbebc");//刚刚记录的授权码，是开启SMTP的密码
            mail.setFrom("weizhideka@qq.com","老板");  //发送邮件的邮箱和发件人
            mail.setSSLOnConnect(true); //使用安全链接
            mail.addTo(email);//接收的邮箱

            System.out.println("email=  "+email);
            mail.setSubject("邮件提醒");//设置邮件的主题
            mail.setMsg("数据上传成功！！！");//设置邮件的内容
            mail.send();//发送
            return 0;
        } catch (EmailException e) {
            e.printStackTrace();
            return 1;
        }

    }
}
