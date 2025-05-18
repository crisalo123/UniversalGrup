import { Navbar } from '../core/ui/navbar'
import { BannerMigrations } from '../migration'
import Slider from 'react-slick'; // Removed as it's unused
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from '../core/ui'
import { CustomNextArrow, CustomPrevArrow } from '../protours/comoponent'
import { mookDataHome } from '../protours/const/mockDataHome';
import { useEffect, useState } from 'react';

export const HomePage = () => {
    
const [isResponsive, setIsResponsive] = useState(window.innerWidth < 768);


 useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  


  
      const settings = {
          dots: true,  // Muestra los puntos de navegación
          infinite: true,  // Permite el desplazamiento infinito
          speed: 500,  // Velocidad de transición
          slidesToShow: 1,  // Número de slides visibles
          slidesToScroll: 1,  // Número de slides que se desplazan
          autoplay: true,  // Activa el auto-slide
          autoplaySpeed: 3000,  // Tiempo entre cada slide
          prevArrow: !isResponsive ? <CustomNextArrow  className='text-gray-500'/> : undefined,
          nextArrow: !isResponsive ? <CustomPrevArrow className='text-gray-500' /> : undefined,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
  
        };
  return (
    <>
      <Navbar />
      <main className="mt-20  md:pr-10 md:pl-10  overflow-x-hidden overflow-y-hidden">
        {/* Sección de Migración */}
         <Slider {...settings }  >
          {mookDataHome.map((item) => (
            <section
            key={item.id}
          className="md:bg-gray-100   md:shadow-md mb-10"
          style={{ backgroundImage: `url(${item.imgBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-white bg-opacity-80  rounded-lg">
            <BannerMigrations
              logo={item.logo}
              title={item.title}
              subtitle={item.subtitle}
              ctaText={item.ctaText}
              isProtours={item.isProtours}
              img={item.img}
              navigations={item.navigations}
            />
          </div>
        </section>
          ))}
        </Slider>
      </main>
      <Footer />
    </>
  )
}

