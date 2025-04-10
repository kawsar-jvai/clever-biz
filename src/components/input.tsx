import { cn } from "clsx-for-tailwind";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";

/* Input field with label >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
type LabelInputProps = {
  icon?: React.ReactNode;
  label?: string;
  inputType?: "text" | "password";
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const LabelInput: React.FC<LabelInputProps> = ({
  label = "Label",
  inputProps = {},
  labelProps = {},
  containerProps = {},
  icon,
  inputType = "text", // 👈 default type
}: LabelInputProps) => {
  const id = inputProps.id;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = inputType === "password";

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div {...containerProps}>
      <label
        htmlFor={id}
        className="font-poppins block text-sm text-primary-text"
        {...labelProps}
      >
        {label}
      </label>
      <div className="relative mt-1">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : inputType}
          id={id}
          className={cn(
            "w-full p-3 bg-input text-primary-text font-poppins placeholder:font-poppins placeholder:text-input-placeholder rounded-md focus:outline-none focus:ring-0 focus:ring-accent",
            {
              "ps-11": icon != undefined,
              "pe-11": isPassword, // add right padding if toggle is shown
            }
          )}
          placeholder={inputProps.placeholder || label}
          {...inputProps}
        />
        {icon && (
          <span className="absolute h-6 w-6 *:h-6 *:w-6 *:text-primary-text left-3 top-1/2 -translate-y-1/2 flex justify-center items-center">
            {icon}
          </span>
        )}
        {isPassword && (
          <span
            onClick={toggleVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-primary-text/50 cursor-pointer select-none"
          >
            {showPassword ? (
              <AiFillEyeInvisible className="h-6 w-6" />
            ) : (
              <AiFillEye className="h-6 w-6" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Input field with label */
/* Pick Conpany Logo Input ===========================================================>>>>> */
type PickCompanyLogoProps = LabelInputProps & {
  file?: File | null;
  removeFile: () => void;
};
export const PickCompanyLogo: React.FC<PickCompanyLogoProps> = ({
  label = "Label",
  inputProps = {},
  labelProps = {},
  containerProps = {},
  file,
  removeFile,
}) => {
  const id = inputProps.id;

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   console.log(file);
  //   if (file) {
  //     setPreviewUrl(URL.createObjectURL(file));
  //   }
  // };
  const previewUrl = file && URL.createObjectURL(file);
  return (
    <div className="flex items-center space-x-4" {...containerProps}>
      {/* Left column - Label */}
      <label
        className="flex-1 font-poppins block text-sm text-primary-text"
        htmlFor={id}
        {...labelProps}
      >
        {label}
      </label>

      {/* Right column - Image Preview or Plus Icon */}
      <div className="flex-1">
        <label
          htmlFor={id}
          className="flex justify-center items-center w-24 h-24 rounded-lg border border-dashed border-gray-500 cursor-pointer overflow-hidden"
          {...labelProps}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <IoAdd className="text-gray-400 w-8 h-8" />
          )}
        </label>
        <input
          type="file"
          id={id}
          accept="image/*"
          className="hidden"
          {...inputProps}
        />
      </div>

      <div className="flex-1 flex justify-center items-center">
        {previewUrl && (
          <BiTrash
            className="h-6 w-6 cursor-pointer text-red-500"
            onClick={removeFile}
          />
        )}
      </div>
    </div>
  );
};
/* <<<<<<<<===================================================== Pick Conpany Logo Input */
