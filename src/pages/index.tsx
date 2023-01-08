import Head from "next/head"
import { useContext,FormEvent,useState } from "react"
import Image from "next/image"
import styles from '../../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import { Button } from "../components/ui/Button"
import Link from "next/link"
import { AuthContext } from "../contexts/AuthContext"
import {Input} from '../components/ui/Input/index';


export default function Home() {

  const {signIn} = useContext(AuthContext)

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [Loading,setLoading] = useState(false);


    async function handleLogin(event:FormEvent){
    event.preventDefault();

    let data = {
      email,
      password
    }
     await signIn(data)

    }


  return (
    <>
 
    <Head>
      <title>ScottAzzaro - Faça o seu login</title>
    </Head>

    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="logo Scott"/>

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input 
          placeholder="entre com o seu email"
          type="text"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
          <Input 
          placeholder="entre com a sua senha"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />

          <Button
          type="submit"
          Loading={false}
          >
            Entrar
          </Button>
        </form>

       <Link className={styles.text} href="/signup">Nao possui uma conta ? Cadastra-se</Link>
      </div>
    </div>
    </>
  
  )
}
