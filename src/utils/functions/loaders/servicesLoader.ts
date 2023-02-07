import {getServicesFromLocalStorage} from "../services";
import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {OpraHttpClient} from "@opra/client";
import {ServiceInterface} from "../../types";

export const ServicesLoader = async (e: LoaderFunctionArgs) => {
    console.log("e ", e)
    const services: ServiceInterface[] = getServicesFromLocalStorage();
    const selectedServiceIndex = services?.findIndex(service => service.id === e.params.serviceId)
    if (selectedServiceIndex === -1) {
        return redirect('/')
    }

    const localClient = localStorage.getItem(e.params.serviceId + '')
    if (localClient) {
        return JSON.parse(localClient);
    }

    const client = await OpraHttpClient.create(services[selectedServiceIndex].url);
    const clientData = client.metadata.getMetadata();

    localStorage.setItem(e.params.serviceId + '', JSON.stringify(clientData));

    return clientData;

}
