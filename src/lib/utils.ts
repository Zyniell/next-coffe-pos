import { ChangeEvent } from "react";

export { cn } from "cn";

export function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const file = event.target.files?.[0];
  if (!file) return { file: null, displayUrl: "" };

  const displayUrl = URL.createObjectURL(file);
  return { file, displayUrl };
}

export function convertIDR(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}
