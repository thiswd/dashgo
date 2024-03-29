import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="1rem" textAlign="right">
          <Text>Thiago Sawada</Text>
          <Text color="gray.300" fontSize="small">
            tms1_tms2@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Thiago Sawada" src="https://github.com/thiagosawada.png" />
    </Flex>
  );
}
