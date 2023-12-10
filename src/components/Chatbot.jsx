import React from 'react';
import '../styles/chatbot.css'; 

// Definición del componente llamado Chatbot
function Chatbot() {
    // Retorna un fragmento JSX que representa el componente de chatbot
    return (
      <df-messenger
        // Intento inicial del chatbot 
        intent="WELCOME"
        
        // Título que se mostrará en la interfaz del chatbot
        chat-title="MediBot"
        
        // ID del agente asociado al chatbot 
        agent-id="8a607da7-fffe-4202-95c2-b4ee10f31dcf"
        
        // Código de idioma para el chatbot (español en este caso)
        language-code="es"
      ></df-messenger>
    );
  }
  
  // Exporta el componente Chatbot para su uso en otras partes de la aplicación
  export default Chatbot;
  