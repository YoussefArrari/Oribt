'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Home() {
    return (
        <div className="h-screen  w-screen  flex pl-[10%]">
            {/*left side*/}
            <div className="w-[40%] h-full  flex-col  flex justify-center items-center">
                <div className=" w-[80%]  overflow-clip ">
                    <motion.div
                        initial={{ y: 40, opacity: 0.0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full flex justify-between items-start "
                    >
                        <h1 className="font-extrabold text-5xl">
                            Today&apos;s
                        </h1>
                        <div className="flex gap-1">
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className="w-fit h-fit hover:bg-[#F7F7F9] p-4  rounded-full cursor-pointer"
                            >
                                <Image
                                    src="/params.svg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className="w-5 h-fit"
                                />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className="w-fit h-fit hover:bg-[#F7F7F9] p-4 rounded-full cursor-pointer"
                            >
                                <Image
                                    src="/add.svg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className="w-5 h-fit"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className="h-[50%] w-full "></div>
            </div>

            {/*right side*/}
            <div className="w-[60%] h-full flex justify-center items-center">
                <h1 className="font-semibold text-2xl">callander side</h1>{' '}
            </div>
        </div>
    );
}
