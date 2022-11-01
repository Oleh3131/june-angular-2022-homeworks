import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {

  products:`${API}/products`,
  carts:`${API}/carts`,
  users:`${API}/users`

}

export {
  urls
}
