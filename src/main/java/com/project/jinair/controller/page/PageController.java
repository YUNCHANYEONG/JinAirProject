package com.project.jinair.controller.page;

import com.project.jinair.controller.api.info.ScListApiController;
import com.project.jinair.model.entity.board.*;
import com.project.jinair.model.enumclass.LostStatus;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.model.network.response.board.*;
import com.project.jinair.model.network.response.member.MemberApiResponse;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import com.project.jinair.repository.*;
import com.project.jinair.service.MenuService;
import com.project.jinair.service.board.*;
import com.project.jinair.service.member.AdminApiLoginService;
import com.project.jinair.service.member.MemberApiLogicService;
import com.project.jinair.service.optional.BaggageApiLogicService;
import com.project.jinair.service.optional.InsuranceApiLogicService;
import com.project.jinair.service.reservation.ReservationApiLogicService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Controller
@RequestMapping("/pages")
public class PageController {

    @Autowired
    private MenuService menuService;

    @Autowired
    AdminApiLoginService adminApiLoginService;

    @Autowired
    NotifyLogicService notifyLogicService;

    @Autowired
    EventApiLogicService eventApiLogicService;

    @Autowired
    FaqApiLogicService faqApiLogicService;

    @Autowired
    QnaApiLogicService qnaApiLogicService;

    @Autowired
    QnaAnswerApiLogicService qnaAnswerApiLogicService;

    @Autowired
    MagazineApiLoginService magazineApiLoginService;

    @Autowired
    EventWinApiLogicService eventWinApiLogicService;

    @Autowired
    MemberApiLogicService memberApiLogicService;

    @Autowired
    ReservationApiLogicService reservationApiLogicService;

    @Autowired
    ScListApiController scListApiService;

    @Autowired
    BaggageApiLogicService baggageApiLogicService;

    @Autowired
    InsuranceApiLogicService insuranceApiLogicService;

