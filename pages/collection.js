import Link from 'next/link'

export default function Collection(){
  return (
    <div style={{padding:20}}>
      <h1>Coleção</h1>
      <ul>
        <li><Link href='/product'>Camiseta Premium</Link></li>
        <li>Hoodie Classic</li>
        <li>Boné Street</li>
      </ul>
    </div>
  )
}
