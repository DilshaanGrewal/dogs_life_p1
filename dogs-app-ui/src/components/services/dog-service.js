import http from './axios-common';

export function getAllDogs(){
    return http.get("api/v1/dogs");
}

// export function saveHero(hero){
//     return http.post("/heroes", hero)
// }