const HeroSection = () =>{
    return (<>
   <div className="hidden sm:flex justify-between items-center h-[640px] py-20 px-40">
          <div className="w-[500px] h-[225px] flex flex-col items-center justify-center">
            <h1 className="text-[64px] leading-[75px] font-[600]   text-primary">
              FAANG
              INVESTING
              COMMUNITY
            </h1>
            <p className="text-[30px] leading-[40px] text-secondary">
              We help people working in BigTech make better financial decisions with the data and insights provided by AI
            </p>
          </div>
          <div className="flex justify-center items-center w-[580px] h-[540px] bg-auto bg-login-form bg-center rounded-[64px]">
            <div className="grid grid-col-1 justify-center w-[520px] h-[480px] bg-white text-center items-center rounded-[32px]">
              <h2 className="pt-8 text-2xl font-semibold text-primary">Welcome Back</h2>
              <div>
                <input type="text" placeholder="Username" value={'ali@gmail.com'} className="w-[420px] p-4 text-[#127398] font-medium outline-none border-2 border-[#00ABE1] text-[21px] placeholder:text-blue-300 rounded-[10px]"/>
              </div>
              <div className="grid grid-cols-1 gap-1">  
                <input type="password" placeholder="Password" value={'******'} className="w-[420px] p-4 text-[#127398] font-medium outline-none border-2 border-[#00ABE1] text-[21px] placeholder:text-blue-300 rounded-[10px]"/>
                <a href="#" className="text-right outline-none font-medium text-primary">Forgot Password?</a>
              </div>
              <button className="p-4 outline-none bg-[#00ABE1] text-xl text-white rounded-[10px]">Login</button>
              <p className="py-6 text-[21px] text-[#127398] flex justify-center items-center  gap-x-4"><span>Don't have an account?</span> <a href="#" className="text-[#00ABE1] font-semibold text-[20px] outline-none">Create One</a></p>
            </div>
          </div>
        </div>
        <div className="sm:hidden block">
        <div className="flex flex-col gap-y-8 items-center justify-center p-12 text-center">
            <h1 className="text-[30px] leading-[35.61px] font-[600]   text-[#00ABE1]">
              FAANG
              INVESTING
              COMMUNITY
            </h1>
            <p className="text-[19px] leading-[24px] font-[500] text-[#127398]">
              We help people working in BigTech make better financial decisions with the data and insights provided by AI
            </p>
          </div>
        </div>
    
    
    
    </>)
    }
  export default HeroSection;