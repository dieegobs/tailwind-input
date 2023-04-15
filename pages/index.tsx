import Input from "./components/Input";

export default function Home() {
  return (

    <div className="flex flex-col justify-center items-center mt-12">

      <h1 className="text-gray-700 font-bold text-2xl mb-6 ">Clones de Input</h1>
      <div className="flex flex-col gap-3 mt-2 w-96">
        <Input id="name" type="text" placeholder="Nome" required={true}/>
        <Input id="email" type="email" placeholder="Email" required={true}/>
      </div>

    </div>

  );
}
