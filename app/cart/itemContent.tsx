// import React from 'react'
// import { CartProductType } from '../product/[productId]/ProductDetails'
// import formatPrice from '@/utils/formatPrice'
// import Link from 'next/link'
// import Image from 'next/image'
// import { truncateText } from '@/utils/truncateText'
// import SetQuantity from '../components/products/SetQuantity'
// import { useCart } from '@/hooks/useCart'

// interface ItemContentProps {
//     item: CartProductType
// }

// const ItemContent: React.FC<ItemContentProps> = ({ 
//     item }) => {
    
//     const {handleCartQtyIncrease,handleCartQtyDecrease, handleRemoveProductFromCart } = useCart();
    

//     return (
//         <div className='grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center'>
//             <div className='col-span-2 justify-self-start flex gap-2 md:gap-4'>
//                 <Link href={`/product/${item.id}`}>
//                     <div className='relative w-[70px] h-[70px]'> 
//                         <Image src={item.selectedImg.image} alt={item.name} fill className='objectContent' />
//                     </div>
//                 </Link>
//                 <div className='flex flex-col justify-between'>
//                     <Link href={`/product/${item.id}`}>
//                         {truncateText(item.name)}
//                     </Link>
//                     <div>{item.selectedImg.color}</div>
//                     <div className='w-[60px]'>
//                         <button className='text-slate-500 underline' onClick={() => handleRemoveProductFromCart(item)}>Remove</button>
//                     </div>
//                 </div>
//             <div className='justify-self-center'>{formatPrice(item.price)}</div>
//             <div className='justify-self-center'>
//                 <SetQuantity 
//                     cartCounter={true}
//                     cartProduct={item}
//                     handleQtyIncrease={() => {handleCartQtyIncrease(item)}}
//                     handleQtyDecrease={() => {handleCartQtyDecrease(item)}}
//                     />
//             </div>
//             <hr />
//             <div className='justify-self-end font-semibold'>
//                 {formatPrice(item.price * item.quantity)}
//             </div>
//         </div>
//         </div>
//     )
// }

// export default ItemContent







import React from 'react';
import { CartProductType } from '../product/[productId]/ProductDetails';
import formatPrice from '@/utils/formatPrice';
import Link from 'next/link';
import Image from 'next/image';
import SetQuantity from '../components/products/SetQuantity';
import { useCart } from '@/hooks/useCart';

interface ItemContentProps {
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleCartQtyIncrease, handleCartQtyDecrease, handleRemoveProductFromCart } = useCart();

    return (
        <div className="flex items-center py-4 border-t border-slate-200 text-sm">
            {/* Product Image */}
            <div className="w-20 h-20 relative flex-shrink-0">
                <Link href={`/product/${item.id}`}>
                    <span>
                        <Image
                            src={item.selectedImg.image}
                            alt={item.name}
                            layout="fill"
                            className="object-cover"
                        />
                    </span>
                </Link>
            </div>

            {/* Product Details */}
            <div className="flex-1 ml-4">
                <div className="text-base font-medium text-gray-900 mb-1">
                    <Link href={`/product/${item.id}`}>
                        <span>{item.name}</span>
                    </Link>
                </div>
                <div className="text-gray-500 mb-1">{item.selectedImg.color}</div>
                <button
                    className="text-sm text-gray-500 underline hover:text-red-500"
                    onClick={() => handleRemoveProductFromCart(item)}
                >
                    Remove
                </button>
            </div>

            {/* Price */}
            <div className="text-center">
                <div className="font-medium mb-1">Price</div>
                <div>{formatPrice(item.price)}</div>
            </div>

            {/* Quantity Selector */}
            <div className="text-center">
                <div className="font-medium mb-1">Quantity</div>
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handleQtyIncrease={() => handleCartQtyIncrease(item)}
                    handleQtyDecrease={() => handleCartQtyDecrease(item)}
                />
            </div>

            {/* Total Price */}
            <div className="text-center">
                <div className="font-medium mb-1">Total</div>
                <div className="font-semibold">{formatPrice(item.price * item.quantity)}</div>
            </div>
        </div>
    );
};

export default ItemContent;
