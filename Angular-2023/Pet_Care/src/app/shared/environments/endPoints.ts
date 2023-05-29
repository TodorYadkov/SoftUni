export const endpoints = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
    getAllPets: 'data/pets?sortBy=_createdOn%20desc&distinct=name',
    createPet: 'data/pets',
    makeDonation: 'data/donation',
    getById: (petId: string) => `data/pets/${petId}`,
    getDonationFromUser: (petId: string, userId: string) => `data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    getDonationCountFromPet: (petId: string) => `data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    deletePet: (petId: string) => `data/pets/${petId}`,
    updatePet: (petId: string) => `data/pets/${petId}`,
}