import Business from "./Business";
import './BusinessList.css';
import { Box, Flex } from '@chakra-ui/react';


function BusinessList(props) {
    if (!props.businessArray) {
      return <Box>What would you like to eat?</Box>;
    } else if (!props.businessArray.length) {
      return <Box>Hmmm we didn't find anything...try again!</Box>
    }
    return (
    <div>
      <Flex className="Business-List" justifyContent='space-between' flexFlow='wrap' maxWidth="100%">
        {props.businessArray.map((element, index)=><Box className="business" key={index}><Business business={element}/></Box>)}
      </Flex>
    </div>
  );
}

export default BusinessList;
