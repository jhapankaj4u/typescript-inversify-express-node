export interface IconfigProvider{
    server :{
        host:string,
        port:number
    },

    database: {
        database: string,
        username: string,
        password: string,
        host: string,
        port: number,
    }
    token: {
        signature: {
            access:string,
            refresh: string,
        },
    }


}