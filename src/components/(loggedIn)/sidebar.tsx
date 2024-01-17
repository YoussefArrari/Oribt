'use client';
import { UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const navLinks = [
        { href: '/home', label: 'home' },
        { href: '/today', label: 'today' },
        { href: '/params', label: 'params' },
    ];

    return (
        <motion.div
            initial={{ x: -80, opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute  w-28 flex justify-center items-center h-screen  top-0"
        >
            <motion.div
                whileHover={{ x: 10, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4 }}
                className=" bg-[#f6f8fa] shadow-xl w-fit h-fit gap-16 flex justify-between flex-col py-3 items-center rounded-full px-2"
            >
                <div className="flex flex-col gap-4 ">
                    <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                        <Image
                            src="/orbit.svg"
                            width={200}
                            height={200}
                            alt="Picture of the author"
                            className="w-7 h-fit"
                        />
                    </div>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`  w-12 h-12 rounded-full text-white bg-white flex justify-center items-center `}
                        >
                            <Image
                                src={`/${
                                    pathname == href ? label + 'w' : label
                                }.svg`}
                                width={50}
                                height={50}
                                alt="Picture of the author"
                                className="w-6 h-fit relative z-10 fill-white  "
                            />
                            {pathname === href && (
                                <motion.div
                                    transition={{
                                        type: 'spring',
                                        stiffness: 60,
                                    }}
                                    layoutId="active"
                                    className="absolute h-12 w-12 rounded-full bg-[#171A1E] "
                                />
                            )}
                        </Link>
                    ))}
                </div>
                <div className="w-12 h-12 rounded-full text-white bg-white flex justify-center items-center">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
