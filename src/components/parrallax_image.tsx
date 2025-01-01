'use-client';
import React, { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  start: 'normal' | 'reverse';
  src: string;
  title: string;
  description: string;
}

function ParallaxImage({ start, src, title, description }: ParallaxImageProps) {
  const imageRef = useRef(null);

  return (
    <div 
        ref={imageRef} 
        className={`md:parallax-image md:transition-transform md:duration-1000 md:ease-out flex ${ start == 'normal' ? 'flex-col': 'flex-col-reverse' } items-center text-center md:flex-row md:items-start md:justify-between gap-8`}
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
