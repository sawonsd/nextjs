import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
      <div className="container mx-auto bg-slate-500 h-auto p-3 text-cyan-50">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-emerald-950">Return Home</Link>
    </div>
      
    </>
  )
}