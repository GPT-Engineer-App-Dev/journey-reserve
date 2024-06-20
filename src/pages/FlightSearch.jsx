import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, HStack, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);

  const handleSearch = () => {
    // Mock flight data
    const mockFlights = [
      { id: 1, airline: "Airline A", departure, arrival, departureDate, returnDate, price: "$200" },
      { id: 2, airline: "Airline B", departure, arrival, departureDate, returnDate, price: "$250" },
    ];
    setFlights(mockFlights);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Search Flights</Heading>
        <FormControl id="departure">
          <FormLabel>Departure</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" onClick={handleSearch}>Search Flights</Button>
      </VStack>
      <Box mt={8} width="100%">
        {flights.length > 0 && (
          <VStack spacing={4}>
            {flights.map((flight) => (
              <Box key={flight.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
                <HStack justifyContent="space-between">
                  <Text>{flight.airline}</Text>
                  <Text>{flight.departure} to {flight.arrival}</Text>
                  <Text>{flight.departureDate} - {flight.returnDate}</Text>
                  <Text>{flight.price}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Container>
  );
};

export default FlightSearch;