import axios from "axios"


export class ContactService{
    static BASE_URL=`http://localhost:8081`

    static getAllContacts(){
        let dataUrl=`${this.BASE_URL}/contacts`
        return axios.get(dataUrl)
    }
    static createContact(contact){
        let dataURL=`${this.BASE_URL}/contacts`
        return axios.post(dataURL,contact)
    }
    static getContact(contactId){
        let dataUIRL=`${this.BASE_URL}/contacts/${contactId}`
        return axios.get(dataUIRL)

    }


}