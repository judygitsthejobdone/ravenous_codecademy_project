//import './Business.css';
import { Flex, Box, Card, Heading, Image, CardBody, Text, Stack } from '@chakra-ui/react';

function Business(props) {
  return (
    <Card /*className='business'*/ >
      <CardBody>
        <Image 
          src={props.business.src} 
          alt={props.business.alt} 
          borderRadius="lg"
        />
        <Stack>
          <Heading textAlign={'left'} size={'md'}>{props.business.name}</Heading>
          
          <Flex className="business-info" justifyContent="space-between" >
              <Text textAlign={'left'} noOfLines={1} size={'xs'}>
                {props.business.address}<br />
                {props.business.city}<br />
                {props.business.state} {props.business.zipcode}
              </Text>
              
              <Box textAlign={'right'}>    
                <Heading size={'sm'} color={'goldenrod'} fontWeight={'bolder'} >{props.business.category}</Heading>
                <Text size={'xs'} color={'goldenrod'} fontWeight={'bolder'}>{props.business.rating} stars</Text>
                <Text className="business-review-count" >{props.business.review_count} reviews</Text>
              </Box>
          
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Business;
