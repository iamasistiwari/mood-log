import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import prisma from "@/db/src";


declare module "next-auth" {
    interface Session{
        user: {
            id: string;
            name: string | null;
            email: string | null;
        }
    }
}

interface Credentials{
    name?: string,
    email: string,
    password: string
}

export const authOptions = {
    pages: {
        signIn: '/signin',
        signUp: '/signup'
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text", placeholder: "John Doe"},
                email: { label: "Email", type: "text", placeholder: "john@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Credentials | undefined){
                if (!credentials) {
                    throw new Error("Provide Credentials")
                }
                const { name, email, password } = credentials;
                if(!email || !password){
                    throw new Error("Provide Login Credentials")
                }
                
                const hashedPassword = await bcrypt.hash(credentials.password, 10)
                const existingUser = await prisma.user.findFirst({
                  where: {
                    email
                  }
                })
                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
                    if(passwordValidation){
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email,
                        }
                    }
                    throw new Error("Incorrect Password")
                }else{
                    if(!name){
                        throw new Error("User Not Found")
                    }
                    try{
                        
                        const user = await prisma.user.create({
                            data: {
                                name: name || "",
                                email: email,
                                password: hashedPassword,
                                joinedDate: new Date()
                            }
                        })
                        return {
                            id: user.id.toString(),
                            name: user.name,
                            email: user.email,
                        }
                    }catch(e){
                        console.log(e)
                        throw new Error("Error")
                    }
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ token, session }: {token: JWT, session: Session}) {
            session.user.id = token.sub as string
            return session
        }
    }
}