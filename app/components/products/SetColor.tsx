// "use client"

// import { CartProductType, selectedImgType } from "@/app/product/[productId]/ProductDetails"

// interface SetColorProps{
//     images: selectedImgType[],
//     cartProduct: CartProductType,
//     handleColorSelect: (value: selectedImgType)=> void
// }

// const setColor: React.FC<SetColorProps> = ({
//     images,cartProduct,handleColorSelect
// }) => {

//   return (
//     <div>
//         <div className="flex gap-4 items-center">
//             <span className="font-semibold">COLOR:</span>
//             <div className="flex gap-1" >{images.map((image)=>{
//                 return <div className={`h-7 w-7 rounded-full border-teal-500 flex items-center ${cartProduct.selectedImg.color ===image.color? 'border-[1.5px]': 'border-none'}`}>
//                     <div style={{background: image.colorCode}} className="h-5 w-5 rounded-full border-[1.2px] border-slate-500"></div>
//                 </div>
//             })}</div>
//         </div>
//     </div>
//   )
// }

// export default setColor



"use client";

import React from 'react';
import { CartProductType, selectedImgType } from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
    images: selectedImgType[];
    cartProduct: CartProductType;
    handleColorSelect: (value: selectedImgType) => void;
}

const SetColor: React.FC<SetColorProps> = ({ images, cartProduct, handleColorSelect }) => {
    return (
        <div>
            <div className="flex gap-4 items-center">
                <span className="font-semibold">COLOR:</span>
                <div className="flex gap-1">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`h-7 w-7 rounded-full border-teal-300 flex items-center ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}
                            onClick={() => handleColorSelect(image)}
                        >
                            <div
                                style={{ background: image.colorCode }}
                                className="h-5 w-5 rounded-full border-[1.2px] border-slate-500"
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SetColor;
