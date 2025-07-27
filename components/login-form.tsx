"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useUserStore } from "@/store/states"
import { LineMdConfirmCircle, SvgSpinnersRingResize } from "./icones"
import { redirect } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [visible, setVisible] = useState(false);
  const [actived, setActived] = useState(false);
  const [texte, setTexte] = useState("Se connecter");

  const setToken = useUserStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent) => {
    setActived(true);
    e.preventDefault();
    // Handle form submission logic here

    const User = {
      email: (e.currentTarget as HTMLFormElement).email.value,
      password: (e.currentTarget as HTMLFormElement).password.value,
    }

    const request = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      // Handle error
      console.error("Error signing up:", request.statusText);
      return;
    }

    const response = await request.json();
    const token = response.token; // Assure-toi que le serveur renvoie bien { token: ... }

    if (token) {
      localStorage.setItem("xool-token", token); // Stocke dans le LocalStorage
      localStorage.setItem("xool-user", JSON.stringify(response.user)); // Stocke les infos utilisateur
      setToken(token); // Stocke dans Zustand
      setActived(false); // Réinitialise l'état d'activation

      setTexte("Connecté avec succès");
      redirect("/dashboard");
    }


    // Handle successful login
    console.log("User logged in successfully", response);
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Connecter à votre compte</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input id="password" type={visible ? "text" : "password"} required />
                <div className="flex items-center gap-2">

                  <div>
                    <Input
                      id="visible"
                      type="checkbox"
                      className="h-[16px] w-[16px] rounded-full border-gray-300 bg-white text-blue-600 focus:ring-blue-500"

                      checked={visible}
                      onChange={() => setVisible(!visible)}
                    />
                  </div>
                  <Label htmlFor="visible">Rendre votre mot de passe visible</Label>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {
                    actived ? (
                      <SvgSpinnersRingResize className="h-5 w-5 animate-spin" />
                    ) : (
                      texte
                    )
                  }
                </Button>

              </div>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
