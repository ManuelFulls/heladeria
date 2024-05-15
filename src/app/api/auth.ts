export default async function GET(req: Request){
    const data = await req.json()
    console.log(data)
}