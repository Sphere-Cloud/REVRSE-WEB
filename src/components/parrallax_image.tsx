'use-client';
import React, { useEffect, useRef, useState } from "react";

const ParallaxImage = ({ start, src, title, description }) => {
    const imageRef = useRef(null);
    const [translateX, setTranslateX] = useState( start == 'normal' ? 0 : -100);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = imageRef.current;
        if (element) {
          const rect = element.getBoundingClientRect(); // Obtiene la posición actual del elemento
          const scrollOffset = window.innerHeight - rect.top; // Calcula la posición relativa del scroll
          if (scrollOffset > 0) {
            // Ajusta el valor del translateY conforme al scroll
            setTranslateX(scrollOffset * ( start == 'normal' ? 0.2 : -0.2)); // Factor de velocidad del parallax
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div 
        ref={imageRef} 
        className={`md:parallax-image md:transition-transform md:duration-1000 md:ease-out flex ${ start == 'normal' ? 'flex-col': 'flex-col-reverse' } items-center text-center md:flex-row md:items-start md:justify-between gap-8`}
        style={

          {}// Movimiento vertical en base al scroll
        }
    >
        {
            start == 'normal' ?
            (   
                <>
                    <img src={src} alt="imagen" className="w-[400px] h-[200px]" />
                    <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-gray-600">
                            {description}
                        </p>
                    </div>
                </>
            )
            :
            (
                <>
                    <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-gray-600">
                            {description}
                        </p>
                    </div>
                    <img src={src} alt="imagen" className="w-[400px] h-[200px]" />
                </>
            )    
        }
        
    </div>
  );
};

export default ParallaxImage;
