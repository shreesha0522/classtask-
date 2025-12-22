"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

// Schema
const loginSchema = z.object({
  email: z.string().email({ message: "Email milena" }),
  password: z.string().min(6, { message: "Password pugena" }),
});

type LoginForm = z.infer<typeof loginSchema>;

// Assets
import dog from "@/app/assets/dog.jpeg";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "xyz@gmail.com",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    alert(data.email);
  };

  return (
    <div className="p-6">
      {/* Imported asset image */}
      <Image src={dog} alt="Dog" width={120} height={120} />

      {/* Public folder image */}
      <Image
        src="/images/cat.jpeg"
        height={100}
        width={100}
        alt="Cat"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-6 p-4 max-w-xl border rounded"
      >
        {/* Email */}
        <div className="mt-2">
          <label>Email</label>
          <input
            className="border p-2 w-full"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="mt-4">
          <label>Password</label>
          <input
            type="password"
            className="border p-2 w-full"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 p-2 bg-green-500 text-white w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
