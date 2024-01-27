'use client';
import { Habit } from '@prisma/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type HabitProps = {
    habit: Habit;
};

const HabitCard: React.FC<HabitProps> = ({ habit }: HabitProps) => {
    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                `flex h-fit w-full cursor-pointer rounded-2xl  bg-[#EAEEF2] p-4  `,
                habit.isCompleted && 'bg-green-300'
            )}
        >
            <div
                className={twMerge(
                    ` flex  w-[10%] items-center justify-center rounded-xl   text-xl `
                )}
                style={{ backgroundColor: '#' + habit.color }}
            >
                {habit.emoji}
            </div>

            <div className="w-[80%]  pl-7">
                <h1 className="text-xl font-bold ">{habit.title}</h1>
                <p className="text-sm font-medium">{habit.description}</p>
            </div>

            <div className="flex w-[10%] items-center justify-center ">
                <Image
                    src="/tick.svg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className="h-fit w-5"
                />
            </div>
        </motion.div>
    );
};
export default HabitCard;
