import api from "../axios/axiosConfig";

export const getUserLogin = async ()=>{
    try{
        const response = await api.get("/api/users");
        return response.data;
    }catch (err:any){
        console.error("Fetch User Error:", err.response?.data || err.message);
        return null;
    }
}