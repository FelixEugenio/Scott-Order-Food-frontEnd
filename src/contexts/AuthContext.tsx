import { createContext,ReactNode,useState} from 'react';

type AuthContextData = {
  user:UserProps | null;
  isAuthtenticated:boolean;
  signIn:(credential:SignInProps) => Promise<void>
}

type UserProps = {
 id:string;
 name:string;
 email:string
}

type SignInProps = {
    email:string;
    password:string;

}

type AuthProviderProps = {
    children:ReactNode
}

export const AuthContext = createContext({} as AuthContextData)


export function AuthProvider({children}:AuthProviderProps){

const [user,setUser]  = useState<UserProps | null>(null);
const isAuthtenticated = !!user;


  async function signIn({email,password}:SignInProps){
    console.log("",email,password)

    }


    return(
        <AuthContext.Provider value={{user,isAuthtenticated,signIn}}>
            {children}
        </AuthContext.Provider>
    )
}