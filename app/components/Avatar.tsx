// import React from 'react';
// import Image from 'next/image';
// import { FaUserCircle } from 'react-icons/fa';

// interface AvatarProps {
//     src?: string | null | undefined;
// }

// const Avatar: React.FC<AvatarProps> = ({ src }) => {
//     return src ? (
//         <Image
//             src={src}
//             alt="Avatar"
//             className="rounded-full object-cover"
//             height={30}
//             width={30}
//         />
//     ) : (
//         <FaUserCircle size={30} /> 
//     );
// };

// export default Avatar;




import React from 'react';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';

interface AvatarProps {
    src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return src ? (
        <Image
            src={src}
            alt="Avatar"
            className="rounded-full object-cover"
            height={30}
            width={30}
        />
    ) : (
        <FaUserCircle size={30} />
    );
};

export default Avatar;
