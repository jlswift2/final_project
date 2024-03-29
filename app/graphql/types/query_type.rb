module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :users, 
      [Types::UserType],
      null: false, 
      description: "Return a list of users"
  
    def users
      User.all
    end 

    # field :user,
    #   [Types::UserType],
    #   null: false, 
    #   description: "Find a user by ID"

    # def user(id: $id)
    #   User.find(id)
    # end

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
