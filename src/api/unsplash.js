import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _7uR8xwLqUOwjOawWVf1NzTb6wxSCzSt048rPtv2ymY",
  },
});
