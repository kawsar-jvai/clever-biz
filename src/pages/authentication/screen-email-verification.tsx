import { MdEmail } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { LabelInput } from "../../components/input";

const ScreenEmailVerification = () => {
  type Inputs = {
    email: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="bg-primary text-black p-8 rounded-xl shadow-lg w-full max-w-lg">
      <h2 className="text-xl mb-6 text-center text-primary-text">
        Email Verification
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          label="Email"
          inputProps={{
            id: "email",
            placeholder: "cleverbiz.user@gmail.com",
            ...register("email"),
          }}
          icon={<MdEmail />}
        />
        <p className="text-xs text-gray-500">
          We'll sent an temporary otp to your email.
        </p>
        <div className="text-center mt-12 mb-4">
          <button type="submit" className="button-primary w-2/3">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScreenEmailVerification;
