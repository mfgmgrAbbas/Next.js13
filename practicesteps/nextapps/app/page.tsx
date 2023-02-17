import Link from "next/link"
export default function Home() {
  return ( 
    <div>
      <h1>hello world! from Abbas Shah</h1>
      <br />
      <Link href={"/name"}>Go to Name page</Link>
      <br />
      <Link href={"/hoblies"} >Go to Hobies page</Link>
      <br />
      <Link href={"/games"} >Go to Games page</Link>
      </div>
  )
}
