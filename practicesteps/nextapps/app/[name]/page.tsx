
export async function generateStaticParams(){
    const names:string[] = ["Name", "Hobbies", "Games"]
    return (
        names.map((name)=>(
            {
                name:name,
            }
        ))
    )
}
export default function GiveName({params, searchname}:
    {params: {name:string}, searchname: {id: string}}){
    return (
        <div>
            My name is {params.name}
        </div>
    )
}