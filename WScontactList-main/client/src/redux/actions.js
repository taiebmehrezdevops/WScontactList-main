import {GET_CONTACTS} from "./actionType"
import axios from "axios"
//get all ccontacts
export const getContacts=()=>(dispatch)=>{
axios.get("/api/contact/")
.then((res)=>dispatch({type:GET_CONTACTS,payload:res.data}))
.catch((err)=>console.log(err))
}
export const addContact=(newContact)=>(dispatch)=>{
    axios.post("/api/contact/add",newContact)
    .then(res=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}
export const deleteContact=(idContact)=>(dispatch)=>{
    axios.delete(`/api/contact/${idContact}`)
    .then((res)=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const editContact=(idContact,editedContact)=>(dispatch)=>{
    axios.put(`/api/contact/edit/${idContact}`,editedContact)
    .then((res)=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

