export default  () =>{
return (<>
<nav className="flex sm:flex-row flex-col-reverse gap-y-4 justify-between items-center py-5 sm:px-12 px-8">
        <div className="">
          <img src="https://res.cloudinary.com/dmqqlrnew/image/upload/f_auto,q_auto/rnq3chxpfqabpvwthkfp" alt="Logo" className="h-12 sm:h-8"/>
        </div>
        <div className=" justify-between text-xl font-semibold text-primary hidden sm:flex">
          <a href="#" className="pr-4">App</a>
          <a href="#" className="px-4">Security</a>
          <a href="#" className="pl-4">Contact</a>
        </div>
        <div className="flex justify-end sm:hidden w-full">
          <img className="w-[26px] h-[20px]" src="menu.svg" alt="" />
        </div>
      </nav>



</>)
}