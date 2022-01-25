const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://3000-dmilanop-healthbackend-cy3fkpaws9j.ws-us28.gitpod.io",
			user: [],
			token: localStorage.getItem("token") || undefined
		},
		actions: {
			signUp: async user =>{
				const store = getStore();
				try{
					let response = await fetch(`${store.URL_BASE}/logup`, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(user)
					});
					return response;
				}catch (error){}
			},

			signIn: async user =>{
				const store = getStore();
				try{
					let response = await fetch(`${store.URL_BASE}/login`, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(user)
					});
					if(response.ok){
						let data = await response.json();
						setStore({ ...store, token: data.token});
						localStorage.setItem("token", data.token)
						return response;
					}else{
						return response;
					}
				}catch (error){}
			}
		}
	};
};

export default getState;