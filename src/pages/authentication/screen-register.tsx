import { SubmitHandler, useForm } from "react-hook-form";
import { LabelInput, PickCompanyLogo } from "../../components/input";

const ScreenRegister = () => {
  type Inputs = {
    customer_name: string;
    restaurant_name: string;
    location: string;
    starting_date: string;
    phone_number: string;
    package: string;
    company_logo: FileList | undefined;
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const logoFile: File | undefined = watch("company_logo")?.[0];
  return (
    <div className="bg-primary text-black p-8 rounded-xl shadow-lg w-full max-w-xl">
      <h2 className="text-3xl mb-6 text-center text-primary-text">
        Enter your information
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          label="Customer Name"
          inputProps={{
            id: "customer_name",
            placeholder: "Kawsar Hossain",
            ...register("customer_name"),
          }}
        />
        <LabelInput
          label="Restaurant Name"
          inputProps={{
            id: "restaurant_name",
            ...register("restaurant_name"),
          }}
        />
        <LabelInput
          label="Location"
          inputProps={{
            id: "location",
            ...register("location"),
          }}
        />
        <LabelInput
          label="Starting Date"
          inputProps={{
            id: "starting_date",
            ...register("starting_date"),
          }}
        />
        <LabelInput
          label="Phone Number"
          inputProps={{
            id: "phone_number",
            ...register("phone_number"),
          }}
        />
        <LabelInput
          label="Package"
          inputProps={{
            id: "package",
            ...register("package"),
          }}
        />
        <PickCompanyLogo
          file={logoFile}
          label="Company Logo"
          inputProps={{
            id: "company_logo",
            ...register("company_logo"),
          }}
          removeFile={() => setValue("company_logo", undefined)}
        />
        <LabelInput
          label="Email"
          inputProps={{
            id: "email",
            ...register("email"),
          }}
        />
        <LabelInput
          label="Password"
          inputProps={{
            id: "password",
            ...register("password"),
          }}
        />
        <div className="text-center mt-14 mb-6">
          <button type="submit" className="button-primary px-14">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScreenRegister;
