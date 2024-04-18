// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import '../assets/carrossel.css'
import 'swiper/css';



interface Images {
    firstImg: string
    secondaryImg: string
    thirdImg: string,
}

export function CarrosselImg({ imgs }: { imgs: Images}){
    return(
        <div className="max-w-[408px] w-full  max-md:px-3">
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper2 rounded-lg"  
            >
                <SwiperSlide>
                    <img src={imgs.firstImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgs.secondaryImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgs.thirdImg} />
                </SwiperSlide>
                
            </Swiper>
            
        </div>
    )
}