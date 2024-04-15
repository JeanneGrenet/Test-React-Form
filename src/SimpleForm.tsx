import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

enum AccountTypeEnum {
  personal = "personal",
  professional = "professional",
}

interface IFormInput {
  name: string;
  email: string;
  confirmEmail: string;
  accountType: AccountTypeEnum;
}

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const watchEmail = watch("email");
  return (
    <form onSubmit={onSubmit}>
      <FormControl
        maxW="50%"
        mx="auto"
        isRequired
        isInvalid={errors.name?.type === "required"}
      >
        <FormLabel>Name</FormLabel>
        <Input
          {...register("name", { required: "This input is required" })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        maxW="50%"
        mx="auto"
        isRequired
        isInvalid={errors.email?.type === "required"}
      >
        <FormLabel>Email</FormLabel>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        maxW="50%"
        mx="auto"
        isRequired
        isInvalid={errors.confirmEmail?.type === "validate"}
      >
        <FormLabel>Confirm email</FormLabel>
        <Input
          {...register("confirmEmail", {
            required: "Please confirm your email",
            validate: (value) => value === watchEmail || "Emails do not match",
          })}
        />
        <FormErrorMessage>
          {errors.confirmEmail && errors.confirmEmail.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl maxW="50%" mx="auto">
        <FormLabel>Account type</FormLabel>
        <Select {...register("accountType")}>
          <option value="Personal">Personal</option>
          <option value="Professional">Professional</option>
        </Select>
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
