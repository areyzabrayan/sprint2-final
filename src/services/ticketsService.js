import axios from "axios"
import { endPoints } from "../data/data"

export const saveTicket = async(ticket) => {
    try {
        const response = await axios.post(endPoints.tiquetes, ticket)
        
        return response.status === 201 ? true : false
    } catch (error) {
        return false
    }
}