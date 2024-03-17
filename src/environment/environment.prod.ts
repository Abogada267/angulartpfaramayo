export interface Environment {
  production: boolean;
  apiURL: string; // Agrega la propiedad apiURL con el tipo string
}

export const environment: Environment = {
  production: false, 
  apiURL: 'http://localhost:3000/api' 
};

  
  