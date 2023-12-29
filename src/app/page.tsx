import Image from "next/image";
import Logo from "../../public/logo-white.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between landing-home">
      <div className="p-28  ">
        <Image src={Logo} className="w-6/12" alt="Logo" />
        <h1 className="text-2xl my-10 text-white">
          Bem vindo ao <b>Doctor Key</b>
        </h1>
        <h2 className="my-10 text-white">Seu gerenciador de chaves automotivas</h2>
        <Link
          className="bg-gradient-to-r from-gray-300 to-white py-2 px-7 text-green-500 rounded shadow-lg hover:border hover:border-gray-300da"
          href="/login"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
