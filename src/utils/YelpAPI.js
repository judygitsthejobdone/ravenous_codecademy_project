const ClientID = 'fkKEWOBAhThb7YBikSbwAg';
const APIKey = 'dsAACaZfAgL0c6k-mm_eRxcR0N820U-Lbmmten64zWrFwzB2nqtop2thYKQ7YU-X1I9MfFlK39Hu9cfaruGsYNUXerUX252q7aCiH9F7vCdatoGEY1QNnMKQjTj3ZnYx';
const baseURL = 'https://api.yelp.com/v3/businesses/search?';

const getData = async (search, location, sortBy) => {
    const query = '&term='+search+'location='+location+'&sort_by='+sortBy+'&limit=6';
    const options = {method: 'GET', headers: {
        accept: 'application/json',
        Authorization: APIKey
    }};

    try {
        const response = await fetch(baseURL+query, options)
        if(response.ok){
            const jsonResponse = await response.json();
            //code to execute with jsonResponse
            console.log(jsonResponse.businesses.toString());
            const businesses = [];
            jsonResponse.forEach(business => {
                businesses.push({
                    name: business.name,
                    address: business.location.address1 + business.location.address2 + business.location.address3,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    review_count: business.review_count,
                    src: business.image_url,
                    alt: business.name + 'business photo'
                });
            })
            return businesses;
        }
        throw new Error('Request Failed!');
    } catch(error){
        console.log(error)}
  }

export default getData;