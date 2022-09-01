import * as fighterRepository from '../repositories/fighterRepository'

export async function getAllFighters() {

    const getAll = await fighterRepository.getAllFighters();
    return getAll

}