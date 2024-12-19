import axios from 'axios';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_TOKEN;  // Store this in .env.local
const LIST_ID = process.env.MAILCHIMP_LIST_ID;  // Store this in .env.local
const DATACENTER = MAILCHIMP_API_KEY.split('-')[1]; // The data center is the part of the API key after the hyphen

export async function POST(req) {
    const { email, firstName, lastName } = await req.json();
  
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
  
    try {
      const response = await axios.post(
        url,
        {
          email_address: email,
          status: 'subscribed',  // 'subscribed' means the user will be added to your list
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );
  
      return new Response(JSON.stringify({ message: 'Subscribed successfully!' }), { status: 200 });
    } catch (error) {
      console.error('Error subscribing:', error);
      return new Response(JSON.stringify({ error: 'There was an error subscribing. Please try again.' }), { status: 400 });
    }
  }