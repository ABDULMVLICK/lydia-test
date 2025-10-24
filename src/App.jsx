import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, VStack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import SearchBar from './components/SearchBar'
import TransactionList from './components/TransactionList'
import transactionsData from '../transactions.json'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [transactions, set_transactions] = useState([])
  const [filtered_transactions, set_filtered_transactions] = useState([])
  const [search_term, set_search_term] = useState('')

  // Couleurs adaptatives selon le thème
  const bg_color = useColorModeValue('#F3F4F6', 'gray.900')
  const header_bg = useColorModeValue('white', 'gray.800')

  // Charger les transactions au montage du composant
  useEffect(() => {
    set_transactions(transactionsData)
    set_filtered_transactions(transactionsData)
  }, []) 


  // Filtrer les transactions selon le terme de recherche
  useEffect(() => {
    if (!search_term.trim()) {
      set_filtered_transactions(transactions)
    } else {
      const filtered = transactions.filter(transaction =>
        transaction.label.toLowerCase().includes(search_term.toLowerCase())
      )
      set_filtered_transactions(filtered)
    }
  }, [search_term, transactions])

  const handle_search_change = (term) => {
    set_search_term(term)
  }

  return (
    <Box minHeight="100vh" bg={bg_color}>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          
          {/* Bouton de thème en haut à gauche */}
          <Box position="relative" w="full">
            <IconButton
              aria-label="Basculer le thème"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              position="absolute"
              top={0}
              left={0}
              bg={header_bg}
              color={colorMode === 'light' ? 'gray.600' : 'yellow.400'}
              borderRadius="3xl"
              size="lg"
              _hover={{
                bg: colorMode === 'light' ? 'gray.100' : 'gray.700',
                transform: 'scale(1.05)'
              }}
              transition="all 0.2s"
              boxShadow="md"
            />
          </Box>

          <Box textAlign="center">
            <Heading 
              as="h1" 
              size="xl" 
              color="#1D4ED8"
              fontWeight="bold"
              mb={2}
            >
              Lydia
            </Heading>
            <Heading 
              as="h2" 
              size="md" 
              color={useColorModeValue('gray.600', 'gray.300')}
              fontWeight="normal"
            >
              Recherche de Transactions
            </Heading>
          </Box>

          {/* Barre de recherche */}
          <SearchBar 
            on_search_change={handle_search_change}
            search_term={search_term}
          />

          {/* Liste des transactions */}
          <TransactionList transactions={filtered_transactions} />
        </VStack>
      </Container>
    </Box>
  )
}

export default App
