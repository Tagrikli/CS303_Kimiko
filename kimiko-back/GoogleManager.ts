const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = "944974151342-marjq0nb00gipf3mta38vvgdjut05g2a.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

async function verify(token: string) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    return userid;
}