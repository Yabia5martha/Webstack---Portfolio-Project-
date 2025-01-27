// import { React, Link } from "../../Utils/CustomUtils";
// import { useCartContext } from "../../Context/AllContextIndex";

// function TotalPrice() {
//   const { totalprice, cart } = useCartContext();

//   return (
//     <div>
//       <div class="shadow-lg px-4 w-72 py-6 mt-16  bg-gray-300 dark:bg-gray-800 ">
//         <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
//           Cart Manager
//         </p>
//         <div class="flex items-end space-x-2 my-6">
//           <p class="text-3xl text-black dark:text-white font-bold">
//             {totalprice}
//           </p>
//           <span class="text-green-500 text-xl font-bold flex items-center">
//             <svg
//               width="20"
//               fill="currentColor"
//               height="20"
//               class="h-3"
//               viewBox="0 0 1792 1792"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
//             </svg>
//             $
//           </span>
//         </div>
//         <div class="dark:text-white">
//           <div class="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
//             <p>Total Price :</p>
//             <div class="flex items-end text-xs">{totalprice} $</div>
//           </div>
//           <div class="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
//             <p>Items In Cart : </p>
//             <div class="flex items-end text-xs">{cart && cart.length}</div>
//           </div>
//           <div class="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
//             {cart && cart.length === 0 ? (
//               <p className="text-black text-sm font-bold">
//                 Please add items to proceed !
//               </p>
//             ) : (
//               <button
//                 type="button"
//                 class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
//               >
//                 <Link to="/Checkoutpage">
//                   <button className="checkout">Checkout</button>
//                 </Link>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TotalPrice;

import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useCartContext } from "../../Context/AllContextIndex";

function TotalPrice() {
  const { totalprice, cart } = useCartContext();

  // Responsive width based on screen size
  const width = useBreakpointValue({ base: "full", sm: "md" });

  return (
    <Box
      shadow="lg"
      p={6}
      bg="gray.300"
      darkBg="gray.800"
      borderRadius="md"
      width={width}
      mx="auto"
      mt={16}
    >
      <Text
        fontSize="sm"
        color="gray.700"
        darkColor="white"
        fontWeight="semibold"
        borderBottom="1px"
        borderColor="gray.200"
        mb={4}
      >
        Cart Manager
      </Text>
      <Flex align="end" mb={"6"}>
        <Text fontSize="3xl" color="black" darkColor="white" fontWeight="bold">
          {totalprice}
        </Text>
        <Text color="green.500" fontSize="xl" fontWeight="bold" ml={2}>
          <CheckCircleIcon boxSize={5} />$
        </Text>
      </Flex>
      <Box color="white">
        <Flex
          justify="space-between"
          align="center"
          mb={2}
          borderBottom="1px"
          borderColor="gray.200"
          pb={2}
        >
          <Text fontSize="sm">Total Price :</Text>
          <Text fontSize="sm">{totalprice} $</Text>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          mb={2}
          borderBottom="1px"
          borderColor="gray.200"
          pb={2}
        >
          <Text fontSize="sm">Items In Cart :</Text>
          <Text fontSize="sm">{cart && cart.length}</Text>
        </Flex>
        <Flex justify="space-between" align="center">
          {cart && cart.length === 0 ? (
            <Text color="black" fontSize="sm" fontWeight="bold">
              Please add items to proceed!
            </Text>
          ) : (
            <Button
              as={Link}
              to="/Checkoutpage"
              colorScheme="blue"
              variant="solid"
              w="full"
              fontWeight="bold"
              _hover={{ bg: "blue.700" }}
            >
              Checkout
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default TotalPrice;