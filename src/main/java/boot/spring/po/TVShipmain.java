package boot.spring.po;

import java.math.BigDecimal;
import java.util.Date;

import java.io.Serializable;


public class TVShipmain{
    /**
     * 公司
     */

    private String company;
    /**
     * 船舶年序号
     */
    private String fshipyearnumvcr;
    /**
     * 航次
     */
    private BigDecimal fshipordernum;
    /**
     * 抵达时间
     */
    private Date farrivetimedtm;
    /**
     * 船舶代码
     */
    private BigDecimal fshipcodenum;
    /**
     * 船舶名称
     */

    private String fshipname;
    /**
     * 泊位代码
     */

    private BigDecimal fberthnum;
    /**
     * 泊位名称
     */

    private String fberthname;

    private BigDecimal fsigntonnum2;
    /**
     * 签数吨
     */

    private BigDecimal fsigntonnum;
    /**
     * 装船状态
     */

    private String fshipstatevcr;
    /**
     * 统计年月 月份 所属日期
     */

    private Date fcounttimedtm;
    /**
     * 舱数
     */

    private BigDecimal fcabinnumnum;

    private BigDecimal fmaxweighnum;
    /**
     * R吨数1
     */

    private BigDecimal frton1num;
    /**
     * BQ吨数1
     */

    private BigDecimal fbqton1num;
    /**
     * R吨数2
     */

    private BigDecimal frton2num;
    /**
     * BQ吨数2
     */

    private BigDecimal fbqbton2num;
    /**
     * BM吨数
     */

    private BigDecimal fbmtonnum;
    /**
     * BJ吨数1
     */

    private BigDecimal fbjtonnum1;
    /**
     * BJ吨数2
     */

    private BigDecimal fbjtonnum2;

    private String lineresult;

    private String linestate;
    /**
     * R吨数
     */

    private BigDecimal rton;
    /**
     * BM吨数
     */

    private BigDecimal bmton;
    /**
     * BQ吨数
     */

    private BigDecimal bqton;
    /**
     * BJ吨数
     */

    private BigDecimal bjton;
    /**
     * 最大吨数
     */
    private BigDecimal maxton;
    /**
     * 最小吨数
     */

    private BigDecimal minton;
    /**
     * R吨偏差率
     */

    private BigDecimal rrate;
    /**
     * BM吨偏差率
     */

    private BigDecimal bmrate;
    /**
     * BQ吨偏差率
     */

    private BigDecimal bqrate;
    /**
     * BJ吨偏差率
     */

    private BigDecimal bjrate;
    /**
     * 煤种名称1
     */

    private String fcoalname1;
    /**
     * 煤种名称2
     */

    private String fcoalname2;
    /**
     * 签数结果
     */

    private String signresult;
    /**
     * 签数状态
     */

    private String signstate;
    /**
     * 签数率
     */

    private BigDecimal signrrate;
    /**
     * 签数BM率
     */

    private BigDecimal signbmrate;
    /**
     * 签数BQ率
     */

    private BigDecimal signbqrate;
    /**
     * 签数BJ率
     */

    private BigDecimal signbjrate;

    private Date fstarttimedtm;

    private Date fstoptimedtm;

    private String fbattlename;

    private String fflowname;

    private BigDecimal fcabinnumnumno;


    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getFshipyearnumvcr() {
        return fshipyearnumvcr;
    }

    public void setFshipyearnumvcr(String fshipyearnumvcr) {
        this.fshipyearnumvcr = fshipyearnumvcr;
    }

    public BigDecimal getFshipordernum() {
        return fshipordernum;
    }

    public void setFshipordernum(BigDecimal fshipordernum) {
        this.fshipordernum = fshipordernum;
    }

    public Date getFarrivetimedtm() {
        return farrivetimedtm;
    }

    public void setFarrivetimedtm(Date farrivetimedtm) {
        this.farrivetimedtm = farrivetimedtm;
    }

    public BigDecimal getFshipcodenum() {
        return fshipcodenum;
    }

    public void setFshipcodenum(BigDecimal fshipcodenum) {
        this.fshipcodenum = fshipcodenum;
    }

    public String getFshipname() {
        return fshipname;
    }

    public void setFshipname(String fshipname) {
        this.fshipname = fshipname;
    }

    public BigDecimal getFberthnum() {
        return fberthnum;
    }

    public void setFberthnum(BigDecimal fberthnum) {
        this.fberthnum = fberthnum;
    }

    public String getFberthname() {
        return fberthname;
    }

    public void setFberthname(String fberthname) {
        this.fberthname = fberthname;
    }

    public BigDecimal getFsigntonnum2() {
        return fsigntonnum2;
    }

    public void setFsigntonnum2(BigDecimal fsigntonnum2) {
        this.fsigntonnum2 = fsigntonnum2;
    }

    public BigDecimal getFsigntonnum() {
        return fsigntonnum;
    }

    public void setFsigntonnum(BigDecimal fsigntonnum) {
        this.fsigntonnum = fsigntonnum;
    }

    public String getFshipstatevcr() {
        return fshipstatevcr;
    }

    public void setFshipstatevcr(String fshipstatevcr) {
        this.fshipstatevcr = fshipstatevcr;
    }

    public Date getFcounttimedtm() {
        return fcounttimedtm;
    }

    public void setFcounttimedtm(Date fcounttimedtm) {
        this.fcounttimedtm = fcounttimedtm;
    }

    public BigDecimal getFcabinnumnum() {
        return fcabinnumnum;
    }

    public void setFcabinnumnum(BigDecimal fcabinnumnum) {
        this.fcabinnumnum = fcabinnumnum;
    }

    public BigDecimal getFmaxweighnum() {
        return fmaxweighnum;
    }

