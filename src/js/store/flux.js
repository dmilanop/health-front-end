const getState = ({ getStore, getActions, setStore }) => {
	const apiKey = process.env.API_KEY
	return {
		store: {
			URL_BASE: "https://3000-dmilanop-healthbackend-7ky6uifh9lw.ws-us30.gitpod.io",
			user: "",
			recipes:[],
			ingredients:[],
			user_information:{},
			medical_history:{},
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
						setStore({...store, token: data.token, user: data.name});
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
						setStore({ ...store, token: data.token, user: data.name});
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

			getMedicalHistory: async () => {
				const store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/id_medical_history`,{
						method:'GET',
						headers:{
							"Content-Type": "application/json",
							Authorization:`Bearer ${store.token}`
						},
						body: JSON.stringify()
					})
					let result = await response.json()
					setStore({...store, medical_history: result})
				} catch (error) {}
			},

			getUser: async () => {
				const store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/id_user`,{
						method:'GET',
						headers:{
							"Content-Type": "application/json",
							Authorization:`Bearer ${store.token}`
						},
						body: JSON.stringify()
					})
					let result = await response.json()
					setStore({...store, user_information: result})
				} catch (error) {}
			},

			resetMedicalHistory: async (user) => {
				const store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/medical_history`,{
						method:'PUT',
						headers:{
							"Content-Type": "application/json",
							Authorization:`Bearer ${store.token}`
						},
						body: JSON.stringify(user)
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
					let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=vegetarian&diet=25&number=9`)
					let result = await response.json()
					setStore({...store, recipes: result.results })
				} catch (error) {
					
				}
			},

			getIngredients: async (id) => {
				const store = getStore();

				try {
					let response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`)
					let result = await response.json()
					setStore({...store, ingredients: result.ingredients})
				} catch (error) {}
			}
		}
	};
};

export default getState;