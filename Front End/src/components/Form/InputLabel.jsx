import Label from "./Label";
import { TextArea, Input } from "./Input";

export const InputLabel = (props) => {
  const { label, name, type, placeholder, variant } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        variant={variant}
      />
    </div>
  );
};

export const TextAreaLabel = (props) => {
  const { label, name, placeholder, variant } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <TextArea name={name} placeholder={placeholder} />
    </div>
  );
};
