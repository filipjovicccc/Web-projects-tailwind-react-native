import axios from "axios";

class UserServicese {
  static getUser = () =>
    axios.post("http://192.168.1.2:4000/user"); // Include the full URL

  // Other methods and service functions
}

export default UserServicese;