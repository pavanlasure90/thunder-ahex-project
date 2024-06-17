import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import cart from '../../../public/assets/cart.png';
import CartCount from './CartCount';
import UserMenu from './UserMenu';
import { getCurrentUser } from '@/actions/getCurrentUser';

const NavBar = async () => {
    const currentUser = await getCurrentUser();
    console.log(currentUser,"curr")
    return (
        <div className='sticky top-0 w-full bg-slate-200 z-30 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex items-center justify-between gap-3 md-gap-0'>
                        <Link href='/'>
                            <Image src={cart} alt="Cart" width={40} height={40} />
                        </Link>
                        <div>Search</div>
                        <div className='flex items-center gap-8 md:gap-12'>
                            <CartCount />
                            <UserMenu currentUser={currentUser} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;
