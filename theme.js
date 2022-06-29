// function LightTheme(props) {
//     return <div class='w3-text-light-grey'></div>;
//   }
  
//   function DarkTheme(props) {
//     return <div class='w3-text-dark-grey'></div>;
//   }
  
//   function ThemeChange(props) {
//     const isDark = props.isDark;
  
//     if (isDark) {
//       return <DarkTheme />;
//     }
//     return <LightTheme />;
//   }
  
//   const theme = ReactDOM.createRoot(document.getElementById('theme')); 
//   // Try changing to isLoggedIn={true}:
//   theme.render(<ThemeChange isDark={false} />);

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <h1>Hello, world</h1>;
root.render(element);

