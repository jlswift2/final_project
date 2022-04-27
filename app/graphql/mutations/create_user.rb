# frozen_string_literal: true

module Mutations
  class CreateUser < BaseMutation
    description "Creates a new user"

    class AuthProviderSignupData < Types::BaseInputObject
      argument :credentials, Types::AuthProviderCredentialsInput, required: false
    end
    
    argument :id, ID, required: false
    argument :username, String, required: true
    # argument :email, String, required: true
    # argument :password_digest, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :friend_code, String, required: false
    argument :created_at, GraphQL::Types::ISO8601DateTime, required: false
    argument :updated_at, GraphQL::Types::ISO8601DateTime, required: false
    argument :auth_provider, AuthProviderSignupData, required: false

    type Types::UserType

    
    def resolve(auth_provider: nil, username: nil, first_name: nil, last_name: nil )
      User.create!(
        username: username,
        email: auth_provider&.[](:credentials)&.[](:email),
        password: auth_provider&.[](:credentials)&.[](:password),
        first_name: first_name,
        last_name: last_name,
        friend_code: SecureRandom.hex(8) 
      )
    end
  end
end
