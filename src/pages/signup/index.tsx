import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'
import logoImg from '../../../public/logo.svg'
import { Button } from "../../components/ui/Button"
import Link from "next/link"
import { Input } from "../../components/ui/Input"
export default function SignUp() {
  return (
    <>
 
    <Head>
      <title>ScottAzzaro - Faça o seu Cadastro Agora</title>
    </Head>

    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="logo Scott"/>

      <div className={styles.login}>
        <h1 className={styles.text}>Criando a sua Conta</h1><br />
        <form>

        <Input 
          placeholder="entre com o seu nome"
          type="text"
          />
          <Input 
          placeholder="entre com o seu email"
          type="text"
          />
          <Input 
          placeholder="entre com o seu Endereço"
          type="text"
          />

          <Input 
          placeholder="entre com o seu Numero de Telefone"
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
            Criar Conta
          </Button>
        </form>

       <Link className={styles.text} href="/signup">ja possui uma conta ? Faça Login</Link>
      </div>
    </div>
    </>
  
  )
}
