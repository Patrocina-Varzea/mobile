import { useAuth } from "@/context/auth";
import { colors } from "@/styles/colors";
import { yupResolver } from "@hookform/resolvers/yup";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Link, router } from "expo-router";
import { SquareArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import * as yup from "yup";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import { useToast } from "@/components/Toast";

import { UserSignUpDTO } from "@/dtos/UserDTO";

import LogoImg from "@/assets/svg/logo.svg";

const signUpSchema = yup.object({
  entityType: yup.string().required("Informe o tipo"),
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 digítos"),
  password_confirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "A confirmação de senha não confere"),
});

export default function Signup() {
  const { toast } = useToast();
  const { signInGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignUpDTO>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleSignUp(data: UserSignUpDTO) {
    setIsLoading(true);

    console.log("Aqui >>>>>>");

    await auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        auth().currentUser?.updateProfile({
          displayName: data.name,
        });
        auth().currentUser?.sendEmailVerification();

        firestore()
          .collection(data.entityType)
          .doc(auth().currentUser?.uid)
          .set({
            name: data.name,
            email: data.email,
            type: data.entityType,
            createdAt: firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {})
          .catch((error) => {
            setIsLoading(false);
            const messageError = toast(
              "Algo deu errado! Tente novamente mais tarde.",
              "destructive",
            );
            console.log(error);
            return messageError;
          })
          .finally(() => {
            setIsLoading(false);
          });

        router.navigate("/email-verify");
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setIsLoading(false);

        if (errorCode === "auth/email-already-in-use") {
          const messageError = toast(
            "O email já está cadastrado no Patrocina Várzea, faça o login para continuar.",
            "destructive",
          );
          return messageError;
        } else if (errorCode === "auth/network-request-failed") {
          const messageError = toast(
            "Parece que você não está conectado a uma rede! Verifique sua conexão e tente novamente.",
            "destructive",
          );
          return messageError;
        } else {
          const messageError = toast(
            `Algo deu errado. Tente novamente mais tarde! Código: ${errorCode}`,
            "destructive",
          );
          console.log(errorCode, errorMessage);
          return messageError;
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <View className="flex-1 items-center bg-gray-900 p-8 pt-10">
      <View className="my-3 items-center justify-center">
        <View className="flex flex-row">
          <Link href={"/"}>
            <SquareArrowLeft
              color={colors.yellow[400]}
              width={32}
              height={32}
              strokeWidth={1}
            />
          </Link>
          <View className="flex-1 items-center justify-center pr-8">
            <LogoImg width={36} height={36} />
          </View>
        </View>
        <Text className="my-3 font-heading text-2xl text-yellow-400">
          Crie sua conta
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingBottom: 8 }}
      >
        <View className=" w-full items-center justify-center gap-4 px-8">
          <View className="mt-4 flex w-full flex-row items-center justify-center gap-4">
            <Controller
              control={control}
              name="entityType"
              render={({ field: { onChange, value } }) => (
                <RadioGroup defaultValue="club">
                  <View className="gap-3">
                    <RadioGroupItem value="club" label="Clube" />
                    <RadioGroupItem value="sponsor" label="Patrocinador" />
                  </View>
                  <View className="gap-3">
                    <RadioGroupItem value="confection" label="Confecção" />
                    <RadioGroupItem value="championship" label="Campeonato" />
                  </View>
                </RadioGroup>
              )}
            />
          </View>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input placeholder="Nome" onChangeText={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
          />

          <Button label="Criar conta" onPress={handleSubmit(handleSignUp)} />

          <View className="my-4 flex flex-row items-center justify-center gap-3">
            <View className="h-0.5 w-36 bg-gray-300" />
            <Text className="text-center font-body text-xl font-bold text-gray-300">
              Ou
            </Text>
            <View className="h-0.5 w-36 bg-gray-300" />
          </View>

          <Button
            label="Faça login da conta"
            onPress={() => router.navigate("/signin")}
          />

          <Button
            label="Criar com Google"
            className="bg-red-600"
            labelClasses="text-white"
            onPress={() => {
              signInGoogle();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
