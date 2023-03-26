export const listChatrooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
            id
            Chatrooms {
            items {
                chatroom{
                id
                users{
                    items{
                    id
                    user{
                        id
                        image
                        username
                    }
                    }
                }
                LastMessage{
                    id
                    createdAt
                    text
                }
                }
            }
            }
        }
    }
  
`