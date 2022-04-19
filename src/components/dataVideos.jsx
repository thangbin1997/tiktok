import avatar1 from '../access/image/Avatar1.jpeg'
import avatar2 from '../access/image/Avatar2.jpeg'
import avatar3 from '../access/image/Avatar3.jpeg'
import avatar5 from '../access/image/avatar5.jpeg'
import video1 from '../access/video/Video1.mp4'
import video2 from '../access/video/Video2.mp4'
import video3 from '../access/video/Video3.mp4'
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
        nickname:'Ca Sĩ Duy Mạnh',
        time:'',
        title:'Con bạch tuộc toàn Mỡ',
        tag:[' learnontiktok',' music'],
        music:'nhạc nền - Ca Sĩ Duy Mạnh✅',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:false,
        avatar:avatar1,
        video:video1,
    },
    {
        id:2,
        names:'taiphen',
        nickname:'Tài Phèn Tech',
        time:'',
        title:'Hay nè!',
        tag:[' learnontiktok',' music',' thanhcongnghe',' taiphen'],
        music:'nhạc nền - Tài Phèn Tech',
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
        nickname:'𝓷𝓰𝓸𝓬 𝓽𝓪̂𝓶 🥴',
        time:'',
        title:'(Dc:@theimmortal_ ) 😙',
        tag:[' music',' thanhcongnghe',' ngoktam'],
        music:'Anh Yêu Vội Thế (Mee Remix) - LaLa Trần, Mee Media',
        like:randomLike(),
        comments:randomComment(),
        share:randomShare(),
        isFolow:true,
        avatar:avatar3,
        video:video2,
    },
    {
        id:4,
        names:'Văn Thanh 2022',
        nickname:'quangnguyenvan_',
        time:'',
        title:'',
        tag:[' #nguoique'],
        music:'nhạc nền - Văn Thanh 2022',
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
        names:'nhantiktok113Nhân',
        nickname:'Công Tử ✅',
        time:'',
        title:'Nó lạ đến khó tả 😪',
        tag:['#giaitri' ,'#nhancongtu', '#haihuoc'],
        music:'nhạc nền - Nhân Công Tử ✅',
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
        nickname:'DREAMS 💎',
        time:'',
        title:'Hi 😍❤️',
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
        names:'hoaa.hanassiiĐào',
        nickname:'Lê Phương Hoa',
        time:'',
        title:'Tôi mỗi khi nghe nhạc này kiểu :)) nhạc gây thương nhớ thực sự é',
        tag:[],
        music:'nhạc nền - T h ằ n g H ề K h ó c 🇻🇳 - Dj Meo Meo',
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
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
        share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video8,
},{
    id:10, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video9,
},{
    id:11, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video10,
},{
    id:12, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video11,
},{
    id:13, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video12,
},{
    id:14, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video13,
},{
    id:15, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video14,
},{
    id:16, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video15,
},{
    id:17, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video16,
},{
    id:18, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video17,
},{
    id:19, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video18,
},{
    id:20, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video19,
},{
    id:21, 
    names:'icetuti',
    nickname:'c e t u t ❄️',
    time:'',
    title:'😵‍💫😵‍💫😵‍💫',
    tag:[],
    music:'Nutcase22 Captain RestrictedRemix - i c e t u t ❄️',
    like:randomLike(),
    comments:randomComment(),
    share:randomShare(),
    isFolow:false,
    avatar:avatar5,
    video:video20,
}
]

export default datasVideos;