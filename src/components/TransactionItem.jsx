import React from 'react'
import { 
  Box, 
  Text, 
  Badge, 
  HStack, 
  VStack, 
  Divider,
  useColorModeValue
} from '@chakra-ui/react'

const TransactionItem = ({ transaction, index }) => {
  // Couleurs selon le statut
  const get_status_color = (status) => {
    switch (status) {
      case 'completed':
        return 'green'
      case 'pending':
        return 'yellow'
      case 'canceled':
        return 'red'
      default:
        return 'gray'
    }
  }

  // Couleur de fond selon l'index (alternance) et le thème
  const bg_color = useColorModeValue(
    index % 2 === 0 ? 'white' : 'gray.50',
    index % 2 === 0 ? 'gray.800' : 'gray.700'
  )

  // Formater la date
  const format_date = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Formater le statut
  const format_status = (status) => {
    switch (status) {
      case 'completed':
        return 'Terminé'
      case 'pending':
        return 'En attente'
      case 'canceled':
        return 'Annulé'
      default:
        return status
    }
  }

  return (
    <Box
      bg={bg_color}
      p={6}
      borderRadius="3xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{
        boxShadow: "md",
        borderColor: "#1D4ED8"
      }}
    >
      <VStack spacing={4} align="stretch">
        {/* En-tête avec label et statut  avec les couleurs adaptatives selon le thème*/}
        <HStack justify="space-between" align="flex-start">
          <Box flex={1}>
            <Text 
              fontSize="lg" 
              fontWeight="semibold" 
              color={useColorModeValue('gray.800', 'white')}
              mb={1}
              noOfLines={2}
            >
              {transaction.label}
            </Text>
            <Text 
              fontSize="sm" 
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              ID: {transaction.paymentId.slice(0, 8)}...
            </Text>
          </Box>
          <Badge 
            colorScheme={get_status_color(transaction.status)}
            variant="solid"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
          >
            {format_status(transaction.status)}
          </Badge>
        </HStack>

        <Divider borderColor={useColorModeValue('gray.300', 'gray.600')} />

        {/* Informations de la transaction */}
        <HStack spacing={6} wrap="wrap">
          {/* Montant */}
          <VStack spacing={1} align="flex-start" minW="120px">
            <Text fontSize="xs" color="gray.500" fontWeight="medium">
              MONTANT
            </Text>
            <Text 
              fontSize="xl" 
              fontWeight="bold" 
              color="#1D4ED8"
            >
              {transaction.amount}
            </Text>
          </VStack>

          {/* Date */}
          <VStack spacing={1} align="flex-start" minW="140px">
            <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')} fontWeight="medium">
              DATE
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.700', 'gray.300')} fontWeight="medium">
              {format_date(transaction.date)}
            </Text>
          </VStack>

          {/* Expéditeur */}
          <VStack spacing={1} align="flex-start" minW="140px">
            <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')} fontWeight="medium">
              EXPÉDITEUR
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.700', 'gray.300')} fontWeight="medium">
              {transaction.firstname} {transaction.lastname}
            </Text>
          </VStack>

          {/* Destinataire */}
          <VStack spacing={1} align="flex-start" minW="140px">
            <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')} fontWeight="medium">
              DESTINATAIRE
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.700', 'gray.300')} fontWeight="medium">
              {transaction.receiverFirstname} {transaction.receiverLastname || ''}
            </Text>
          </VStack>
        </HStack>

        {/* Message d'erreur si présent */}
        {transaction.statusErrorDisplay && (
          <>
            <Divider borderColor="red.200" />
            <Box 
              bg="red.50" 
              p={3} 
              borderRadius="2xl" 
              border="1px solid" 
              borderColor="red.200"
            >
              <Text 
                fontSize="sm" 
                color="red.700" 
                fontWeight="medium"
              >
                ⚠️ {transaction.statusErrorDisplay}
              </Text>
            </Box>
          </>
        )}
      </VStack>
    </Box>
  )
}

export default TransactionItem
