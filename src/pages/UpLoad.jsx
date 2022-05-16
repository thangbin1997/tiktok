import {React, useRef, useState,useEffect} from 'react'
import uploadStyle from '../access/style/upload.scss'
import switchBtn from '../access/style/switch.scss'
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import FooterMaster from './FooterMaster';

function UpLoad() {
  const [isChecked, setIsChecked]= useState(false)

  const input=useRef()
  const switchBtn=useRef()
  const notCheckContent=useRef()
  const checkContent=useRef()

const switchClick=()=>{
  setIsChecked(!isChecked)

}
useEffect(()=>{
  if(isChecked){
    checkContent.current.style.display="block"
    notCheckContent.current.style.display="none"
  }
  else {
    notCheckContent.current.style.display="block"
    checkContent.current.style.display="none"
  }
  console.log('asd');
})
  const handleFolderClick=()=>{
    input.current.click()
  }
  return (
  <div className='upload__container'>
    <div className="upload__content">
      <div className="upload__content__container">
        <span className='upload__content__heading'>Tải video lên</span>
        <div>
          <span className='upload__content__title'>Đăng video vào tài khoản của bạn</span>
        </div>
        <div className="upload__content__body">
          <input className='upload__content__body--input' type="file" ref={input}/>
          <div className="upload__content__body--foder"
            onClick={handleFolderClick}
          >
              <div className='foder--cloud'>
                <AiOutlineCloudUpload className="cloud-icon-upload"/>
              </div>
              <div className="foder--text--main">
                <span>Chọn video để tải lên</span>
              </div>
              <div className="foder--text--sub">
                <span>Hoặc kéo và thả tệp tin</span>
              </div>
              <div className="foder--text--video__info">
                <div>
                  <span>MP4 hoặc WebM</span>
                </div>
                <div>
                  <span>Độ phân giải 720x1280 trở lên</span>
                </div>
                <div>
                  <span>Tối đa 10 phút</span>
                </div>
                <div>
                  <span>Ít hơn 2 GB</span>
                </div>
              </div>
              <div className="foder--select--btn">
                  <button className='folder--btn'>Chọn tập tin</button>
              </div>
          </div>
          <div className="upload__content__body--info">
            <div className="upload__content__body--info--caption">
              <div className="upload__content__body--info--caption-text">
                <span className='caption-text'>Chú thích</span>
                <span className='caption-number'>0 / 150</span>
              </div>
              <div className="upload__content__body--info--caption-input">
                <input className='caption-input' type="text" />
                <span>@</span>
                <span>#</span>
              </div>
            </div>
            <div className="upload__content__body--info--image">
              <div className="upload__content__body--info--image-text">
                <span className="image-text">Ảnh bìa</span>
              </div>
              <div className="upload__content__body--info--image-container">
                <div className="upload__content__body--info--image-container-item">

                </div>
              </div>
            </div>
            <div className="upload__content__body--info--title-v2">
              <span className="title-v2-text">
                Ai có thể xem video này
              </span>
              <div className="title-v2-drop_down_list-box">
                <select className='title-v2-drop_down_list'>
                  <option value="follower">Follower</option>
                  <option value="friend">Bạn bè</option>
                  <option value="private">Riêng tư</option>
                </select>
              </div>
              <div className="title-v2__check_box">
                <span className="title-v2-text">
                  Cho phép người dùng:
                </span>
                <div className="title-v2__check_box__container">
                  <div className="title-v2__check_box-item">
                    <input type="checkbox" />
                    <span className='title-v2__check_box-text'>Bình luận</span>
                  </div>
                  <div className="title-v2__check_box-item">
                    <input type="checkbox" />
                    <span className='title-v2__check_box-text'>Duet</span>
                  </div><div className="title-v2__check_box-item">
                    <input type="checkbox" />
                    <span className='title-v2__check_box-text'>Stitch</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="upload__content__body--info_check_content">
              <span className='check_content-text' >Chạy quy trình kiểm tra bản quyền</span>
              <label class="switch" >
                <input type="checkbox" ref={switchBtn}/>
                <span class="slider round"   onClick={switchClick}></span>
              </label>
              <div className="check_content-info">
                <div className="check_content-info-not_check" ref={notCheckContent}>
                  <span className='info_not_check-text'>
                    Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản quyền 
                    hay không. Nếu chúng tôi phát hiện có vi phạm, bạn có thể chỉnh sủa video 
                    trước khi đăng.
                  </span>
                  <a href="#">Tìm hiểu thêm</a>
                </div>
                <div className="check_content-info-checked" ref={checkContent}>
                  <RiErrorWarningLine  className='check_content-info-checked-icon'/>
                  <span className='info_not_check-text'>
                    Kiểm tra bản quyền chỉ bắt đầu sau khi bản tải video của mình lên.
                  </span>
                </div>
              </div>
            </div>
            <div className="upload__content__bottom_btn">
              <button className='btn_cancel'>Hủy bỏ</button>
              <button className='btn_post'>Đăng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterMaster/>
  </div>
  )
}

export default UpLoad