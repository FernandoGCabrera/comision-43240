
function App() {
  const saludar = () => {
    console.log("Hola como estas? bienvendio");
  };

  return (
    <button
      onClick={saludar}
      style={{ backgroundColor: "red", padding: "10px 20px" }}
    >
      saludar
    </button>
  );
}

export default App;
