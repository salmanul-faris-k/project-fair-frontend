import commonApi from "./CommonApi";
import serverurl from "./serviceurl";

export const register=async(userdata)=>{
    return await commonApi("POST",`${serverurl}/register`,userdata)
}
export const login=async(userdata)=>{
    return await commonApi("POST",`${serverurl}/login`,userdata)
}
export const addproject=async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${serverurl}/add-project`,reqBody,reqHeader)
}
export const gethomeproject=async()=>{
    return await commonApi("GET",`${serverurl}/homeproject`,"")
}
export const getallproject=async(searchkey,reqHeader)=>{
    return await commonApi("GET",`${serverurl}/allproject?search=${searchkey}`,"",reqHeader)
}
export const getuserproject=async(reqHeader)=>{
    return await commonApi("GET",`${serverurl}/user-project`,"",reqHeader)
}
export const updateprojectapi=async(pid,reqBody,reqHeader)=>{
    return await commonApi("PUT",`${serverurl}/edit/project/${pid}`,reqBody,reqHeader)
}
export const deleteprojectapi=async(pid,reqHeader)=>{
    return await commonApi("DELETE",`${serverurl}/delete/project/${pid}`,{},reqHeader)
}

export const updateprofilapi=async(reqBody,reqHeader)=>{
    return await commonApi("PUT",`${serverurl}/update/profile`,reqBody,reqHeader)
}