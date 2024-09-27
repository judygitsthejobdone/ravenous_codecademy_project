import Business from "./Business";
import './BusinessList.css';
import { Box, Flex } from '@chakra-ui/react';


function BusinessList(props) {
    return (
    <div>
      <Flex className="Business-List" justifyContent='space-between' flexFlow='wrap' maxWidth="100%">
        {props.businessArray.map(element=><Box className="business"><Business business={element}/></Box>)}
      </Flex>
    </div>
  );
}

export default BusinessList;
