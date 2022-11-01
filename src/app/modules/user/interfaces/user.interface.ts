export interface IUser {

  address: {
    geolocation: IGeolocation,
    city: string,
    street: string,
    number: number,
    zipcode: string
  },
  id: number,
  email: string,
  username: string,
  password: string,
  name: IName,
  phone: string,
  __v: number

}

interface IGeolocation {

  lat: string,
  long: string

}

interface IName {

  firstname: string,
  lastname: string

}
