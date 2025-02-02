import { useState } from 'react';
import './App.css';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nMot de passe: ${password}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 w-80">
          <h2 className="text-xl font-semibold text-center">Connexion</h2>
          <TextInput 
            label="Email" 
            type="email" 
            placeholder="Entrez votre email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput 
            label="Mot de passe" 
            type="password" 
            placeholder="Entrez votre mot de passe" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">Connexion</Button>
        </form>

        {/* Boutons existants */}
        <Button onClick={() => alert("Bouton primaire cliqué")}>Connexion</Button>
        <Button variant="secondary">À définir</Button>
        <Button variant="danger">Déconnexion</Button>

      </div>
    </div>
  );
}

export default App;
