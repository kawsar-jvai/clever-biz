import { SubmitHandler, useForm } from "react-hook-form";
import { useRef, useState, useCallback, useEffect } from "react";
import { OtpTimer } from "../../components/utilities";

const ScreenOtpVerification = () => {
  type Inputs = {
    otp: string;
  };

  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [digits, setDigits] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle OTP submit
  const onSubmit: SubmitHandler<Inputs> = () => {
    const otp = digits.join("");
    console.log("OTP entered:", otp);
    setValue("otp", otp); // Sync to RHF
  };

  // Ref setter (React 18 safe)
  const setInputRef = useCallback(
    (el: HTMLInputElement | null, index: number) => {
      inputRefs.current[index] = el;
    },
    []
  );

  // Handle value change
  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && index < newDigits.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Backspace to previous input
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const resentOTP = () => {
    // todo: resent otp
  };

  // Optional: Sync digits to `otp` on every change
  useEffect(() => {
    setValue("otp", digits.join(""));
  }, [digits, setValue]);

  return (
    <div className="bg-primary text-primary-text p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl mb-1 text-center text-primary-text">
        OTP Verification
      </h2>
      <p className="text-xs text-primary-text/20 text-center mt-1">
        We have sent you OTP to your email
      </p>
      <div className="h-12" />
      <p className="text-sm text-primary-text/80 text-center mt-1">
        Enter Verification Code
      </p>
      <div className="h-4" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-3">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(el) => setInputRef(el, index)}
              value={digit}
              maxLength={1}
              placeholder=""
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center border-none rounded text-lg bg-input text-primary-text focus:outline-none focus:ring-2 focus:ring-accent"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
            />
          ))}
        </div>
        <div className="h-12" />
        <OtpTimer onResend={() => resentOTP()} />
        <div className="h-4" />
        <div className="text-center mb-4">
          <button type="submit" className="button-primary w-2/3">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScreenOtpVerification;
