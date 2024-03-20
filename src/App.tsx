import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <div className="w-full max-w-full min-h-screen bg-powderBlue px-12">
        <Header title="Calendrier" />
        <main>
          <Calendar />
        </main>
        <footer className="footer">
          {/* <p>© 2024 - Emilie Vukovic</p> */}
        </footer>
      </div>
    </div>
  );
}

export default App;
