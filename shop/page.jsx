
import Image from 'next/image'
import Link from 'next/link'
import products from '../data/products.json'

export default function Shop(){
  return (
    <main style={{background:'#0a0a0a', minHeight:'100vh', color:'#fff'}}>
      <section style={{padding:'28px'}}>
        <h2>Shop</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(250px,1fr))', gap:16, marginTop:20}}>
          {products.map(p=> (
            <div key={p.id} style={{border:'1px solid #333', borderRadius:12, overflow:'hidden'}}>
              <Image src={p.images[0]} alt={p.name} width={500} height={400} />
              <div style={{padding:12}}>
                <div style={{fontWeight:700, marginBottom:4}}>{p.name}</div>
                <div style={{marginBottom:8}}>${p.price.toFixed(2)}</div>
                <Link href={`/shop/${p.id}`} style={{color:'red'}}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
