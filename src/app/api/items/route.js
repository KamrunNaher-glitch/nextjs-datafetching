export async function GET( {}) {

  const data  = await {
    message:"Successfully get data",
    error: false ,
    status: 200
  }

  return Response.json({data})
}


export async function POST( {req}) {
    console.log(req)

    const postData = await req.json();
    return Response.json({postData})


}