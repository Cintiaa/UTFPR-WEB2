export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
};

export const logout = () =>{
    localStorage.removeItem("token");
}

