import {React,useRef,useEffect,} from 'react'
import footer from '../access/style/footerMaster.scss'

function FooterMaster() {
const logo_p1="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
const logo_p2="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"


return (
    <div className='footer__container'>
        <div className="footer__content">
            <div className="footer__content__logo">
              <img src={logo_p1} alt="" />
              <img src={logo_p2} alt="" />
            </div>
            <div className="footer__content__item">
              <span>Công ty</span>
              <ul>
                <li><a href="">Giới thiệu</a></li>
                <li><a href="">Bảng tin</a></li>
                <li><a href="">Liên hệ</a></li>
                <li><a href="">Sự nghiệp</a></li>
                <li><a href="">ByteDance</a></li>
              </ul>
            </div>
            <div className="footer__content__item">
              <span>Chương trình</span>
              <ul>
                <li><a href="">TikTok for Good</a></li>
                <li><a href="">Quảng cáo</a></li>
                <li><a href="">Developer</a></li>
                <li><a href="">TikTok Rewards</a></li>
              </ul>
            </div>
            <div className="footer__content__item">
              <span>Hỗ trợ</span>
              <ul>
                <li><a href="">Trung tâm Trợ giúp</a></li>
                <li><a href="">Trung tâm an toàn</a></li>
                <li><a href="">Creator Portal</a></li>
                <li><a href="">Hướng dẫn Cộng đồng</a></li>
                <li><a href="">Minh bạch</a></li>
                <li><a href="">Accessibility</a></li>
              </ul>
            </div>
            <div className="footer__content__item">
              <span>Pháp lý</span>
              <ul>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</a></li>
              </ul>
            </div>
        </div>
        <div className="footer__content__bottom">
          <div className="footer__content__bottom--language" >
          <select className="footer__bottom__drop-down-list" >
              <option value="ar">العربية</option>
              <option value="bn-IN">বাঙ্গালি (ভারত)</option>
              <option value="ceb-PH">Cebuano (Pilipinas)</option>
              <option value="cs-CZ">Čeština (Česká republika)</option>
              <option value="de-DE">Deutsch</option>
              <option value="el-GR">Ελληνικά (Ελλάδα)</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fi-FI">Suomi (Suomi)</option>
              <option value="fil-PH">Filipino (Pilipinas)</option>
              <option value="fr">Français</option>
              <option value="he-IL">עברית (ישראל)</option>
              <option value="hi-IN">हिंदी</option>
              <option value="hu-HU">Magyar (Magyarország)</option>
              <option value="id-ID">Bahasa Indonesia (Indonesia)</option>
              <option value="it-IT">Italiano (Italia)</option>
              <option value="ja-JP">日本語（日本）</option>
              <option value="jv-ID">Basa Jawa (Indonesia)</option>
              <option value="km-KH">ខ្មែរ (កម្ពុជា)</option>
              <option value="ko-KR">한국어 (대한민국)</option>
              <option value="ms-MY">Bahasa Melayu (Malaysia)</option>
              <option value="my-MM">မြန်မာ (မြန်မာ)</option>
              <option value="nl-NL">Nederlands (Nederland)</option>
              <option value="pl-PL">Polski (Polska)</option>
              <option value="pt-BR">Português (Brasil)</option>
              <option value="ro-RO">Română (Romania)</option>
              <option value="ru-RU">Русский (Россия)</option>
              <option value="sv-SE">Svenska (Sverige)</option>
              <option value="th-TH">ไทย (ไทย)</option>
              <option value="tr-TR">Türkçe (Türkiye)</option>
              <option value="uk-UA">Українська (Україна)</option>
              <option value="ur">اردو</option>
              <option selected value="vi-VN">Tiếng Việt (Việt Nam)</option>
              <option value="zh-Hans">简体中文</option>
              <option value="zh-Hant-TW">繁體中文</option>
            </select>
          </div>
          <div className="footer__content__bottom--text">
            <span>
              @ 2022 TikTok
            </span>
          </div>
        </div>
    </div>
  )
}

export default FooterMaster