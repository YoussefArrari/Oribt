import { auth } from '@clerk/nextjs';
import prisma from './db';
export async function getHabits() {
    const { userId }: { userId: string | null } = auth();
    if (!userId) {
        return new Response('Unauthorized', { status: 401 });
    }
    try {
        const habits = await prisma.habit.findMany({
            where: {
                userId: userId,
            },
        });
        return { habits };
    } catch (error) {
        return error;
    }
}
