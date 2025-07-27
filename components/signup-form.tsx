'use client'
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
import { User } from ".."

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const [visible, setVisible] = useState(false);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here

        const User: User = {
            email: (e.currentTarget as HTMLFormElement).email.value,
            nom: (e.currentTarget as HTMLFormElement).nom.value,
            prenom: (e.currentTarget as HTMLFormElement).prenom.value,
            password: (e.currentTarget as HTMLFormElement).password.value,
            dataInscription: ' ',
            typesUtilisateur: "ADMIN",
        }

        const request = await fetch("/api/signup", {
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



        // Handle successful signup
        console.log("User signed up successfully", await request.json());
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Créer un compte</CardTitle>
                    <CardDescription>
                        Entrez votre email ci-dessous pour créer un compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave}>
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
                                <Label htmlFor="nom">Nom</Label>
                                <Input
                                    id="nom"
                                    type="text"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="prenom">Prénom</Label>
                                <Input
                                    id="prenom"
                                    type="text"
                                    placeholder="Votre prénom"
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
                                <Button size='lg' type="submit" className="w-full">
                                    Saved
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
