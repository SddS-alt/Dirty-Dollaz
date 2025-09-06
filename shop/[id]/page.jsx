
'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import products from '../../data/products.json'

export default function ProductPage(){
  const { id } = useParams()
  const p = products.find(x=> x.id===id)
  if(!p) return <main style={{color:'#fff', padding:32}}>Not found</main>

  return (
    <main style={{background:'#0a0a0a', minHeight:'100vh', color:'#fff', padding:32}}>
      <h2>{p.name}</h2>
      <Image src={p.images[0]} alt={p.name} width={600} height={500} style={{borderRadius:12, marginTop:12}}/>
      <p style={{marginTop:12}}>${p.price.toFixed(2)}</p>
      <p style={{marginTop:12}}>{p.description}</p>
      <p style={{marginTop:12}}>Sizes: {p.sizes.join(', ')}</p>
    </main>
  )
}
