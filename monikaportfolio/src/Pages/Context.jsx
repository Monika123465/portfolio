import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initialvalue = {
  isOpenNow: false,
  isOpenNowgeek: false,
  isOpenNowmobnav: false,
  isOpenNownord: false,
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openpluralsight": {
      console.log("hi")
      return {
        ...state,
        isOpenNow: true,
      };
    }
    case "closepluralsight": {
      return {
        ...state,
        isOpenNow: false,
      };
    }
    case "opengeekbuying": {
      console.log("hello")
      return {
        ...state,
        isOpenNowgeek: true,
      };
    }
    case "closegeekbuying": {
      
      return {
        ...state,
        isOpenNowgeek: false,
      };
    }
    case "opennordstrom": {
      return {
        ...state,
        isOpenNownord: true,
      };
    }
    case "closenordstrom": {
      return {
        ...state,
        isOpenNownord: false,
      };
    }
    case "openecom": {
      return {
        ...state,
        isOpenNowecom: true,
      };
    }
    case "closeecom": {
      return {
        ...state,
        isOpenNowecom: false,
      };
    }
    case "opentranslator": {
      return {
        ...state,
        isOpenNowtranslator: true,
      };
    }
    case "closetranslator": {
      return {
        ...state,
        isOpenNowtranslator: false,
      };
    }
    default: {
      return state;
    }
  }
}

function AuthContextprovider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextprovider;