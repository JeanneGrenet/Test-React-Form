import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
  } = useForm<IFormInput>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <FormControl maxW="50%" mx="auto" isRequired>
        <FormLabel>Name</FormLabel>
        <Input {...register("name", { required: true })} />
        <FormLabel>Email</FormLabel>
        <Input
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <FormLabel>Confirm email</FormLabel>
        <Input {...register("confirmEmail")} />
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
