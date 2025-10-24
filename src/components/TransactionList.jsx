import React from 'react'
import { 
  Box, 
  VStack, 
  Text, 
  Spinner, 
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import TransactionItem from './TransactionItem'

const MotionBox = motion(Box)

const TransactionList = ({ transactions }) => {
  // Animation de conteneur
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Animation d'élément
  const item_variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  // État de chargement
  if (transactions === null || transactions === undefined) {
    return (
      <Center py={10}>
        <VStack spacing={4}>
          <Spinner size="xl" color="#1D4ED8" />
          <Text color={useColorModeValue('gray.500', 'gray.400')}>Chargement des transactions...</Text>
        </VStack>
      </Center>
    )
  }

  // Aucune transaction trouvée
  if (transactions.length === 0) {
    return (
      <Center py={10}>
        <Alert 
          status="info" 
          variant="subtle"
          flexDirection="column" 
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.800')}
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Aucune transaction trouvée
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Essayez de modifier votre recherche ou vérifiez l'orthographe du label.
          </AlertDescription>
        </Alert>
      </Center>
    )
  }

  return (
    <Box>
      {/* En-tête avec nombre de résultats */}
      <Box mb={6} textAlign="center">
        <Text 
          fontSize="lg" 
          fontWeight="semibold" 
          color={useColorModeValue('gray.700', 'gray.300')}
        >
          {transactions.length} transaction{transactions.length > 1 ? 's' : ''} trouvée{transactions.length > 1 ? 's' : ''}
        </Text>
      </Box>

      {/* Liste des transactions avec animations */}
      <MotionBox
        variants={container_variants}
        initial="hidden"
        animate="visible"
      >
        <VStack spacing={4} align="stretch">
          {transactions.map((transaction, index) => (
            <MotionBox
              key={transaction.paymentId}
              variants={item_variants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <TransactionItem 
                transaction={transaction} 
                index={index}
              />
            </MotionBox>
          ))}
        </VStack>
      </MotionBox>
    </Box>
  )
}

export default TransactionList
