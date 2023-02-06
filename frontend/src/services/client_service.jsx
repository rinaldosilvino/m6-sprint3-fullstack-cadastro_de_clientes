import custom_http from "./custom_http";



export default async function getListClients(){
    const { data } = await custom_http.get("/profile");
    return {code:200,data:data}
}