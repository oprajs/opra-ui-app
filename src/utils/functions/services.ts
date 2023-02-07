export const getServicesFromLocalStorage=()=>{
    const services=localStorage.getItem('services')
    return JSON.parse(services || '[]');
}
