import { Checkbox, Field, Label } from "@headlessui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { LabelInput } from "../../components/input";

const ScreenLogin = () => {
  type Inputs = {
    email: string;
    password: string;
    remember: boolean;
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="bg-primary text-black p-8 rounded-xl shadow-lg w-full max-w-lg">
      <h2 className="text-3xl mb-6 text-center text-primary-text">Welcome</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          label="Email"
          inputProps={{
            id: "email",
            ...register("email"),
          }}
          icon={<MdEmail />}
        />
        <LabelInput
          label="Password"
          inputProps={{
            id: "password",
            ...register("password"),
          }}
          icon={<HiLockClosed className="h-4 w-4" />}
          inputType="password"
        />
        <div className="flex justify-between items-center">
          <Controller
            control={control}
            name="remember"
            render={({ field }) => (
              <Field className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onChange={field.onChange}
                  className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                >
                  <svg
                    className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
                <Label className="text-sm text-primary-text">Remember Me</Label>
              </Field>
            )}
          />

          <Link
            className="text-sm text-primary-text border border-primary-text/20 rounded-md p-1"
            to="/verify-email"
          >
            Forgot Password
          </Link>
        </div>
        <div className="text-center mt-8 mb-14">
          <button type="submit" className="button-primary px-14">
            Login
          </button>
        </div>
        <div className="text-center flex justify-center items-center">
          <p className="text-sm text-primary-text/40">Dont have account?</p>
          <div className="w-2"></div>
          <Link
            className="text-sm text-primary-text border border-primary-text/20 rounded-md p-1"
            to="/register"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ScreenLogin;
