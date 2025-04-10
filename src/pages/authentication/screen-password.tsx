import { SubmitHandler, useForm } from "react-hook-form";
import { HiLockClosed } from "react-icons/hi";
import { LabelInput } from "../../components/input";

const ScreenPassword = () => {
  type Inputs = {
    password: string;
    confirm_password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="bg-primary text-black p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-3xl mb-6 text-center text-primary-text">Welcome</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          label="Password"
          inputProps={{
            id: "password",
            ...register("password"),
          }}
          icon={<HiLockClosed className="h-4 w-4" />}
          inputType="password"
        />
        <LabelInput
          label="Confirm Password"
          inputProps={{
            id: "confirm_password",
            ...register("confirm_password"),
          }}
          icon={<HiLockClosed className="h-4 w-4" />}
          inputType="password"
        />

        <div className="text-center mt-16 mb-14">
          <button type="submit" className="button-primary w-2/3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScreenPassword;
