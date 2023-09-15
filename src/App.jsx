import {RiChatNewFill, RiMore2Fill, RiGradienterLine, RiExchangeFundsLine, RiGroupLine, RiSearchLine,RiCheckDoubleFill, RiCameraFill, RiMicFill, RiInboxArchiveLine, RiEmotionHappyLine, RiAddFill} from "react-icons/ri";
function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4 text-gray-300">
      {/* contacts */}
      <div className=" hidden bg-[#1B2831] xl:flex flex-col">
        {/* Profile */}
        <div className=" p-4 h-[15vh] ">
            <div className="flex items-center justify-between mb-4 ">
            <div>
              <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=740&t=st=1694115480~exp=1694116080~hmac=622664f21b0b678156cbe791f5bce920c6cb0c93779329be9fd6ede2aa721dbd" 
                className="h-10 w-10 object-cover rounded-full" />
            </div>
                <div className="flex items-center gap-8 text-2xl text-gray-500">
                  <RiGroupLine className="hover:cursor-pointer"/>
                  <RiExchangeFundsLine className="hover:cursor-pointer"/>
                  <RiGradienterLine className="hover:cursor-pointer"/>
                  <RiChatNewFill className="hover:cursor-pointer"/>
                  <RiMore2Fill className="hover:cursor-pointer"/>
                </div>
            </div>
            <form className="w-full">
              <div className="relative">
                <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4"/>
                <input className="bg-[#222C32] w-full rounded-full py-2 pl-10 pr-4 outline-none" placeholder="Buscar un chat o iniciar uno nuevo" />
              </div>
            </form>
          </div>
          {/* Contacts */}
          <div className="h-[85vh] overflow-scroll custom-scrollbar">
              {/* Archivados */}
              <div className="p-3 flex items-center  hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <div className="flex-1 flex justify-between">
                  <div>
                  <p className="text-gray-500 flex items-center">
                   < RiInboxArchiveLine className="text-lg gap-7 text-[#00A884]"/>
                   Archivados
                  </p>
                  </div>
                </div>
              </div>
              {/* Contact */}
              <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://i.pinimg.com/736x/92/44/f5/9244f5d8f6058c768722866fcbbd271f.jpg" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>❤️Love❤️</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                  <RiCheckDoubleFill className="text-cyan-500 text-lg"/> <RiCameraFill className="text-lg"/>
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">14:33 P.M</div>
                </div>
              </div>
              {/* Contact2 */}
              <div  className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/joven-mujer-negocios-hispana-que-trabaja-oficina-sintiendose-mal-tosiendo-como-sintoma-concepto-atencion-medica-resfriado-o-bronquitis_839833-15817.jpg?w=740&t=st=1694211148~exp=1694211748~hmac=c4ce5c7e2c29801519821633142bdd207ef500f306b9496e873ee8a548c0f3e2" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Mamá</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">14:00 P.M</div>
                </div>
              </div>
              {/* Contact3 */}
              <div  className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/fotos-premium/retrato-hermoso-joven-mujer-asiatica-largo-pelo-castano_941265-3523.jpg?w=740" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Maria lopez</h1>
                  <p className="text-[#00A884] flex items-center gap-1">
                   escribiendo...
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">13:50 P.M</div>
                </div>
              </div>
              {/* Contact4 */}
              <div  className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/joven-hispana-aspecto-frances-boina-mirando-lado-lado-sonrisa-cara-expresion-natural-riendo-confiada_839833-17680.jpg?w=740&t=st=1694223009~exp=1694223609~hmac=c0596491f81665c893f3baa478cf249eea2527b97bd01bdb41d87051864ab340" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Margareth</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">13:45 P.M</div>
                </div>
              </div>
              {/* Contact5 */}
              <div  className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/fotos-premium/retrato-artistico-rostro-femenino-ia-generativa_629315-11058.jpg?w=740" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>lucia</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiMicFill className="text-[#09D261]"/>0.09
                   {/* <p className="gap-7"><RiCheckboxBlankCircleFill className="text-[#00A884]"/></p> */}
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">13:30 P.M</div>
                </div>
              </div>
              {/* Contact6 */}
              <div  className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente_1268-21864.jpg?w=360&t=st=1694223102~exp=1694223702~hmac=f2ca3247a17a8c4e6e08f0c7f8a8134f71c4a62b06941303873359e578ae209f" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Flor</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">13:28 P.M</div>
                </div>
              </div>
              {/* Contact7 */}
              <div href="#" className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/retrato-mujer-bonita-gafas-sol-sombrero-sobre-pared-colorida-azul_231208-545.jpg?w=360&t=st=1694223197~exp=1694223797~hmac=c11c32c5f9ee4fcb17a145ecf704ce60ea1fc47d3ab33e8a8d3aaee9f8799ebf" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Guianel</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">13:20 P.M</div>
                </div>
              </div>
              {/* Contact8 */}
              <div href="#" className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/retrato-mujer-hermosa-elegancia-glamour-pelo-largo-rizado-posando-estudio_186202-4856.jpg?w=360&t=st=1694223244~exp=1694223844~hmac=98683168c35d72c48a0da7bcea47d70e617449e3ca4ad4999499e8aa944db553" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Paola</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-cyan-500 text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">13:00 P.M</div>
                </div>
              </div>
              {/* Contact9 */}
              <div href="#" className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/retrato-hombre-feliz-sonriente_23-2149022620.jpg?w=740&t=st=1694223324~exp=1694223924~hmac=50ce7123a86bfd156678362b33f0f9be0041793a50482ee28c7cb133e80f38f4" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Angel</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">11:00 A.M</div>
                </div>
              </div>
              {/* Contact10 */}
              <div href="#" className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
                <img src="https://img.freepik.com/foto-gratis/hombre-guapo-posando-sonriendo_23-2149396133.jpg?w=360&t=st=1694223382~exp=1694223982~hmac=fdd47b37cca1aa6ab515cc85e9904789dafb878582f6f0755b523f3dd4f5bf3b" 
                className="w-11 h-11 object-cover rounded-full" />
                <div className="flex-1 flex justify-between">
                  <div>
                  <h1>Rogger</h1>
                  <p className="text-gray-500 flex items-center gap-1">
                   <RiCheckDoubleFill className="text-lg"/>Lorem ipsum dolor sit amet.
                  </p>
                  </div>
                  <div className="text-sm text-gray-500">12/11/2023</div>
                </div>
              </div>
          </div>
      </div>
      {/* chats */}
      <div className="xl:col-span-3">
        <header className="h-[10vh] bg-[#1B2831] p-4 flex items-center justify-between">
          <div className="flex item-center gap-4 ">
              <img src="https://img.freepik.com/fotos-premium/retrato-hermoso-joven-mujer-asiatica-largo-pelo-castano_941265-3523.jpg?w=740" 
              className="w-11 h-11 object-cover rounded-full hover:cursor-pointer" />
              <div>
                <h1 className="hover:cursor-pointer">Maria lopez</h1>
                <span className="text-gray-500 text-sm">Linea</span>
              </div>
          </div>
          <div className="flex items center gap-8 text-2xl text-gray-500">
            <RiSearchLine className="hover:cursor-pointer"/>
            <RiMore2Fill className="hover:cursor-pointer"/>
          </div>
        </header>
         {/* Messages */}
        <main className="h-[81vh] overflow-y-scroll custom-scrollbar p-4">
            {/* message 1 */}
            <div className="mb-3 flex ">
              <p className="bg-[#1B2831] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl ">hola gaaa</p>
            </div>
            {/* message 1 */}
            <div className="mb-3 flex ">
              <p className="bg-[#1B2831] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde minus ducimus 
              ex ipsa velit deleniti minima non ut doloremque, dolor corrupti deserunt amet!</p>
            </div>
            {/* message 2 */}
            <div className="mb-3 flex justify-end">
              <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum debitis sunt, laudantium asperiores esse
                 expedita explicabo sit eum porro atque sint saepe voluptates excepturi doloribus? Adipisci magnam cum ad?</p>
            </div>
            {/* message 2 */}
            <div className="mb-3 flex justify-end">
              <p className="bg-[#054640] max-w-[80%] xl:max-w-2xl py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl ">
                holasssssxd 
              </p>
            </div>
            
        </main>
         {/* Send message */}
        <div className="h-[9vh] bg-[#1B2831] text-gray-500 flex items-center p-4">
          <div className=" w-[25%] xl:w-1/12 flex justify-center text-2xl gap-2">
          <RiEmotionHappyLine className="hover:cursor-pointer"/>
          <RiAddFill className="hover:cursor-pointer"/>
          </div>
          <form className="w-[60%] xl:w-10/12">
            <input type="text" className=" bg-[#2a3942] w-full py-2 px-6 rounded-full outline-none text-gray-300" placeholder="Escriba un mensaje aqui" />
          </form>
          <div className="w-[15%] xl:w-1/12 flex justify-center text-2xl">
          <RiMicFill className="hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
