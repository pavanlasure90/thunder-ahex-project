"use client";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import Button from "../components/Button";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

// interface RegisterFormProps{ 
//   currentUser: SafeUser | null
// }


const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "", 
    },
  });

  const router = useRouter();

  // useEffect(()=>{
  //   if(currentUser){
  //     router.push('/')
  //     router.refresh()
  //   }
  // }, [])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // if(currentUser){
  //   return <p className='text-center'>Logged in. Redirecting...</p>
  // }

  return (
    <>
      <Heading title="Signup for thunder" />
      <br />
      <hr className="bg-slate-300 w-full h-px " />
      <br />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <br />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <br />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />{" "}
      <br />
      <Button
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />{" "}
      <br />
      <p className="text-sm">
        Already have an account ?
        <Link className="underline" href="/login">
          Login
        </Link>{" "}
        <br /> <br />
        <Button
          outline
          label="Signup with Google"
          icon={AiOutlineGoogle}
          onClick={() => {}}
        ></Button>
      </p>
    </>
  );
};

export default RegisterForm;
