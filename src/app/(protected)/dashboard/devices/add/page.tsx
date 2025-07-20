"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useCallback, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AddNewDeviceSchema, AddNewDeviceSchemaType } from "../../../../../../schemas";
import { DevicesIcon } from "../../components/icons";

// Componente principal
export default function AddDevicePage() {
  const [isPending, startTransition] = useTransition();
  // Configuração do react-hook-form com zod resolver
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddNewDeviceSchemaType>({
    resolver: zodResolver(AddNewDeviceSchema),
    defaultValues: {
      capacityTank: 0,
      code: "",
      city: "",
      street: "",
      number: "",
      district: "",
      zipCode: "",
      complement: "",
      loraAddress: "1",
      loraSerial: "1",
      name: "",
    },
  });

  // Função para buscar endereço pelo CEP
  const fetchAddressByCep = async (cep: string) => {
    // Remove caracteres não numéricos
    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length < 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setValue("city", data.localidade);
        setValue("street", data.logradouro);
        setValue("district", data.bairro);
        // Foco no campo número após preencher o endereço
        document.getElementById("number")?.focus();
      }
    } catch (err) {
      toast.error("Ocorreu um erro ao buscar o CEP. Tente novamente.");
      console.error("Erro ao buscar CEP:", err);
    }
  };

  // Monitorar mudanças no CEP
  const zipCode = watch("zipCode");
  const handleZipCodeBlur = () => {
    if (zipCode && zipCode.length >= 8) {
      fetchAddressByCep(zipCode);
    }
  };

  // Função para lidar com o envio do formulário
  const onSubmit = async (data: AddNewDeviceSchemaType) => {
    startTransition(async () => {
      try {
        // Simulação de chamada à API
        const req = await fetch("/api/device/add-new-device", {
          method: "POST",
          body: JSON.stringify(data),
        });

        const { error } = await req.json();

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Dispositivo adicionado com sucesso!");

        // Limpa o formulário e mostra mensagem de sucesso
        reset();
      } catch (err) {
        toast.error("Ocorreu um erro ao adicionar o dispositivo. Tente novamente.");
        console.error("Erro ao adicionar dispositivo:", err);
      }
    });
  };

  // Gerador de código automático
  const generateDeviceCode = useCallback(() => {
    // 4 letras aleatórias de a-z
    const prefix = Array.from({ length: 4 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('').toUpperCase();
    const randomNum = Math.floor(Math.random() * 9000) + 1000; // Gera número entre 1000-9999
    setValue("code", `${prefix}-${randomNum}`);
  }, [setValue]);

  useEffect(() => {
    generateDeviceCode();
  }, [generateDeviceCode]);

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-green-100 p-2 rounded-lg mr-3">
          <DevicesIcon />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Adicionar Dispositivo</h1>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Apelido do dispositivo *
              </label>
              <input
                type="text"
                id="name"
                disabled={isPending}
                {...register("name")}
                className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Ex: Caixa d'água - Residencial"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                Código do Dispositivo
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="code"
                  disabled
                  {...register("code")}
                  className={`w-full p-2 border ${errors.code ? "border-red-500" : "border-gray-300"} rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              {errors.code && (
                <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="capacityTank" className="block text-sm font-medium text-gray-700 mb-1">
                Capacidade do Tanque (litros) *
              </label>
              <input
                type="number"
                inputMode="numeric"
                id="capacityTank"
                disabled={isPending}
                {...register("capacityTank", { valueAsNumber: true })}
                className={`w-full p-2 border ${errors.capacityTank ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                min="1"
              />
              {errors.capacityTank && (
                <p className="mt-1 text-sm text-red-600">{errors.capacityTank.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="loraAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço LoRa *
              </label>
              <input
                type="number"
                inputMode="numeric"
                id="loraAddress"
                disabled={isPending}
                {...register("loraAddress")}
                className={`w-full p-2 border ${errors.loraAddress ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.loraAddress && (
                <p className="mt-1 text-sm text-red-600">{errors.loraAddress.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="loraSerial" className="block text-sm font-medium text-gray-700 mb-1">
                Serial LoRa *
              </label>
              <input
                type="number"
                inputMode="numeric"
                id="loraSerial"
                disabled={isPending}
                {...register("loraSerial")}
                className={`w-full p-2 border ${errors.loraSerial ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.loraSerial && (
                <p className="mt-1 text-sm text-red-600">{errors.loraSerial.message}</p>
              )}
            </div>
          </div>

          <h3 className="text-lg font-medium text-gray-900 mb-4">Localização</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                CEP *
              </label>
              <input
                type="number"
                inputMode="numeric"
                id="zipCode"
                disabled={isPending}
                {...register("zipCode")}
                onBlur={handleZipCodeBlur}
                className={`w-full p-2 border ${errors.zipCode ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Apenas números"
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Cidade *
              </label>
              <input
                type="text"
                id="city"
                disabled={isPending}
                {...register("city")}
                className={`w-full p-2 border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                Bairro *
              </label>
              <input
                type="text"
                id="district"
                disabled={isPending}
                {...register("district")}
                className={`w-full p-2 border ${errors.district ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.district && (
                <p className="mt-1 text-sm text-red-600">{errors.district.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                Rua/Avenida *
              </label>
              <input
                type="text"
                id="street"
                disabled={isPending}
                {...register("street")}
                className={`w-full p-2 border ${errors.street ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.street && (
                <p className="mt-1 text-sm text-red-600">{errors.street.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                Número *
              </label>
              <input
                type="text"
                id="number"
                disabled={isPending}
                {...register("number")}
                className={`w-full p-2 border ${errors.number ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.number && (
                <p className="mt-1 text-sm text-red-600">{errors.number.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">
                Complemento
              </label>
              <input
                type="text"
                id="complement"
                {...register("complement")}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Link
              href="/dashboard/devices"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adicionando..." : "Adicionar Dispositivo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 