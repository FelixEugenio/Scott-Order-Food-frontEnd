import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import { Button } from "../components/ui/Button"

import {Input} from '../components/ui/Input/index';
export default function Home() {
  return (
    <>
 
    <Head>
      <title>ScottAzzaro - Faça o seu login</title>
    </Head>

    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="logo Scott"/>

      <div className={styles.login}>
        <form>
          <Input 
          placeholder="entre com o seu email"
          type="text"
          />
          <Input 
          placeholder="entre com a sua senha"
          type="password"
          />

          <Button
          type="submit"
          Loading={false}
          >
            Entrar
          </Button>
        </form>
        <a className={styles.text}>Nao possui uma conta ? Cadastra-se </a>

      </div>
    </div>
    </>
  
  )
}
