import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import useSWR from 'swr';
import "swiper/css/navigation";
import "swiper/css";


const fetcher = (url) => fetch(url).then((res) => res.json())


function Banner() {

    const { data, error, isLoading } = useSWR('/api/banner', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <Swiper
            modules={[Navigation, Keyboard, Autoplay]}
            className="mySwiper"
            navigation={true}
            keyboard={true}
            autoplay={{ delay: 2000 }}
            loop={true}>

            {data.map(({ rute, alt }, index) => (
                <SwiperSlide>
                    <Image
                        key={`${alt}-${index}`}
                        src={rute}
                        alt={alt}
                        width={1400}
                        height={500}
                        priority
                    />
                </SwiperSlide>
            ))}
        </Swiper>)
}

export default Banner