    // ????????? ?????????
    @RequestMapping("/index")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/index/index")
                .addObject("code", "index");
    }
    // ????????????
    @RequestMapping("/index/cal")
    public ModelAndView Cal() {
        return new ModelAndView("/userpage/pages/cal/cal")
                .addObject("code", "cal");
    }
    // ???????????????
    @RequestMapping("/index/multical")
    public ModelAndView multiCal() {
        return new ModelAndView("/userpage/pages/cal/multical")
                .addObject("code", "multical");
    }
    // ????????????
    @RequestMapping("/index/onewaycal")
    public ModelAndView oneWayCal() {
        return new ModelAndView("/userpage/pages/cal/onewaycal")
                .addObject("code", "onewaycal");
    }
    // ?????????
    @RequestMapping("/index/covid19Info")
    public ModelAndView covid19Info(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/index/covid19Info")
                .addObject("code", "covid19Info");
    }
    //-------------------------------------------------------------------------------------------

    // ?????????
    @RequestMapping("/login")
    public ModelAndView login(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/login/login")
                .addObject("code", "login");
    }
    // ????????????, ?????? ??????
    @RequestMapping("/booking/index")
    public ModelAndView logout(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        session.invalidate(); // ?????? ??????
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/index/index")
                .addObject("code", "index");
    }

    // ????????? ?????? ??? ?????? ??????
    @RequestMapping("/index/{id}")
    public ModelAndView login_ok(HttpServletResponse response, HttpServletRequest request, @PathVariable(name = "id") String id, Model model) throws InterruptedException {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        MemberApiResponse memberApiResponse = memberApiLogicService.reads(id).getData();
        session.setAttribute("memberApiResponse", memberApiResponse);
        model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
        model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        return new ModelAndView("/userpage/pages/index/index")
                .addObject("code", "index");
    }

   // ?????????/???????????? ??????
    @RequestMapping("/mypage/find_info")
    public ModelAndView findInfo(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/login/find_info")
                .addObject("code", "findInfo");
    }

    // ????????? ??????
    @RequestMapping("/mypage/find_id/{id}")
    public ModelAndView findId(HttpServletResponse response, HttpServletRequest request, Model model, @PathVariable(name = "id") Long id) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        MemberApiResponse member = memberApiLogicService.read(id).getData();
        model.addAttribute("member", member);
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/login/findId")
                .addObject("code", "findId");
    }
    // ???????????? ??????
    @RequestMapping("/mypage/find_pw/{id}")
    public ModelAndView findPw(HttpServletResponse response, HttpServletRequest request, Model model, @PathVariable(name = "id") Long id) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        MemberApiResponse member = memberApiLogicService.read(id).getData();
        model.addAttribute("member", member);
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/login/findPw")
                .addObject("code", "findPw");
    }
    // ???????????? ???????????? ??????
    @RequestMapping("/mypage/noResult")
    public ModelAndView noResult(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/login/noResult")
                .addObject("code", "noResult");
    }

    //-------------------------------------------------------------------------------------------

    // ???????????????
    @RequestMapping("/index/addQna")
    public ModelAndView addQna(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/add_qna")
                    .addObject("code", "add_qna");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }

    @Autowired
    TbQnaRepository tbQnaRepository;

    // Qna ??????
    @PostMapping("/qna_file/upload")
    public String uploadQnaFile(@RequestPart(value = "qnaTitle") String qnaTitle,
                                @RequestPart(value = "file", required = false) MultipartFile file,
                                @RequestPart(value = "qnaContent") String qnaContent,
                                @RequestPart(value = "qnaStartDate") String qnaStartDate,
                                @RequestPart(value = "qnaStarting", required = false) String qnaStarting,
                                @RequestPart(value = "qnaDestination", required = false) String qnaDestination,
                                @RequestPart(value = "qnaResNum", required = false) String qnaResNum,
                                @RequestPart(value = "qnaType") String qnaType,
                                @RequestPart(value = "qnaUserindex") String qnaUserindex,
                                @RequestPart(value = "qnaNeedAnswer", required = false) String qnaNeedAnswer
    ) throws IOException {
        TbQna tbQna = new TbQna();
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        // ??????
        tbQna.setQnaTitle(qnaTitle);
        tbQna.setQnaContent(qnaContent);
        tbQna.setQnaStartDate(LocalDateTime.parse((qnaStartDate+="T00:00:00"), format));
        tbQna.setQnaStarting(qnaStarting);
        tbQna.setQnaResNum(qnaResNum);
        tbQna.setQnaDestination(qnaDestination);
        tbQna.setQnaType(QnaType.valueOf(qnaType));
        tbQna.setQnaUserindex(Long.valueOf(qnaUserindex));
        tbQna.setQnaNeedAnswer(qnaNeedAnswer);
        tbQna.setQnaIsans(QnaStatus.NotComplete);
        // ?????????
        String sourceImgName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        file.transferTo(destinationImg);

        tbQna.setQnaFileName(destinationImgName);
        tbQna.setQnaFileOriname(sourceImgName);
        tbQna.setQnaFileUrl(imgUrl);

        tbQnaRepository.save(tbQna);
        return "redirect:/pages/index/mypageQna";
    }

    // qna ??????
    @RequestMapping("/myQna/view/{id}")
    public ModelAndView myQna(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_qna_view")
                    .addObject("code", "add_qna");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }

    @RequestMapping("/index/faqList")
    public ModelAndView faqList(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/faq_list")
                .addObject("code", "faq_list");
    }

    @RequestMapping("/index/mypageCoupons")
    public ModelAndView mypageCoupons(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_coupons")
                    .addObject("code", "Mypage_coupons");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }

    }
    @RequestMapping("/index/mypageEdit")
    public ModelAndView mypageEdit(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_edit")
                    .addObject("code", "Mypage_edit");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }

    // ?????? ?????????
    @RequestMapping("/jinair/index")
    public ModelAndView memberDelete(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        session.invalidate(); // ?????? ??????
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/index/index")
                .addObject("code", "jinair");
    }

    @RequestMapping("/index/mypageMain")
    public ModelAndView mypageMain(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_main")
                    .addObject("code", "Mypage_main");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }
    @RequestMapping("/index/mypageGetReservationDetail/{reIndex}")
    public ModelAndView mypageGetReservationDetail(HttpServletResponse response, HttpServletRequest request,
                                                   Model model, @PathVariable(name="reIndex") Long reIndex) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }

        List reserveApiResponse;
        String people;
        if(reIndex%2 == 0){
            people = reservationApiLogicService.read(reIndex -1).getData().getRePeopleType();
        }else{
            people = reservationApiLogicService.read(reIndex).getData().getRePeopleType();
        }
        String[] person = people.split(" ");
        int personNum;
        if(person.length == 6){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]) + Integer.parseInt(person[5]);
        }else if(person.length == 4){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]);
        }else{
            personNum = Integer.parseInt(person[1]);
        }
        if(reIndex%2 == 0){
            reserveApiResponse = reservationApiLogicService.find(reIndex -1, Long.valueOf(personNum)*2+reIndex -2).getData();
        }else{
            reserveApiResponse = reservationApiLogicService.find(reIndex, Long.valueOf(personNum)*2+reIndex -1).getData();
        }

        model.addAttribute("reserveApiResponse", reserveApiResponse);
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_getReservationDetail")
                    .addObject("code", "Mypage_getReservationDetail");

        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }
    @RequestMapping("/index/mypagePoint")
    public ModelAndView mypagePoint(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_point")
                    .addObject("code", "Mypage_point");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }

    }

    // ????????? ?????? ??????
    @RequestMapping("/cancel/{reIndex}")
    public ModelAndView cancel(HttpServletRequest request, HttpServletResponse response, Model model
            , @PathVariable(name="reIndex") Long reIndex){
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }

        List reserveApiResponse;
        String people;
        people = reservationApiLogicService.read(reIndex).getData().getRePeopleType();

        String[] person = people.split(" ");
        int personNum;
        if(person.length == 6){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]) + Integer.parseInt(person[5]);
        }else if(person.length == 4){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]);
        }else{
            personNum = Integer.parseInt(person[1]);
        }
        reserveApiResponse = reservationApiLogicService.find(reIndex, Long.valueOf(personNum)*2+reIndex -1).getData();
        model.addAttribute("reserveApiResponse", reserveApiResponse);
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/payment/cancel_booking")
                    .addObject("code", "faq_list");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }
    // ????????? ?????? ??????
    @RequestMapping("/cancelMd/{reIndex}")
    public ModelAndView cancelMd(HttpServletRequest request, HttpServletResponse response, Model model
            , @PathVariable(name="reIndex") Long reIndex){
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }

        List reserveApiResponse;
        String people;
        people = reservationApiLogicService.read(reIndex).getData().getRePeopleType();

        String[] person = people.split(" ");
        int personNum;
        if(person.length == 6){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]) + Integer.parseInt(person[5]);
        }else if(person.length == 4){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]);
        }else{
            personNum = Integer.parseInt(person[1]);
        }
        reserveApiResponse = reservationApiLogicService.findCancel(reIndex, Long.valueOf(personNum)*2+reIndex -1).getData();
        model.addAttribute("reserveApiResponse", reserveApiResponse);
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/payment/cancel_booking_md")
                    .addObject("code", "faq_list");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }
    // ????????? ?????? ?????? ??????
    @RequestMapping("/cancel/complete")
    public ModelAndView cancelComplete(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/payment/completePayment")
                    .addObject("code", "faq_list");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }
    @RequestMapping("/index/mypageCancelService/{reIndex}")
    public ModelAndView mypageCancelService(HttpServletResponse response, HttpServletRequest request, Model model
            , @PathVariable(name="reIndex") Long reIndex) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        List reserveApiResponse;
        String people;
        people = reservationApiLogicService.read(reIndex).getData().getRePeopleType();

        String[] person = people.split(" ");
        int personNum;
        if(person.length == 6){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]) + Integer.parseInt(person[5]);
        }else if(person.length == 4){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]);
        }else{
            personNum = Integer.parseInt(person[1]);
        }
        reserveApiResponse = reservationApiLogicService.find(reIndex, Long.valueOf(personNum)*2+reIndex -1).getData();
        model.addAttribute("reserveApiResponse", reserveApiResponse);
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_cancel_service")
                    .addObject("code", "faq_list");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }

    @RequestMapping("/index/mypageCancelServiceMD/{reIndex}")
    public ModelAndView mypageCancelServiceMD(HttpServletResponse response, HttpServletRequest request, Model model
            , @PathVariable(name="reIndex") Long reIndex) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        List reserveApiResponse;
        String people;
        people = reservationApiLogicService.read(reIndex).getData().getRePeopleType();

        String[] person = people.split(" ");
        int personNum;
        if(person.length == 6){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]) + Integer.parseInt(person[5]);
        }else if(person.length == 4){
            personNum = Integer.parseInt(person[1]) + Integer.parseInt(person[3]);
        }else{
            personNum = Integer.parseInt(person[1]);
        }
        reserveApiResponse = reservationApiLogicService.findCancel(reIndex, Long.valueOf(personNum)*2+reIndex -1).getData();
        model.addAttribute("reserveApiResponse", reserveApiResponse);
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_cancel_serviceMD")
                    .addObject("code", "faq_list");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }

    @RequestMapping("/index/mypageQna")
    public ModelAndView mypageQna(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if (session.getAttribute("memberApiResponse") != null) {
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_qna")
                    .addObject("code", "Mypage_qna");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }

    }

    @RequestMapping("/index/passwordEdit")
    public ModelAndView passwordEdit(HttpServletResponse response, HttpServletRequest request, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            return new ModelAndView("/userpage/pages/mypage/mypageDetail/password_edit")
                    .addObject("code", "password_edit");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "add_qna");
        }
    }

    // ??????
    @RequestMapping("/index/joinConfirm/{id}")
    public ModelAndView joinConfirm(@PathVariable(name = "id") String id, Model model,
                                    HttpServletResponse response, HttpServletRequest request) throws InterruptedException {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        MemberApiResponse memberApiResponse = memberApiLogicService.reads(id).getData();
        model.addAttribute("memberApiResponse", memberApiResponse);
        return new ModelAndView("/userpage/pages/mypage/join/join_confirm")
                .addObject("code", "join_confirm");
    }
    @RequestMapping("/index/joinForm")
    public ModelAndView joinForm(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/join/joinForm")
                .addObject("code", "joinForm");
    }
    @RequestMapping("/index/joinGate")
    public ModelAndView joinGate(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/join/joinGate")
                .addObject("code", "joinGate");
    }
    @RequestMapping("/index/termsAgree")
    public ModelAndView termsAgree(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        model.addAttribute("loginURL", "/userpage/fragment/menu");
        return new ModelAndView("/userpage/pages/mypage/join/termsAgree")
                .addObject("code", "termsAgree");
    }
    // ??????????????? joinForm_popup
    @RequestMapping("/index/termsAgree/popup1")
    public ModelAndView popup1() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm_popup1")
                .addObject("code", "joinForm_popup1");
    }
    @RequestMapping("/index/termsAgree/popup2")
    public ModelAndView popup2() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm_popup2")
                .addObject("code", "joinForm_popup2");
    }
    @RequestMapping("/index/termsAgree/popup3")
    public ModelAndView popup3() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm_popup3")
                .addObject("code", "joinForm_popup3");
    }
    //-------------------------------------------------------------------------------------------
    // ?????? ?????????
    @RequestMapping("/test/800")
    public ModelAndView test1(Model model) {
        return new ModelAndView("/userpage/pages/payment/select_seat/B737-800-1")
                .addObject("code", "test");
    }
    @RequestMapping("/test/900")
    public ModelAndView test2(Model model) {
        return new ModelAndView("/userpage/pages/payment/select_seat/B737-900-1")
                .addObject("code", "test");
    }
    @RequestMapping("/test/200ER")
    public ModelAndView test3(Model model) {
        return new ModelAndView("/userpage/pages/payment/select_seat/B777-200ER-1")
                .addObject("code", "test");
    }
    // ????????? ?????? ??????
    @RequestMapping("/index/baggageAdd")
    public ModelAndView baggage(Model model) {
        return new ModelAndView("/userpage/pages/payment/optional/baggage")
                .addObject("code", "test");
    }
    // ??????
    // ?????? ?????? ??????
    private void expiredCookie(HttpServletResponse response, String cookieName){
        Cookie myCookie = new Cookie(cookieName, null);
        myCookie.setMaxAge(0);
        myCookie.setPath("/");
        response.addCookie(myCookie);
    }
    // ????????? ????????? ?????? getAvailabilityList ??????
    @PostMapping("/getAvailabilityList/twoway")
    public ModelAndView getAvailabilityList(
            HttpServletRequest request, Model model, HttpServletResponse response,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt", required=false) String goDateSelectOptt,
            @RequestParam(value = "comeDateSelectOptt", required=false) String comeDateSelectOptt,
            @RequestParam(value = "AdultNumber", required=false) Long AdultNumber,
            @RequestParam(value = "ChildNumber", required=false) Long ChildNumber,
            @RequestParam(value = "InfantNumber", required=false) Long InfantNumber
    ){
        model.addAttribute("schDeparturePoint", schDeparturePoint);
        model.addAttribute("schArrivalPoint", schArrivalPoint);
        model.addAttribute("goDateSelectOptt", goDateSelectOptt);
        model.addAttribute("comeDateSelectOptt", comeDateSelectOptt);
        Long peopleNum = AdultNumber+ChildNumber+InfantNumber;
        String reIndex = null;
        List Cook = new ArrayList<>();

        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        // ???????????? ?????? ????????? ??????
        // ?????? ?????? ????????? index??? ?????? ??????
        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex = String.valueOf(reservationApiLogicService.creating());
            Cookie myCookie = new Cookie(reIndex, "reIndex");
            myCookie.setMaxAge(1200);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            Cook.add(myCookie.getName());
        }
        model.addAttribute("reIndex", Cook);


        if(ChildNumber == 0){
            if(InfantNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + InfantNumber);
            }
        }else if(AdultNumber == 0){
            model.addAttribute("people", "?????? " + ChildNumber);
        }else if(InfantNumber == 0){
            if(ChildNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else if(AdultNumber == 0){
                model.addAttribute("people", "?????? " + ChildNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber);
            }
        }else{
            model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber + " ?????? " + InfantNumber);
        }

        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/payment/getAvailabilityList")
                .addObject("code", "getAvailabilityList");
    }

    // ????????? ????????? ?????? getAvailabilityList ??????
    @PostMapping("/getAvailabilityList/oneway")
    public ModelAndView getAvailabilityList(
            HttpServletRequest request, Model model, HttpServletResponse response,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt", required=false) String goDateSelectOptt,
            @RequestParam(value = "AdultNumber", required=false) Long AdultNumber,
            @RequestParam(value = "ChildNumber", required=false) Long ChildNumber,
            @RequestParam(value = "InfantNumber", required=false) Long InfantNumber
    ){
        model.addAttribute("schDeparturePoint", schDeparturePoint);
        model.addAttribute("schArrivalPoint", schArrivalPoint);
        model.addAttribute("goDateSelectOptt", goDateSelectOptt);
        Long peopleNum = AdultNumber+ChildNumber+InfantNumber;
        String reIndex = null;
        List Cook = new ArrayList<>();

        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        // ???????????? ?????? ????????? ??????
        // ?????? ?????? ????????? index??? ?????? ??????
        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex = String.valueOf(reservationApiLogicService.creating());
            Cookie myCookie = new Cookie(reIndex, "reIndex");
            myCookie.setMaxAge(1200);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            Cook.add(myCookie.getName());
        }
        model.addAttribute("reIndex", Cook);
        if(ChildNumber == 0){
            if(InfantNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + InfantNumber);
            }
        }else if(AdultNumber == 0){
            model.addAttribute("people", "?????? " + ChildNumber);
        }else if(InfantNumber == 0){
            if(ChildNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else if(AdultNumber == 0){
                model.addAttribute("people", "?????? " + ChildNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber);
            }
        }else{
            model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber + " ?????? " + InfantNumber);
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/payment/getAvailabilityList")
                .addObject("code", "getAvailabilityList");
    }
    // ????????? ????????? ?????? getAvailabilityList ?????????
    @PostMapping("/getAvailabilityList/multiway")
    public ModelAndView getAvailabilityList(
            HttpServletRequest request, Model model, HttpServletResponse response,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt", required=false) String goDateSelectOptt,
            @RequestParam(value = "schDeparturePoint1", required=false) String schDeparturePoint1,
            @RequestParam(value = "schArrivalPoint1", required=false) String schArrivalPoint1,
            @RequestParam(value = "goDateSelectOptt1", required=false) String goDateSelectOptt1,
            @RequestParam(value = "AdultNumber", required=false) Long AdultNumber,
            @RequestParam(value = "ChildNumber", required=false) Long ChildNumber,
            @RequestParam(value = "InfantNumber", required=false) Long InfantNumber
    ){
        model.addAttribute("schDeparturePoint", schDeparturePoint);
        model.addAttribute("schArrivalPoint", schArrivalPoint);
        model.addAttribute("goDateSelectOptt", goDateSelectOptt);
        model.addAttribute("schDeparturePoint1", schDeparturePoint1);
        model.addAttribute("schArrivalPoint1", schArrivalPoint1);
        model.addAttribute("goDateSelectOptt1", goDateSelectOptt1);

        Long peopleNum = AdultNumber+ChildNumber+InfantNumber;
        String reIndex = null;
        List Cook = new ArrayList<>();

        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        // ???????????? ?????? ????????? ??????
        // ?????? ?????? ????????? index??? ?????? ??????
        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex = String.valueOf(reservationApiLogicService.creating());
            Cookie myCookie = new Cookie(reIndex, "reIndex");
            myCookie.setMaxAge(1200);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            Cook.add(myCookie.getName());
        }
        model.addAttribute("reIndex", Cook);
        if(ChildNumber == 0){
            if(InfantNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + InfantNumber);
            }
        }else if(AdultNumber == 0){
            model.addAttribute("people", "?????? " + ChildNumber);
        }else if(InfantNumber == 0){
            if(ChildNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else if(AdultNumber == 0){
                model.addAttribute("people", "?????? " + ChildNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber);
            }
        }else{
            model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber + " ?????? " + InfantNumber);
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/payment/getAvailabilityList")
                .addObject("code", "getAvailabilityList");
    }


    // ????????? ????????? ?????? ?????? getAvailabilityListMD ??????
    @PostMapping("/getAvailabilityListMD/twoway")
    public ModelAndView getAvailabilityListMD(
            HttpServletRequest request, Model model, HttpServletResponse response,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt", required=false) String goDateSelectOptt,
            @RequestParam(value = "comeDateSelectOptt", required=false) String comeDateSelectOptt,
            @RequestParam(value = "AdultNumber", required=false) Long AdultNumber,
            @RequestParam(value = "ChildNumber", required=false) Long ChildNumber,
            @RequestParam(value = "InfantNumber", required=false) Long InfantNumber,
            @RequestParam(value = "reIndex1", required=false) Long reIndex1
    ){
        model.addAttribute("schDeparturePoint", schDeparturePoint);
        model.addAttribute("schArrivalPoint", schArrivalPoint);
        model.addAttribute("goDateSelectOptt", goDateSelectOptt);
        model.addAttribute("comeDateSelectOptt", comeDateSelectOptt);
        Long peopleNum = AdultNumber+ChildNumber+InfantNumber;
        List reIndex2 = new ArrayList<>();      // ?????? ?????????

        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex2.add(reIndex1+i);
        }
        model.addAttribute("reIndex1", reIndex2);

        List Cook = new ArrayList<>();

        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        String reIndex = null;  // ?????? ?????????
        // ???????????? ?????? ????????? ??????
        // ?????? ?????? ????????? index??? ?????? ??????
        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex = String.valueOf(reservationApiLogicService.creating());
            Cookie myCookie = new Cookie(reIndex, "reIndex");
            myCookie.setMaxAge(1200);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            Cook.add(myCookie.getName());
        }
        model.addAttribute("reIndex", Cook);
        if(ChildNumber == 0){
            if(InfantNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + InfantNumber);
            }
        }else if(AdultNumber == 0){
            model.addAttribute("people", "?????? " + ChildNumber);
        }else if(InfantNumber == 0){
            if(ChildNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else if(AdultNumber == 0){
                model.addAttribute("people", "?????? " + ChildNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber);
            }
        }else{
            model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber + " ?????? " + InfantNumber);
        }

        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            return new ModelAndView("/userpage/pages/payment/md/getAvailabilityListMD")
                    .addObject("code", "getAvailabilityList");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "getAvailabilityList");
        }

    }

    // ????????? ????????? ?????? ?????? getAvailabilityListMD ??????
    @PostMapping("/getAvailabilityListMD/oneway")
    public ModelAndView getAvailabilityListMD(
            HttpServletRequest request, Model model, HttpServletResponse response,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt", required=false) String goDateSelectOptt,
            @RequestParam(value = "AdultNumber", required=false) Long AdultNumber,
            @RequestParam(value = "ChildNumber", required=false) Long ChildNumber,
            @RequestParam(value = "InfantNumber", required=false) Long InfantNumber,
            @RequestParam(value = "reIndex1", required=false) Long reIndex1
    ){
        model.addAttribute("schDeparturePoint", schDeparturePoint);
        model.addAttribute("schArrivalPoint", schArrivalPoint);
        model.addAttribute("goDateSelectOptt", goDateSelectOptt);
        Long peopleNum = AdultNumber+ChildNumber+InfantNumber;
        List reIndex2 = new ArrayList<>();      // ?????? ?????????

        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex2.add(reIndex1+i);
        }
        model.addAttribute("reIndex1", reIndex2);

        List Cook = new ArrayList<>();

        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        String reIndex = null;  // ?????? ?????????
        // ???????????? ?????? ????????? ??????
        // ?????? ?????? ????????? index??? ?????? ??????
        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex = String.valueOf(reservationApiLogicService.creating());
            Cookie myCookie = new Cookie(reIndex, "reIndex");
            myCookie.setMaxAge(1200);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            Cook.add(myCookie.getName());
        }
        model.addAttribute("reIndex", Cook);
        if(ChildNumber == 0){
            if(InfantNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + InfantNumber);
            }
        }else if(AdultNumber == 0){
            model.addAttribute("people", "?????? " + ChildNumber);
        }else if(InfantNumber == 0){
            if(ChildNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else if(AdultNumber == 0){
                model.addAttribute("people", "?????? " + ChildNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber);
            }
        }else{
            model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber + " ?????? " + InfantNumber);
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            return new ModelAndView("/userpage/pages/payment/md/getAvailabilityListMD")
                    .addObject("code", "getAvailabilityList");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "getAvailabilityList");
        }
    }

    // ????????? ????????? ?????? ?????? getAvailabilityListMD ?????????
    @PostMapping("/getAvailabilityListMD/multiway")
    public ModelAndView getAvailabilityListMD(
            HttpServletRequest request, Model model, HttpServletResponse response,
            @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt", required=false) String goDateSelectOptt,
            @RequestParam(value = "schDeparturePoint1", required=false) String schDeparturePoint1,
            @RequestParam(value = "schArrivalPoint1", required=false) String schArrivalPoint1,
            @RequestParam(value = "goDateSelectOptt1", required=false) String goDateSelectOptt1,
            @RequestParam(value = "AdultNumber", required=false) Long AdultNumber,
            @RequestParam(value = "ChildNumber", required=false) Long ChildNumber,
            @RequestParam(value = "InfantNumber", required=false) Long InfantNumber,
            @RequestParam(value = "reIndex1", required=false) Long reIndex1
    ){
        model.addAttribute("schDeparturePoint", schDeparturePoint);
        model.addAttribute("schArrivalPoint", schArrivalPoint);
        model.addAttribute("goDateSelectOptt", goDateSelectOptt);
        model.addAttribute("schDeparturePoint1", schDeparturePoint1);
        model.addAttribute("schArrivalPoint1", schArrivalPoint1);
        model.addAttribute("goDateSelectOptt1", goDateSelectOptt1);

        Long peopleNum = AdultNumber+ChildNumber+InfantNumber;
        List reIndex2 = new ArrayList<>();      // ?????? ?????????

        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex2.add(reIndex1+i);
        }
        model.addAttribute("reIndex1", reIndex2);

        List Cook = new ArrayList<>();

        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        String reIndex = null;  // ?????? ?????????
        // ???????????? ?????? ????????? ??????
        // ?????? ?????? ????????? index??? ?????? ??????
        for(int i = 0 ; i < peopleNum*2 ; i ++){
            reIndex = String.valueOf(reservationApiLogicService.creating());
            Cookie myCookie = new Cookie(reIndex, "reIndex");
            myCookie.setMaxAge(1200);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            Cook.add(myCookie.getName());
        }
        model.addAttribute("reIndex", Cook);
        if(ChildNumber == 0){
            if(InfantNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + InfantNumber);
            }
        }else if(AdultNumber == 0){
            model.addAttribute("people", "?????? " + ChildNumber);
        }else if(InfantNumber == 0){
            if(ChildNumber == 0){
                model.addAttribute("people", "?????? " + AdultNumber);
            }else if(AdultNumber == 0){
                model.addAttribute("people", "?????? " + ChildNumber);
            }else{
                model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber);
            }
        }else{
            model.addAttribute("people", "?????? " + AdultNumber + " ?????? " + ChildNumber + " ?????? " + InfantNumber);
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            return new ModelAndView("/userpage/pages/payment/md/getAvailabilityListMD")
                    .addObject("code", "getAvailabilityList");
        }else{
            return new ModelAndView("/userpage/pages/index/error")
                    .addObject("code", "getAvailabilityList");
        }
    }

    // ????????? ????????? ?????? registerPassenger
    @RequestMapping("/registerPassenger")
    public ModelAndView registerPassenger(HttpServletRequest request, Model model){
        Cookie[] myCookies = request.getCookies();
        List Cook = new ArrayList<>();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                Cook.add(myCookies[i].getName());
            }
        }
        if(Cook.size() == 0){
            return new ModelAndView("/userpage/pages/index/Exception")
                    .addObject("code", "registerPassenger");
        }else{
            ReserveApiResponse reserveApiResponse = reservationApiLogicService.read(Long.valueOf((String) Cook.get(0))).getData();
            ReserveApiResponse reserveApiResponse1 = reservationApiLogicService.read(Long.valueOf((String) Cook.get(1))).getData();
            model.addAttribute("reserveApiResponse", reserveApiResponse);
            model.addAttribute("reserveApiResponse1", reserveApiResponse1);
            model.addAttribute("reIndex", Cook);
            HttpSession session = request.getSession();
            if(session.getAttribute("memberApiResponse") != null){
                model.addAttribute("loginURL", "/userpage/fragment/menu_login");
                model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            }else{
                model.addAttribute("loginURL", "/userpage/fragment/menu");
                model.addAttribute("memberApiResponse", "?????????");
            }
            return new ModelAndView("/userpage/pages/payment/registerPassenger")
                    .addObject("code", "registerPassenger");
        }
    }
    // ????????? ???????????? ?????????
    @RequestMapping(value = {"/extras/oneway", "/extras/multiway", "/extras/twoway"})
    public ModelAndView extra(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        List Cook = new ArrayList<>();
        HttpSession session = request.getSession();
        ArrayList arrrr = new ArrayList<>();

        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                Cook.add(myCookies[i].getName());
                ReserveApiResponse reserveApiResponse = reservationApiLogicService.read(Long.valueOf(myCookies[i].getName())).getData();
                arrrr.add(reserveApiResponse);
            }
        }
        if(Cook.size() == 0) {
            return new ModelAndView("/userpage/pages/index/Exception")
                    .addObject("code", "registerPassenger");
        }else {
            model.addAttribute("reserveApiResponse", arrrr);
            if (session.getAttribute("memberApiResponse") != null) {
                model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            } else {
                model.addAttribute("loginURL", "/userpage/fragment/menu");
            }
            return new ModelAndView("/userpage/pages/payment/extras");
        }
    }
    // ???????????? ?????? ?????? ?????? ??????
    @RequestMapping("/extras/restricted")
    public ModelAndView restrictedCountry(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/payment/restrictedCountry")
                .addObject("code", "restrictedCountry");
    }
    // ?????? ??????
    @RequestMapping(value = {"/payment/oneway", "/payment/multiway", "/payment/twoway"})
    public ModelAndView payment(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();

        HttpSession session = request.getSession();
        List Cook = new ArrayList<>();
        ArrayList arrrr = new ArrayList<>();
        ArrayList baggage = new ArrayList<>();
        ArrayList insurance = new ArrayList<>();

        for(int i = 0; i < myCookies.length; i++) {
            if (myCookies[i].getValue().equals("reIndex")) {
                Cook.add(myCookies[i].getName());
                ReserveApiResponse reserveApiResponse = reservationApiLogicService.read(Long.valueOf(myCookies[i].getName())).getData();
                BaggageApiResponse baggageApiResponse = baggageApiLogicService.read(reserveApiResponse.getReBaggageidx()).getData();
                InsuranceApiResponse insuranceApiResponse = insuranceApiLogicService.read(reserveApiResponse.getReBaggageidx()).getData();
                System.out.println(reserveApiResponse);
                if (reserveApiResponse.getReStatus() != null) {
                    arrrr.add(reserveApiResponse);
                }
                if (reserveApiResponse.getReBaggageidx() != null) {
                    baggage.add(baggageApiResponse);
                }
                if (reserveApiResponse.getReInsuranceidx() != null) {
                    insurance.add(insuranceApiResponse);
                }
            }
        }
        if(Cook.size() == 0) {
            return new ModelAndView("/userpage/pages/index/Exception")
                    .addObject("code", "registerPassenger");
        }else {
            model.addAttribute("baggage", baggage);
            model.addAttribute("insurance", insurance);
            model.addAttribute("reserveApiResponse1", arrrr);
            if (session.getAttribute("memberApiResponse") != null) {
                model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            } else {
                model.addAttribute("loginURL", "/userpage/fragment/menu");
            }
            return new ModelAndView("/userpage/pages/payment/payReservation")
                    .addObject("code", "payReservation");
        }
    }

    // ????????? ?????? ??????
    @RequestMapping(value = {"/complete", "/complete/update"})
    public ModelAndView complete(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        List Cook = new ArrayList<>();
        HttpSession session = request.getSession();
        ArrayList arrrr = new ArrayList<>();

        // ?????? ????????????
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                Cook.add(myCookies[i].getName());
                ReserveApiResponse reserveApiResponse = reservationApiLogicService.read(Long.valueOf(myCookies[i].getName())).getData();
                if(reserveApiResponse.getReStatus() != null){
                    arrrr.add(reserveApiResponse);
                }
                // ????????? name??? ?????? value??? ?????? complete??? ???????????? ?????? ???????????? ???????????? ????????? ???????????? ??????.
                Cookie myCookie = new Cookie(String.valueOf(reserveApiResponse.getReIndex()), "reIndex");
                myCookie.setMaxAge(5);
                myCookie.setPath("/");
                response.addCookie(myCookie);
            }
        }

        if(Cook.size() == 0) {
            return new ModelAndView("/userpage/pages/index/Exception")
                    .addObject("code", "registerPassenger");
        }else {
            model.addAttribute("reserveApiResponse1", arrrr);
            if (session.getAttribute("memberApiResponse") != null) {
                model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            } else {
                model.addAttribute("loginURL", "/userpage/fragment/menu");
            }
            return new ModelAndView("/userpage/pages/payment/complete")
                    .addObject("code", "complete");
        }
    }

    // ????????? ?????????
    @RequestMapping("/reservation/lcc")
    public ModelAndView nowMoment(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/reservation/lccpage/lcc")
                .addObject("code", "pointList");
    }
    // ????????????
    @RequestMapping("/reservation/flight")
    public ModelAndView flight(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/reservation/flight_info/flight")
                .addObject("code", "flight");
    }
    // ???????????? ??????
    @RequestMapping("/reservation/iframe")
    public ModelAndView iframe(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/reservation/flight_info/iframe")
                .addObject("code", "iframe");
    }
    // ????????????
    @RequestMapping("/reservation/fareRule")
    public ModelAndView fareRule(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/reservation/freight_info/fareRule")
                .addObject("code", "fareRule");
    }
    // ???????????? -> ???????????????
    @RequestMapping("/reservation/fareRule/eTicket")
    public ModelAndView eTicket(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/reservation/freight_info/eTicket")
                .addObject("code", "eTicket");
    }
    // ????????????
    @RequestMapping("/reservation/discount")
    public ModelAndView discount(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/reservation/discount_info/discount")
                .addObject("code", "discount");
    }
    //-------------------------------------------------------------------------------------------

    /* ?????????????????? */
    // aircraft
    // cabinShopping
    @RequestMapping("/index/cabinShopping")
    public ModelAndView cabinShopping(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/aircraft/cabinShopping")
                .addObject("code", "cabinShopping");
    }
    // eventflight
    @RequestMapping("/index/eventflight")
    public ModelAndView eventflight(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/aircraft/eventflight")
                .addObject("code", "eventflight");
    }
    // guide
    @RequestMapping("/index/guide")
    public ModelAndView guide(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/aircraft/guide")
                .addObject("code", "guide");
    }
    // jiniInsight
    @RequestMapping("/index/jiniInsight")
    public ModelAndView jiniInsight(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/aircraft/jiniInsight")
                .addObject("code", "jiniInsight");
    }
    // taxFree
    @RequestMapping("/index/taxFree")
    public ModelAndView taxFree(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/aircraft/taxFree")
                .addObject("code", "taxFree");
    }

    // airport
    // arrivalcard
    @RequestMapping("/index/arrivalcard")
    public ModelAndView arrivalcard(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/arrivalcard")
                .addObject("code", "arrivalcard");
    }
    // baggage
    @RequestMapping("/index/baggage")
    public ModelAndView baggage(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/baggage")
                .addObject("code", "baggage");
    }
    // checkin_login
    @RequestMapping("/index/checkin_login")
    public ModelAndView checkin_login(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/checkin_login")
                .addObject("code", "checkin_login");
    }
    // checkinfo
    @RequestMapping("/index/checkinfo")
    public ModelAndView checkinfo(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/checkinfo")
                .addObject("code", "checkinfo");
    }
    // checkinfo_list
    @RequestMapping("/index/checkinfo_list")
    public ModelAndView checkinfo_list(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/checkinfo_list")
                .addObject("code", "checkinfo_list");
    }
    // counter
    @RequestMapping("/index/counter")
    public ModelAndView counter(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/counter")
                .addObject("code", "counter");
    }
    // help
    @RequestMapping("/index/help")
    public ModelAndView help(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/airport/help")
                .addObject("code", "help");
    }

    // optional
    // airlineFood
    @RequestMapping("/index/airlineFood")
    public ModelAndView airlineFood(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/optional/airlineFood")
                .addObject("code", "airlineFood");
    }
    // bundle
    @RequestMapping("/index/bundle")
    public ModelAndView bundle(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/optional/bundle")
                .addObject("code", "bundle");
    }
    // jiniPlay
    @RequestMapping("/index/jiniPlay")
    public ModelAndView jiniPlay(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/optional/jiniPlay")
                .addObject("code", "jiniPlay");
    }
    // lounge
    @RequestMapping("/index/lounge")
    public ModelAndView lounge(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/optional/lounge")
                .addObject("code", "lounge");
    }
    // lounge
    @RequestMapping("/index/seat")
    public ModelAndView seat(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/serviceCount/optional/seat")
                .addObject("code", "seat");
    }
    /* ????????? ????????? ??? */


    //-------------------------------------------------------------------------------------------

    // ???????????????
    @RequestMapping("/point")
    public ModelAndView point(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/nabipoint/pointList")
                .addObject("code", "pointList");
    }
    //-------------------------------------------------------------------------------------------

    // ??????????????? ????????????
    @RequestMapping("/optional/activity")
    public ModelAndView optional(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/activity/activity")
                .addObject("code", "activity");
    }
    // ??????????????? ??????
    @RequestMapping("/optional/hotel")
    public ModelAndView hotel(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/hotel/hotel")
                .addObject("code", "hotel");
    }
    // ??????????????? ?????????????????????
    @RequestMapping("/optional/insurance")
    public ModelAndView insurance(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/insurance/insurance")
                .addObject("code", "insurance");
    }
    // ??????????????? cubb ??????????????????
    @RequestMapping("/optional/insurance2")
    public ModelAndView insurance2(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/insurance/Chubb")
                .addObject("code", "chubb");
    }
    // ??????????????? Assistcard??????????????????
    @RequestMapping("/optional/insurance3")
    public ModelAndView insurance3(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/insurance/insurance3")
                .addObject("code", "insurance3");
    }
    // ??????????????? jinipass
    @RequestMapping("/optional/jinipass")
    public ModelAndView jinipass(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/jinipass/jinipass")
                .addObject("code", "jinipass");
    }
    // ??????????????? ???????????????
    @RequestMapping("/optional/rentcar")
    public ModelAndView rentcar(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/optional/rentcar/rentcar")
                .addObject("code", "rentcar");
    }
    // ???????????? ??????
    @RequestMapping("/promotion/card_exchange")
    public ModelAndView card(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/promotion/card_exchange/associatedCard")
                .addObject("code", "associatedCard");
    }
    // ???????????? ?????????
    @RequestMapping("/promotion/event")
    public ModelAndView event(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/promotion/event/nowLeave")
                .addObject("code", "nowLeave");
    }
    // ???????????? ????????? ????????? ??????
    @RequestMapping("/promotion/event_view/{id}")
    public ModelAndView event_view(@PathVariable(name = "id") Long id, Model model,
                                   HttpServletRequest request, HttpServletResponse response) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        EventWinApiResponse eventWinApiResponse = eventWinApiLogicService.read(id).getData();
        model.addAttribute("eventWinApiResponse", eventWinApiResponse);
        return new ModelAndView("/userpage/pages/promotion/event/winner_view")
                .addObject("code", "nowLeave");
    }
    // ???????????? ????????????
    @RequestMapping("/promotion/coupon")
    public ModelAndView jinicoupon(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/promotion/jinicoupon/jiniCoupon")
                .addObject("code", "jinicoupon");
    }
    //-------------------------------------------------------------------------------------------
    // ????????????
    @RequestMapping("/notice/notice")
    public ModelAndView notice1(HttpServletRequest request, HttpServletResponse response, Model model) {
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/notice/notice")
                .addObject("code", "notice");
    }

    // ???????????? ??????
    @RequestMapping("/notice/nt_view/{id}")
    @Transactional
    public ModelAndView userNtView(HttpServletRequest request, HttpServletResponse response, Model model){
        Cookie[] myCookies = request.getCookies();
        for(int i = 0; i < myCookies.length; i++) {
            if(myCookies[i].getValue().equals("reIndex")){
                reservationApiLogicService.delete(Long.valueOf(myCookies[i].getName()));
                expiredCookie(response, myCookies[i].getName());
            }
        }
        HttpSession session = request.getSession();
        if(session.getAttribute("memberApiResponse") != null){
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
        }else{
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/notice/nt_view")
                .addObject("code", "userNtView");
    }
    //-------------------------------------------------------------------------------------------
    // admin_login
    @RequestMapping("/admin_login") // pages/admin_login
    public String adminLogin(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate(); // ?????? ??????
        return "/adminpage/pages/admin_login";
    }

    @PostMapping("/admin_enter")
    public ModelAndView adminLoginOk(HttpServletRequest request, String admin_id, String admin_pw, Model model) throws Exception{
        if(adminApiLoginService.IdPwRead(admin_id).getData() != null) {
            if (admin_id.equals(adminApiLoginService.IdPwRead(admin_id).getData().getAdminId()) &&
                    admin_pw.equals(adminApiLoginService.IdPwRead(admin_id).getData().getAdminPw())) {
                HttpSession session = request.getSession();
                String name = adminApiLoginService.IdPwRead(admin_id).getData().getAdminName();
                session.setAttribute("name", name); // ?????? ??????
                model.addAttribute("str", (String) session.getAttribute("name"));
                return new ModelAndView("/adminpage/pages/admin_index")
                        .addObject("code", "admin_index")
                        .addObject("menuList", menuService.getadminMenu());
            } else {
                return new ModelAndView("/adminpage/pages/admin_login");
            }
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }


    // admin_index
    @GetMapping("/admin_index")
    public ModelAndView adminIndex(HttpServletRequest request, Model model) throws Exception{
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/admin_index")
                    .addObject("code", "admin_index")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    // admin ????????? ??????
    @RequestMapping("/admin/scheduleResultInfo/{id}")
    public ModelAndView scheduleResultInfo(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/schedule/sc_resultinfo")
                    .addObject("code", "sc_resultinfo")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("schedule", menuService.adminScheduleMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // admin ????????? ??????
    @RequestMapping("/admin/scheduleResult")
    public ModelAndView scheduleResult(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/schedule/sc_result")
                    .addObject("code", "sc_result")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // admin ????????? ??????
    @RequestMapping("/admin/scheduleRegist")
    public ModelAndView scheduleRegist(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/schedule/sc_regist")
                    .addObject("code", "sc_regist")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("schedule", menuService.adminScheduleMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // admin ????????? ??????
    @RequestMapping("/admin/scheduleList")
    public ModelAndView scheduleList(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/schedule/sc_list")
                    .addObject("code", "sc_list")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("schedule", menuService.adminScheduleMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // admin ????????? ??????
    @RequestMapping("/admin/aircraftRegist")
    public ModelAndView aircraftRegist(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/schedule/aircraft_regist")
                    .addObject("code", "aircraft_regist")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("schedule", menuService.adminScheduleMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // admin ????????? ??????
    @RequestMapping("/admin/airplane")
    public ModelAndView aircraftList(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/schedule/aircraft_list")
                    .addObject("code", "aircraft_list")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("schedule", menuService.adminScheduleMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //-------------------------------------------------------------------------------------------

    // reservation
    // ????????? ????????? ??????
    @RequestMapping("/admin/rsIndex")
    public ModelAndView rsIndex(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/reservation/rs_index")
                    .addObject("code", "rs_index")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("reservation", menuService.adminReservationMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //    // ????????? ????????? ?????? ??????
//    @RequestMapping("/admin/rs_result")
//    public ModelAndView rsResult(HttpServletRequest request, Model model) {
//        HttpSession session = request.getSession();
//        if((String) session.getAttribute("name") != null) {
//            model.addAttribute("str", (String) session.getAttribute("name"));
//            return new ModelAndView("/adminpage/pages/reservation/rs_result")
//                    .addObject("code", "rs_result")
//                    .addObject("menuList", menuService.getadminMenu());
//        }else{
//            return new ModelAndView("/adminpage/pages/admin_login");
//        }
//    }
    // ????????? ????????? ????????????
    @RequestMapping("/admin/rs_user_info/{id}")
    public ModelAndView rsUserInfo(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/reservation/rs_user_info")
                    .addObject("code", "rs_user_info")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("reservation", menuService.adminReservationMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //    // ????????? ????????? ??????
//    @RequestMapping("/admin/rs_user")
//    public ModelAndView rsUser(HttpServletRequest request, Model model) {
//        HttpSession session = request.getSession();
//        if((String) session.getAttribute("name") != null) {
//            model.addAttribute("str", (String) session.getAttribute("name"));
//            return new ModelAndView("/adminpage/pages/reservation/rs_user")
//                    .addObject("code", "rs_user")
//                    .addObject("menuList", menuService.getadminMenu())
//                    .addObject("reservation", menuService.adminReservationMenu());
//        }else{
//            return new ModelAndView("/adminpage/pages/admin_login");
//        }
//    }
//    // ????????? ??? ?????? ??????
//    @RequestMapping("/admin/rs_sch_result")
//    public ModelAndView rsSchResult(HttpServletRequest request, Model model) {
//        HttpSession session = request.getSession();
//        if((String) session.getAttribute("name") != null) {
//            model.addAttribute("str", (String) session.getAttribute("name"));
//            return new ModelAndView("/adminpage/pages/reservation/rs_sch_result")
//                    .addObject("code", "rs_sch_result")
//                    .addObject("menuList", menuService.getadminMenu())
//                    .addObject("reservation", menuService.adminReservationMenu());
//        }else{
//            return new ModelAndView("/adminpage/pages/admin_login");
//        }
//    }
    // ????????? ??? ??????
    @RequestMapping("/admin/rs_sch")
    public ModelAndView rsSch(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/reservation/rs_sch")
                    .addObject("code", "rs_sch")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("reservation", menuService.adminReservationMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ?????????(LJ438) ????????? ????????????
//    @RequestMapping("/admin/rs_user_info")
//    public ModelAndView rsUserInfo(HttpServletRequest request, Model model) {
//        HttpSession session = request.getSession();
//        if((String) session.getAttribute("name") != null) {
//            model.addAttribute("str", (String) session.getAttribute("name"));
//            return new ModelAndView("/adminpage/pages/reservation/rs_user_info")
//                    .addObject("code", "rs_user_info")
//                    .addObject("menuList", menuService.getadminMenu())
//                    .addObject("reservation", menuService.adminReservationMenu());
//        }else{
//            return new ModelAndView("/adminpage/pages/admin_login");
//        }
//    }
    // ?????????(LJ438) ????????? ??????
    @RequestMapping("/admin/rs_user")
    public ModelAndView rsUser(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/reservation/rs_user")
                    .addObject("code", "rs_user")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("reservation", menuService.adminReservationMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //-------------------------------------------------------------------------------------------

    // ????????????
    // ???????????? ??????
    @RequestMapping("/admin/cmList")
    public ModelAndView cmList(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/cm/cm_list")
                    .addObject("code", "cm_list")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ???????????? ????????????
    @RequestMapping("/admin/cm_list/cm_detail/{id}")
    public ModelAndView cmDetail(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/cm/cm_detail")
                    .addObject("code", "cm_detail")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
            }
    }
    // ???????????? ??????
    @RequestMapping("/admin/cm_list/cm_modify/{id}")
    public ModelAndView cmModify(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/cm/cm_modify")
                    .addObject("code", "cm_modify")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
        return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //-------------------------------------------------------------------------------------------

    // ?????????
    // ????????? ??????
    @RequestMapping("/admin/item")
    public ModelAndView item(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/item/item")
                    .addObject("code", "item")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("item", menuService.adminItemMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ????????????
    @RequestMapping("/admin/item/detail/{id}")
    public ModelAndView itemDetail(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/item/itemDetail")
                    .addObject("code", "itemDetail")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("item", menuService.adminItemMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ??????
    @RequestMapping("/admin/item/itemadd")
    public ModelAndView itemAdd(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/item/itemadd")
                    .addObject("code", "itemadd")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("item", menuService.adminItemMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    @Autowired
    private TbLostRepository tbLostRepository;

    @RequestMapping("admin/item/itemadd/file")
    public String itemFile(
            @RequestPart(value = "losAirplane") String airplane,
            @RequestPart(value = "losType") String type,
            @RequestPart(value = "losArrivedate") String date,
            @RequestPart(value = "losAirportArea") String area,
            @RequestPart(value = "losImg") MultipartFile img) throws Exception {
        TbLost tbLost = new TbLost();

        tbLost.setLosAirplane(airplane);
        tbLost.setLosType(type);
        tbLost.setLosArrivedate(LocalDateTime.parse(date + "T00:00:00"));
        tbLost.setLosAirportArea(area);
        tbLost.setLosIsfind(LostStatus.NotReceived);

        String imgName = img.getOriginalFilename();
        String imgNameExtension = FilenameUtils.getExtension(imgName).toLowerCase();
        FilenameUtils.removeExtension(imgName);

        File destinationImg;
        String destinationImgName;
        String PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+imgNameExtension;
            destinationImg = new File(PATH + destinationImgName);
        }while (destinationImg.exists());

        destinationImg.getParentFile().mkdir();

        img.transferTo(destinationImg);

        tbLost.setLosImgName(destinationImgName);
        tbLost.setLosImgOriName(imgName);
        tbLost.setLosImgPath(PATH);

        tbLostRepository.save(tbLost);
        return "redirect:/pages/admin/item/itemadd";
    }
    //-------------------------------------------------------------------------------------------

    // ????????????
    @RequestMapping("/admin/notice")
    @Transactional
    public ModelAndView notice(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/notice/notice")
                    .addObject("code", "notice")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    @RequestMapping("/admin/nt_modify/{id}")
    public ModelAndView ntModify(@PathVariable(name = "id") Long id, HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            NotifyApiResponse notifyApiResponse = notifyLogicService.read(id).getData();
            model.addAttribute("notifyApiResponse", notifyApiResponse);
            return new ModelAndView("/adminpage/pages/notice/nt_modify")
                    .addObject("code", "ntModify")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    @RequestMapping("/admin/nt_view/{id}")
    @Transactional
    public ModelAndView ntView(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/notice/nt_view")
                    .addObject("code", "ntView")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    // ?????? ??????
    @RequestMapping("/admin/nt_write")
    @Transactional
    public ModelAndView ntWrite(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/notice/nt_write")
                    .addObject("code", "nt_write")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    // ?????? ??????
    @PostMapping("/admin/nt_file/upload")
    public String uploadFile(@RequestPart(value = "title") String ntTitle,
                             @RequestPart(value = "file", required = false) MultipartFile file,
                             @RequestPart(value = "content") String ntContent
    ) throws IOException {
        TbNotifi tbNotifi = new TbNotifi();
// ??????
        tbNotifi.setNoTitle(ntTitle);
        tbNotifi.setNoContents(ntContent);
// ?????????
        String sourceImgName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        file.transferTo(destinationImg);

        tbNotifi.setNoFileName(destinationImgName);
        tbNotifi.setNoFileOriname(sourceImgName);
        tbNotifi.setNoFileUrl(imgUrl);

        notifyLogicService.save(tbNotifi);
        return "redirect:/pages/admin/notice";
    }

    @Autowired
    TbNotifiRepository tbNotifiRepository;

    // ?????? ?????? ??????
    @PutMapping("/admin/nt_file/upload/{id}")
    public String modifyFile(@RequestPart(value = "title") String ntTitle,
                             @RequestPart(value = "file", required = false) MultipartFile file,
                             @RequestPart(value = "content") String ntContent,
                             @RequestPart(value = "idx") String idx
    ) throws IOException {
        TbNotifi tbNotifi = tbNotifiRepository.findByNoIndex(Long.valueOf(idx)).get();

        // ??????
        tbNotifi.setNoIndex(tbNotifi.getNoIndex());
        tbNotifi.setNoTitle(ntTitle);
        tbNotifi.setNoContents(ntContent);
        tbNotifi.setNoRegdate(tbNotifi.getNoRegdate());
        // ?????????
        String sourceImgName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        file.transferTo(destinationImg);

        tbNotifi.setNoFileName(destinationImgName);
        tbNotifi.setNoFileOriname(sourceImgName);
        tbNotifi.setNoFileUrl(imgUrl);

        tbNotifiRepository.save(tbNotifi);
        return "redirect:/pages/admin/nt_view/" + idx;
    }
    //-------------------------------------------------------------------------------------------

    /* ????????? */
    // ???????????? ?????????
    @RequestMapping("/admin/evn_ing")
    public ModelAndView evn_ing(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/event/evn_ing")
                    .addObject("code", "evn_ing")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ?????????
    @RequestMapping("/admin/evn_end")
    public ModelAndView evn_end(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/event/evn_end")
                    .addObject("code", "evn_end")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ?????????
    @RequestMapping("/admin/evn_win")
    public ModelAndView evn_win(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/event/evn_win")
                    .addObject("code", "evn_win")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ??????
    @RequestMapping("/admin/evn_view/{id}")
    public ModelAndView evn_view(HttpServletRequest request, @PathVariable(name = "id") Long id, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            EventApiResponse eventApiResponse = eventApiLogicService.read(id).getData();
            model.addAttribute("eventApiResponse", eventApiResponse);
            return new ModelAndView("/adminpage/pages/event/evn_view")
                    .addObject("code", "evn_view")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ??????
    @RequestMapping("/admin/evn_view_win/{id}")
    public ModelAndView evn_view_win(HttpServletRequest request, @PathVariable(name = "id") Long id, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            EventWinApiResponse eventWinApiResponse = eventWinApiLogicService.read(id).getData();
            model.addAttribute("eventWinApiResponse", eventWinApiResponse);
            return new ModelAndView("/adminpage/pages/event/evn_view_win")
                    .addObject("code", "evn_view")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ??????
    @RequestMapping("/admin/evn_edit/{id}")
    public ModelAndView evn_edit(HttpServletRequest request, @PathVariable(name = "id") Long id, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            EventApiResponse eventApiResponse = eventApiLogicService.read(id).getData();
            model.addAttribute("eventApiResponse", eventApiResponse);
            return new ModelAndView("/adminpage/pages/event/evn_edit")
                    .addObject("code", "evn_edit")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ??????
    @RequestMapping("/admin/evn_edit_win/{id}")
    public ModelAndView evn_edit_win(HttpServletRequest request, @PathVariable(name = "id") Long id, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            EventWinApiResponse eventWinApiResponse = eventWinApiLogicService.read(id).getData();
            model.addAttribute("eventWinApiResponse", eventWinApiResponse);
            return new ModelAndView("/adminpage/pages/event/evn_edit_win")
                    .addObject("code", "evn_edit")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ??????
    @RequestMapping("/admin/evn_write")
    public ModelAndView evn_write(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/event/evn_write")
                    .addObject("code", "evn_write")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // ????????? ????????? ??????
    @RequestMapping("/admin/evn_write_win")
    public ModelAndView evn_Winwrite(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/event/evn_write_win")
                    .addObject("code", "evn_write")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    // ????????? ??????
    @PostMapping("/admin/evn_write/upload")
    public String uploadFile(@RequestPart(value = "evTitle") String evTitle,
                             @RequestPart(value = "startDate") String startDate,
                             @RequestPart(value = "endDate") String endDate,
                             @RequestPart(value = "file", required = false) MultipartFile file,
                             @RequestPart(value = "evContent") String evContent
    ) throws IOException {
        TbEvent tbEvent = new TbEvent();
// ??????
        tbEvent.setEvTitle(evTitle);
        tbEvent.setEvStartDay(LocalDateTime.parse(startDate + "T00:00:00"));
        tbEvent.setEvEndDay(LocalDateTime.parse(endDate +"T00:00:00"));
        tbEvent.setEvContent(evContent);
// ?????????
        String sourceImgName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        file.transferTo(destinationImg);

        tbEvent.setEvFileName(destinationImgName);
        tbEvent.setEvFileOriname(sourceImgName);
        tbEvent.setEvFileUrl(imgUrl);

        eventApiLogicService.save(tbEvent);
        return "redirect:/pages/admin/evn_ing";
    }

    @Autowired
    TbEventRepository tbEventRepository;
    // ????????? ?????? ??????
    @PostMapping("/admin/evn_edit/upload")
    public String uploadFile_edit(
                             @RequestPart(value = "evIndex") String evIndex,
                             @RequestPart(value = "evTitle") String evTitle,
                             @RequestPart(value = "start_date") String start_date,
                             @RequestPart(value = "end_date") String end_date,
                             @RequestPart(value = "ex_file", required = false) MultipartFile ex_file,
                             @RequestPart(value = "event_content") String event_content
    ) throws IOException {
        TbEvent tbEvent = tbEventRepository.findById(Long.valueOf(evIndex)).get();
// ?????????
        tbEvent.setEvTitle(evTitle);
        tbEvent.setEvStartDay(LocalDateTime.parse(start_date + "T00:00:00"));
        tbEvent.setEvEndDay(LocalDateTime.parse(end_date +"T00:00:00"));
        tbEvent.setEvContent(event_content);
        tbEvent.setEvStatus(tbEvent.getEvStatus());
        tbEvent.setEvRegdate(tbEvent.getEvRegdate());
        tbEvent.setEvIndex(tbEvent.getEvIndex());
// ?????????
        String sourceImgName = ex_file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        ex_file.transferTo(destinationImg);

        tbEvent.setEvFileName(destinationImgName);
        tbEvent.setEvFileOriname(sourceImgName);
        tbEvent.setEvFileUrl(imgUrl);

        tbEventRepository.save(tbEvent);
        return "redirect:/pages/admin/evn_ing";
    }

    //-------------------------------------------------------------------------------------------

    /* ????????? */
    @RequestMapping("/admin/usepointlist")
    public ModelAndView usepointlist(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/point/usepointlist")
                    .addObject("code", "usepointlist")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("point", menuService.adminPointMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    @RequestMapping("/admin/pointadd")
    public ModelAndView pointadd(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/point/pointadd")
                    .addObject("code", "pointadd")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("point", menuService.adminPointMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //-------------------------------------------------------------------------------------------

    // faq ??????
    @RequestMapping("/admin/faq_main")
    public ModelAndView faqMain(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/inquiry/faq_main")
                    .addObject("code", "faq_main")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // faq ??????
    @RequestMapping("/admin/faq_edit/{id}")
    public ModelAndView faqEdit(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/inquiry/faq_edit")
                    .addObject("code", "faq_edit")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // faq ??????
    @RequestMapping("/admin/faq_write")
    public ModelAndView faqWrite(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/inquiry/faq_write")
                    .addObject("code", "faq_write")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // qna ???
    @GetMapping("/admin/faq_view/{id}")
    public ModelAndView faqView(HttpServletRequest request, Model model, @PathVariable(name = "id") Long id) throws Exception{
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            Header<FaqApiResponse> faqApiResponses = faqApiLogicService.read(id);
            model.addAttribute("faqApiResponses", faqApiResponses.getData());
            return new ModelAndView("/adminpage/pages/inquiry/faq_view")
                    .addObject("code", "faq_view")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // qna ??????
    @RequestMapping("/admin/qna_main")
    public ModelAndView qnaMain(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/inquiry/qna_main")
                    .addObject("code", "qna_main")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // qna ???
    @GetMapping("/admin/qna_view/{id}")
    public ModelAndView qnaView(HttpServletRequest request, Model model, @PathVariable(name = "id") Long id) throws Exception{
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            Header<QnaApiResponse> qnaApiResponses = qnaApiLogicService.read(id);
            model.addAttribute("qnaApiResponses", qnaApiResponses.getData());
            return new ModelAndView("/adminpage/pages/inquiry/qna_view")
                    .addObject("code", "qna_view")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    // qna ??????
    @GetMapping("/admin/qna_reply/{id}")
    public ModelAndView qnaReply(HttpServletRequest request, Model model) throws Exception{
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/inquiry/qna_reply")
                    .addObject("code", "qna_reply")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("inquiry", menuService.adminQnaMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }


    //-------------------------------------------------------------------------------------------

    /* ?????? ?????? */
    @RequestMapping("/admin/couponadd")
    public ModelAndView couponAdd(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/coupon/couponadd")
                    .addObject("code", "couponAdd")
                    .addObject("coupon", menuService.adminCouponMenu())
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    @RequestMapping("/admin/usecouponlist")
    public ModelAndView useCouponList(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("memberApiResponse", session.getAttribute("memberApiResponse"));
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/coupon/usecouponlist")
                    .addObject("code", "useCouponList")
                    .addObject("menuList", menuService.getadminMenu())
                    .addObject("coupon", menuService.adminCouponMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }
    //-------------------------------------------------------------------------------------------


    /* ?????? ????????? */
    @RequestMapping("/admin/genielist")
    public ModelAndView genieList(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/magazine/genieList")
                    .addObject("code", "genieList")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    @GetMapping("/admin/genielist_view/{id}")
    public ModelAndView genieListView(HttpServletRequest request, Model model, @PathVariable(name = "id") Long id) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/magazine/genieList_view")
                    .addObject("code", "genieListView")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    @GetMapping("/admin/genielist_edit/{id}")
    public ModelAndView genieListEdit(HttpServletRequest request, @PathVariable(name = "id") Long id, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            MagazineApiResponse magazineApiResponse = magazineApiLoginService.read(id).getData();
            model.addAttribute("images", magazineApiResponse);
            return new ModelAndView("/adminpage/pages/magazine/genieList_edit")
                    .addObject("code", "genieListEdit")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    @RequestMapping("/admin/genielist_add")
    public ModelAndView genieListAdd(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/magazine/genieList_add")
                    .addObject("code", "genieListAdd")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }


    @PostMapping("/admin/genielist_add/upload")
    public String uploadFile(@RequestPart(value = "mzTitle") String mzTitle,
                             @RequestPart(value = "imgs", required = false) MultipartFile imgs,
                             @RequestPart(value = "answers", required = false) MultipartFile answers,
                             @RequestPart(value = "pdfs", required = false) MultipartFile pdfs
    ) throws IOException {
        TbMagazine tbMagazine = new TbMagazine();
// ??????
        tbMagazine.setMzTitle(mzTitle);
// ?????????
        String sourceImgName = imgs.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        imgs.transferTo(destinationImg);

        tbMagazine.setMzImgName(destinationImgName);
        tbMagazine.setMzImgOriname(sourceImgName);
        tbMagazine.setMzImgUrl(imgUrl);

// ??????
        String sourceAnsName = answers.getOriginalFilename();
        String sourceAnsNameExtension = FilenameUtils.getExtension(sourceAnsName).toLowerCase();
        FilenameUtils.removeExtension(sourceAnsName);

        File destinationAns;
        String destinationAnsName;
        String ansUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationAnsName = RandomStringUtils.randomAlphabetic(32)+"."+sourceAnsNameExtension;
            destinationAns = new File(ansUrl + destinationAnsName);
        }while(destinationAns.exists());

        destinationAns.getParentFile().mkdir();
        answers.transferTo(destinationAns);

        tbMagazine.setMzAnswerName(destinationAnsName);
        tbMagazine.setMzAnswerOriname(sourceAnsName);
        tbMagazine.setMzAnswerUrl(ansUrl);

// pdf
        String sourcePdfName = pdfs.getOriginalFilename();
        String sourcePdfNameExtension = FilenameUtils.getExtension(sourcePdfName).toLowerCase();
        FilenameUtils.removeExtension(sourcePdfName);

        File destinationPdf;
        String destinationPdfName;
        String pdfUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationPdfName = RandomStringUtils.randomAlphabetic(32)+"."+sourcePdfNameExtension;
            destinationPdf = new File(pdfUrl + destinationPdfName);
        }while(destinationPdf.exists());

        destinationPdf.getParentFile().mkdir();
        pdfs.transferTo(destinationPdf);

        tbMagazine.setMzPdfName(destinationPdfName);
        tbMagazine.setMzPdfOriname(sourcePdfName);
        tbMagazine.setMzPdfUrl(pdfUrl);

        magazineApiLoginService.save(tbMagazine);
        return "redirect:/pages/admin/genielist";
    }


    @Autowired
    TbMagazineRepository tbMagazineRepository;

    // ??????
    @PostMapping("/admin/genielist_edit/update")
    public String uploadFiles(@RequestPart(value = "id") String id,
                             @RequestPart(value = "imgs") MultipartFile imgs,
                             @RequestPart(value = "answers") MultipartFile answers,
                             @RequestPart(value = "pdfs") MultipartFile pdfs
    ) throws IOException {

        TbMagazine tbMagazine = tbMagazineRepository.findById(Long.parseLong(id)).get();

// ?????????
        String sourceImgName = imgs.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        imgs.transferTo(destinationImg);

        tbMagazine.setMzImgName(destinationImgName);
        tbMagazine.setMzImgOriname(sourceImgName);
        tbMagazine.setMzImgUrl(imgUrl);

// ??????
        String sourceAnsName = answers.getOriginalFilename();
        String sourceAnsNameExtension = FilenameUtils.getExtension(sourceAnsName).toLowerCase();
        FilenameUtils.removeExtension(sourceAnsName);

        File destinationAns;
        String destinationAnsName;
        String ansUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationAnsName = RandomStringUtils.randomAlphabetic(32)+"."+sourceAnsNameExtension;
            destinationAns = new File(ansUrl + destinationAnsName);
        }while(destinationAns.exists());

        destinationAns.getParentFile().mkdir();
        answers.transferTo(destinationAns);

        tbMagazine.setMzAnswerName(destinationAnsName);
        tbMagazine.setMzAnswerOriname(sourceAnsName);
        tbMagazine.setMzAnswerUrl(ansUrl);

// pdf
        String sourcePdfName = pdfs.getOriginalFilename();
        String sourcePdfNameExtension = FilenameUtils.getExtension(sourcePdfName).toLowerCase();
        FilenameUtils.removeExtension(sourcePdfName);

        File destinationPdf;
        String destinationPdfName;
        String pdfUrl = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\upload\\";

        do{
            destinationPdfName = RandomStringUtils.randomAlphabetic(32)+"."+sourcePdfNameExtension;
            destinationPdf = new File(pdfUrl + destinationPdfName);
        }while(destinationPdf.exists());

        destinationPdf.getParentFile().mkdir();
        pdfs.transferTo(destinationPdf);

        tbMagazine.setMzPdfName(destinationPdfName);
        tbMagazine.setMzPdfOriname(sourcePdfName);
        tbMagazine.setMzPdfUrl(pdfUrl);

        tbMagazine.setMzIndex(tbMagazine.getMzIndex());
        tbMagazine.setMzTitle(tbMagazine.getMzTitle());
        tbMagazine.setMzRegdate(tbMagazine.getMzRegdate());

        tbMagazineRepository.save(tbMagazine);
        return "redirect:/pages/admin/genielist_view/"+id;
    }

    @GetMapping("/pay/{a}")
    public ModelAndView buyticket(HttpServletRequest request, Model model, @PathVariable(name = "a") String a) {

        List<ReserveApiResponse> reserveApiResponseList = reservationApiLogicService.paymentUpdate(a).getData();
        System.out.println(reserveApiResponseList);

        HttpSession session = request.getSession();
        model.addAttribute("reservation", session.getAttribute(String.valueOf(reserveApiResponseList)));
        if (session.getAttribute("memberApiResponse") != null) {
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
                return new ModelAndView("/userpage/pages/payment/pay")
                        .addObject("code", "genieListView")
                        .addObject("menuList", menuService.getadminMenu());
        } else {
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/payment/pay")
                .addObject("code", "pay");
    }

    @GetMapping("/payUpdate/{a}")
    public ModelAndView updateticket(HttpServletRequest request, Model model, @PathVariable(name = "a") String a) {

        List<ReserveApiResponse> reserveApiResponseList = reservationApiLogicService.paymentUpdate(a).getData();
        System.out.println(reserveApiResponseList);

        HttpSession session = request.getSession();
        model.addAttribute("reservation", session.getAttribute(String.valueOf(reserveApiResponseList)));
        if (session.getAttribute("memberApiResponse") != null) {
            model.addAttribute("loginURL", "/userpage/fragment/menu_login");
            return new ModelAndView("/userpage/pages/payment/payUpdate")
                    .addObject("code", "genieListView")
                    .addObject("menuList", menuService.getadminMenu());
        } else {
            model.addAttribute("loginURL", "/userpage/fragment/menu");
        }
        return new ModelAndView("/userpage/pages/payment/payUpdate")
                .addObject("code", "pay");
    }
}