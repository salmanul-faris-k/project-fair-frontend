import axios from "axios";

const commonApi=async(httpmethod,url,reqbody,reqHeader)=>{
    const reqconfiq={
        method:httpmethod,
        url,
        data:reqbody,
        headers:reqHeader?reqHeader:{"content-Type":"Application/json"}
    }

 return await axios(reqconfiq).then(res=>{
    return res
}).catch(erro=>{
    return erro
})

}
export default commonApi