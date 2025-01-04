import Form from "@/components/blog/form";
import { FormProvider } from "@/context/form-context";

export default function New() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}
