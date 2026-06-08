export function NotFound(){
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-500 to-gray-200 flex flex-col justify-center items-center bg-img">
      <h1 className="text-gray-100 font-semibold text-2xl mb-10">Op's! Essa página não existe.😥</h1>
      <a href="/" className="font-semibold text-green-100 hover:text-green-200 transition ease-linear">Voltar para o início</a>
    </div>
  )
}
