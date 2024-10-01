const APIKey = 'dsAACaZfAgL0c6k-mm_eRxcR0N820U-Lbmmten64zWrFwzB2nqtop2thYKQ7YU-X1I9MfFlK39Hu9cfaruGsYNUXerUX252q7aCiH9F7vCdatoGEY1QNnMKQjTj3ZnYx';
const url = new URL('https://api.yelp.com/v3/businesses/search');

// Yelp API help page: 
// https://docs.developer.yelp.com/reference/v3_business_search
// See baweaver's response on github for solution to authentication issues
// https://github.com/Yelp/yelp-fusion/issues/647

const getData = async (search, location = 'Washington, DC', sortBy = 'best_match') => {
    const query = new URLSearchParams({
        'term': search,
        'location': location,
        'sort_by': sortBy,
        'limit': '6'
    });
    url.search = query;
    const options = {method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+APIKey
        // CAUTION: Yelp API site says to use the API Key alone as string; however, responds with "Bad Request"
        // It is essential to precede the key with 'Bearer'+' ' in order for the API to accept the token
    }};
    //console.log(baseURL+query);
    //console.log(JSON.stringify(options));

    try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error('Request Failed! Code '+response.status+": "+response.statusText);
        }    
            const jsonResponse = await response.json();
            //code to execute with jsonResponse
            //console.log(JSON.stringify(jsonResponse.businesses));
            const businesses = [];
            jsonResponse.businesses.forEach(business => {
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
                    alt: business.name + ' business photo'
                });
            })
            return businesses;
    } catch(error){
        console.log(error)
        return []
    }
  }
  getData('Big Bear Cafe','20001','best_match')//.then(res => console.log(JSON.stringify(res)));

export default getData;