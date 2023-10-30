import React, { createContext, useContext } from "react"

const ThemeContext=createContext({theme:"light"});
const AuthContext=createContext({firstName:"Satyendra"});

class Theme extends React.Component{
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        return (
          <ThemeContext.Provider value={{theme:"dark"}}>
            <AuthContext.Provider value={{firstName:"Sanjay"}}>
             <Toolbar />
             </AuthContext.Provider>
            </ThemeContext.Provider>
        );
      }
    }
    
    // A component in the middle doesn't have to
    // pass the theme down explicitly anymore.
    function Toolbar() {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }
    
    class ThemedButton extends React.Component {
      // Assign a contextType to read the current theme context.
      // React will find the closest theme Provider above and use its value.
      // In this example, the current theme is "dark".
      
      render() {
        return <ThemeContext.Provider value={{theme:"Yellow"}}><Button/></ThemeContext.Provider>;
      }
    }

   /*  class Button extends React.Component{
      static contextType = ThemeContext;
      static contextType=AuthContext;
        render(){
          console.log("this.context.theme=",this.context)
          return  <button className="bg-black text-white">{this.context.theme}</button>
        }
    } */

    /* function Button() {
      // 🟡 Legacy way (not recommended)
      return (
        <ThemeContext.Consumer>
          {({theme,fname}) => (
            <button className="bg-black text-white">{theme}+ {fname}</button>
          )}
        </ThemeContext.Consumer>
      );
    } */
    function Button() {
      // 🟡 Legacy way (not recommended)
      const theme=useContext(ThemeContext);
      const auth=useContext(AuthContext);

      console.log(theme, auth);
      // {theme: 'Yellow'} {firstName: 'Sanjay'}
      return (
            <button className="bg-black text-white"></button>
      );
    }

    

    export default Theme;