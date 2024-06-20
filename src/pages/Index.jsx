import { Container, Text, VStack, Heading, Box, Button, Image, HStack } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Book flights, hotels, and car rentals all in one place.</Text>
        <HStack spacing={4}>
          <Button as={Link} to="/search-flights" leftIcon={<FaPlane />} colorScheme="teal" variant="solid">Book a Flight</Button> {/* Update Button to use Link */}
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid">Book a Hotel</Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid">Rent a Car</Button>
        </HStack>
        <Box boxSize="sm">
          <Image src="/images/travel-hero.jpg" alt="Travel" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;