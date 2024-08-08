import AuthRegister from "@/components/AuthRegister";

export default function Page() {

  return (
    <div className="h-screen bg-warm-flame-80 bg-opacity-20 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6">
        <div className="flex items-center mb-8">
          <img src="/logo-alone.png" className="w-[32px] mr-2" alt="logo" />
          <p className="font-bold">Vast Wallet</p>
        </div>

        <div className="md:flex md:justify-between md:items-center">
          <AuthRegister />
        </div>

      </div>
    </div>
  );
}
