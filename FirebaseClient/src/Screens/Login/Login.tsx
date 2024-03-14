import { useState } from "react";
import useLogin from "./Hooks/useLogin";
import Dashboard from "../Dashboard/Dashboard";

const Login =()=>{
    const {error,loading,isLoggedIn,makeLogin} = useLogin()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
        
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        try {
          e.preventDefault();
          // You can handle form submission logic here
          //console.log('Form submitted:', formData);
           await makeLogin(formData);
         
        } catch (error) {
          console.log(error)
        }   
      };
    
      return (
        <div className="w-full max-w-xs mx-auto">
          {isLoggedIn && <Dashboard/>}
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           {error.length>0 && <div className="bg-red-200 border-2 p-2 text-white text-base font-medium">{error}</div>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
               {loading ?"Sign in...":"sing In"} 
              </button>
            </div>
          </form>
        </div>
      );
}
export default Login;