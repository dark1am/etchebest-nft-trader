import {React,useContext,useEffect,useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {dataBase} from '../../Firebase/firebase'
import { Link } from 'react-router-dom'
import Page from '../../Components/Page/Page'
import {CartContext} from '../../context/cartContext'
import './Cart.css'
import Bitcoin from '../../Static/bitcoin.svg'
import Crypto from '../../Static/cryptocurrencies.svg'

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
            <div className="cart">
                <div className="cart__container">
                    <div className="cart__list">
                        <ul>
                        {
                            listaProductos && (
                                listaProductos.map(e=>
                                <li className="cart__list__details">
                                    <div>
                                    <strong>Nombre:</strong> {e.item.name} 
                                    <strong>Cantidad: </strong> {e.quantity} 
                                    </div>
                                    <button className="removecart" onClick={()=>removeItem(e.item.id)}>BORRAR</button>
                                </li>
                                )
                            )
                        }
                        {
                            listaProductos.length===0 && (
                                <div className="cart__empty">
                                    <img src={Crypto} alt="" />
                                    <h1>No hay items en el carrito!</h1>
                                    <Link className="link__fix" to="/"><span>Ir al catalogo!</span></Link>
                                </div>
                            )
                        }
                        <button className="emptycart" onClick={clear}>VACIAR EL CARRITO</button>
                        </ul>
                        
                    </div> 
                   <div className="cart__form">
                       <div className="cart__form__title">
                        <img className="cart__form__icon" src={Bitcoin} alt="" />
                        <h1 className="formulario__title">Final: U$D {acumulador} </h1>
                       </div>
                        <form onSubmit={setUsuarios} className="formulario" action="">
                            <label htmlFor="">Ingrese su 
                                <span className="colorMarker"> nombre</span> 
                            </label><br />
                            <input onChange={(e)=>setName(e.target.value)} type="text" value={name} /><br />
                            <label htmlFor="">Ingrese su 
                                <span className="colorMarker"> email </span>
                            </label><br />
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} /><br />
                            <label htmlFor="">Ingrese su 
                                <span className="colorMarker"> teléfono</span>
                            </label><br />
                            <input onChange={(e)=>setPhone(e.target.value)} type="text" value={phone} /><br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Cart
