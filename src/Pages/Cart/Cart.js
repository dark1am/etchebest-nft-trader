import {React,useContext,useEffect,useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {dataBase} from '../../Firebase/firebase'
import { Link } from 'react-router-dom'
import Page from '../../Components/Page/Page'
import {CartContext} from '../../context/cartContext'
import './Cart.css'

function Cart() {

    const {listaProductos,removeItem,clear} = useContext(CartContext)
    const [acumulador,setAcumulador] = useState(0)

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    useEffect(() => {
        if(listaProductos.length>0){
          setAcumulador(listaProductos.reduce((acum,e)=>acum+Number(e.item.price),0))
        } else {
          setAcumulador(0)
        }
      }, [listaProductos])

    const setUsuarios = async (event)=>{
        event.preventDefault()
        if(name.length<3){
            //Filtro pendiente
            console.log('Ingrese un nombre')
        } else if(email.length<3){
            //Filtro pendiente
            console.log('Ingrese un mail valido')
        }
        const buy = {
            "buyer":{
                "name":name,
                "phone":phone,
                "email":email
            },
            "items":listaProductos,
            "date":firebase.firestore.Timestamp.fromDate(new Date()),
            "total":acumulador
        }
        console.log(buy)
        try{
            const data = await dataBase.collection("items-request").add(buy)
            alert('Compra terminada')
            setName('')
            setEmail('')
            setPhone('')
            clear()
        }
        catch(error){
            console.log(`Ha sucedido un error durante el submit: ${error}`)
            alert('Error en la compra, intente nuevamente')
            setName('')
            setEmail('')
            setPhone('')
        }
    }

    return (
        <Page>
            <h1>Cart 🚀 </h1>
            <ul>
            {
                listaProductos && (
                    listaProductos.map(e=>
                    <li>
                        <strong>Nombre:</strong> {e.item.name} 
                        <strong>Cantidad: </strong> {e.quantity} 
                        <button onClick={()=>removeItem(e.item.id)}>BORRAR</button>
                    </li>
                    )
                )
            }
            {
                listaProductos.length===0 && (
                    <>
                        <h1>No hay items en el carrito!</h1>
                        <Link to="/">Ir al catalogo!</Link>
                    </>
                )
            }
            </ul>
            <h1>Precio final: U$D {acumulador} </h1>
            <button onClick={clear}>VACIAR EL CARRITO</button>

            <form onSubmit={setUsuarios} className="formulario" action="">
                <label htmlFor="">Ingrese su nombre</label><br />
                <input onChange={(e)=>setName(e.target.value)} type="text" value={name} /><br />
                <label htmlFor="">Ingrese su email</label><br />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} /><br />
                <label htmlFor="">Ingrese su teléfono</label><br />
                <input onChange={(e)=>setPhone(e.target.value)} type="text" value={phone} /><br />
                <input type="submit" />
            </form>
        </Page>
    )
}

export default Cart
