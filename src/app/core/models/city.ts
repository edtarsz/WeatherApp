interface ICityDTO {
    id: number;
    name: string;
    region: string;
    country: string;
}

export class CityDTO implements ICityDTO {
    id: number;
    name: string;
    region: string;
    country: string;

    constructor(data: ICityDTO) {
        this.id = data.id;
        this.name = data.name;
        this.region = data.region;
        this.country = data.country;
    }
}