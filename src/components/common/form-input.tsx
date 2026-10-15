import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          {type === "textarea" ? (
            <Textarea
              id={name}
              {...field}
              placeholder={placeholder}
              autoComplete="off"
              className="resize-none"
            />
          ) : (
            <Input
              id={name}
              {...field}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
            />
          )}
          <FieldError>{error?.message}</FieldError>
        </Field>
      )}
    />
  );
}
