import Slider from 'react-slick'; // Removed as it's unused
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

import { mockDataTestimonials } from '../const/mockData';
import { Card } from '@/feature/core/ui';


export interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGElement>;
}

export const CustomPrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <FaAngleDoubleRight
      className={`${className} !text-primary-700`}
        style={{ ...style,  fontSize: '30px' }}
        onClick={onClick}
      />
    );
};
  
  export const CustomNextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <FaAngleDoubleLeft
      className={`${className} !text-primary-700`}
        style={{ ...style,  fontSize: '30px' }}
        onClick={onClick}
      />
    );
  };

export const Testimonials = () => {

    const settings = {
        dots: true,  // Muestra los puntos de navegación
        infinite: true,  // Permite el desplazamiento infinito
        speed: 500,  // Velocidad de transición
        slidesToShow: 3,  // Número de slides visibles
        slidesToScroll: 1,  // Número de slides que se desplazan
        autoplay: true,  // Activa el auto-slide
        autoplaySpeed: 3000,  // Tiempo entre cada slide
        prevArrow: <CustomNextArrow  />,
        nextArrow: <CustomPrevArrow  />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
    <div>
        <Slider {...settings }  className='  mr-10'  >
    { mockDataTestimonials.length > 0 ?  mockDataTestimonials.map((item) => (
       <Card  key={item.id}  className="md:!w-11/12 mx-5 justify-center    !rounded-t-2xl h-44">
         <div className="flex justify-center pt-4">
             {/* <img src={item.img} alt={item.title} className="w-72 h-48 object-cover rounded-md" /> */}
             <span>{item.image}</span>
         </div>
         <div className='text-center mt-3'>
             <h1>{item.name}</h1>
             <p className='font-medium italic'>{item.review}</p>
           
         </div>
         
       </Card>
   )): <div className='flex justify-center items-center h-96 w-full '>
   <h1 className='text-2xl font-bold text-primary-700 text-center'>No hay productos disponibles</h1>
   </div>}
 </Slider></div>
  )
}

