import { User } from "@prisma/client";

export type SafeUser= Omit<User, 
"createdAt" | "updateAt" | "emailVarified"> & {
    createdAt: string,
    updateAt: string,
    emailVarified: string | null;
}