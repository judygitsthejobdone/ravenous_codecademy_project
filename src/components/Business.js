//import './Business.css';
import { Flex, Spacer, Box, Card, Heading, Image, CardBody, Text, Stack } from '@chakra-ui/react';

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
          <Heading as='h2' textAlign={'left'} size={'md'} noOfLines={1} >{props.business.name}</Heading>
          
          <Flex className="business-info" >
              <Text textAlign={'left'} noOfLines={3} size={'xs'}>
                {props.business.address}<br />
                {props.business.city}<br />
                {props.business.state} {props.business.zipcode}
              </Text>
              <Spacer/>
              <Box textAlign={'right'}>    
                <Heading as='h3' size={'sm'} color={'goldenrod'} fontWeight={'bolder'} noOfLines={1} >{props.business.category}</Heading>
                <Text size={'xs'} color={'goldenrod'} fontWeight={'bolder'} noOfLines={1}>{props.business.rating} stars</Text>
                <Text className="business-review-count">{props.business.review_count} reviews</Text>
              </Box>
          
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Business;
