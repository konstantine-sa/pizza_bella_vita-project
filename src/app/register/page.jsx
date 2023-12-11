"use client";

import { useState } from "react";
import Image from "next/image";

import SectionHeader from "@/components/Layout/SectionHeader";
import googleIcon from "../../../public/img/googleIcon.png";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setCreatingUser(true);
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    setCreatingUser(false);
  };

  return (
    <section className="flex flex-col items-center flex-grow">
      <SectionHeader mainHeader={"Registrieren"} />

      <form
        className="block min-w-[24rem] mx-auto mt-12"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={creatingUser}
        ></input>
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={creatingUser}
        ></input>
        <button
          className="buttonYellow mx-auto"
          type="submit"
          disabled={creatingUser}
        >
          Registrieren
        </button>
      </form>

      <p className="my-2 text-secondaryTitle">oder</p>
      <div>
        <button className="buttonGray mx-auto flex gap-2 justify-center items-center px-4">
          <Image src={googleIcon} alt="google icon" width={28} height={28} />
          Mit Google anmelden
        </button>
      </div>
    </section>
  );
}

export default RegisterPage;
