"use client";

import {
  Box,
  Button,
  chakra,
  Field,
  Fieldset,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <Box bg={"azure"} height={"full"} width={"full"} color={"black"} p={5}>
      <Flex dir="col" justifyContent={"center"} alignItems={"center"}>
        <chakra.form
          action=""
          mt={40}
          px={10}
          py={5}
          rounded={"md"}
          bg={"primary.light"}
          color={"primary.lightest"}
        >
          <Heading as={"h1"} mb={5} fontSize={"3xl"}>
            Ca$hTrack
          </Heading>
          <Fieldset.Root>
            <chakra.span
              //  className="text-[#D1FAE5]"
              color={"primary.lightest"}
              fontSize={"xl"}
            >
              Enter your login details
            </chakra.span>

            <Fieldset.Content>
              {/* Email Address */}
              <Field.Root>
                <Field.Label fontSize={"lg"} htmlFor="email">
                  Email Address
                </Field.Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={"Enter your email address"}
                  _placeholder={{ color: "primary.lightest" }}
                  css={{
                    "--focus-color": "colors.primary.dark",
                  }}
                />
              </Field.Root>

              {/* Password */}
              <Field.Root>
                <Field.Label fontSize={"lg"} htmlFor="password">
                  Password
                </Field.Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder={"Enter your password"}
                  _placeholder={{ color: "primary.lightest" }}
                  css={{
                    "--focus-color": "colors.primary.dark",
                  }}
                />
              </Field.Root>
            </Fieldset.Content>
          </Fieldset.Root>

          <Button
            type="submit"
            mt={10}
            float={"right"}
            onClick={(e) => {
              e.preventDefault();
              router.push("/overview");
            }}
          >
            Submit
          </Button>
        </chakra.form>
      </Flex>
    </Box>
  );
};

export default LoginPage;
