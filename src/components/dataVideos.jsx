import avatar1 from '../access/image/Avatar1.jpeg'
import avatar2 from '../access/image/Avatar2.jpeg'
import avatar3 from '../access/image/Avatar3.jpeg'
import avatar5 from '../access/image/avatar5.jpeg'
import video1 from '../access/video/Video1.mp4'
import video2 from '../access/video/video2.mp4'
import video3 from '../access/video/video3.mp4'
import video4 from '../access/video/video4.mp4'
import video5 from '../access/video/video5.mp4'
import video6 from '../access/video/video6.mp4'
import video7 from '../access/video/video7.mp4'
import video8 from '../access/video/video8.mp4'
import video9 from '../access/video/video9.mp4'
import video10 from '../access/video/video10.mp4'
import video11 from '../access/video/video11.mp4'
import video12 from '../access/video/video12.mp4'
import video13 from '../access/video/video13.mp4'
import video14 from '../access/video/video14.mp4'
import video15 from '../access/video/video15.mp4'
import video16 from '../access/video/video16.mp4'
import video17 from '../access/video/video17.mp4'
import video18 from '../access/video/video18.mp4'
import video19 from '../access/video/video19.mp4'
import video20 from '../access/video/video20.mp4'
import video99 from '../access/video/Video99.mp4'



const randomLike=()=>{
    const num=Math.floor(Math.random()*10000000)
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + ' K';
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + ' M';
    }else if(num < 900){
        return num;
    }
}

const randomComment=()=>{
    const num=Math.floor(Math.random()*10000)
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + ' K';
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + ' M';
    }else if(num < 900){
        return num;
    }
}

const randomShare=()=>{
    const num=Math.floor(Math.random()*10000)
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + ' K';
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + ' M';
    }else if(num < 900){
        return num;
    }
}


const datasVideos=[
    {
        id:1,
        names:'nguyenduymanh1973',
        nickname:'Ca S?? Duy M???nh',
        time:'',
        title:'Con b???ch tu???c to??n M???',
        tag:[' learnontiktok',' music'],
        music:'nh???c n???n - Ca S?? Duy M???nh???',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:false,
        avatar:avatar1,
        video:video99,
    },
    {
        id:2,
        names:'taiphen',
        nickname:'T??i Ph??n Tech',
        time:'',
        title:'Hay n??!',
        tag:[' learnontiktok',' music',' thanhcongnghe',' taiphen'],
        music:'nh???c n???n - T??i Ph??n Tech',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:true,
        avatar:avatar2,
        video:video7,
    },
    {
        id:3,
        names:'vngtam28',
        nickname:'???????????????? ?????????????? ????',
        time:'',
        title:'(Dc:@theimmortal_ ) ????',
        tag:[' music',' thanhcongnghe',' ngoktam'],
        music:'Anh Y??u V???i Th??? (Mee Remix) - LaLa Tr???n, Mee Media',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:true,
        avatar:avatar3,
        video:video2,
    },
    {
        id:4,
        names:'V??n Thanh 2022',
        nickname:'quangnguyenvan_',
        time:'',
        title:'',
        tag:[' #nguoique'],
        music:'nh???c n???n - V??n Thanh 2022',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:false,
        avatar:avatar5,
        video:video3,
    },
    {
        id:5,
        names:'FUNNY CSGO',
        nickname:'lokollllk',
        time:'',
        title:'',
        tag:['#csgo', '#csgofunnymoments' ,'#csgomoments'],
        music:'original sound - FUNNY CSGO',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:true,
        avatar:avatar5,
        video:video5,
       },
    {
        id:6,
        names:'nhantiktok113Nh??n',
        nickname:'C??ng T??? ???',
        time:'',
        title:'N?? l??? ?????n kh?? t??? ????',
        tag:['#giaitri' ,'#nhancongtu', '#haihuoc'],
        music:'nh???c n???n - Nh??n C??ng T??? ???',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:false,
        avatar:avatar3,
        video:video6,
       },
    {
        id:7,
        names:'anardreamshiANAR',
        nickname:'DREAMS ????',
        time:'',
        title:'Hi ??????????',
        tag:['music'],
        music:'Title - Meghan Trainor',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:false,
        avatar:avatar5,
        video:video4,
      },
    {
        id:8,
        names:'hoaa.hanassii????o',
        nickname:'L?? Ph????ng Hoa',
        time:'',
        title:'T??i m???i khi nghe nh???c n??y ki???u :)) nh???c g??y th????ng nh??? th???c s??? ??',
        tag:[],
        music:'nh???c n???n - T h ??? n g H ??? K h ?? c ???????? - Dj Meo Meo',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:false,
        avatar:avatar5,
        video:video7,
    },
    {
    id:9, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Vi???c g?? kh?? ????? em GOD22 lo. ????ng l?? "Ng?????i Th??nh C??ng lu??n c?? l???i ??i ri??ng" ..!',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
        share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video8,
},{
    id:10, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'????ng vu v?? v???y th??i ch??? c??ng c?? ?? g?? ????u',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video9,
},{
    id:11, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Nh???ng chi???c xe c??n tay c???c k?? ???n ??p cho ng???oi m???i ch??i ????????',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video10,
},{
    id:12, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'D??nh n??? x???u th?? c?? xin ???????c Visa ??i n?????c ngo??i kh??ng ',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video11,
},{
    id:13, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Qu??? nh??m ?????ng minh c???a Nga kh??t th???t s???',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video12,
},{
    id:14, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'R???t m???t th???i gian :)) ',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video13,
},{
    id:15, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Hi???u ???ng t??m l?? k??? l??? trong h??nh vi ch??ng ta! ',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video14,
},{
    id:16, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Top 1 qu??n ??n cho c???p ????i, kh??ng gian ?????p, ????? ??n ngon, gi?? h???p l??. Qu???y n??ng g?? s???t v???n ng?????i m??',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video15,
},{
    id:17, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'C??c b???n d?????i rank g??? ho???t ?????ng ra sao p5 ????????????',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video16,
},{
    id:18, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'B??? ra 6tr li???u l???i hay l??? ae !!!',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video17,
},{
    id:19, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Xin t???t c??? anh em b??c u???ng ????',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video18,
},{
    id:20, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'T??i tr??? l???i r???i ????y',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video19,
},{
    id:21, 
    names:'icetuti',
    nickname:'c e t u t ??????',
    time:'',
    title:'Tranh th??? 15 ph??t ra ch??i quay toptop ki???u',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ??????',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video20,
}
]

export default datasVideos;