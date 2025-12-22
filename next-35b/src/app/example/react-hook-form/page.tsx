"use client";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    alert(data.email);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 max-w-xl border"
      >
        <div className="mt-2">
          <label>Username</label>
          <input
            className="border p-2 w-full"
            {...register("email", { required: "Email hala" })}
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 p-2 bg-green-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
