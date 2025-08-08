import SubmitButton from "../../../components/Button/SubmitButton";
import FloatingLabelInput from "../../../components/Input/FloatingLabelInput";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="mb-4">
          <FloatingLabelInput
            label="Username"
            type="text"
            name="username"
            required
            autoFocus
          />
        </div>
        <div className="mb-4">
          <FloatingLabelInput
            label="Password"
            type="password"
            name="password"
            required
          />
        </div>
        <SubmitButton className="w-full" label="Sign In" />
      </form>
    </>
  );
};

export default LoginForm;
