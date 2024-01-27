import HabitCard from '@/components/(loggedIn)/habitCard';
import { Habit } from '@prisma/client';
import Image from 'next/image';
import { getHabits } from '../../../../lib/habit';
import { registerUser } from '../../../../lib/user';
interface HabitsResponse {
    habits: Habit[];
}
export default async function Home() {
    const habitsResponse = (await getHabits()) as HabitsResponse;
    const habits = habitsResponse.habits;
    console.log(habits);
    const user = await registerUser();
    return (
        <div className="flex  h-screen  w-screen pl-[10%]">
            {/*left side*/}
            <div className="flex h-full  w-[40%]  flex-col items-center justify-center">
                <div className=" w-[80%]  overflow-clip  ">
                    <div className="flex h-full w-full items-start justify-between ">
                        <h1 className="text-5xl font-extrabold">
                            Today&apos;s
                        </h1>
                        <div className="flex gap-1">
                            <div className="h-fit w-fit cursor-pointer rounded-full  p-4 hover:bg-[#F7F7F9]">
                                <Image
                                    src="/params.svg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className="h-fit w-5"
                                />
                            </div>
                            <div className="h-fit w-fit cursor-pointer rounded-full p-4 hover:bg-[#F7F7F9]">
                                <Image
                                    src="/add.svg"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className="h-fit w-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-[50%] w-[80%] flex-col gap-3 pt-5">
                    {habits.map((current: Habit) => (
                        <HabitCard key={current.id} habit={current} />
                    ))}
                </div>
            </div>

            {/*right side*/}
            <div className="flex h-full w-[60%] items-center justify-center">
                <h1 className="text-2xl font-semibold">callander side</h1>{' '}
            </div>
        </div>
    );
}
