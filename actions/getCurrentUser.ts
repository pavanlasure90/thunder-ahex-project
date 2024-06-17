import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession(){
    return await getServerSession(authOptions)
}

export async function getCurrentUser(){
    try {
        const session = await getSession()

        if(!session?.user?.email){
            return null
        }

        const currentUser = await prisma?.user.findUnique({
            where: {
                email: session?.user?.email
            }
        })
        if(!currentUser){
            return null
        }

        console.log(currentUser,"curr")

        return{
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updateAt.toISOString(),
            emailVarified: currentUser.emailVerified?.toISOString() || null,
        }

    } catch (error) {
        console.log(error)
        return null
    }
}



