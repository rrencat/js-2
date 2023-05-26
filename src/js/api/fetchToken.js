import { load } from "../storage/index.js";

export async function fetchToken(url, options = {}) {
  const token = load("token");
  
  if (!token) {
		throw new Error("No token found");
	}

	const myOptions = {
		...options,
		headers: {
			"Content-Type": "application/json;",
			Authorization: `Bearer ${token}`,
		},
	};

	return fetch(url, myOptions);
  }

 

	
