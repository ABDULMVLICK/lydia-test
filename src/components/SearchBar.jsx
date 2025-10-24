import React from 'react'
import { 
  Box, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = ({ on_search_change, search_term }) => {
  const handle_input_change = (event) => {
    on_search_change(event.target.value)
  }

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text 
          fontSize="lg" 
          fontWeight="semibold" 
          color={useColorModeValue('gray.700', 'gray.300')}
          mb={2}
        >
          Rechercher par label
        </Text>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color={useColorModeValue('gray.400', 'gray.500')} />
          </InputLeftElement>
          <Input
            placeholder="Tapez le label de la transaction..."
            value={search_term}
            onChange={handle_input_change}
            bg={useColorModeValue('white', 'gray.800')}
            borderColor={useColorModeValue('gray.300', 'gray.600')}
            _hover={{
              borderColor: "#1D4ED8"
            }}
            _focus={{
              borderColor: "#1D4ED8",
              boxShadow: "0 0 0 1px #1D4ED8"
            }}
            borderRadius="3xl"
            fontSize="md"
          />
        </InputGroup>
      </Box>
      
      
      <Text 
        fontSize="sm" 
        color={useColorModeValue('gray.500', 'gray.400')}
        textAlign="center"
      >
        {search_term ? 
          `${search_term.length > 0 ? 'Recherche en cours...' : ''}` : 
          'Commencez à taper pour rechercher'
        }
      </Text>
    </VStack>
  )
}

export default SearchBar
