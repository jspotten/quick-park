const sessions: { [key: string]: any } = {};

export async function GET(request: Request) {
  return new Response(JSON.stringify({ sessions: Object.keys(sessions).length }));
}

export async function PUT(request: Request) {

  const data = await request.json();
  const uuid = data.id;
  if (uuid) {
    sessions[uuid] = 1;
  }
  return new Response(JSON.stringify({ status: 'ok' }));
}
