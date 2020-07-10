class SwapiService
{
    _apiBasse = 'https://swapi.dev/api';

    async getResoure(url)
    {
        const res = await fetch(`${this._apiBasse}${url}`);
        if(!res.ok)
        {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    async getAllPeople()
    {
        const result = await this.getResoure(`/people/`);
        return result.results;
    }
    getPerson(id)
    {
        return this.getResoure(`/people/${id}/`)
    }
    async getAllPlanets()
    {
        const result = await this.getResoure(`/planets/`);
        return result.results;
    }
    getPlanet(id)
    {
        return this.getResoure(`/planets/${id}/`)
    }
    async getAllStarships()
    {
        const result = await this.getResoure(`/starships/`);
        return result.results;
    }
    getStarship(id)
    {
        return this.getResoure(`/starships/${id}/`)
    }
}