    public void setFmaxweighnum(BigDecimal fmaxweighnum) {
        this.fmaxweighnum = fmaxweighnum;
    }

    public BigDecimal getFrton1num() {
        return frton1num;
    }

    public void setFrton1num(BigDecimal frton1num) {
        this.frton1num = frton1num;
    }

    public BigDecimal getFbqton1num() {
        return fbqton1num;
    }

    public void setFbqton1num(BigDecimal fbqton1num) {
        this.fbqton1num = fbqton1num;
    }

    public BigDecimal getFrton2num() {
        return frton2num;
    }

    public void setFrton2num(BigDecimal frton2num) {
        this.frton2num = frton2num;
    }

    public BigDecimal getFbqbton2num() {
        return fbqbton2num;
    }

    public void setFbqbton2num(BigDecimal fbqbton2num) {
        this.fbqbton2num = fbqbton2num;
    }

    public BigDecimal getFbmtonnum() {
        return fbmtonnum;
    }

    public void setFbmtonnum(BigDecimal fbmtonnum) {
        this.fbmtonnum = fbmtonnum;
    }

    public BigDecimal getFbjtonnum1() {
        return fbjtonnum1;
    }

    public void setFbjtonnum1(BigDecimal fbjtonnum1) {
        this.fbjtonnum1 = fbjtonnum1;
    }

    public BigDecimal getFbjtonnum2() {
        return fbjtonnum2;
    }

    public void setFbjtonnum2(BigDecimal fbjtonnum2) {
        this.fbjtonnum2 = fbjtonnum2;
    }

    public String getLineresult() {
        return lineresult;
    }

    public void setLineresult(String lineresult) {
        this.lineresult = lineresult;
    }

    public String getLinestate() {
        return linestate;
    }

    public void setLinestate(String linestate) {
        this.linestate = linestate;
    }

    public BigDecimal getRton() {
        return rton;
    }

    public void setRton(BigDecimal rton) {
        this.rton = rton;
    }

    public BigDecimal getBmton() {
        return bmton;
    }

    public void setBmton(BigDecimal bmton) {
        this.bmton = bmton;
    }

    public BigDecimal getBqton() {
        return bqton;
    }

    public void setBqton(BigDecimal bqton) {
        this.bqton = bqton;
    }

    public BigDecimal getBjton() {
        return bjton;
    }

    public void setBjton(BigDecimal bjton) {
        this.bjton = bjton;
    }

    public BigDecimal getMaxton() {
        return maxton;
    }

    public void setMaxton(BigDecimal maxton) {
        this.maxton = maxton;
    }

    public BigDecimal getMinton() {
        return minton;
    }

    public void setMinton(BigDecimal minton) {
        this.minton = minton;
    }

    public BigDecimal getRrate() {
        return rrate;
    }

    public void setRrate(BigDecimal rrate) {
        this.rrate = rrate;
    }

    public BigDecimal getBmrate() {
        return bmrate;
    }

    public void setBmrate(BigDecimal bmrate) {
        this.bmrate = bmrate;
    }

    public BigDecimal getBqrate() {
        return bqrate;
    }

    public void setBqrate(BigDecimal bqrate) {
        this.bqrate = bqrate;
    }

    public BigDecimal getBjrate() {
        return bjrate;
    }

    public void setBjrate(BigDecimal bjrate) {
        this.bjrate = bjrate;
    }

    public String getFcoalname1() {
        return fcoalname1;
    }

    public void setFcoalname1(String fcoalname1) {
        this.fcoalname1 = fcoalname1;
    }

    public String getFcoalname2() {
        return fcoalname2;
    }

    public void setFcoalname2(String fcoalname2) {
        this.fcoalname2 = fcoalname2;
    }

    public String getSignresult() {
        return signresult;
    }

    public void setSignresult(String signresult) {
        this.signresult = signresult;
    }

    public String getSignstate() {
        return signstate;
    }

    public void setSignstate(String signstate) {
        this.signstate = signstate;
    }

    public BigDecimal getSignrrate() {
        return signrrate;
    }

    public void setSignrrate(BigDecimal signrrate) {
        this.signrrate = signrrate;
    }

    public BigDecimal getSignbmrate() {
        return signbmrate;
    }

    public void setSignbmrate(BigDecimal signbmrate) {
        this.signbmrate = signbmrate;
    }

    public BigDecimal getSignbqrate() {
        return signbqrate;
    }

    public void setSignbqrate(BigDecimal signbqrate) {
        this.signbqrate = signbqrate;
    }

    public BigDecimal getSignbjrate() {
        return signbjrate;
    }

    public void setSignbjrate(BigDecimal signbjrate) {
        this.signbjrate = signbjrate;
    }

    public Date getFstarttimedtm() {
        return fstarttimedtm;
    }

    public void setFstarttimedtm(Date fstarttimedtm) {
        this.fstarttimedtm = fstarttimedtm;
    }

    public Date getFstoptimedtm() {
        return fstoptimedtm;
    }

    public void setFstoptimedtm(Date fstoptimedtm) {
        this.fstoptimedtm = fstoptimedtm;
    }

    public String getFbattlename() {
        return fbattlename;
    }

    public void setFbattlename(String fbattlename) {
        this.fbattlename = fbattlename;
    }

    public String getFflowname() {
        return fflowname;
    }

    public void setFflowname(String fflowname) {
        this.fflowname = fflowname;
    }

    public BigDecimal getFcabinnumnumno() {
        return fcabinnumnumno;
    }

    public void setFcabinnumnumno(BigDecimal fcabinnumnumno) {
        this.fcabinnumnumno = fcabinnumnumno;
    }


}
