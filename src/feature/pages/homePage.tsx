import { Navbar } from '../core/ui/navbar'
import { BannerMigrations } from '../migration'
import Slider from 'react-slick'; // Removed as it's unused
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from '../core/ui'
import { CustomNextArrow, CustomPrevArrow } from '../protours/comoponent'
import { mookDataHome } from '../protours/const/mockDataHome';

export const HomePage = () => {


  
      const settings = {
          dots: true,  // Muestra los puntos de navegación
          infinite: true,  // Permite el desplazamiento infinito
          speed: 500,  // Velocidad de transición
          slidesToShow: 1,  // Número de slides visibles
          slidesToScroll: 1,  // Número de slides que se desplazan
          autoplay: true,  // Activa el auto-slide
          autoplaySpeed: 3000,  // Tiempo entre cada slide
          prevArrow: <CustomNextArrow  />,
          nextArrow: <CustomPrevArrow  />,
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
      <main className="pt-20 pr-10 pl-10">
        {/* Sección de Migración */}
         <Slider {...settings }  className=' '  >
          {mookDataHome.map((item) => (
            <section
            key={item.id}
          className="bg-gray-100  shadow-md mb-10"
          style={{ backgroundImage: `url(${item.imgBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-white bg-opacity-80 p-5 rounded-lg">
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

