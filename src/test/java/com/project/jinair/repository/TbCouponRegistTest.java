//package com.project.jinair.repository;
//
//import com.project.jinair.JinAirApplicationTests;
//import com.project.jinair.model.entity.payment.TbCouponRegist;
//import com.project.jinair.model.enumclass.CouponStatus;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDateTime;
//import java.util.Optional;
//
//public class TbCouponRegistTest extends JinAirApplicationTests {
//
//    @Autowired
//    private TbCouponRegistRepository tbCouponRegistRepository;
//
//    @Test
//    public void create() {
//        TbCouponRegist tbCouponRegist = TbCouponRegist.builder()
//                .crType("프로모션")
//                .crPrice(0L)
//                .crDesc("국내선 30% 할인")
//                .crCode("1234567vv")
//                .crStatus(CouponStatus.AddCoupon)
//                .crDiscount(30)
//                .crIssuanceDay(LocalDateTime.now())
//                .crEndDay(LocalDateTime.now())
//                .crTotCoupon(100)
//                .crStockCoupon(100)
//                .crRegdate(LocalDateTime.now())
//                .build();
//        TbCouponRegist newTbCouponRegist = tbCouponRegistRepository.save(tbCouponRegist);
//    }
//
//    @Test
//    public void update() {
//        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findByCrCode("1234567vv");
//        tbCouponRegist.ifPresent(
//                selectTbCouponRegist -> {
//                    selectTbCouponRegist.setCrStockCoupon(86);
//                    selectTbCouponRegist.setCrTotCoupon(500);
//                    tbCouponRegistRepository.save(selectTbCouponRegist);
//                }
//        );
//    }
//
//    @Test
//    public void read() {
//        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findByCrCode("1234567ab");
//        tbCouponRegist.ifPresent(
//            selectTbCouponRegist -> {
//                System.out.println("쿠폰 타입 : " + selectTbCouponRegist.getCrType());
//                System.out.println("쿠폰 가격 : " + selectTbCouponRegist.getCrPrice() + "원");
//                System.out.println("쿠폰 발급 갯수 : " + selectTbCouponRegist.getCrTotCoupon() + "개");
//                System.out.println("쿠폰 잔여 갯수 : " + selectTbCouponRegist.getCrStockCoupon() + "개");
//                System.out.println("쿠폰 내용 : " + selectTbCouponRegist.getCrDesc());
//                System.out.println("쿠폰 등록일 : " + selectTbCouponRegist.getCrRegdate());
//                System.out.println("쿠폰 발행일 : " + selectTbCouponRegist.getCrIssuanceDay());
//                System.out.println("쿠폰 종료일 : " + selectTbCouponRegist.getCrEndDay());
//            }
//        );
//    }
//
//    @Test
//    public void delete() {
//        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findByCrCode("1234567ab");
//        tbCouponRegist.ifPresent(
//            selectTbCouponRegist ->{
//                tbCouponRegistRepository.delete(selectTbCouponRegist);
//            }
//        );
//    }
//}
