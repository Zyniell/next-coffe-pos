import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FileImage } from "lucide-react";
import { getImageData } from "@/lib/utils";
import { Preview } from "@/types/general";

export default function FormImage<T extends FieldValues>({
  form,
  name,
  label,
  preview,
  setPreview,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  preview?: Preview;
  setPreview?: (preview: Preview) => void;
}) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9 rounded-lg">
              <AvatarImage
                src={preview?.displayUrl}
                alt="preview"
                className="object-cover"
              />
              <AvatarFallback className="rounded-lg">
                <FileImage className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <Input
              id={name}
              type="file"
              name={rest.name}
              ref={rest.ref}
              onBlur={rest.onBlur}
              disabled={rest.disabled}
              onChange={(event) => {
                const { file, displayUrl } = getImageData(event);
                onChange(file ?? "");
                if (file) {
                  setPreview?.({
                    file,
                    displayUrl,
                  });
                }
              }}
            />
          </div>
          <FieldError>{error?.message}</FieldError>
        </Field>
      )}
    />
  );
}
