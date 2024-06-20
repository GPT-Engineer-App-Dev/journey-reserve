import { useState } from "react";
import { Container, VStack, Heading, Text, Button, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect to home after 3 seconds
  };

  if (!bookingDetails) {
    return (
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4} width="100%">
          <Heading as="h1" size="xl">No Booking Details</Heading>
          <Text>There are no booking details to confirm.</Text>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Confirm Your Booking</Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text><strong>Airline:</strong> {bookingDetails.airline}</Text>
          <Text><strong>Departure:</strong> {bookingDetails.departure}</Text>
          <Text><strong>Arrival:</strong> {bookingDetails.arrival}</Text>
          <Text><strong>Departure Date:</strong> {bookingDetails.departureDate}</Text>
          <Text><strong>Return Date:</strong> {bookingDetails.returnDate}</Text>
          <Text><strong>Price:</strong> {bookingDetails.price}</Text>
        </Box>
        {confirmed ? (
          <Text color="green.500">Booking Confirmed! Redirecting to home...</Text>
        ) : (
          <Button colorScheme="teal" onClick={handleConfirm}>Confirm Booking</Button>
        )}
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;