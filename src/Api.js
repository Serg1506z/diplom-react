class Api {
    url = 'https://students.netoservices.ru/fe-diplom/'
    async getCities (name) {
        if(!name) return
        const res = await fetch(this.url + 'routes/cities?name=' + name)
        return await res.json()
    }

    async getRoutes (obj) {
        const arr = Object.entries(obj).filter(item => item[1] !== '' && item[1] !== false && item[0] !== 'to_city_name' && item[0] !== 'from_city_name')
            .map((item, index) => index === 0 ? '?' + item.join('=') : '&' + item.join('='))
            .join('')  
        const res = await fetch(this.url + 'routes' + arr)
        return await res.json()
    }

    async getLastRoutes () {

    }

    async getSeatsPlace (obj) {
        const arr = Object.entries(obj).filter(item => item[1] !== '' && item[1] !== false && item[0] !== 'to_city_name' && item[0] !== 'from_city_name')
        .map((item, index) => index === 0 ? '?' + item.join('=') : '&' + item.join('='))
        .join('') 
        
        const res = await fetch(this.url + 'routes/' + obj.id + '/seats' + arr) 
        return await res.json()
    }

    async orderTicket () {

    }

    async setSubscribe () {

    }
}

export const api = new Api()

