import Business from "./Business";
import './BusinessList.css';
import { Box, Flex } from '@chakra-ui/react';


function BusinessList(props) {
    return (
    <div className="Business-List">
      <Flex justifyContent="space-between" flexWrap="wrap" maxWidth="100%" >
        {props.businessArray.map(element=><Box className="business" width="30%"><Business business={element}/></Box>)}
      </Flex>
    </div>
  );
}

export default BusinessList;
