"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { FC, PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "./interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ContactModal: FC<PropsWithChildren> = ({ children }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  const onSubmit = async (values: ContactFormData) => {
    setSuccess(true);
    // const res =
    await fetch("/api/send-to-telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    // if (res.ok) setSuccess(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-0 border-none">
        <DialogHeader>
          <DialogTitle
            className={cn({
              "text-green-700": success,
            })}
          >
            {success ? "Заявка відправлена!" : "Замовити консультацію"}
          </DialogTitle>
        </DialogHeader>
        {success ? (
          <>
            <p className="mt-6 font-[500]">
              Дякую, Ви залишили заявку на консультацію, ми скоро з вами
              зв&apos;яжимось.
            </p>
            <p>З повагою команда AdvisorAuto!</p>
          </>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <FormField
                name="name"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} id="name" placeholder="Ім'я" />
                  </FormControl>
                )}
              />
              <FormField
                name="phone"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} id="phone" placeholder="Телефон" />
                  </FormControl>
                )}
              />
              <Button type="submit" disabled={!form.formState.isValid}>
                Відправити
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ContactModal;
