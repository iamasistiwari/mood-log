"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { toast } from "sonner";


export function SigninForm() {
  const [userInfo, setUserInfo] = useState<{email: string, password:string}>({email: "", password: ""})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(
      signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
      callbackUrl: "/dashboard", 
      }).then(async (res) => {
        if(res?.error){
          throw new Error(res.error)
        }else{
          window.location.replace("/dashboard");
        }
      }),
      {
        loading: 'Loging user...', 
        success: 'Logged in!',
        error: (err) => `${err}`, 
      }
    );
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      
      <p className="text-2xl mt-2 text-neutral-300 text-center">Login to access</p>

      <form className="my-8" onSubmit={handleSubmit}>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="happy@gmail.com" type="email" onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
        </LabelInputContainer>
        

        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log in &rarr;
          <BottomGradient />
        </button>


        
      </form>
    </div>
  );
}

export function SignupForm() {
  const [userInfo, setUserInfo] = useState<{name: string,email: string, password:string}>({name:"" ,email: "", password: ""})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      signIn('credentials', {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
      }).then(async (res) => {
        if(res?.error){
          throw new Error(res.error)
        }else{
          window.location.replace("/dashboard");
        }
      }),
      {
        loading: 'Loging user...', 
        success: 'Logged in!',
        error: (err) => `${err}`, 
      }
    );
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      
      <p className="text-2xl mt-2 text-neutral-300 text-center">Signup to access</p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} />
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="happy@gmail.com" type="email" onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setUserInfo({...userInfo, password: e.target.value})} />
        </LabelInputContainer>
        

        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>


        
      </form>
    </div>
  );
}




const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
