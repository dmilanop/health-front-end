const getState = ({ getStore, getActions, setStore }) => {
	const apiKey = process.env.API_KEY
	return {
		store: {
			URL_BASE: "https://3000-dmilanop-healthbackend-ughey406xti.ws-us30.gitpod.io",
			user: [],
			recipes:[],
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
					if (response.ok){
						let data = await response.json();
						setStore({...store, token: data.token});
						localStorage.setItem("token", data.token);
						return response;
					}
					else{
						return response
					}
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
			},

			signOut: () => {
				const store = getStore();

				setStore({...store, token: undefined});
				localStorage.removeItem("token");
				return true; 
			},

			medicalHistory: async (user) =>{
				const store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/medical_history`,{
						method:'POST',
						headers:{
							"Content-Type": "application/json",
							Authorization:`Bearer ${store.token}`
						},
						body: JSON.stringify(user)
					});
					return response;
				} catch (error) {
				}
			},

			resetMedicalHistory: async () => {
				const store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/medical_history`,{
						method:'PUT',
						headers:{
							"Content-Type": "application/json",
							Authorization:`Bearer ${store.token}`
						},
						body: JSON.stringify()
					});
					return response
				} catch (error) {
					
				}
			},

			deleteUser: async () =>{
				const store = getStore();

				try {
					let response = await fetch(`${store.URL_BASE}/delete_acount`,{
						method: "DELETE",
						headers:{
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						}
					});
					return response;
				} catch (error) {}
			},

			getRecipes: async () => {
				const store = getStore();

				try {
					let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1&tags=vegetarian,dessert`)
					let result = await response.json()
					console.log(result["recipes"])
					setStore({...store, recipes: result })
				} catch (error) {
					
				}
			}
		}
	};
};

export default getState;